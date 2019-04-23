import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Ng5SliderModule } from 'ng5-slider';
import { DoubleSliderBarComponent } from './double-slider-bar/double-slider-bar.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DoubleSliderBarComponent  ],
  imports: [
    BrowserModule,
    Ng5SliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
