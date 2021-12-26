<template>
  <div class="scene">
      <img class="scene_img" :src='ChangjingImg'/>
      <div class="scene_con">
        <div class="scene_con-back" v-for="(item, k) in list" :key="k">
            <div><img :src='item.img'/></div>
            
            <h3>{{item.name}}</h3>
            <p>{{item.title}}</p>
        </div> 
      </div>
  </div>
  <div class="weilai">
    <img class="back6" :src='Back6'/>
    <div class="right">
        <img :src='WeilaiImg'/>
        <p>
            CNYD 設計的其中一個目的是通過擴展法幣的功能來支持全球數字領域的結算。
            <br/><br/>
            在未來，我們計算隨著時間的推移會推出 CNYDA（CNYD-ASSET），它可能是由多種貨幣或價值穩定、高流動性的實物資產（如實物黃金）組合的穩定幣，作為一種中立和低波動性的替代方案。
        </p>
    </div>
  </div>
  
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
name: 'ScenePage'
})
</script>
<script setup lang='ts'>
 import {ref} from 'vue'
 import { 
    ChangjingImg,
    WeilaiImg,
    Back5,
    Back6,
    Icon1,
    Icon2,
    Icon3,
    Icon4,
    Icon5,
    Icon6,
    Icon7,
  } from "@/assets/img/home/index.ts";
  const list = [{
      img: Icon1,
      name: '數字金融（機構）體系的內部經濟活動',
      title: '基於區塊鏈技術特性；為其提供快捷高效的數字支付功能，有效提高因傳統金融機構結算所帶來的時間滯後並減低其支付成本。'
  }, {
      img: Icon2,
      name: '國際貿易（大型機構）的結算工作',
      title: '通過 CNYD 的數字支付行為，完成物資轉讓、交割和貿易清算等貿易活動，減少國際貿易當中應結算問題所產生的效率及匯率逆差問題，讓其成為國際結算過程當中，成為法幣支付的之外的友好補充。'
  }, {
      img: Icon3,
      name: '跨境支付、跨境結算',
      title: '針對跨境支付的場景，CNYD 的轉賬速度和低費用的優勢將會進一步放大。 CNDY 的功能適用與一些遊戲平台以及電商平台，幫助這些有全球社區背景的平台完成數字支付需求。'
  }, {
      img: Icon4,
      name: '中心化交易所、去中心化交易所/報價媒介',
      title: 'CNDY 將為更多的交易所機構提供服務。並成為其主要交易品種計價媒介和 OTC 的主要結算工具。'
  }, {
      img: Icon5,
      name: '金融衍生品的交易清算',
      title: '未來這些金融衍生品都能通過 CNYD 在鏈上進行結算，最小化信任成本並提高效率，同時提高金融風險的防範能力。 CNYD 具有高度的可擴展性和適用性，可將衍生品等規則寫在智能合約當中，再特定規則性觸發結算，提升資產和資金流轉的效率和透明性。'
  }, {
      img: Icon6,
      name: '數字生態應用及經濟活動',
      title: '對於數字生態產業，更能接受價值穩定的媒介作為支付工具，加之使用快捷高效，CNYD 可以幫助項目開發者更好的觸達他們的用戶，開拓更大的市場。 CNYD 作為數字商務、數字金融的基礎結算設施，將會給開發者更多的賦能，支持其獲得更完備的服務支撐。'
  }, {
      img: Icon7,
      name: '全球化財富管理工具和避險功能',
      title: '致力於為用戶提供數字資產避險，現實資產數字存託服務；CNYD 基金會具備的行業中立性，能讓其成為數字領域及國際性社會機構的財富管理輔助工具。'
  }]
</script>

<style lang='scss' scoped>
.scene{
    padding-top: 200px;
    &_img{
        margin-bottom: 98px;
    }
    &_con{
        &-back{
            display: inline-block;
            width: 268px;
            height: 430px;
            margin-right: 70px;
            vertical-align: middle;
            &:nth-child(4){
                margin-right: 0;
            }
            div{
                height: 80px;
                line-height: 80px;
                img{
                    vertical-align: middle;
                }
            }
            
            h3{
                font-size: 18px;
                font-family: PingFangSC-Semibold, PingFang SC;
                font-weight: 600;
                color: #FFFFFF;
                line-height: 36px;
                margin: 20px 0;
                height: 72px;
            }
            p{
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #656565;
                line-height: 30px;
            }
        }
    }

}
.weilai{
    display: flex;
    justify-content: space-between;
    margin-top: 150px;
    margin-bottom: 200px;
    .back6{
        width: 736px;
        height: 690px;
    }
    .right{
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: end;
        width: 508px;
        text-align: right;
        img{
            width: 374px;
            height: 136px;
            margin-bottom: 80px;
        }
        p{
            text-align: right;
            font-size: 16px;
            font-family: AlibabaPuHuiTi_2_55_Regular;
            color: #656565;
            line-height: 28px;
        }
    }
}
.back5{
    position: absolute;
    right: 0;
    bottom: 970px;
}
</style>
