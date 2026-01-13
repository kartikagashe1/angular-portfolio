import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('typedElement') typedElement!: ElementRef;

  ngAfterViewInit() {
    const options = {
      strings: ['Software Developer', 'Angular Developer', 'UI/UX Enthusiast','Java Developer'],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    };

    new Typed(this.typedElement.nativeElement, options);
  }
}
