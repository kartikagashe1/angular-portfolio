import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgIf, NgFor, NgClass} from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule, NgIf,MatIconModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isDarkMode = false;
  menuOpen = false; // 🔄 Track collapsed menu state
  toggleMenu(): void {
  this.menuOpen = !this.menuOpen;
}

  constructor() {
    const storedTheme = localStorage.getItem('theme');
    this.isDarkMode = storedTheme === 'dark';
    this.applyTheme();
  }

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  applyTheme(): void {
  document.body.classList.remove('light-theme', 'dark-theme');
  document.body.classList.add(this.isDarkMode ? 'dark-theme' : 'light-theme');
}

}
