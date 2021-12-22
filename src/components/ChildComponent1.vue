<template>
  <div class="Hello">
    <h1>{{ question }}</h1>
    <div v-for="(option,i) in options" :key="i">
      <p v-if="badwords.includes(option)" style="background:red;color:white">{{option}}</p>
      <p v-else>{{option}}</p>
    </div>
    <button @click="badwords.push('options')">Submit Answer</button>
  </div>
</template>

<script>
export default {
  props: {
    question: {
      type:String,
      default:"This is the default Question from the Child Component?"
    },
    options:{
      type:Array,
      default:()=>(["Option 1","Option 2","Option 3"])
    }
  },
  beforeCreate(){
    console.log("This function is called before component creation ",this,this.badwords);
  },
  created(){
    console.log("This function is called after component creation ",this,this.badwords,this?.question);
  },
  beforeMount(){
    console.log("This function is called before component mounted ",this,this.badwords,this?.question);
  },
  mounted(){
    console.log("This function is called after component mounted ",this,this.badwords,this?.question);
  },
  updated(){
    console.log("This function is called every component update ",this,this.badwords,this?.question);
  },
  data(){
    return {
        badwords:["fuck","somebad"]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
