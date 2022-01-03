<template>
  <div class="notice">
      <img class="notice_img hoverPointer" :src='NotcieImg'/>
      <div class="content">
          <div class="list" v-for="item in noticeList" :key='item.id'>
              <img class="img" :src='item.img'/>
              <div class="info ">
                  <p class="title">{{item.title}}</p>
                  <p class="text textManyEllipsis">{{item.content}}</p>
                  <p class="time">{{item.time}}</p>
              </div>
          </div>
      </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
name: 'NoticeBack'
})
</script>
<script setup lang='ts'>
 import {ref} from 'vue'
 import { 
    
    NotcieImg,
    Back7,
    Back8,
    Back9,
    Back10,
  } from "@/assets/img/home/index.ts";
  const noticeList = ref([{
      img: Back7,
      title: '公告標題公告標題',
      content: '公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告',
      time: '2021/8/27',
      id: 1
  }, {
      img: Back8,
      title: '公告標題公告標題',
      content: '公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告',
      time: '2021/8/27',
      id: 2
  }, {
      img: Back9,
      title: '公告標題公告標題',
      content: '公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告',
      time: '2021/8/27',
      id: 3
  }, {
      img: Back10,
      title: '公告標題公告標題',
      content: '公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告',
      time: '2021/8/27',
      id: 4
  }])
</script>

<style lang='scss' scoped>
    .notice{
        height: 750px;
        &_img{
            margin-bottom: 100px;
        }
        .content{
            .list{
                width: 50%;
                display: inline-block;
                box-sizing: border-box;
                padding-right: 20px;
                height: 120px;
                margin-bottom: 60px;
                color: #656565;
                .img{
                    width: 190px;
                    height: 120px;
                    margin-right: 26px;
                }
                .info{
                    width: calc(100% - 216px);
                    display: inline-block;
                    height: 120px;
                    font-size: 14px;
                    margin: 5px 0;
                    line-height: 28px;
                    .title{
                        color: #fff;
                        font-size: 16px;
                    }
                    .text{
                        --lineClamp: 2;
                    }
                    .time{

                    }
                }
            }
        }
    }
</style>
