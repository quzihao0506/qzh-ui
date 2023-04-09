<template>
  <div class="mask">
    <transition name="message-fade">
      <div
        class="qu-message-box"
        v-if="visible"
      >
        <div class="qu-message-box__header">{{ title }}</div>
        <div class="qu-message-box__content">{{ content }}</div>
        <div class="qu-message-box__footer">
          <template v-if="type === 'confirm'">
            <qu-button @click="btnHandle('cancel')">取消</qu-button>
          </template>
          <qu-button
            @click="btnHandle('confirm')"
            type="primary"
          >确认</qu-button>
        </div>
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
    title: {
      type: String
    },
    content: {
      type: String
    },
    type: {
      type: String,
      default: 'confirm',
    },
    onOK: Function,
    onCancel: Function
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        console.log('$el', this.$el)
        this.$el.parentNode.removeChild(this.$el)
        // 触发不了 暂时不知道原因
        this.$el.addEventListener('transitionend', this.destroyElement)
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
    createElement() {
      this.visible = true
      document.body.appendChild(this.$el)
    },
    destroyElement() {
      this.$destroy()
    },
    btnHandle(type) {
      if (type === 'confirm') {
        this.onOK()
      } else {
        this.onCancel()
      }
      this.close()
    },
    close() {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>

