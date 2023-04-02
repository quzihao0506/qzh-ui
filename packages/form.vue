<template>
    <div class="qu-form">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'QuForm',
  props: {
    labelWidth: {
      type: String,
      default: '80px'
    }
  },
  provide () {
    return {
      Form: this
    }
  }
}
</script>
