<template>
  <button
    class="button"
    :style="{ color, borderColor: color }"
    :class="{ rounded }"><slot/>!</button>
</template>

<script>

  export default {
    name: 'Button',

    props: {
      rounded: Boolean,
      color: {
        type: String,
        default: '#42b983'
      }
    },
  }
</script>

<style>
  .rounded {
    border-radius: 5px;
  }

  .button {
    border: 3px solid;
    padding: 10px 20px;
    background-color: white;
    outline: none;
  }
</style>
