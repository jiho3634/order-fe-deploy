<template>
	<h1>4 Routing Test</h1>
	<button @click="spaMove1">modeling 페이지로 이동(url)</button><br />
	<button @click="spaMove2">modeling 페이지로 이동(name)</button><br />
	<button @click="hrefMove">modeling 페이지로 이동(href)</button><br />
	<button @click="reloadPage">현재화면 reload</button><br />
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		spaMove1() {this.$router.push("/practice/modeling");},
		spaMove2() {this.$router.push({ name: "ModelingComponent" });},
		hrefMove() {window.location.href = "/practice/modeling";},
		reloadPage() {window.location.reload();},
	},
};
</script>
