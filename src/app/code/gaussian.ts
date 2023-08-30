export class Gaussian {
  constructor(
    public height: number,
    public position: number,
    public sd: number
  ) { }

  y(x: number): number {
    return (
      this.height * Math.exp(-((x - this.position) ** 2) / (2 * this.sd ** 2))
    );
  }

  width(y: number): number {
    return (-8 * this.sd ** 2 * Math.log(y / this.height)) ** 0.5;
  }

  fwhm(): number {
    return this.width(this.height / 2);
  }
}
