<template>
  <div :class="searchClass" class="searchInput flexBC">
    <slot name="cancel"></slot>
    <div class="positionrel">
      <i class="iconfont icon-sousuo"></i>
      <input type="search" :placeholder="placeholder" v-model="inputValue" @keyup.13="getkeyValue()" />
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props:{
    placeholder:{
      type:String,
      default:"输入搜索内容"
    },
    searchClass:{
      type:String,
      default:""
    }
  },
  data () {
    return {
      inputValue:""
    }
  },
  methods:{
    getkeyValue(){
      this.$emit("inputValue",this.inputValue);
    }
  }
}
</script>
<style lang="less" scoped>
  .searchInput{
    background-color: white;
    padding: 8px 15px;
    position: relative;
    .positionrel{
      flex: 1;
      input{
      border: none;
      line-height: 24px;
      background-color: #EFEFEF;
      border-radius: 15px;
      padding: 3px 15px 3px 30px;
      font-size: 13px;
      width: 100%;
      &:focus{
        outline: none;
      }
    }
    .icon-sousuo{
      position: absolute;
      top: 8px;
      left: 10px;
      font-size: 14px;
    }
    }
    
  }
</style>