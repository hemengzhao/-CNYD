<template>
  <div class="page">
      <img :src='ShimingImg' class="imgTitle"/>
      <div class="shiTitle">
        建立一個數字生態領域的資產交互的基礎設施；並成為全球數字資產用戶資產避險、金融衍生、互換通兌、結算支付的數字衍生工具。
        <br/><br/>
        結合強大的監管框架，可信的分佈式技術，適用的數字金融結構，並利用分佈式治理和創新性模式為每一個使用 CNYD 的用戶提供服務。
      </div>
      <div class="twoback" style="height: 675px">
          <img :src='Back1' class="back1"/>
          <img :src='Back2' class="back2"/>
          <img :src='YoushiImg' class="youshi"/>
          <div class="infoback wending">
            <img :src='Title1'/>
            <h2>穩定性更強</h2>
            <p>
              基金會在回購CNYD時支付等值的人民幣，因此CNYD的市值相對人民幣的匯率始終維持在1:1。
              <br/>
              人民幣是目前國際上價值最為穩定的貨幣之一，CNYD錨定人民幣，大大增強了CNYD價值的穩定性。
            </p>
          </div>
      </div>
      <div class="twoback" style="height: 370px; margin-top: 100px">
        <img :src='Back3' class="back3"/>
        <div class="infoback xiaolv">
            <img :src='Title2'/>
            <h2>轉賬迅速，效率更高</h2>
            <p>
              我們選擇在高效的底層公鏈上發行，選擇生態完整的BSC（Binance Smart Chain）上發行，後續則會在ASC（Armonia Smart Chain）上發行，生態完整的公鏈上發行。使得我們比較其他，轉賬非常快速，很少出現擁堵。正常情況可以實現 3 秒到賬。
            </p>
          </div>
      </div>
      <div class="twoback" style="height: 370px; margin-top: 100px">
        <img :src='Back4' class="back4"/>
        <div class="infoback yiyong">
            <img :src='Title3'/>
            <h2>手續費低，易用性更好</h2>
            <p>
              我們選擇發行的公鏈均具備穩定性好，速度快，生態完整，手續費低的特點。
            </p>
          </div>
      </div>
      <ScenePage/>
      <NoticeBack/>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
name: 'HomeContent'
})
</script>
<script setup lang='ts'>
 import {ref} from 'vue'
 import ScenePage from "./scene.vue";
 import NoticeBack from "./notice.vue";
 import { 
   ShimingImg,
    YoushiImg,
    
    Back1,
    Back2,
    Back3,
    Back4,
   
    Title1,
    Title2,
    Title3
  } from "@/assets/img/home/index.ts";
</script>

<style lang='scss' scoped>
  .page{
    width: var(--main_width);
    margin: 0 auto;
    .imgTitle{
        margin: 0 auto 100px;
        
    }
    .shiTitle{
      width: 870px;
      margin: 0 auto;
      font-size: 20px;
      font-family: AlibabaPuHuiTi_2_55_Regular;
      color: #FFFFFF;
      line-height: 40px;
    }
    .twoback{
        margin-top: 140px;
        position: relative;
        .back1{
           position: absolute;
           left: 0;
           top: 0;
           width: 446px;
           height: 446px;
           z-index: 1;
        }
        .back2{
          position: absolute;
           left: 172px;
           top: 265px;
           width: 520px;
           height: 331px;
           z-index: 2;
        }
        .youshi{
          position: absolute;
           right: 0;
           top: 26px;
           width: 374px;
           height: 136px;
           z-index: 2;
        }
        .wending{
           position: absolute;
           right: 0;
           top: 316px;
           padding-left: 155px;
           z-index: 3;
           box-sizing: border-box;
        }
        .xiaolv{
          position: absolute;
          right: 460px;
          top: 50px;
          padding-left: 73px;
          padding-right: 148px;
          z-index: 2;
        }
        .back3{
           position: absolute;
           right: 0;
           top: 0;
           width: 520px;
           height: 331px;
           z-index: 1;
        }

        .back4{
           position: absolute;
           left: 0;
           top: 0;
           width: 520px;
           height: 331px;
           z-index: 1;
        }
        .yiyong{
          position: absolute;
          left: 460px;
          top: 50px;
          padding-left: 155px;
          z-index: 2;
        }
    }

    .infoback{
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-sizing: border-box;
      border: 1px solid #656565;
      border-radius: 10px;
      width: 735px;
      height: 320px;
      img{
        width: 64px;
        height: 64px;

      }
      h2{
        font-size: 24px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 30px;
        margin-top: 30px;
        margin-bottom: 16px;
      }
      p{
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #656565;
        line-height: 30px;
      }
    }
  }
</style>
