<template>
  <div class="notice">
    <div>
        <div style="text-align: center">
          <img class="noticeImg" :src='NoticeImg'/>
        </div>
        
        <div class="content">
          <div class="leftMen">
            <p class="active">公告標題公告標題</p>
            <p>公告標題公告標題公告標題公告公告標題公告標題公告標題公告</p>
            <p>公告標題公告標題</p>
            <p>公告標題公告標題公告標題公告標題公告標題公告標題</p>
            <p>公告標題公告標題</p>
            <p>公告標題公告標題公告標題公告標題公告標題公告標題</p>
          </div>
          <div class="rightCon">
              <div class="header">
                <span>公告標題公告標題</span>
                <p>2021/8/27</p>
              </div>
              <p class="noticeContent">
                公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容
              </p>
              <img class="noticeImg" :src='BackImg'/>
              <p class="noticeContent">
                公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告內容公告公告內容
              </p>
          </div>
        </div>
    </div>
    <img class="bg bg1" :src='Bg1Img'/>
    <img class="bg bg2" :src='Bg2Img'/>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
name: 'Notice'
})
</script>
<script setup lang='ts'>
 import {ref} from 'vue'
 import { 
    Bg1Img,
    Bg2Img,
    BackImg,
    NoticeImg
  } from "@/assets/img/notice/index";
</script>

<style lang='scss' scoped>
  .notice{
    padding-top: 202px;
    min-height: 1600px;
    position: relative;
    color: #1F1F20;
    & > div{
        width: var(--main_width);
        margin: 0 auto;
      .noticeImg{
        margin-bottom: 120px;
      }
      .content{
        display: flex;
        justify-content: space-between;
        .leftMen{
           width: 360px;
           line-height:60px;
           color: #FFFFFF;
           font-size: 20px;
           p{
              white-space: nowrap;
              overflow: hidden;
              text-overflow: ellipsis;
              cursor: pointer;
             &.active{
               color: #F6C771;
             }
           }
        }
        .rightCon{
          color: #656565;
          margin-left: 100px;
          margin-right: 40px;
          line-height: 28px;
          .header{
            padding-bottom: 20px;
            span{
              color: #FFF;
              font-size: 24px;
              line-height: 74px;
            }

          }
        }
      }
    }
    .bg{
      position: absolute;

      &.bg1{
        top: 274px;
        right: 0;
        width: 320px;
        height: 574px;
      }
      &.bg2{
        top: 927px;
        left: 0;
        width: 392px;
        height: 790px;
      }
    }
  }
</style>
