<script lang="ts">
  import ProgressBar from "./ProgressBar.svelte";
  import { kHANDWASHING_TIME, kBP_GRID_STYLE } from "../constants";

  let timeElapsed = 0;
  let isRunning = false;
  function startTimer() {
    timeElapsed = 0;

    if (!isRunning) {
      isRunning = true;
      const timer = setInterval(() => {
        timeElapsed += 1;
        if (timeElapsed == kHANDWASHING_TIME) {
          clearInterval(timer);
          isRunning = false;
        }
      }, 1000);
    }
  }
</script>

<div bp="grid">
  <h2 bp={kBP_GRID_STYLE}>
    Seconds Left: {kHANDWASHING_TIME - timeElapsed}
  </h2>
</div>

<ProgressBar progress={(timeElapsed / kHANDWASHING_TIME) * 100} />

<div bp="grid">
  <button
    disabled={isRunning}
    on:click={startTimer}
    bp={kBP_GRID_STYLE}
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
