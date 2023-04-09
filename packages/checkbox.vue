<template>
  <label
    class="qu-checkbox"
    :class="{'is-checked': isChecked}"
  >
    <span class="qu-checkbox__input">
      <span class="qu-checkbox__inner"></span>
      <input
        type="checkbox"
        v-model="model"
        class="qu-checkbox__original"
        :value="label"
        :name="name"
      >
    </span>
    <span class="qu-checkbox__label">
      <slot></slot>
      <template v-if="!$slots.default">
        {{label}}
      </template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'QuCheckbox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    }
  },
  computed: {
    model: {
      get() {
        console.log(this)
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set(value) {
        console.log('value', value)
        this.isGroup ? this.CheckboxGroup.$emit('input', value) : this.$emit('input', value)
      }
    },
    isChecked() {
      return this.isGroup ? this.model.includes(this.label) : this.model
    },
    isGroup() {
      return !!this.CheckboxGroup
    }
  }
}
</script>

<style lang="scss" scoped>
.qu-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .qu-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .qu-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.1s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.1s, cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.1s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .qu-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .one-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 选中的样式
.qu-checkbox.is-checked {
  .qu-checkbox__input {
    .qu-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &:after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .qu-checkbox__label {
    color: #409eff;
  }
}
</style>