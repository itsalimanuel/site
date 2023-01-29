<template>
  <NuxtLayout>
    <Header/>
    <Home/>
  </NuxtLayout>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;600&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #27272a;
  color: #fff;
  font-family: 'Cairo', sans-serif;
}
pre{
  font-family: 'Cairo', sans-serif;
}
a{
  color: #ffffff;
}
.container{
  max-width: 1024px;
  width: 100%;
  margin: auto;
}
@media (max-width: 1024px){
  .container{
    max-width: 87.5%;
  }
}
.empty-icon {
  width: 60px;
  height: 60px;
  border-radius: 12px;
  background-color: rgba(221, 221, 221, 0.56);
}
.empty-title{
  height: 10px;
  width: 50%;
  border-radius: 12px;
  background-color: rgba(221, 221, 221, 0.56);
  margin-bottom: 10px;
}
.empty-desc{
  height: 10px;
  width: 100%;
  border-radius: 12px;
  background-color: rgba(221, 221, 221, 0.56);
  margin-bottom: 10px;
}
</style>
<script setup lang="ts">
import Layout from "~/layout/index.vue";
import Header from "~/layout/header.vue";
import Home from '~/views/home/index.vue'
</script>