<template>
	<h1>Watch 예제</h1>
	<div>count : {{ count }}</div>
	<button @click="incrementCount">increment count</button>
	<h1>Update 예제</h1>
	<div>message : {{ message }}</div>
	<button @click="updateMessage">update message</button>
</template>

<script>
export default {
	data() {
		return {
			count : 0,
			message: "hello java"
		};
	},

	//	특정 변수 값의 변경사항을 인지하는 hook 함수
	watch:{
		// 함수명 = 변수명
		count() {
			alert("count값 변경")
		}
	},

	//	DOM 객체(화면)의 변경사항을 인지하는 hook 함수
	updated() {
		alert("DOM 요소 변경")
	},

	methods: {
		incrementCount() {
			this.count ++;
		},
		updateMessage() {
			this.message = "hello python"
		}
	},
}

</script>
