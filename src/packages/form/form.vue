<template>
  <div>
      <slot></slot>
  </div>
</template>

<script>
import emitter from '../../mixins/emitter'
export default {
  provide(){
    return {'form':this}
  },
  props:{
      model:{
          type:Object,
          required:true
      },
      rules:{
          type:Object
      }
  },
  mixins:[emitter],
  data () {
    return {
    };
  },

  methods: {
      //全局校验
      validate(callback){
        console.log(this.$children[0].$options.name)
          //过滤children 需要带prop且name为YFromItem的组件实例
          const tasks = this.$children.filter(item => item.prop && item.$options.name === 'YFromItem').map(item => item.validate())
          Promise.all(tasks).then(() => {callback(true)}).catch(() => {callback(false)})
      }
  }
}

</script>
<style lang='scss' scoped>
</style>