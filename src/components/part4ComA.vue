<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>从父组件里传过来的number值是： {{number}} <br>
      <h5>虽然props 里是 小写-小写 形式但是插入到template 里还是要变成驼峰命名形式，例如：props:['number-to-do'], 这里调用时也要变成 numberToDo </h5>
    </h3>
    <h3>从父组件里传过来的动态属性myVal值是：{{myVal}} </h3>
    <h3>从父组件里传过来的动态属性myVal2值是：{{myVal2}} </h3>
    <div style="margin:20px;border:1px solid #000;">
      <h2>子组件如何向外传递事件</h2>
      <p>
        第一种：<br>
        <button v-on:click="emitMyEvent">点击可以触发父组件中的my-event事件</button>
      </p>
      <p>
        第二种：从父组件里传过来的span 插入到子组件slot插槽里 /span 可以插入到这对slot标签里<br>
        <slot>no slot</slot>
        这里的no slot 是默认值，当传过来的span 标签没值时，这里就显示no slot
        <p style="margin:20px;border:1px solid blue;color:blue;">
          如下：name="xxx" ，父组件通过slot属性就可以将参数插入到子组件相对应slot中
          <slot name="header"> no header</slot>
          <slot name="body"> no body</slot>
          <slot name="footer"> no footer</slot>
        </p>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  //name: 'HelloWorld',
  //props:['number','my-val'], //当App.vue里 的父组件<part4-com-a></part4-com-a>传过来的 number 有值时，这个number自动变成此组件的一个属性，
                    //就跟data里的其它属性一样，但不需要在data里再声明number,也可以通过this.number来获取值
                    // 子组件 props 这里也要 是 小写-小写 的命名方式，例如 numberToDo要写成 number-to-do
                    // props 可以接收数组 例如： props:['number','number-to-do'] 
                    //或者接收对象 
                    /* 例如：props:{ 
                        'number-to-do':[Number,String,Object] //这是指定父组件里number-to-do属性类型，如果这里指定是Number类型，而父组件里是String，则会报错
                    } */
  props:{
    "number":[Number,String,Object],
    "my-val":[Number,String,Object],
    "my-val2":[String]
  },
  data () {
    return {
      msg: 'this is form part4ComA.vue 的组件',
      hello:"hello,这是从子组件传递给父组件的参数"
    }
  },
  methods:{
    emitMyEvent(){
        this.$emit("my-event2",this.hello) //子组件通过$emit 方法间接性的触发了父组件my-event 事件
                                        //第一个参数 是要触发的自定义事件名，第二个参数是 要带过去的参数
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
