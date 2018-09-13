<template>
	<div class='home'>
		<div class="title">mint练习</div>
		<div @click="toast" class="btn">点击事件</div>
		
		<div @click="stops" class="btn">停止事件</div>
		<mt-progress :value="value" :bar-height="5"></mt-progress>
		<mt-actionsheet
		  :actions="actions"
		  v-model="sheetVisible">
		</mt-actionsheet>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import { MessageBox } from 'mint-ui';
	 export default {
	 	name : 'home',
	 	data(){
	 		return {
	 			btn : null,
	 			sheetVisible : false,
	 			value : 0,
	 			actions :[{ name : '哈哈拍照'}, {name : '从相册中选择'}]
	 		}
	 	},
	 	mounted (){
	 		setInterval(()=>{
	 			if(this.value == 100){
	 				this.value =0;
	 			}
	 			this.value ++ ;
	 		}, 1000)
	 	},
	 	methods :{
	 		toast(){
				Indicator.open({
				  text: '加载中...',
				  spinnerType: 'fading-circle'
				});
				setTimeout(function(){
					Indicator.close();		
				},2000)
			},
			stops(){
//				this.sheetVisible = true;
				MessageBox.prompt('请输入姓名').then(({ value, action }) => {
				  
				});

			}
	 	}
	 }
</script>

<style scoped>
	.btn{
		height: 100px;
		line-height: 100px;
		text-align: center;
		font-size: 1.6rem;
		color: #E43A4A;
		background-color: #fff;
	}
</style>