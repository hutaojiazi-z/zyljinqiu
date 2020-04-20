<template>
  <div class="mask">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
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
    height: auto;
    max-height: 75%;
    overflow: scroll;
    position: relative;
    .btnbtnIkonw{
      border-radius: 15px;
      background-color: #fe9716;
      color: white;
      width: 100%;
    }
  }
}
</style>