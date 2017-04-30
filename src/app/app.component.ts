import { Component, OnInit } from '@angular/core';
import { SoundcardComponent } from './components/soundcard/soundcard.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SoundBoard';

  ngOnInit(){
    // let audio = new Audio('assets/audio/western.mp3');
    // audio.play();
  }

}
