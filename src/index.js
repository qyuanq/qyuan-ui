import Button from './packages/button'
import Form from './packages/form'
import FormItem from './packages/form-item'
import Input from './packages/input'
import Notice from './packages/notice/index.js'

const components = {
  YForm: Form,
  YFormItem: FormItem,
  YInput: Input,
  YButton: Button
}


const install = function (Vue, options = {}) {

  Object.keys(components).forEach(key => {
    Vue.component(key, components[key]);
  });


  // Vue.prototype.$message = Message;
  Vue.prototype.$notice = Notice;
}

export default install