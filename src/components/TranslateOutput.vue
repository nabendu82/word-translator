<template>
  <h2 class="outputStyle">{{translatedText}}</h2>
</template>

<script>
export default {
  name: 'translateOutput',
  props:['translatedText']
}
</script>

<style>
.outputStyle{
    color: #9400d3;
    font-size: 2rem;
    font-weight: 800;
}
</style>