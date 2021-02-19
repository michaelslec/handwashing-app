<script lang="ts">
  export let progress = 0;
</script>

<div bp="grid">
  <div class="progress-container" bp="offset-5@md 4@md 12@sm">
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
