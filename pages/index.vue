<template>
  <div class="TheIndex">
    <div class="TheIndex_Hero"></div>
    <div class="TheIndex_Staff">
      <h2 class="TheIndex_Text TheIndex_Staff_Header">Staff <span class="TheIndex_Staff_Header_Jp">スタッフ</span></h2>
    </div>
    <div class="TheIndex_Sns">
      <div class="TheIndex_Sns_Container">
        <a target="_blank" href="https://twitter.com/gekidan_nomeets" class="TheIndex_Sns_Link"> <img :src="snsTwitterImg" alt="" class="TheIndex_Sns_Img"></a>
        <a target="_blank" href="https://www.youtube.com/channel/UCT7hZww9WW94UmkxXjVMCLg" class="TheIndex_Sns_Link"> <img :src="snsYoutubeImg" alt="" class="TheIndex_Sns_Img"></a>
        <a target="_blank" href="https://www.instagram.com/gekidan_nomeets/" class="TheIndex_Sns_Link"> <img :src="snsInstagramImg" alt="" class="TheIndex_Sns_Img"></a>
      </div>
    </div>
    <div class="TheIndex_Contact">
      <h2 class="TheIndex_Text TheIndex_Contact_Header">Contact <span class="TheIndex_Contact_Header_Jp">お問い合わせ</span></h2>
      <a class="TheIndex_Text TheIndex_Contact_MailLink" href="nomeets2020@gmail.com">nomeets2020@gmail.com</a>
      <p class="TheIndex_Text">担当：菅波和也(すがなみ かずや)</p>
    </div>
    <footer class="TheIndex_Footer">
      <div class="TheIndex_Footer_Image_Container">
        <img :src="nomeetsLogoWhiteImg" alt="" class="TheIndex_Footer_Image">
      </div>
      <p class="TheIndex_Footer_Text">©︎ nomeets 2020</p>
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

import { mapGetters } from "vuex";
import { TweenMax, Elastic, Expo, Back, Linear } from "gsap";

export default Vue.extend({
  components: {
    Logo
  },
  data() {
    return {
      nomeetsLogoWhiteImg: "/home/Logo_White_GekidanNoMeets.png",
      snsTwitterImg: "/home/twitter.svg",
      snsYoutubeImg: "/home/youtube.svg",
      snsInstagramImg: "/home/instagram.svg",
    }
  },
  methods: {
    testMethod: function() {
    },
  },
  computed: {
    ...mapGetters({
      leftMove: "leftClicked"
    })
  },
  watch: {
   async leftMove(val) {
    //  requestAnimationFrame(() => {
    //     TweenMax.to("", 0.1, {
    //       opacity: 1,
    //       ease: Expo.easeIn,
    //       onComplete: function() {
    //       }
    //     });
    //     TweenMax.staggerTo(
    //       ".TheDetail_Greeting_Header",
    //       0.2,
    //       {
    //         delay: 0.1,
    //         ease: Expo.easeIn,
    //         opacity: 1
    //       },
    //       0.2
    //     );
    //   });
    //  await this.$delay(500);
    //  this.$router.push("/detail");
   }
  },
  mounted() {
    // window.addEventListener("scroll", this.scrollStart, false);
  },
  destroyed() {
    // window.removeEventListener("scroll", this.scrollStart, false);
  }
})
</script>

<style>
.TheIndex {
  min-width: 100vw;
  min-height: 100vh;
  /* margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}
.TheIndex_Text{
  font-size: 20px;
  color: #272727;
  font-weight: 900;
  text-align: center;
  font-family: 'Noto Sans JP', sans-serif;
}
.TheIndex_Hero{
  min-width: 100vw;
  min-height: 100vh;
  background: red;
}

.TheIndex_Staff{
  background: #c4c4c4;
  padding-top: 60px;
  padding-bottom: 60px;
}
.TheIndex_Staff_Header{
  font-size: 60px;
  margin-bottom: 24px;
  color: #c8ff00;;
}
.TheIndex_Staff_Header_Jp{
  font-size: 32px;
  font-weight: 500;
}

.TheIndex_Sns{
  background: #f9f9f9;
  padding: 40px 0px;
}
.TheIndex_Sns_Container{
  margin: 0 auto;
  display: flex;
  width: 320px;
  justify-content: space-between;
}
.TheIndex_Sns_Img{
  width: 80px;
  transition: 0.2s;
}
.TheIndex_Sns_Img:hover{
  opacity: 0.6;
}

.TheIndex_Contact{
  width: 100vw;
  background: #c8ff00;
  padding-top: 60px;
  padding-bottom: 60px;
}

.TheIndex_Contact_Header{
  font-size: 60px;
  margin-bottom: 24px;
  /* font-weight: 500;f */
}
.TheIndex_Contact_Header_Jp{
  font-size: 32px;
  font-weight: 500;
}
.TheIndex_Contact_MailLink{
  display: block;
  text-align: center;
  margin: 0 auto;
  font-weight: 900;
  font-size: 40px;
  transition: 0.2s;
  margin-bottom: 8px;
  text-decoration: none;
}
.TheIndex_Contact_MailLink:hover{
  opacity: 0.6;
}


.TheIndex_Footer{
  padding-top: 60px;
  padding-bottom: 40px;
  width: 100vw;
  background: black;
}
.TheIndex_Footer_Image_Container{
  display: flex;
  justify-content: center;
  align-content: center;
}
.TheIndex_Footer_Image{
  display: block;
  width: 200px;
}
.TheIndex_Footer_Text{
  display: block;
  font-size: 16px;
  color: #ffffff;
  margin: 0 auto;
  text-align: center;
  margin-top: 40px;
  font-weight: bold;
}


@media screen and (max-width: 1024px) {
}
@media screen and (max-width: 768px) {
}
@media screen and (max-width: 480px) {
}
@media screen and (max-width: 320px) {
}
</style>
