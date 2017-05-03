import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { SoundBoardAudio } from '../../soundBoardAudio';

@Component({
  selector: 'app-soundcard',
  templateUrl: './soundcard.component.html',
  styleUrls: ['./soundcard.component.css']
})
export class SoundcardComponent implements OnInit {

  audio:any;

  constructor() {}

  @Input() soundBoardAudio;

  ngOnInit() {
    console.log(this.soundBoardAudio.name);
    let audioSrc = 'assets/audio/'+this.soundBoardAudio.filename;
    this.audio = new Audio(audioSrc);
  }

  playAudio() {
    this.audio.play();
  }

  stopAudio() {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

}
