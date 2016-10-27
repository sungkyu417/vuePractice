
<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="glyphicon glyphicon-time"></i> 计划表
        </a>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="/time-entries">计划列表</router-link>
          </li>
          <li>
            <router-link to="/infinite">infinite</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <!--<sidebar :time="$store.state.totalTime"></sidebar>-->
        <sidebar :time="totalTime"></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view>
        	<!--
            	作者：shixialing_kyu@163.com
            	时间：2016-10-13
            	描述：此处放各个模块的内容
            -->
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar'

export default {
components: {
    'sidebar':Sidebar
},
data(){
	return{
		totalTime:1.5
	}
}
//events:{
//	timeUpdate(timeEntry){
//		this.totalTime+=parseFloat(timeEntry.totalTime)
//	},
//	deleteTime(timeEntry){
//		this.totalTime-=parseFloat(timeEntry.totalTime)
//	}
//}
}
</script>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

#app {
  color: #2c3e50;
  margin-top: -100px;
  max-width: 600px;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: center;
}

#app a {
  color: #42b983;
  text-decoration: none;
}

.logo {
  width: 100px;
  height: 100px
}
</style>
