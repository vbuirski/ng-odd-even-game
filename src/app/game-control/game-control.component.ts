import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  eventNumber = 0;
  interval;

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    this.interval =
      setInterval(() => {
        this.intervalFired.emit(this.eventNumber + 1);
        this.eventNumber++;
        }, 1000);
  }

  onStopGame() {

      clearInterval(this.interval);

  }
}
