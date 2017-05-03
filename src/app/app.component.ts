import { Component, OnInit } from '@angular/core';
import { SoundcardComponent } from './components/soundcard/soundcard.component';
import { SoundBoardAudio } from './soundBoardAudio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SoundBoard';
  audios: SoundBoardAudio[];

  ngOnInit(){
    this.audios = new Array<SoundBoardAudio>();
    this.audios.push(new SoundBoardAudio('Western','La canción del Sheriff.','western.mp3'));
    this.audios.push(new SoundBoardAudio('Olvidelo Amigo','Busquese otro tonto amigo.','olvidelo_amigo.mp3'));
  }

}
