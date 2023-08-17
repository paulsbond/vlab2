import { Chart } from './chart';
import { Gaussian } from './gaussian';
import { Sample } from './sample';
import { random } from './utils';

export class Chromatograph {
  private _running: boolean = false;

  public chart: Chart;
  public result: Result;

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

  inject(sample: Sample, speed: number): void {
    if (this._running) return;
    this.chart.reset();
    const gaussian = get_gaussian(sample, this.action);
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

function get_gaussian(sample: Sample, action: string): Gaussian {
  const ref = refs[sample.compound][action];
  console.log(ref);
  const height = ((sample.conc * ref.height) / ref.conc) * random(0.995, 1.005);
  const position = ref.position * random(0.995, 1.005);
  const sd = ref.sd * random(0.995, 1.005);
  return new Gaussian(height, position, sd);
}

export class Result {
  retention_time: number;
  area: number;
  height: number;
  fwhm: number;
}


const refs = {
  "ethanol": {
    "Gas Chromatography": {
      "conc": 5.2,
      "height": 1000,
      "position": 120,
      "sd": 5
    }
  },
  "caffeine": {
    "HPLC": {
      "conc": 85,
      "height": 1200,
      "position": 240,
      "sd": 2.5
    }
  }
};
