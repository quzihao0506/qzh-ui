<template>
  <!-- self事件修饰符 只有点击自身才有效 -->
  <transition
    name="dialog-fade"
    @after-enter="afterEnter"
    @after-leave="afterLeave"
  >
    <div
      class="qu-dialog_wrapper"
      v-if="visible"
      @click.self="handleClose"
    >
      <div
        class="qu-dialog"
        :style="{width, marginTop: top}"
      >
        <div class="qu-dialog_header">
          <slot name="title">
            <span class="qu-dialog_title">{{title}}</span>
          </slot>
          <button
            class="qu-dialog_headerbtn"
            @click="handleClose"
          >
            <i class="qu-dialog-close">x</i>
          </button>
        </div>
        <div class="qu-dialog_body">
          <slot></slot>
        </div>
        <div
          class="qu-dialog_footer"
          v-if="$slots.footer"
        >
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'QuDialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    top: {
      type: String,
      default: ''
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose() {
      this.$emit('update:visible', false)
    },
    afterEnter() {
      this.$emit('opened')
    },
    afterLeave() {
      this.$emit('closed')
    }
  }
}
</script>

<style lang="scss" scoped>
.qu-dialog_wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0, 0, 0, 0.5);
  .qu-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &_header {
      padding: 20px 20px 10px;
      .qu-dialog_title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .qu-dialog_headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: nqu;
        outline: nqu;
        cursor: pointer;
        font-size: 16px;
        .qu-icon-close {
          color: 909399;
        }
      }
    }
    &_body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .qu-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: fade 0.5s;
}

.dialog-fade-leave-active {
  animation: fade 0.5s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
