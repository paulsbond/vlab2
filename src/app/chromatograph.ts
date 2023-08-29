import { Chart } from './chart';
import { Gaussian } from './gaussian';
import { random } from './utils';

export class Chromatograph {
  private _running: boolean = false;

  public chart: Chart;
  public result?: Result;

  public get running(): boolean {
    return this._running;
  }

  constructor(
    private action: string,
    private runtime: number,
    private min_voltage: number,
    private max_voltage: number
  ) {
    this.chart = new Chart('Time / s', 'Voltage / mV', 0, runtime, -20, max_voltage);
  }

  inject(gaussian: Gaussian, speed: number): void {
    if (this._running) return;
    this.chart.reset();
    const cut_height = Math.min(gaussian.height, this.max_voltage);
    let area = 0;
    let time = 0;
    this._running = true;
    this.result = undefined;
    const interval = setInterval(() => {
      let voltage = gaussian.y(time);
      voltage += random(-2, 2);
      voltage = Math.min(voltage, this.max_voltage);
      area += voltage;
      this.chart.add_point(time, voltage);
      time++;
      if (time > this.runtime) {
        this._running = false;
        clearInterval(interval);
        if (gaussian.height > this.min_voltage) {
          this.result = {
            retention_time: gaussian.position,
            area: area,
            height: cut_height,
            fwhm: gaussian.width(cut_height / 2),
          };
        }
      }
    }, 1000 / speed);
  }
}

export interface Result {
  retention_time: number;
  area: number;
  height: number;
  fwhm: number;
}
