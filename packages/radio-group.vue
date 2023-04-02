<template>
    <div class="qu-radio-group">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'QuRadioGroup',
  props: {
    value: null
  },
  provide () {
    return {
      RadioGroup: this
    }
  }
}
</script>
