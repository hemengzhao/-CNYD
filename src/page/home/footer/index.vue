<template>
  <div class="footer">
      <div class="content">
          <div class="left">
            <div class="logo"><img  :src='LogoImg'/></div>
            <div class="company">
              <img :src='FooterIcon1'/>
              <img :src='FooterIcon2'/>
              <img :src='FooterIcon3'/>
              <img :src='FooterIcon4'/>
            </div>
          </div>
          <div class="ring">
            <p class="companyMe">聯繫我們</p>
            <div class="companyInfo">
              <p>郵箱：XXXXXX@.com</p>
              <p>電話:123456789</p>
              <p>客服:XXXX</p>
            </div>
          </div>
      </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
export default defineComponent({
name: 'HomeFooter'
})
</script>
<script setup lang='ts'>
 import {ref} from 'vue'
 import { 
    FooterIcon1,
    FooterIcon2,
    FooterIcon3,
    FooterIcon4,
    LogoImg
  } from "@/assets/img/home/index";
</script>

<style lang='scss' scoped>
  .footer{
     background-image: url('@/assets/img//home/footerbg.png');
    .content{
      width: var(--main_width);
      height: 330px;
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 0 auto;

      .left{
        .logo{
          img{
            width: 64px;
            height: 64px;
          }
          margin-bottom: 28px;
        }
        .company{
          img{
            width: 40px;
            height: 40px;
            margin-right: 28px;
          }
        }
      }
      .ring{
        .companyMe{
          font-size: 18px;
          font-family: AlibabaPuHuiTi_2_85_Bold;
          color: #FFFFFF;
          line-height: 100px;
          margin-bottom: 30px;
          height: 64px;

        }
        .companyInfo{
          min-width: 520px;
          display: flex;
          justify-content: space-between;
          p{
            display: inline-block;
            font-size: 16px;
            font-family: AlibabaPuHuiTi_2_55_Regular;
            color: #656565;
            line-height: 16px;
          }
        }
      }
    }
  }
</style>
