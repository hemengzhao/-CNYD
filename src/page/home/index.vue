<template>
  <div class="homepage">
      <HomeOnePage/>
      <HomeContent/>
      <HomeFooter/>
      <img class="back5" :src='Back5'/>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
name: 'HomePage'
})
</script>
<script setup lang='ts'>
 import {ref} from 'vue'
 import HomeOnePage from "./onePage/index.vue";
 import HomeContent from "./content/index.vue";
 import HomeFooter from "./footer/index.vue";
 import {
    Back5,
  } from "@/assets/img/home/index.ts";
</script>

<style lang='scss' scoped>
  .homepage{
    position: relative;
    .back5{
      position: absolute;
      bottom: 1270px;
      right: 0;
      width: 515px;
      height: 833px;
    }
  }
</style>
