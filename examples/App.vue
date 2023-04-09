<template>
  <div id="app">
    <!-- <qu-checkbox
      :label="label"
      v-model="checked"
    ></qu-checkbox> -->
    <qu-input
      v-model="label"
      clearable
      showPassword
    ></qu-input>
    <qu-switch v-model="checked"></qu-switch>
    <!-- <qu-checkbox-group v-model="hobby">
      <qu-checkbox label="抽烟"></qu-checkbox>
      <qu-checkbox label="喝酒"></qu-checkbox>
      <qu-checkbox label="烫头"></qu-checkbox>
    </qu-checkbox-group>
    {{ hobby }} -->
    <!-- <qu-button
      @click="handleMessage"
      type="info"
    >点击message</qu-button> -->
    <!-- <qu-button
      @click="handleMessageBox"
      type="info"
    >点击message-box</qu-button>
    <qu-button
      @click="handleModal"
      type="info"
    >点击modal</qu-button> -->
    <!-- <qu-button
      @click="handleDialog"
      type="info"
    >按钮</qu-button>
    <qu-dialog
      :visible.sync="visible"
      @closed="closeDialog"
      @opened="openDialog"
      width="50%"
      title="提示"
    >
      <template v-slot:title>温馨提示</template>
      123
      <template v-slot:footer>
        <qu-button>取消</qu-button>
        <qu-button type="primary">确认</qu-button>
      </template>
    </qu-dialog> -->
    <!-- <qu-uploader
      accept="png,jpg,image/jpeg"
      :limit="3"
      :multiple="true"
    >
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div
        class="el-upload__tip"
        slot="tip"
      >只能上传jpg/png文件，且不超过500kb</div>
    </qu-uploader> -->
  </div>
</template>

<script>
import Hello from '../examples/components/hello.vue'
export default {
  name: 'App',
  data() {
    return {
      visible: false,
      checked: true,
      label: '篮球',
      hobby: ['抽烟', '喝酒', '烫头']
    }
  },
  methods: {
    handleModal() {
      this.$modal({
        template: Hello,
        params: {
          content: '我是内容'
        },
        success: function () {
          console.log('成功')
        },
        fail: function () {
          console.log('失败')
        }
      })
    },
    handleMessage() {
      this.$message({
        message: "我是一个message消息提示",
        duration: 3000,
        autoClose: true,
        position: 'center',
        type: 'success'
      })
    },
    handleMessageBox() {
      this.$alert({
        title: '提示',
        content: '此操作将永久删除该文件',
        onOK() {
          this.$message({
            message: "删除成功！",
            type: 'success'
          })
        },
        onCancel() {
          this.$message({
            message: "已取消删除",
            type: 'info'
          })
        }
      })
    },
    handleDialog() {
      this.visible = true
    },
    openDialog() {
      console.log('open')
    },
    closeDialog() {
      console.log('close')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
