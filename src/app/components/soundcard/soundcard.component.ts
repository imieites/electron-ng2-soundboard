import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-soundcard',
  templateUrl: './soundcard.component.html',
  styleUrls: ['./soundcard.component.css']
})
export class SoundcardComponent implements OnInit {

  audio:any;

  constructor() {}

  @Input() soundName: string;

  ngOnInit() {
    let audioSrc = 'assets/audio/'+this.soundName+'.mp3';
    this.audio = new Audio(audioSrc);
  }

  playAudio() {
    this.audio.play();
  }

  stopAudio() {
    this.audio.pause();
    console.log(this.getAudioProgress());
    this.audio.currentTime = 0;
  }

  getAudioProgress(){
    return Math.round((this.audio.currentTime/this.audio.duration)*100).toString();
  }

  isAudioPlaying(){
    return !this.audio.paused && !this.audio.ended && 0 < this.audio.currentTime;
  }

}
