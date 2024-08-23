<!-- App.vue 는 Vue 애플리케이션의 루트 컴포넌트 (재활용이 가능한 화면) -->

<!-- template에는 html 코드가 들어간다. html의 Body와 같다.-->
<template>
  <v-app>
  <HeaderComponent />
    <v-main>
      <!-- router-view를 통해 app.vue에서 화면 라우팅 -->
      <router-view />
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<!-- script 에는 js 코드가 들어간다.  -->
<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';


// .vue 파일에는 html의 head 태그에 해당하는 것이 없다.
// 공통 import 사항은 main.js에 구성

export default {
  name: 'App',
  components: {
    HeaderComponent,
    FooterComponent
  }
}

</script>

    <!-- HelloWorld!-- 디자인은 style 태그에 들어간다. --> 
<style>
</style>