import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SoundcardComponent } from './components/soundcard/soundcard.component';
import { SoundsearchComponent } from './components/soundsearch/soundsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    SoundcardComponent,
    SoundsearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
