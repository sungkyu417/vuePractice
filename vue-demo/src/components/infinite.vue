<template>
	<div>
	<p>Infinite</p>
	<ul v-for="name in members.name">
		<li>{{name}}</li>
	</ul>
	</div>
</template>
<script>
	export default{
		data(){
			let members={
				name:['sungkyu','hoya','sungyeol']
			}
			return{
				members:members
			}
		}
	}
</script>