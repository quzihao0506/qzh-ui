<template>
    <label class="qu-radio" :class="{'is-checked': label === model}">
        <span class="qu-radio_input">
            <span class="qu-radio_inner"></span>
            <input class="qu-radio_original" :value="label" v-model="model" type="radio">
        </span>
        <span class="qu-radio_label">
            <slot>
                <template>{{label}}</template>
            </slot>
        </span>
    </label>
</template>

<script>
export default {
  name: 'QuRadio',
  inject: {
    RadioGroup: {
      default: ''
    }
  },
  computed: {
    model: {
      get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (val) {
        console.log('val', val)
        this.isGroup ? this.RadioGroup.$emit('input', val) : this.$emit('input', val)
      }
    },
    // 判断radio是否被radiogroup包裹
    isGroup () {
      return !!this.RadioGroup
    }
  },
  props: {
    label: {
      type: [String, Number, Boolean],
      default: ''
    },
    value: null
  }
}
</script>

<style lang="scss" scoped>
  .qu-radio{
    color: #606266;
    font-weight: 500;
    line-height: 1;
    position: relative;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap;
    outline: nqu;
    font-size: 14px;
    margin-right: 30px;
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    .qu-radio_input{
      white-space: nowrap;
      cursor: pointer;
      outline: nqu;
      display: inline-block;
      line-height: 1;
      position: relative;
      vertical-align: middle;
      .qu-radio_inner{
        border: 1px solid #dcdfe6;
        border-radius: 100%;
        width: 14px;
        height: 14px;
        background-color: #fff;
        position: relative;
        cursor: pointer;
        display: inline-block;
        box-sizing: border-box;
        &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }
      }
      .qu-radio_original{
        opacity: 0;
        outline: nqu;
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0px;
        right: 0;
        bottom: 0;
        margin: 0;
      }
    }
    .qu-radio_label{
      font-size: 14px;
      padding-left: 10px;;
    }
  }
  // 选中的样式
  .qu-radio.is-checked{
    .qu-radio_input{
      .qu-radio_inner{
        border-color: #409eff;
        background-color: #409eff;
        &:after{
          transform: translate(-50%,-50%) scale(1);
        }
      }
    }
    .qu-radio_label{
      color:#409eff;
    }
  }
</style>
