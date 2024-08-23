<template>
	<h1>conditional component</h1>

	<v-btn color="primary" class="ma-2" large rounded @click="login">
		<v-icon left>mdi-thumb-up</v-icon>
		로그인
	</v-btn>
	<div v-if="isLogIned">환영합니다 고객님</div>
	<div v-else>로그인해주세요</div>

	<h1>상품목록조회</h1>
	<ul>
		<!-- v-for 에서는 key 를 지정함으로서 각 요소마다의 고유 식별 -->
		<li v-for="product in products" :key="product.id">{{ product.name }}</li>
	</ul>
</template>

<script>
export default {
	data() {
		return {
			isLogIned: false,
			products : [
				{id : 1, name : "apple"},
				{id : 2, name : "banana"},
				{id : 3, name : "strawberry"}
			]
		};
	},
	methods: {
		login() {
			this.isLogIned = true;
		},
	},
};
</script>

<style scoped>
.v-btn {
  font-weight: bold;
  font-size: 16px;
}
</style>
