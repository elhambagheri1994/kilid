import { Component, OnInit } from '@angular/core';
import { Options } from 'ng5-slider';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { RangeSlider} from '../show-slider-value'
@Component({
  selector: 'double-slider-bar',
  templateUrl: './double-slider-bar.component.html'
})
export class DoubleSliderBarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document){}
  app :HTMLElement ;
  rangeSlider :RangeSlider;
  ngOnInit(): void {
    this.app= this.document.getElementById('app');
    this.rangeSlider = new RangeSlider({
      lowValue: 500000,    
      highValue: 8000000,
    }).appendToNode(this.app).addClass('slider');    
  }

}
