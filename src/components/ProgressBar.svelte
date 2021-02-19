<script lang="ts">
  import { kBP_GRID_STYLE } from "../constants";
  export let progress = 0;
</script>

<div bp="grid">
  <div class="progress-container" bp={kBP_GRID_STYLE}>
    <div class="progress-bar" style="width: {progress}%;">
      <span class="sr-only">%</span>
    </div>
  </div>
</div>

<style>
  .progress-container {
    margin: 20px 0;
    border: solid rgba(194, 194, 194) 1px;
  }

  .progress-bar {
    height: 30px;
    background-color: rgba(77, 199, 55);
  }
</style>
