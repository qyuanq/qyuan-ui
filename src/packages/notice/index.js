import Vue from 'vue'
import notice from './notice.vue'
 //创建组件构造器
 const Comp = Vue.extend(notice);
//Component:组件配置对象 {props:{},data(){}}
const Notice =  function(props){
    // 创建一个组件实例:得到的是虚拟dom
    //特别注意这里使用propsData接收prop
    const comp = new Comp({propsData:props});
    //挂载得到真实dom
    comp.$mount();
    //将组件根dom元素追加至body
    document.body.appendChild(comp.$el);
    //删除
    comp.remove = function(){
        document.body.removeChild(comp.$el);
        //销毁实例
        comp.$destroy();
    }
    return comp;
}
export default Notice



// import Vue from 'vue'
// import Notice from './notice.vue'

// Notice.newInstance = (properties) => {
//   let props = properties || {}
//   const Instance = new Vue({
//     render(h) {
//       return h(Notice, {
//         props
//       })
//     }
//   })

//   const component = Instance.$mount()
//   document.body.appendChild(component.$el)

//   const notice = component.$children[0]

//   return {
//     add(_notice) {
//       notice.add(_notice)
//     }, 
//     remove(id) {

//     }
//   }
// }

// let noticeInstance


// export default (_notice) => {
//   noticeInstance = noticeInstance || Notice.newInstance()
//   noticeInstance.add(_notice)
// }