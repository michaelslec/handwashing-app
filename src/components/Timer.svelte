<script lang="ts">
  import ProgressBar from "./ProgressBar.svelte";
  import { Timer } from "../utils/Timer";
  import { countdownSecondsRemaining } from "../stores/timer";
  import { handwashingTime } from "../constants";

  const timer = new Timer(handwashingTime);
  $: percentage = (countdownSecondsRemaining / timer.time) * 100;
</script>

<div bp="grid">
  <h2 bp="offset-5@md 4@md 12@sm">
    Seconds Left:
    {$countdownSecondsRemaining}
  </h2>
</div>

<ProgressBar progress={percentage} />

<div bp="grid">
  <button
    disabled={timer.isCurrentlyRunning}
    on:click={() => timer.start()}
    bp="offset-5@md 4@md 12@sm"
    class="start">Start</button
  >
</div>

<style>
  h2 {
    margin: 0;
  }

  .start {
    background-color: rgb(154, 73, 73);
    width: 100%;
    margin: 10px 0;
  }

  .start[disabled] {
    background-color: rgb(194, 194, 194);
    cursor: not-allowed;
  }
</style>
