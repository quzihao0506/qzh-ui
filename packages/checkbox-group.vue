<template>
  <div class="qu-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'QuCheckboxGroup',
  props: {
    value: {
      type: Array,
      default: ''
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style>
</style>