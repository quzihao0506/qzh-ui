<template>
  <div class="hello">
    <h1>{{params.content}}</h1>
    <div>
      <qu-button
        @click="closeModal"
        type="primary"
      >关闭</qu-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    params: Object
  },
  methods: {
    closeModal() {
      this.$emit('close')
      // this.$emit('success')
      // this.$emit('fail')
    }
  }
}
</script>


<style scoped lang="scss">
</style>
