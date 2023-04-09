<template>
  <div class="mask">
    <transition
      enter-active-class="animate__fadeInDown"
      leave-active-class="animate__fadeOutUP"
      duration="1000"
    >
      <div
        key="modal"
        class="modal-content animate__animated"
        v-if="visible"
      >
        <TempComponent
          @fail="failHandle"
          @success="successHandle"
          @close="closeElement"
          :params="params"
        ></TempComponent>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  props: {
    template: null,
    success: Function,
    fail: Function,
    params: Object
  },
  components: {
    TempComponent: null
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.parentNode.removeChild(this.$el)
        // 触发不了 暂时不知道原因
        this.$el.addEventListener('transitionend', this.destroyElement, false)
      }
    }
  },
  mounted() {
    this.createElement()
  },
  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el)
  },
  methods: {
    successHandle() {
      this.success()
    },
    failHandle() {
      this.fail()
    },
    createElement() {
      this.visible = true
      document.body.appendChild(this.$el)
    },
    closeElement() {
      this.visible = false
    },
    destroyElement() {
      console.log('触发')
      this.$destroy()
    },
  }
}
</script>

<style lang="scss" scoped>
@import url("./style.scss");
</style>