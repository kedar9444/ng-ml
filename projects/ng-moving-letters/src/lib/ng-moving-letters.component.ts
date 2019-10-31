import { Component, OnInit, AfterViewInit, Input, ViewChild } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'ng-moving-letters',
  templateUrl: './ng-moving-letters.component.html',
  styleUrls: ['./ng-moving-letters.component.css']
})
export class NgMovingLettersComponent implements AfterViewInit {
  @Input() word: string[];
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

      case 'ML3':
        this.ML3();
        break;

      case 'ML4':
        this.ML4();
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


  public ML3() {
    const textWrapper = this.content.nativeElement; // document.querySelector('.ml3');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, '<span class=\'letter\'>$&</span>');

    anime.timeline({ loop: true })
      .add({
        targets: '.ml3 .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 2250,
        delay: (el, i) => 150 * (i + 1)
      }).add({
        targets: '.ml3',
        opacity: 0,
        duration: 1000,
        easing: 'easeOutExpo',
        delay: 1000
      });
  }


  public ML4() {

    anime.timeline({ loop: true })
      .add({
        targets: '.ml4 .letters-1',
        opacity: this.ml4.opacityIn,
        scale: this.ml4.scaleIn,
        duration: this.ml4.durationIn
      }).add({
        targets: '.ml4 .letters-1',
        opacity: 0,
        scale: this.ml4.scaleOut,
        duration: this.ml4.durationOut,
        easing: 'easeInExpo',
        delay: this.ml4.delay
      }).add({
        targets: '.ml4 .letters-2',
        opacity: this.ml4.opacityIn,
        scale: this.ml4.scaleIn,
        duration: this.ml4.durationIn
      }).add({
        targets: '.ml4 .letters-2',
        opacity: 0,
        scale: this.ml4.scaleOut,
        duration: this.ml4.durationOut,
        easing: 'easeInExpo',
        delay: this.ml4.delay
      }).add({
        targets: '.ml4 .letters-3',
        opacity: this.ml4.opacityIn,
        scale: this.ml4.scaleIn,
        duration: this.ml4.durationIn
      }).add({
        targets: '.ml4 .letters-3',
        opacity: 0,
        scale: this.ml4.scaleOut,
        duration: this.ml4.durationOut,
        easing: 'easeInExpo',
        delay: this.ml4.delay
      }).add({
        targets: '.ml4',
        opacity: 0,
        duration: 500,
        delay: 500
      });

  }


}
