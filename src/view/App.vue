<style>
@import'../view/styles.css';
</style>
<template>
  <div id="app">
    <h1>MVVM - Sample</h1>
    <input type="text" name="username" v-model="uname" placeholder="Username" /><br><br>
    <input type="password" name="password" v-model="pass" placeholder="Password" /><br><br>
    <button type="button" v-on:click='login'>Login</button>
  </div>
</template>

<script>
  import ViewModel from '../viewmodel/ViewModel.js'
export default {
  name: 'App',
  data(){
    return{
      uname : '',
      pass : ''
    }
  },
  methods:{
    login:function(){
      var VM = new ViewModel(this.uname,this.pass);
      alert(VM.login());
    }
  },
  components: {
  }
}
</script>

