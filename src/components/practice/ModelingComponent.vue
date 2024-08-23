
<template>

	<!-- HTML 요소의 동적 값 표시 -->
	<!-- HTTML 요소 안에 중괄호 2 번을 사용함으로서 script에 정의된 변수값을 화면에 표시한다. -->
	<h1>hello world {{ language }}</h1>

	<!-- :value 문법을 사용하면 단방향 데이터 바인딩 -->
	<input type="text" :value="value1" />

	<!-- v-model 문법을 사용하면 양방향 데이터 바인딩 -->
	<input type="text" v-model="value2" />
	<button @click="showValue">변수변경사항확인</button>

	<br>
	<h1>{{ count1 }}</h1>
	<botton @click="incerement1">increment</botton>

	<br>
	<input type="number" v-model="count2">
	<botton @click="incerement2">increment</botton>

	<br>
	<h1>{{ doubleCount }}</h1>
</template>

<script>
export default {
	//	변수 초기화 함수
	data() {
		return {
			language: "python",
			value1: "python",
			value2: "java",
			count1: 0,
			count2: 0
		};
	},

	//	종속된 반응형 데이터가 변경될 때 함수를 다시 실행하여
	computed: {
		doubleCount() {
			return this.count2 * 2;
		}
	},

	methods: {
		showValue() {
			alert(this.value2);
		},
		incerement1() {
			this.count1 += 1;
		},
		incerement2() {
			this.count2 += 1;
		}
	},
};
</script>
