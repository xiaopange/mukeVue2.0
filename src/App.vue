<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <div class="bigbox">
      <h1>第三章</h1>
      <div class="box">
        <p>{{hello}}</p>
        <p v-text="hello2"></p>
        <p v-html="hello2"></p>
        <p v-html="hello2"></p>
        <p>{{num+1}}</p>
        <p>{{status?"success":"faild"}}</p>
      </div>
      <div class="box">
        <!-- v-for渲染数组 -->
        <ul>
          <li v-for="(item,index) in lists"> 第{{index}}项，名称：{{item.name}}，价格：{{item.price}} </li>
        </ul>
        <!-- v-for渲染对象 -->
        <ul>
          <li v-for="(value,key) in objlists"> {{key +'：'+ value}} </li>
        </ul>
      </div>

      <div class="box">
        <!-- 引入组件 -->
        <componentA></componentA>
        <!-- v-for循环渲染组件列表 -->
        <p style="margin-top:10px;border:1px solid green;">
          <componentA  v-for="(value,key) in objlists" v-bind:key="key"></componentA> <!-- 因为objlists有4个字段所以这里会渲染这个组件4次 -->
          组件循环的意义是可以动态的给这个组件传值，例如 v-bind:key="key" 可以将父模板的key循环到这个组件中，
          当这个组件拿到key 就可以在这个组件内部(myHelloWorld.vue) 中进行不同的事情
        </p>
      </div>

      <div class="box">
        <!-- v-for渲染数组 -->
        <ul>
          <li v-for="(item,index) in lists"> 第{{index}}项，名称：{{item.name}}，价格：{{item.price}} </li>
        </ul>
        <p>
          <!-- 点击增加一条数据 -->
          <button v-on:click="addItem">点击增加一条数据</button>
        </p>
        <p>
          <!-- 点击修改一条数据 -->
          <button v-on:click="modifyItem">点击修改一条数据</button>
          这里直接修改数组中某个数据是不会触发页面列表的更新，但是从打印出来的数据可以看到 该条列表的确已经改变
        </p>
        <p>
          <!-- 点击修改一条数据2 -->
          <button v-on:click="modifyItem2">点击修改一条数据2</button>
          用vue的全局方法set方法可以触发该条数据的更新以及页面列表的更新，第一个参数是要修改的数组，第二个参数是要修改哪一条数据，第三个参数是要修改成什么数据
          <br/>Vue 目前是定义在main.js，所以这里要通过import 引进来
        </p>
      </div>

      <div class="box">
        <!-- v-bind动态绑定标签属性 -->
          <p>
            <a v-bind:href="link" v-bind:title="hello">to baidu</a>
            <componentA :partA="partA"></componentA>
          </p>
        <!-- 使用v-bind绑定class 和 内联样式-->
          <p>
            <a v-bind:class="redColor" >v-bind绑定class-数据/值</a>
            <p>
              <a v-bind:class="[redColor,blueColor]" >v-bind绑定class2-数组</a>
            </p>
            <p>
              <a v-bind:class="objColor" >v-bind绑定class3-对象</a><br>
              切换状态改变class：<button v-on:click="toggle">toggle</button> 
            </p>
            <p>
              <a v-bind:class="[redColor,{blue:true}]" >v-bind绑定class3-对象与数组混合</a>
              <a v-bind:class="[redColor,objColor2]" >v-bind绑定class3-对象与数组混合</a>
            </p>
          </p>
      </div>

      <div class="box">
        <h3>(一)Vue事件绑定和表单</h3>
        <p>
          v-on 提供了一些修改器，例如stop 代表阻止默认事件
          <button v-on:click.stop="toggle">toggle</button>
        </p>
        <p>
          常用的一些事件修改器，当按下 enter键时触发onkeyDown事件,keydown.13 时keycode也代表时enter键
          <input type="text" v-on:keydown.enter="onkeyDown"><br><br>
          <input type="text" v-on:keydown.13="onkeyDown">
        </p>
        <p>
          常用的一些事件修改器，当按下 enter键时触发onkeyDown事件,keydown.13 时keycode也代表时enter键
          <input type="text" v-on:keydown.enter="onkeyDown"><br><br>
          <input type="text" v-on:keydown.13="onkeyDown">
        </p>
        <p>
          v-on可以自定义事件 例如： my-event，
          <h5>组件自定义事件流程：</h5>
          （1）父组件有一个自定义事件my-event，这个事件的触发是由子组件 a.vue 的button点击而成，
          （2）父组件监听到子组件 a.vue  button触发后再执行onComAMyEvent函数
          （3）pramA 是由子组件触发后传给父组件的参数
          <comA v-on:my-event="onComAMyEvent"></comA>
        </p>
        <h3>(二)表单</h3>
        <p>
          <input type="text" v-model="inputText"> 输入的是：{{inputText}}
        </p>
        <p>
          <input type="checkbox" value="a" v-model="checkboxText">
          <input type="checkbox" value="b" v-model="checkboxText">
          <input type="checkbox" value="c" v-model="checkboxText"> 选择的是:{{checkboxText}}
        </p>
        <p>
          <input type="radio" value="a" v-model="radioText">
          <input type="radio" value="b" v-model="radioText">
          <input type="radio" value="c" v-model="radioText"> 选择的是:{{radioText}}
        </p>
        <p>
          <select v-model="selectText" style="width:50px;height:30px;">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select> 选择的是:{{selectText}}
        </p>
        <p>
          <h5>v-for遍历option</h5>
          <select v-model="selectOption" style="width:100px;height:30px;">
            <option v-for="item in selectOptions" v-bind:value="item.value">{{item.text}}</option>
          </select> 选择的是:{{selectOption}}
        </p>
        <p>
          <h5>v-model 支持的修饰符</h5>
          <p>
            v-model.lazy 延时，使用了lazy 延时修饰符时页面数据不会同步更新，当input 失去焦点或者按enter键等等后才会更新
            <input type="text" v-model.lazy="inputText"> 输入的是：{{inputText}}
          </p>
          <p>
            v-model.number，使用了number 数字修饰符时input 中输入的数字是number类型，如果输入的不是数字或者没有使用number数字修改器那么输入的是string类型<br>
            <input type="text" v-model.number="inputText"> 输入的是：{{inputText+":"+typeof(inputText)}} <br/>
            <input type="text" v-model="inputText2"> 输入的是：{{inputText2+":"+typeof(inputText2)}}
          </p>
          <p>
            v-model.trim ，使用了trim 去掉首尾空格修饰符时，可以去除掉input 输入的首尾的空格 <br>
            <input type="text" v-model.trim="inputText3"> 输入的是{{inputText3}}
          </p>
        </p>
      </div>

      <div class="box">
        <h3>(一) 计算属性和数据监听</h3>
        <p>
          输入的内容剔除数字，
          （1）计算属性可以通过 其它属性动态的更新vue的属性，所以一些场景下可以不使用vue事件监听而直接使用计算属性。
          <input type="text" v-model="myValue"> 输入的是:{{myValueWithoutNum}} <br>
          <input type="text" v-model="myValue"> 输入的是:{{getMyValueWithoutNum()}} <br>
          (2) 计算属性和事件监听的区别:简单理解为 计算属性当计算的属性没有变化时它不会执行该计算方法，而事件的监听当该事件触发了就会调用该方法从而改变监听的属性
        </p>
        <h3>(二) 属性(数据)监听 --watch方法</h3>
        <P>
          <input type="text" v-model="myVal"> 输入的是:{{myVal}} <br>
          应用场景：例如下面 可以通过监听事件在列表数据发生改变后去执行相同的tellListChange方法，这样就不用在两个事件中再分别执行tellListChanged方法了 <br>
          <ul>
            <li v-for="(item,index) in myList">第{{index}}个,{{item.name}} ,{{item.price}}元</li>
          </ul>
          <button @click="changeList">点击修改第一条数据，触发watch监听对应的事件</button><br>
          <button @click="removeList">点击删除第二条数据，触发watch监听对应的事件</button><br>
        </P>
      </div>
    </div>
    <div class="bigbox">
      <h1>第四章</h1>
      <div class="box">
        Vue2.0里组件渲染模式有单击(单次)模式和即时渲染模式。单文件组件是即时渲染模式 <br>
        （1）vue2.0里可以直接 comA 这样书写组件名而不需要 小写-小写 这样书写 
        <part4ComA></part4ComA> <br>
        （2）但是为了统一还是建议在template 中书写组件使用小写-小写 的方式
        <part4-com-a></part4-com-a>
        <p style="margin-top:20px;border-top:1px solid #ccc">
        （3）模板引入还有另一种方式： is="组建名称"，如下意味着span 就是part4-com-a 这个组件 <br>
          <span is="part4-com-a"></span>
          <p>
            <h4>使用 is="组建名" 的好处是可以成为动态的组件 如下：comToRender 的内容是定义在data 里的变量，可以将这个变量设置为一个组件part4ComA,
                当该改变了comToRender 的值后相当于替换了其当前的组件，页面上也就会渲染替换后的组件。 所以相当于comToRender是一个动态的组件</h4>
            <span v-bind:is="part4.comToRender"></span>
            <button @click="changeComToRender">点击会修改comToRender的值，对应渲染不同的组件</button>
          </p>
        </p>
      </div>
      <div class="box">
        <h4>组件之间的通信--属性传递</h4>
        <p>
          例如：要向part4ComA这个子组件传递一个number=5,父组件里可以直接在组件标签里书写number=5,
          子组件要通过props 属性接收父组件传过来的值 number
           <part4-com-a number=5></part4-com-a> 
           父组件里的属性(number) 对大小写不敏感，要写成 小写-小写 命名形式 例如：numberTODO 要写成 number-to-do
        </p>
      </div>
      <div class="box">
        <h4>组件之间的通信--动态属性传递</h4>
        <p> 如果父组件传递的属性是变量的话那么需要v-bind绑定
          <input type="text" v-model="part4.myVal">
          <part4-com-a v-bind:my-val="part4.myVal"></part4-com-a>
          <br>
          <p>如果这里v-model.number指定了输入的是Number类型，而子组件里props 指定接受的是String类型，那么当父组件input输入的是纯数字的话会报错。
            <input type="text" v-model.number="part4.myVal2"> 输入的是：{{typeof part4.myVal2}}
            <part4-com-a v-bind:my-val2="part4.myVal2"></part4-com-a>
          </p>
        </p>
      </div>
      <div class="box">
        <h4>组件之间的通信--子组件如何向外传递事件</h4>
        <p>第一种：$emit。
          实现流程：（1）子组件标签里有一个 自定义事件 my-event2，这个自定义事件由子组件的button 点击去触发;<br>
          （2）父组件这里通过v-on监听了子组件的这个事件<br>
          （3）当子组件触发了这个事件后父组件监听到后执行了自己的对应的 part4getMyEvent 方法<br>
          （4）自定义事件名 也要 小写-小写 命名方式
            <part4-com-a @my-event2="part4getMyEvent"></part4-com-a>
        </p>
        <p> 第二种:slot 插槽功能，这是父组件向子组件传递信息的功能，传递的信息是模板
            <part4-com-a @my-event2="part4getMyEvent">
              <span style="color:green;margin:5px;display:block;">插入到子组件slot插槽里</span>
            </part4-com-a>
            <p style="margin:20px;border:1px solid blue;">
              <part4-com-a @my-event2="part4getMyEvent">
                <span slot="header" style="color:purple;margin:5px;display:block;">插入到子组件slot name="header"插槽里</span>
                <span slot="footer" style="color:#f40;margin:5px;display:block;">插入到子组件slot name="footer"插槽里</span>
              </part4-com-a>
            </p>
        </p>
      </div>
      <div class="box">
        <h4>组件之间的通信--动态组件</h4>
        <p>
          <b style="color:red;">动态组件：v-bind:is="变量",通过v-bind:is 绑定一个变量，这变量可以是各种子组件名；
          然后通过事件去改变这个变量从而渲染不同的子组件，这就是动态组件。</b>
          <span v-bind:is="part4.currentView" style="border:2px solid blue;"></span>
          <button v-on:click="changeCurrentView">点击改变这个动态组件</button>
        </p>
        <p>
          <b style="color:red;"> 
           **PS---- router-view 相当于一个动态组件，动态组件也可以使用 keep-alive内置标签。
           其可以缓存已使用的组件，当点击按钮切换其它组件前其缓存起现使用的组件，当再切换回现组件时就提高了现组件的加载速度。
          </b>
          <keep-alive>
            <span v-bind:is="part4.currentView" style="border:2px solid blue;"></span>
          </keep-alive>
           <button v-on:click="changeCurrentView">点击改变这个动态组件</button>
        </p>
      </div>
      <div class="box">
        <h4>过度动画-css实现过渡</h4>
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
export default {
  // name: 'app'
  data() {
    return {
      hello: "world",
      hello2: "<span>world</span>",
      num: 1,
      status: true,
      lists: [
        {
          name: "apple",
          price: 34
        },
        {
          name: "banana",
          price: 56
        }
      ],
      objlists: {
        name: "orange",
        price: 68,
        color: "yellow",
        weight: 14
      },
      link: "http://www.baidu.com",
      partA: "组件绑定数据",
      redColor: "red",
      blueColor: "blue",
      objColor: {
        //v-bind 绑定的是对象，看对象中的哪个值符合条件便渲染哪个值
        red: true,
        blue: false
      },
      objColor2: {
        //v-bind 绑定的是对象，看对象中的哪个值符合条件便渲染哪个值
        red: false,
        blue: true
      },
      inputText: "",
      inputText2: "",
      inputText3: "",
      checkboxText: [],
      radioText: [],
      selectText: "",
      selectOption: "",
      selectOptions: [
        { text: "apple", value: "sA" },
        { text: "banana", value: "sB" },
        { text: "orange", value: "sC" }
      ],
      myValue: "",
      myVal: "",
      myList: [{ name: "apple", price: 20 }, { name: "banana", price: 210 }],
      part4: {
        //第四章
        comToRender: "part4-com-a",
        myVal: "",
        myVal2: null,
        currentView: "part4-com-a"
      }
    };
  },
  components: {
    //components要接受的其实是一个对象，所以这里相当于 components:{ componentA :componentA }
    componentA: componentA,
    comA: comA,
    part4ComA: part4ComA,
    part4ComB: part4ComB
  },
  methods: {
    addItem() {
      this.lists.push({
        name: "pineapple",
        price: 234
      });
    },
    modifyItem() {
      this.lists[1] = {
        name: "pineapple1",
        price: 2341
      };
      console.log(
        this.lists
      ); /* 这里直接修改数组中某个数据是不会触发页面列表的更新，但是从打印出来的数据可以看到 该条列表的确已经改变 */
    },
    modifyItem2() {
      Vue.set(this.lists, "1", {
        //用vue的全局方法set方法可以触发该条数据的更新以及页面列表的更新，第一个参数是要修改的数组，第二个参数是要修改哪一条数据，第三个参数是要修改成什么数据
        // Vue 目前是定义在main.js，所以这里要通过import 引进来
        name: "pineapple11",
        price: 23411
      });
      console.log(this.lists); /* 可以看到页面列表和打印出来的数据都更新了 */
    },
    toggle() {
      //切换类
      this.objColor.red = !this.objColor.red;
      this.objColor.blue = !this.objColor.blue;
    },
    onkeyDown() {
      //键盘enter键 事件修改器
      console.log("on key down");
    },
    onComAMyEvent(pramA) {
      //父组件有一个自定义事件my-event，这个事件的触发是由子组件的button点击而成，
      //父组件监听到子组件button触发后再执行onComAMyEvent函数
      //pramA 是由子组件触发后传过来的参数
      console.log("onComAMyEvent" + "：" + pramA);
    },
    getMyValueWithoutNum() {
      return this.myValue.replace(/\d/g, "");
    },
    changeList() {
      Vue.set(this.myList, "0", {
        name: "orange",
        price: 1000
      });
      // this.tellListChanged()
    },
    removeList() {
      this.myList.splice("1", 1);
      // this.tellListChanged()
    },
    tellListChanged() {
      alert("当前myList改变了！");
      console.log(this.myList);
    },
    changeComToRender() {
      this.part4.comToRender = "com-a";
      console.log(this.part4.comToRender);
    },
    part4getMyEvent(hello) {
      console.log("子组件触发了myEvent事件" + hello);
    },
    changeCurrentView() {
      this.part4.currentView = "part4-com-b";
    }
  },
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
  border-bottom: 1px solid purple;
}
.box {
  padding: 5px;
  border: 1px solid red;
  margin: 10px;
}
.box p,
.box li {
  padding: 3px;
  border-bottom: 1px solid #ccc;
}
</style>
