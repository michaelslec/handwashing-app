<script lang="ts">
  import ProgressBar from "./ProgressBar.svelte";
  import { Timer } from "../utils/Timer";
  import { countdownSecondsRemaining } from "../stores/timer";
  import { handwashingTime } from "../constants";

  const timer = new Timer(20);
  $: percentage = ($countdownSecondsRemaining / handwashingTime) * 100;
</script>

<style>
  h2 {
    margin: 0;
  }

  .start {
    background-color: rgb(154, 73, 73);
    width: 100%;
    margin: 10px 0;
  }
</style>

<div bp="grid">
  <h2 bp="offset-5@md 4@md 12@sm">
    Seconds Left:
    {$countdownSecondsRemaining}
  </h2>
</div>

<ProgressBar progress={percentage} />

<div bp="grid">
  <button
    on:click={() => timer.start()}
    bp="offset-5@md 4@md 12@sm"
    class="start">Start</button>
</div>
