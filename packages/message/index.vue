<template>
  <transition name="message-fade">
    <div
      class="qu-message"
      v-if="visible"
      :style="computedStyle"
      :class="computedClass"
    >
      <div class="qu-message-content">
        {{ message }}
      </div>
      <span
        @click="closeMessage"
        class="close-btn"
      >x</span>
    </div>
  </transition>
</template>

<script>
const baseOffset = 16
export default {
  data() {
    return {
      visible: true,
      verticalTop: 0
    }
  },
  props: {
    message: {
      type: String
    },
    duration: {
      type: Number,
      default: 3000
    },
    autoClose: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'center'
    },
    type: {
      type: String,
      validator: value => {
        return ["success", "error", "info", "warning"].includes(value);
      }
    }
  },
  computed: {
    computedStyle() {
      return {
        top: this.verticalTop + 'px',
        ...(this.LR_POSITION && {
          [`${this.position}`]: baseOffset + 'px'
        }),
        ...(this.CENTER_POSITION && {
          left: '50%',
          marginLeft: '-190px'
        })
      }
    },
    computedClass() {
      return {
        [`qu-message--${this.type}`]: this.type
      }
    },
    LR_POSITION() {
      return this.position === "left" || this.position === "right"
    },
    CENTER_POSITION() {
      return this.position === 'center'
    }
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener("transitionend", () => {
          this.$destroy()
        })
        this.$emit('close')
      }
    }
  },
  mounted() {
    this.createElement()
    if (this.autoClose) {
      this.startTimer()
    }
  },
  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el)
  },
  methods: {
    createElement() {
      this.visible = true
      document.body.appendChild(this.$el)
    },
    closeMessage() {
      this.visible = false
    },
    startTimer() {
      let timer = setTimeout(() => {
        this.visible = false
      }, this.duration)
      this.$once("hook: beforeDestroy", () => {
        clearTimeout(timer)
        timer = null
      })
    }
  }
}
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
