<template>
  <div class="onepage">
    <div class="content">
        <div class="info">
          <div class="tip left">
            <span class="name">流通CNYD數量：</span>
            <span class="num">12345</span>
          </div>
          <div class="tip left">
            <span class="name">銀行賬戶餘額：</span>
            <span class="num">80900.00</span>
          </div>
        </div>
        <div class="cnyd">CNYD</div>
        <div class="title">
          <p>建立一個數字生態領域的資產交互的基礎設施；並成為全球數字資產用戶資產避險、金融衍生、互換通兌、結算支付的數字衍生工具。
            <br/>
             <br/>
            結合強大的監管框架，可信的分佈式技術，適用的數字金融結構，並利用分佈式治理和創新性模式為每一個使用 CNYD 的用戶提供服務。</p>
        </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
name: 'HomeOnePage'
})
</script>
<script setup lang='ts'>
 import {ref} from 'vue'
</script>

<style lang='scss' scoped>

/**
* 利用text-shadow实现3d文字效果
*
* $color     立体字的初始颜色
* $dx        立体字水平偏移位置，dx>0,向右偏，建议取值[-2,2]
* $dy        立体字垂直偏移位置，dy>0,向下偏，建议取值[-2,2]，dx和dy配合控制立体字的方向
* $steps     立体字的层叠数量
* $darken    立体字的颜色变暗数值，建议取值[0,1],需要结合层叠数量，避免过多的黑色出现
* @copyright 前端开发whqet，http://blog.csdn.net/whqet 
*/

@mixin text3d($color: #ffd300, $dx: 1, $dy: -1,$steps:10, $darken:.1) {
  color:$color;
  $color:darken($color,30%);
 
  $output: '';
  $x:0px;
  $y:0px;
  @for $n from 1 to $steps{
    $output: $output + '#{$x} #{$y} 0 #{$color},';
    $x:$x+$dx;
    $y:$y+$dy;
    $color:darken($color, $darken * ($n+10));
  }
  $output: $output+'#{$x} #{$y} 12px rgba(0,0,0,0.3),#{$x} #{$y} 1px rgba(0,0,0,0.5);';
  
  text-shadow:unquote($output);
}
  .onepage{
    background-image: url('@/assets/img/home/onePageBg.png');
    width: 100%;
    height: 100vh;
    min-height: 800px;
    padding-top: 82px;
    box-sizing: border-box;
    .content{
      width: var(--main_width);
      margin: 0 auto;
      .info{
        width: 870px;
        height: 154px;
        margin: 90px auto 110px;
        display: flex;
        align-items: center;
        justify-content: space-around;
        background-image: url('@/assets/img/home/onePageInfo.png');
        
        .tip{
          flex: 1;
          line-height: 100px;
          text-align: center;
          .name{
            font-size: 20px;
            color: #fff;
            vertical-align: middle;
            
          }
          .num{
            color: #F6C771;
            font-size: 44px;
            vertical-align: middle;
          }
        }
      }
      .cnyd{
        font-size: 82px;
        font-family: Alibaba-PuHuiTi-H, Alibaba-PuHuiTi;
        font-weight: 900;
        line-height: 60px;

        @include text3d(#AB7E2B,2,1,15,.05);
      }
      .title{
        color: #FFFFFF;
        width: 750px; 
        font-weight: 400;
        font-size: 20px;
        line-height: 34px;
        margin-top: 50px;
      }
    }
  }
</style>
