<template>
	<div class="wes">
	
			<div id="toast" v-if="show">
			    <div class="weui-mask_transparent"></div>
			    <div class="weui-toast">
			        <i class="weui-icon-success-no-circle weui-icon_toast"></i>
			        <p class="weui-toast__content">已完成</p>
			    </div>
			</div>
			<a href="javascript:;" class="weui-btn weui-btn_disabled weui-btn_default" @click="shows">页面次要操作 Disabled</a>
	
	</div>
</template>

<script>
	export default{
		name : 'weui',
		data () {
		    return {
		      msg: 'Welcome to Your Vue.js App',
		      show : false
		    }
		},
		methods : {
			shows (){
				this.show = !this.show;
			}
		}
	
	}
	
</script>

<style scoped>
	@import url('../../../static/css/weui.css');

	
</style>