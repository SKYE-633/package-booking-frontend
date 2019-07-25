<template>
  <div class="hello">
    <div>
      <span>菜鸟驿站    </span>
      <button @click="addAll">ALL</button>
      <button @click="ordered">已预约 </button>
      <button @click="picked">已取件</button>
      <button @click="notOrdered">未预约</button>
      <button @click= "submit" >+添加</button>
    </div> 
    <div>
      <span>运单号  </span>
      <span>收件人  </span>
      <span>电话  </span>
      <span>状态  </span>
      <span>预约时间  </span>
      <span>收货状态  </span>
    </div>
    <div>
      <input v-model="inputValue" />
    </div>
    <ul>
      <Item 
      v-for="(item,index) of list" 
      :key="index"
      :content="item"
      :index="index">
      </Item>
    </ul>
  </div>
</template>

<script>
import Item from './Item'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data () {
      return {
          inputValue: '' ,
          list: []
      }
  },
  methods: {
    submit () {
      this.list.push(this.inputValue)
      this.inputValue= ''
    },
    addAll () {

    },
    ordered () {

    },
    picked () {

    },
    notOrdered () {

    }
  },
  components: {
    Item,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
