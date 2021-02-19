<script lang="ts">
  import ProgressBar from "./ProgressBar.svelte";
  import { Timer } from "../utils/Timer";
  const timer = new Timer(20);
  $: percentage = timer.getPercentage();
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
  <h2 bp="offset-5@md 4@md 12@sm">Seconds Left: {percentage}</h2>
</div>

<ProgressBar progress={timer.getPercentage()} />

<div bp="grid">
  <button
    on:click={() => timer.start()}
    bp="offset-5@md 4@md 12@sm"
    class="start">Start</button>
</div>
