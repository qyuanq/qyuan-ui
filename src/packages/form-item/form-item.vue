<template>
  <div>
      <label v-if="label">{{label}}</label>
      <slot></slot>
      <div class="message" v-if="message">{{message}}</div>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  name:'YFromItem',
  componentName:'YFromItem',
  inject:['form'],
  props:{
      //标签
      label:{
          type:String,
          default:''
      },
      //验证项
      prop:{
          type:String,
          default:''
      }
  },
  data () {
    return {
        message:''  //校验信息
    };
  },
  mounted(){
    this.$on('validate',() => {
      this.validate();
    })
  },
  components: {},

  computed: {},

  methods: {
    validate(){
      //获取该项校验规则
      const rule = this.form.rules[this.prop];
      //获取该项值
      const value = this.form.model[this.prop];
      //名称与规则的对应关系
      const descriptor = {[this.prop]:rule}
      const validator = new Schema(descriptor);
      //名称与值的对应关系
      const nameToValue = {[this.prop]:value}
      //返回一个promise
      return validator.validate(nameToValue,(errors) => {
        if(errors){
          this.message = errors[0].message;
        }else{
          this.message = '';
        }
      })
    }
  }
}

</script>
<style lang='scss' scoped>
</style>