<template>
  <div
    class="qu-input"
    :class="{'qu-input_suffix': suffix}"
  >
    <input
      :value="value"
      @input="handleInput"
      :placeholder="placeholder"
      class="qu-input_inner"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :class="{'is-disabled': disabled}"
      :disabled="disabled"
    >
    <span
      class="qu-input_suffix"
      v-if="suffix"
    >
      <i
        class="on-input_icon qu-input_iocn qu-icon-yanjing"
        :class="{'qu-icon-view-active': passwordVisible}"
        @click="handlePassword"
        v-if="showPassword"
      >2</i>
      <i
        class="on-input_icon qu-icon-ziyuanxhdpi"
        @click="clear"
        v-if="clearable && value"
      >1</i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'QuInput',
  data() {
    return {
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    suffix() {
      return this.showPassword || this.clearable
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    clear() {
      this.$emit('input', '')
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss" scoped>
.qu-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .qu-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
// 后面加suffix的意思是后面如果有后缀的话，触发该样式
.qu-input_suffix {
  .qu-input_inner {
    padding-right: 30px;
  }
  .qu-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .qu-icon-view-active {
      color: #409eff;
    }
  }
}
</style>
