import { countdownSecondsRemaining } from "../stores/timer";

export class Timer {
  private timerID: NodeJS.Timeout;

  time: number;
  secondsRemaining: number;
  isCurrentlyRunning = false;

  constructor(time: number) {
    this.time = time;
    this.secondsRemaining = time;
  }

  countDown = () => {
    if (this.secondsRemaining == 0) return this.stop();

    this.secondsRemaining -= 1;
    countdownSecondsRemaining.set(this.secondsRemaining);
  };

  start() {
    if (!this.isCurrentlyRunning) {
      this.timerID = setInterval(this.countDown, 1000);
      this.isCurrentlyRunning = true;
    }
  }

  stop() {
    clearTimeout(this.timerID);
    this.isCurrentlyRunning = false;
  }

  getPercentage() {
    return (this.secondsRemaining / this.time) * 100;
  }
}
