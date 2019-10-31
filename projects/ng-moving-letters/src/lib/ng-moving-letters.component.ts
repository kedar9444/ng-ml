import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'ng-moving-letters',
  templateUrl: './ng-moving-letters.component.html',
  styleUrls: ['./ng-moving-letters.component.css']
})
export class NgMovingLettersComponent implements AfterViewInit {
  @Input() word: string;
  @Input() type: string;

  @ViewChild('content', { static: false }) content: any;

  public ml4: any;


  constructor() {
    this.ml4 = {};
    this.ml4.opacityIn = [0, 1];
    this.ml4.scaleIn = [0.2, 1];
    this.ml4.scaleOut = 3;
    this.ml4.durationIn = 800;
    this.ml4.durationOut = 600;
    this.ml4.delay = 500;
  }

  ngAfterViewInit(): void {

    switch (this.type) {
      case 'ML1':
        this.ML1();
        break;

      case 'ML2':
        this.ML2();
        break;

      default:
        this.ML1();
        break;
    }
  }

  public ML1() {

    const textWrapper = this.content.nativeElement; // document.querySelector('.ml1 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, '<span class=\'letter\'>$&</span>');


    anime.timeline({ loop: true })
      .add({
        targets: '.ml1 .letter',
        scale: [0.3, 1],
        opacity: [0, 1],
        translateZ: 0,
        easing: 'easeOutExpo',
        duration: 600,
        delay: (el, i) => 70 * (i + 1)
      }).add({
        targets: '.ml1 .line',
        scaleX: [0, 1],
        opacity: [0.5, 1],
        easing: 'easeOutExpo',
        duration: 700,
        offset: '-=875',
        delay: (el, i, l) => 80 * (l - i)
      }).add({
        targets: '.ml1',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      });
  }

  public ML2() {


  }

}
