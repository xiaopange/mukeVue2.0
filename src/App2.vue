<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <div class="bigbox">
      <h1>第五章</h1>
      <div class="box">
        <div class="part">
          <h3>第一节：vue-cli <br>
            <h6>
              (1)vue-cli:vue-cli是vue官方提供的脚手架工具，用于初始化一个Vue项目；<br>
              (2)使用vue-cli的优势：
                  1.成熟的vue项目架构设计；
                  2.本地测试服务器，不用自己去搭建而且vue-cli还是热更新；
                  3.集成打包上线方案（初始化时可选择使用webpack或者gulp等）
              <br>
              (3)安装方式：<br>
              <img src="./resources/images/vue-cli.png" alt="" style="width:60%;margin-left:5%;margin-bottom:20px;">
            </h6>
          </h3>
        </div>
        <div class="part">
          <h3>第二-三节 <br>
            <h4>ES6语法：</h4>
            <div style="padding:10px;margin:0px 10px 5px 10px;font-size:16px;font-weight:normal;">
            （1）vue中的 export 要跟 default 即下面的export default{} ,只有跟了才可以import 后一个default的内容(例如：import Vue  from "vue",from "vue"是default的内容);将default的内容赋值给一变量Vue 引入到当前文件；不跟就有语法错误。 <br>
            （2）可以定义一个变量然后导出变量，例如：let com={
                  name="hello",
                  data(){
                    return{
                      msg:"hello vue"
                    }
                  }
                }; 如果你想导出com 这个变量得写成 export { com },而不是 export com,因为export导出的是特定的值而不是当前变量；而引用的时候也要加{ }；即：import { com } from './components/Hello'。  <br>
            （3）let ,let可以用来定义变量，假如{ let a=b } var c,这种情况下 a 就不会被外层 c 访问到;<br>
            （4） const，const是常量的声明方式；<br>
            （5）data() { return { hello: "world",} } 这种写法其实是 data :function(){ return{ hello:"world" } },指将函数function(){}赋值给data;
                那么为什么要这样函数return出来，因为这里data 作为一个组件它是可以被其他组件引用，它是一个类的概念。如果不return，那么被其它组件引用会形成引用关系。某个组件引用了hello这个组件并且改变了其data的值；那么其它引用hello的组件的data值也会变化；  <br>
            </div>
          </h3>
          <h3> vue-router(前端路由)： <br>
            <div style="padding:10px;margin:0px 10px 5px 10px;font-size:16px;font-weight:normal;">
              <ul>
                <li> <b> 路由：</b>简单来说就是通过不同的地址切换到不同的页面；<br></li>
                <li><b> 前端路由：</b>
                  <a href="https://www.zhihu.com/question/53064386" target="view_window">https://www.zhihu.com/question/53064386</a> &nbsp 
                  <a href="https://www.cnblogs.com/yuqing6/p/6731980.html" target="view_window">https://www.cnblogs.com/yuqing6/p/6731980.html</a>
                </li>
                <li><b> 单页面：</b></li> 
                <li>
                  <b style="color:red;;">******传统路由与前端路由的区别:</b>
                </li>
              </ul>
            </div>
            <div style="padding:10px;margin:5px 10px;">
              使用前端路由：
              <ul style="padding:10px;margin:0px 10px 5px 10px;font-size:16px;font-weight:normal;">
                <li> <b> 第一步：安装前端路由：</b>
                  (1) 使用命令 cnpm install vue-router --save 。
                  (2) main.js里通过 import VRouter from "vue-router" 引进来，然后因为vue-router是vue的插件所以要通过Vue.use("VRouter") vue.use全局方法注册来使用路由;
                </li>
                <li><b>注意点：</b> <br>
                  (1)map，就是规定什么样的地址访问什么样的页面或者说组件； <br>
                  (2)router-view，就是在什么样的位置显示不同的页面； <br>
                  (3)router-link,就是在页面上如何跳转到下一个页面；
                </li>
                <li>
                  main.js里当VRouter引入进来后VRrouter是一个全局的类，所以我们使用这个路由时就是实例化这个类(let router =new VRouter({}),这个router是实例化的router ),详情看mian.js; <br>
                </li>
                <li> <b> 第二步：案例</b>
                  <router-view></router-view>
                  <router-link :to="{path:'/'}">
                    <button class="btn" type="button">回首页</button>
                  </router-link>
                  <router-link :to="{path:'apple'}">
                    <button class="btn" type="button">to Apple</button>
                  </router-link>
                  <router-link :to="{path:'banana'}">
                    <button class="btn" type="button">to banana</button>
                  </router-link>
                </li>
              </ul>
            </div>
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import componentA from "./components/myHelloWorld";
import comA from "./components/a";
import part4ComA from "./components/part4ComA";
import part4ComB from "./components/part4ComB";
import apple from "./components/apple";
export default {
  // name: 'app'
  data() {
    return {
      hello: "world"
    };
  },
  components: {
    //components要接受的其实是一个对象，所以这里相当于 components:{ componentA :componentA }
    componentA: componentA,
    comA: comA,
    part4ComA: part4ComA,
    part4ComB: part4ComB
  },
  methods: {},
  computed: {
    myValueWithoutNum() {
      //剔除掉输入的数字变成""
      return this.myValue.replace(/\d/g, "");
    }
  },
  watch: {
    //属性监听
    myVal(val, oldval) {
      //监听myVal 这个属性，第一个参数代表当前值，第二个参数代表旧的值，每当新值和旧值不同时都会触发这个函数
      console.log("新数据：" + val + "/旧数据：" + oldval);
    },
    myList() {
      //监听myList 这个数据，当其发生改变时触发tellListChanged函数，这样就不用在上面changeList 和 removeList 两个函数上再分别执行tellListChange函数了
      this.tellListChanged();
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
  margin-bottom: 40px;
}
.bigbox {
  margin-bottom: 40px;
  padding-bottom: 20px;
}
.box {
  padding-bottom: 20px;
  border-bottom: 1px dashed purple;
  margin: 20px 10px 10px 10px;
  text-align: left;
}
.box .part {
  padding: 10px;
  border-bottom: 1px solid #eee;
}
.box li {
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.btn{
  padding: 4px 8px;background:rgb(72, 178, 248);color:#fff;
}
</style>
