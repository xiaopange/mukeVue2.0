<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="emitMyEvent">点击可以触发父组件中的my-event事件</button>
  </div>
</template>

<script>
export default {
//   name: 'HelloWorld',
  data () {
    return {
      msg: 'this is a.vue',
      objColor:{
          red:true,
          blue:false
      }
    }
  },
  methods:{
    emitMyEvent(){
        this.$emit("my-event",this.msg) //子组件通过$emit 方法间接性的触发了父组件my-event 事件
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
