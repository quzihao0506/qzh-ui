<template>
    <div class="qu-form-item">
        <label class="qu-form-item_label" :style="{width: this.Form.labelWidth}">{{label}}</label>
        <div class="qu-form-item_content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
  name: 'QuFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form']
}
</script>

<style lang="scss" scoped>
  .qu-form-item{
    margin-bottom: 25px;
    .qu-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .qu-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidde;
    }
  }
</style>
