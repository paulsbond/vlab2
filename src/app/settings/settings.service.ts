import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  private _speed = Number(localStorage.getItem('speed')) || 1;
  public get speed(): number {
    return this._speed;
  }
  public set speed(value: number) {
    this._speed = value;
    localStorage.setItem('speed', String(value));
  }
}
