<template>
  <div>
      <header class="header" :style="{backgroundColor: iten > 82 ? '#060613' : 'transparent'}">
          <div>
            <span class="logo">
                <router-link to="/cnyd/home" replace>
                    <img :src='LogoImg'/>
                </router-link>
            </span>
            <div class="right">
                <span :class="defaultActive == '/cnyd/home' ? 'active' : ''">
                    <router-link to="/cnyd/home" replace>
                        CNYD
                    </router-link>
                </span>
                <span>使命</span>
                <span>優勢</span>
                <span>應用場景</span>
                <span>未來</span>
                <span :class="defaultActive == '/cnyd/notice' ? 'active' : ''">
                    <router-link to="/cnyd/notice" replace>
                        公告
                    </router-link>
                </span>
                <span>基金會</span>
                <span>白皮書</span>
                <span class="lang">中文 <img :src='ZeImg'/></span>
                
            </div>
          </div>
      </header>
      <div>
          <router-view></router-view>
      </div>
      <HomeFooter/>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
name: 'Layout'
})
</script>
<script setup lang='ts'>
 import {ref, onMounted, onBeforeMount, watchEffect} from 'vue'
 import { useRoute, useRouter } from 'vue-router';

 import HomePage from "@/page/home/index.vue";
 import HomeFooter from "./footer/index.vue";
 import { 
    LogoImg,
    BgImg,
    NavAciveImg,
    ZeImg
  } from "@/assets/img/home/index";
  const route = useRoute();

  const iten = ref<number>(0);
    const defaultActive = ref('/cnyd/home');
  watchEffect(() => {
      console.log(route)
      defaultActive.value = route.path;
    });

  onMounted(() => {
      window.addEventListener('scroll', handleScroll)
  })
  onBeforeMount(() => {
      document.removeEventListener('scroll', handleScroll)
  })
  const handleScroll = () => {
        //获取滚动时的高度
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        
        iten.value = scrollTop;
        
  }
</script>

<style lang='scss' scoped>
    .header{
        position: fixed;
        top: 0;
        left: 0;
        background: transparent;
        width: 100vw;
        z-index: 10000;
        &> div{
            width: var(--main_width);
            height: 82px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 0 auto;
        }
        
        
        .logo{
            display: inline-block;
            img{
                width: 48px;
                height: 48px;
            }
        }
        .right{
            display: flex;
            justify-content: space-between;
            span{
                display: inline-block;
                min-width: 48px;
                position: relative;
                line-height: 46px;
                height: 46px;
                color: #fff;
                font-size: 16px;
                cursor: pointer;
                text-align: center;
                a{
                    color: inherit;
                    text-decoration: none;
                }
                &.active{
                    color: #F6C771;
                    &::before{
                        content: ' ';
                        display: inline-block;
                        position: absolute;
                        bottom: 0px;
                        left: 0px;
                        width: 100%;
                        height: 2px;
                        background-image: url('@/assets/img/home/navAvtive.png');
                    }
                }
                &.lang{
                    background-image: url('@/assets/img/home/bg.png');
                    height: 36px;
                    width: 90px;
                    line-height: 36px;
                    text-align: center;
                    img{
                        vertical-align: sub;
                        width: 20px;
                        height: 20px;
                    }
                }
                
            }
            span + span{
                margin-left: 60px;
            }
            
        }
    }
</style>
