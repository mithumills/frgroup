import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly DARK_THEME = 'dark';
  private readonly LIGHT_THEME = 'light';
  private currentTheme = this.LIGHT_THEME;

  toggleTheme() {
    this.currentTheme = this.currentTheme === this.LIGHT_THEME ? this.DARK_THEME : this.LIGHT_THEME;
    this.applyTheme();
  }

  private applyTheme() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove(this.DARK_THEME, this.LIGHT_THEME);
    body.classList.add(this.currentTheme);
  }
}
