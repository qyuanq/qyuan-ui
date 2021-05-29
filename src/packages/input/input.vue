<template>
  <div>
      <!-- v-bind="$attrs" 自动按绑定属性  type="password" -->
      <input :value="value" @input="onInput" v-bind="$attrs" @blur="onBulr" />
  </div>
</template>

<script>
import emmiter from '../../mixins/emitter'
export default {
  //只在当前元素节点渲染，不向上渲染
  inheritAttrs: false,
  props:{
      value:{
          type:String,
          default:''
      }
  },
  data () {
    return {
    };
  },
  mixins:[emmiter],
  methods: {
      onInput(e){
          this.$emit('input',e.target.value);
      },
      onBulr(){
        // this.$parent.$emit('validate')
        this.dispatch('YFromItem',"validate")
      }
  }
}

</script>
<style lang='scss' scoped>
</style>    