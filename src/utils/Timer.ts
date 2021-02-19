import { countdownSecondsRemaining } from "../stores/timer";

export class Timer {
  private timerID: NodeJS.Timeout;

  time: number;
  secondsRemaining: number;
  isCurrentlyRunning = false;

  constructor(time: number) {
    this.time = time;
    this.secondsRemaining = time;
    countdownSecondsRemaining.set(this.secondsRemaining);
  }

  countDown = () => {
    if (this.secondsRemaining == 0) return this.stop();

    this.secondsRemaining -= 1;
    countdownSecondsRemaining.set(this.secondsRemaining);
  };

  start() {
    if (!this.isCurrentlyRunning) {
      this.isCurrentlyRunning = true;
      countdownSecondsRemaining.set(this.time);
      this.timerID = setInterval(this.countDown, 1000);
    }
  }

  stop() {
    clearTimeout(this.timerID);
    this.isCurrentlyRunning = false;
    this.secondsRemaining = this.time;
  }

  getPercentage() {
    return (this.secondsRemaining / this.time) * 100;
  }
}
