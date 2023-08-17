export class Chart {
  private _ymin: number;
  private _ymax: number;
  public type = 'LineChart';
  public columns = ['x', 'y'];
  public data = [[0, 0]];
  public options = {
    chartArea: { top: 20, height: '80%', width: '80%' },
    enableInteractivity: false,
    hAxis: {
      title: 'X',
      titleTextStyle: { italic: false },
      viewWindow: { min: undefined, max: undefined },
    },
    height: 400,
    legend: 'none',
    vAxis: {
      title: 'Y',
      titleTextStyle: { italic: false },
      viewWindow: { min: undefined, max: undefined },
    },
  };

  constructor(
    xlabel: string,
    ylabel: string,
    private xmin: number,
    xmax: number,
    ymin: number,
    ymax: number,
    interactive: boolean = false,
  ) {
    this.columns = [xlabel, ylabel];
    this.options.hAxis.title = xlabel;
    this.options.vAxis.title = ylabel;
    this.options.hAxis.viewWindow.min = xmin;
    this.options.hAxis.viewWindow.max = xmax;
    this.options.vAxis.viewWindow.min = ymin;
    this.options.vAxis.viewWindow.max = ymax;
    this._ymin = ymin;
    this._ymax = ymax;
    this.options.enableInteractivity = interactive;
  }

  add_point(x: number, y: number) {
    if (this.has_data()) {
      this.data = [...this.data, [x, y]];
    } else {
      this.data = [[x, y]];
    }
  }

  auto_yaxis() {
    let ymin = this.data[0][1];
    let ymax = this.data[0][1];
    for (let point of this.data) {
      if (point[1] < ymin) ymin = point[1];
      if (point[1] > ymax) ymax = point[1];
    }
    const pad = (ymax - ymin) * 0.05;
    this.options.vAxis.viewWindow.min = ymin - pad;
    this.options.vAxis.viewWindow.max = ymax + pad;
  }

  has_data(): boolean {
    return this.data.length > 1 || this.data[0][0] !== 0 || this.data[0][1] !== 0;
  }

  reset() {
    this.data = [[0, 0]];
    this.options.vAxis.viewWindow.min = this._ymin;
    this.options.vAxis.viewWindow.max = this._ymax;
  }
}
