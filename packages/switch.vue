<template>
    <div @click="handleClick" class="qu-switch" :class="{'is-checked': value}">
    <input class="qu-switch_input" ref="input" type="checkbox" :name="name" id="">
      <span ref="core" class="qu-switch_core">
        <span class="qu-switch_button"></span>
      </span>
    </div>
</template>

<script>
export default {
  name: 'QuSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    if (this.activeColor || this.inactiveColor) {
      const color = this.value ? this.activeColor : this.inactiveColor
      this.$refs.core.style.borderColor = color
      this.$refs.core.style.backgroundColor = color
    }
    this.$refs.input.checked = this.value
  },
  watch: {
    'value' (e) {
      if (this.activeColor || this.inactiveColor) {
        const color = e ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
      this.$refs.input.checked = this.value
    }
  },
  methods: {
    handleClick () {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
  .qu-switch{
    display: inline-block;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    vertical-align: middle;
    .qu-switch_core{
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color .3s,background-color .3s;
    vertical-align: middle;
    .qu-switch_button{
      position:absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all .3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
      }
    }
    .qu-switch_input {
      position: absolute;
      width: 0;
      height: 0;
      margin: 0;
      opacity: 0;
    }
  }
  // 选中样式
  .is-checked {
    .qu-switch_core{
      border-color: #409eff;
      background-color: #409eff;
      .qu-switch_button {
        transform: translateX(20px);
      }
    }
  }
  // 隐藏input标签
  .qu-switch_input{
    position:absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
</style>
