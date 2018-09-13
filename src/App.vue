<template>
	<div id="app">
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive" v-wechat-title="$route.meta.title" />
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive" v-wechat-title="$route.meta.title" />
	</div>
</template>

<script>
	export default {
		name: 'App',
		watch: {
			$route() {
				document.body.style.background = this.$route.meta.backgroundColor || "#f5f5f5";
			}
		}
	}
</script>

<style>
	#app {
		max-width: 768px;
		margin: 0 auto;
	}
</style>
