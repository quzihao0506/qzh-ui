<template>
  <div class="qu-uploader">
    <div>
      <ul>
        <li
          v-for="(item, index) in filesList"
          :key="index"
        ><img
            :src="item.url"
            alt=""
          ></li>
      </ul>
    </div>
    <div
      class="qu-uploader-wrapper"
      @click="event => handleFileUploader(event, 'click')"
      @drop="event => handleFileUploader(event, 'drop')"
      @dragenter="prevent"
      @dragover="prevent"
    >
      <div class="qu-uploader-container">
        <slot></slot>
        <input
          type="file"
          class="qu-file_invisible"
          ref="file"
          multiple="multiple"
          @change="event => handleFileUploader(event, 'change')"
        >
      </div>
    </div>
    <slot name="tip">
    </slot>
  </div>
</template>

<script>
export default {
  name: 'QuUploader',
  props: {
    accept: String,
    limit: Number,
    multiple: Boolean
  },
  data() {
    return {
      sourceFiles: [],
      filesList: [],
      tempFiles: []
    }
  },
  watch: {
    sourceFiles(value) {
      console.log('value', value)
      let files = Array.from(value)
      if (files.length <= 0) return
      const { accept } = this
      console.log(accept)
      if (files.some(file => accept.indexOf(file.type) < 0)) {
        return alert(`只接受${accept}类型的文件`)
      }
      this.handleFiles(files)
    },
    tempFiles(value) {
      let filesList = [...this.filesList, ...value]
      if (filesList.length > this.limit) {
        filesList = filesList.slice(0, this.limit)
        alert(`最多上传${this.limit}个文件`)
      }
      this.filesList = filesList
    }
  },
  methods: {
    prevent(event) {
      event.preventDefault()
    },
    handleFileUploader(event, type) {
      const handler = {
        click: () => {
          this.$refs.file.value = ''
          this.$refs.file.click()
        },
        change: event => {
          this.sourceFiles = event.target.files
        },
        drop: event => {
          event.preventDefault()
          this.sourceFiles = event.dataTransfer.files
        }
      }
      handler[type](event)
    },
    handleFiles(files) {
      if (window.URL && window.URL.createObjectURL) {
        this.createObjectURL(files)
      } else {
        this.createBase64Image(files)
      }
    },
    createObjectURL(files) {
      let filesArray = files.map(file => ({
        file,
        url: window.URL.createObjectURL(file)
      }))
      this.tempFiles = filesArray
    },
    createBase64Image(files) {
      const handleFile = function (file) {
        return new Promise((resolve, reject) => {
          let reader = new FileReader()
          reader.readAsDataURL(file)
          reader.onload = e => {
            resolve(e.target.result)
          }
          reader.onerror = error => {
            reject("读取文件失败")
          }
        })
      }
      let files_promises = files.map(handleFile)
      Promise.all(files_promises).then(results => {
        this.tempFiles = results.map((res, index) => {
          return {
            url: res,
            file: files[index]
          }
        })
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.qu-uploader {
  .qu-uploader-wrapper {
    background-color: #fff;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    box-sizing: border-box;
    width: 360px;
    height: 180px;
    line-height: 180px;
    text-align: center;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: inline-block;
    cursor: pointer;
    outline: none;
    .qu-file_invisible {
      visibility: hidden;
    }
  }
  ul {
    display: flex;
  }
  img {
    width: 200px;
    height: 200px;
  }
}
</style>
