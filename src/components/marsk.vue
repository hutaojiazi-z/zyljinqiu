<template>
  <div class="mask" :class="{hidden: hide}">
    <div class="content">
      <div>
        <slot name="bg"></slot>
      </div>
      <div class="btnbtnIkonw" @click="close">
        <slot name="btn"></slot>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      hide: false
    }
  },
  methods: {
    close() {
      // this.isShow = false
      this.hide = true
    }
  },
}
</script>
<style lang="less" scoped>
.mask{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  background-color:  rgba(0, 0, 0, .5);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .content{
    width: 80%;
    height: 50%;
    overflow: scroll;
    .btnbtnIkonw{
      border-radius: 15px;
      background-color: #fe9716;
      color: white;
      width: 100%;
    }
  }
}

.hidden {
  display: none;
}
</style>