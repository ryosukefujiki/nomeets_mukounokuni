<template>
  <div class="TheIndex">
    <!-- <header class="TheIndex_Nav">
      <img :src="logoImg" alt="" class="TheIndex_Nav_Img">
      <div class="TheIndex_Nav_Lists">
        <nuxt-link v-scroll-to="'#about'" class="TheIndex_Nav_Item" to>
        ABOUT
        </nuxt-link>
        <nuxt-link v-scroll-to="'#cast'" class="TheIndex_Nav_Item" to>
        CAST
        </nuxt-link>
        <nuxt-link v-scroll-to="'#ticket'" class="TheIndex_Nav_Item" to>
        TICKET
        </nuxt-link>
        <nuxt-link v-scroll-to="'#staff'" class="TheIndex_Nav_Item" to>
        STAFF
        </nuxt-link>
        <a href="" class="TheIndex_Nav_Sns">
          <img :src="headerSnsTwitterImg" alt="" class="TheIndex_Nav_Sns_Img">
        </a>
         <a href="" class="TheIndex_Nav_Sns">
          <img :src="headerSnsYoutubeImg" alt="" class="TheIndex_Nav_Sns_Img">
        </a>
         <a href="" class="TheIndex_Nav_Sns">
          <img :src="headerSnsInstagramImg" alt="" class="TheIndex_Nav_Sns_Img">
        </a>
         <a href="" class="TheIndex_Nav_Sns">
          <img :src="headerSnsTiktokImg" alt="" class="TheIndex_Nav_Sns_Img">
        </a>
      </div>
    </header> -->
    <Glitch class="TheIndex_Hero"></Glitch>
    <!-- <div class="TheIndex_Hero">
      <h1 class="TheIndex_Hero_Dummy_Text">KEY VISUAL</h1>
      <img :src="keyVisualGif" alt="" class="TheIndex_Hero_Img">
      <v-lazy-image  class="TheIndex_Hero_Img" :src="keyVisualGif" :src-placeholder="keyVisualImg" />
    </div> -->
    <div class="TheIndex_Copy" id="about">
      <!-- <h1 class="TheIndex_Hero_Dummy_Text">COPY</h1> -->
      <img :src="copyImg" alt="" class="TheIndex_Copy_Img">
      <div class="TheIndex_Copy_Flexbox">
        <div class="TheIndex_Copy_Text_Container">
          <p class="TheIndex_Copy_Text">
            みんなが家から出なくなって４年。<br>
            入学からフルリモートの<br>
            キャンパスライフを送った私は、<br>
            実感の湧かない卒業を間近に控えていた。<br>
            <br>
            もし、もう一度、<br>
            家から出られなくなったあの日からやり直せたら、<br>
            あのささやかな恋も、実ったのだろうか。<br>
            あいつがいなくなることも、なかったのだろうか。<br>
            たとえバーチャルでも、これが私たちの青春。<br>
            だから、何度でも繰り返す。<br>
            何年この時代に生きることになっても。<br>
            この部屋から、未来を変える。<br>
            <br>
            収束しない事態と、<br>
            収束する運命に逆らう物語。<br>
          </p>
          <img :src="copyTitleImg" alt="" class="TheIndex_Copy_Text_Img">
        </div>
        <!-- <youtube ref="youtube" :video-id="videoId" class="TheIndex_Copy_Youtube" /> -->
        <iframe class="TheIndex_Copy_Youtube" data-src="https://www.youtube.com/embed/Zu9r-7uZfas" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <!-- <youtube ref="youtube" :video-id="videoId" class="TheDetail_Category_Movie"/> -->

    </div>
    <div class="TheIndex_Information">
      <!-- <div class="TheIndex_Information_Contents">
        <h3 class="TheIndex_Information_Header">再公演日</h3>
        <p class="TheIndex_Information_Text"><span class="Color_Yellow">5.31</span> <span class="TheIndex_Information_Text_Small">日</span>　18:00</p>
      </div> -->
      <div class="TheIndex_Information_Contents">
        <h3 class="TheIndex_Information_Header">公演日</h3>
        <p class="TheIndex_Information_Text"><span class="Color_Yellow">7.23</span> <span class="TheIndex_Information_Text_Small">木</span>　15:00 / 21:00</p>
        <p class="TheIndex_Information_Text"><span class="Color_Yellow">7.24</span> <span class="TheIndex_Information_Text_Small">金</span>　15:00 / 21:00</p>
        <p class="TheIndex_Information_Text"><span class="Color_Yellow">7.25</span> <span class="TheIndex_Information_Text_Small">木</span>　15:00 / 21:00</p>
        <p class="TheIndex_Information_Text"><span class="Color_Yellow">7.26</span> <span class="TheIndex_Information_Text_Small">金</span>　15:00 / 21:00</p>
      </div>
      <div class="TheIndex_Information_Contents">
        <h3 class="TheIndex_Information_Header Color_Blue">場所</h3>
        <p class="TheIndex_Information_Text"> <span class="Color_Blue">Zoom</span> にて生配信上映</p>
      </div>
    </div>
     <div class="TheIndex_Cast" id="cast">
      <h2 class="TheIndex_Text TheIndex_Header">CAST <span class="TheIndex_Header_Jp">キャスト</span></h2>
      <p class="TheIndex_Cast_Text">メインキャストは、劇団ノーミーツの出演俳優以外、 全員ZOOM上でのオーディションにより 200名を超える応募者の中から選出。</p>
      <div>
        <a class="The_Index_Cast_Member" href="https://twitter.com/milkan10_" target="_blank">
          <img :src="castImg01" alt="" class="The_Index_Cast_Member_Img">
          <div class="The_Index_Cast_Member_Countainer">
            <div>
              <p class="The_Index_Cast_Name">夏海</p>
            </div>
             <div><p class="The_Index_Cast_Role" id="myText">メグル役</p></div>
            
             <div><p class="The_Index_Cast_Message">
              皆様はじめまして！今回メグル役を演じます夏海です。<br>
              今作のお話は、これからの日本に怒るかもしれない、もしくはすでに起こっている事態を元に作られています。私自身、ずっと家にいて気が滅入っていました。その中ノーミーツの動画を観てとても勇気付けられました。皆さんに元気を届けられるよう、精一杯演じます。沢山の肩に観ていただきたいです！どうぞよろしくお願いいたします。
              </p></div>
          </div>
          <div><p class="The_Index_Cast_Message_Sp">
              皆様はじめまして！今回メグル役を演じます夏海です。<br>
              今作のお話は、これからの日本に怒るかもしれない、もしくはすでに起こっている事態を元に作られています。私自身、ずっと家にいて気が滅入っていました。その中ノーミーツの動画を観てとても勇気付けられました。皆さんに元気を届けられるよう、精一杯演じます。沢山の肩に観ていただきたいです！どうぞよろしくお願いいたします。
              </p></div>
        </a>
        <a class="The_Index_Cast_Member" href="https://twitter.com/milkan10_" target="_blank">
          <img :src="castImg02" alt="" class="The_Index_Cast_Member_Img">
          <div class="The_Index_Cast_Member_Countainer">
            <div>
              <p class="The_Index_Cast_Name">櫻井保幸</p>
            </div>
             <div><p class="The_Index_Cast_Role">ケンジ役</p></div>
            
             <div><p class="The_Index_Cast_Message">
              世界のネガティブが産んだエンタメの可能性の一部になれることをとても嬉しく思う共に、その場を共有していただける劇団ノーミーツはじめ関係者の皆さんに感謝しています。ひとりでも多くの人の心を豊かにできるよう行きたいです。届けます。
              </p></div>
          </div>
           <div><p class="The_Index_Cast_Message_Sp">
             世界のネガティブが産んだエンタメの可能性の一部になれることをとても嬉しく思う共に、その場を共有していただける劇団ノーミーツはじめ関係者の皆さんに感謝しています。ひとりでも多くの人の心を豊かにできるよう行きたいです。届けます。
              </p></div>
        </a>
        <a class="The_Index_Cast_Member" href="https://twitter.com/milkan10_" target="_blank">
          <img :src="castImg03" alt="" class="The_Index_Cast_Member_Img">
          <div class="The_Index_Cast_Member_Countainer">
            <div>
              <p class="The_Index_Cast_Name">オツハタ</p>
            </div>
             <div><p class="The_Index_Cast_Role">シンタロウ役</p></div>
             <div><p class="The_Index_Cast_Message">
              皆様、こんにちは。劇団ノーミーツのオツハタと申します。名前を聞き間違えられやすく、また読み間違えられやすいため、カタカナの芸名にしました。絶対に絶対に今やる価値のある公演です。今観る価値ある公演だったとお客様に感じてもらえるよう、精一杯演じます。みなさまの毎日が、健やかなものでありますように！
              </p></div>
          </div>
          <div><p class="The_Index_Cast_Message_Sp">
              皆様、こんにちは。劇団ノーミーツのオツハタと申します。名前を聞き間違えられやすく、また読み間違えられやすいため、カタカナの芸名にしました。絶対に絶対に今やる価値のある公演です。今観る価値ある公演だったとお客様に感じてもらえるよう、精一杯演じます。みなさまの毎日が、健やかなものでありますように！
              </p></div>
        </a>

         <div class="The_Index_Cast_Flexbox">
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="https://twitter.com/milkan10_" target="_blank">
            <img :src="castImg01" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">夏海</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">メグミ役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
                  皆様はじめまして！今回メグル役を演じます夏海です。<br>
              今作のお話は、これからの日本に怒るかもしれない、もしくはすでに起こっている事態を元に作られています。私自身、ずっと家にいて気が滅入っていました。その中ノーミーツの動画を観てとても勇気付けられました。皆さんに元気を届けられるよう、精一杯演じます。沢山の肩に観ていただきたいです！どうぞよろしくお願いいたします。
            </p></div>
          </a>
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="https://twitter.com/milkan10_" target="_blank">
            <img :src="castImg02" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">櫻井保幸</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">ケンジ役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
            世界のネガティブが産んだエンタメの可能性の一部になれることをとても嬉しく思う共に、その場を共有していただける劇団ノーミーツはじめ関係者の皆さんに感謝しています。ひとりでも多くの人の心を豊かにできるよう行きたいです。届けます。
            </p></div>
          </a>
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="https://twitter.com/milkan10_" target="_blank">
            <img :src="castImg03" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">オツハタ</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">シンタロウ役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
                皆様、こんにちは。劇団ノーミーツのオツハタと申します。名前を聞き間違えられやすく、また読み間違えられやすいため、カタカナの芸名にしました。絶対に絶対に今やる価値のある公演です。今観る価値ある公演だったとお客様に感じてもらえるよう、精一杯演じます。みなさまの毎日が、健やかなものでありますように！
            </p></div>
          </a>
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="https://twitter.com/milkan10_" target="_blank">
            <img :src="castImg01" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">夏海</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">メグミ役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
                  皆様はじめまして！今回メグル役を演じます夏海です。<br>
              今作のお話は、これからの日本に怒るかもしれない、もしくはすでに起こっている事態を元に作られています。私自身、ずっと家にいて気が滅入っていました。その中ノーミーツの動画を観てとても勇気付けられました。皆さんに元気を届けられるよう、精一杯演じます。沢山の肩に観ていただきたいです！どうぞよろしくお願いいたします。
            </p></div>
          </a>
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="https://twitter.com/milkan10_" target="_blank">
            <img :src="castImg02" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">櫻井保幸</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">ケンジ役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
            世界のネガティブが産んだエンタメの可能性の一部になれることをとても嬉しく思う共に、その場を共有していただける劇団ノーミーツはじめ関係者の皆さんに感謝しています。ひとりでも多くの人の心を豊かにできるよう行きたいです。届けます。
            </p></div>
          </a>
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="https://twitter.com/milkan10_" target="_blank">
            <img :src="castImg03" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">オツハタ</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">シンタロウ役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
                皆様、こんにちは。劇団ノーミーツのオツハタと申します。名前を聞き間違えられやすく、また読み間違えられやすいため、カタカナの芸名にしました。絶対に絶対に今やる価値のある公演です。今観る価値ある公演だったとお客様に感じてもらえるよう、精一杯演じます。みなさまの毎日が、健やかなものでありますように！
            </p></div>
          </a>

         

        

      

         </div>

      </div>
    </div>
    <div class="TheIndex_Ticket" id="ticket">
      <h2 class="TheIndex_Text TheIndex_Header TheIndex_Ticket_Header">TICKET <span class="TheIndex_Header_Jp">チケット情報</span></h2>
      <div class="TheIndex_Ticket_Section">
        <!-- <h3 class="TheIndex_Ticket_Date">7.23<span class="TheIndex_Ticket_Day">木</span></h3> -->
        <div class="TheIndex_Ticket_Countainer">
          <div><h4 class="TheIndex_Ticket_Name">先行限定</h4></div>
          <p class="TheIndex_Ticket_Text_Small">＊先行チケット限定の特典付き</p>
          <p class="TheIndex_Ticket_Text">
          <a href="https://nomeets2024.peatix.com/" class="TheIndex_Ticket_Link" target="_blank">購入ページへ</a>
            2200円（1000枚限定）
          </p>
        </div>
        <div class="TheIndex_Ticket_Flexbox">
           <div class="TheIndex_Ticket_Countainer">
          <div><h4 class="TheIndex_Ticket_Name TheIndex_Ticket_Name_White">一般チケット</h4></div>
          <p class="TheIndex_Ticket_Text">
          <a href="https://nomeets2024.peatix.com/" class="TheIndex_Ticket_Link TheIndex_Ticket_Link_Blue" target="_blank">購入ページへ</a>
            2800円
          </p>
          </div>
          <div class="TheIndex_Ticket_Countainer">
            <div><h4 class="TheIndex_Ticket_Name TheIndex_Ticket_Name_Black">RT割引チケット</h4></div>
            <p class="TheIndex_Ticket_Text">
            <a href="https://nomeets2024.peatix.com/" class="TheIndex_Ticket_Link TheIndex_Ticket_Link_Blue" target="_blank">購入ページへ</a>
              2500円
            </p>
          </div>
          <div class="TheIndex_Ticket_Countainer">
            <div><h4 class="TheIndex_Ticket_Name TheIndex_Ticket_Name_Black">U18割引チケット</h4></div>
            <p class="TheIndex_Ticket_Text">
            <a href="https://nomeets2024.peatix.com/" class="TheIndex_Ticket_Link TheIndex_Ticket_Link_Blue" target="_blank">購入ページへ</a>
              500円
            </p>
          </div>
        </div>
      </div>

      <!-- <div class="TheIndex_Ticket_Section">
        <h3 class="TheIndex_Ticket_Date">5.12<span class="TheIndex_Ticket_Day"> 火</span> <span class="TheIndex_Ticket_Date_Small">発売</span> <span class="TheIndex_Ticket_Date_Small_Red">即日完売</span> </h3>
        <div class="TheIndex_Ticket_Countainer">
          <div><h4 class="TheIndex_Ticket_Name">特典付き先行チケット</h4></div>
          <p class="TheIndex_Ticket_Text_Small">＊特典は後日発表となります。</p>
          <p class="TheIndex_Ticket_Text">
          <a href="https://nomeets2024.peatix.com/" class="TheIndex_Ticket_Link" target="_blank">購入ページへ</a>
            2000円(数量限定発売)
          </p>
        </div>
     </div> -->
      <!-- <div class="TheIndex_Ticket_Section">
        <h3 class="TheIndex_Ticket_Date">5.14<span class="TheIndex_Ticket_Day"> 木</span> <span class="TheIndex_Ticket_Date_Small">12:00 一般発売</span></h3>
        <div class="TheIndex_Ticket_Countainer">
          <div><h4 class="TheIndex_Ticket_Name TheIndex_Ticket_Name_White">一般チケット</h4></div>
          <p class="TheIndex_Ticket_Text">
          <a href="https://nomeets2024.peatix.com/" class="TheIndex_Ticket_Link TheIndex_Ticket_Link_Blue" target="_blank">購入ページへ</a>
            2500円
          </p>
        </div>
        <div class="TheIndex_Ticket_Flexbox">
          <div class="TheIndex_Ticket_Countainer">
            <div><h4 class="TheIndex_Ticket_Name TheIndex_Ticket_Name_Black">RT割引チケット</h4></div>
            <p class="TheIndex_Ticket_Text">
            <a href="https://nomeets2024.peatix.com/" class="TheIndex_Ticket_Link TheIndex_Ticket_Link_Blue" target="_blank">購入ページへ</a>
              2300円
            </p>
          </div>
          <div class="TheIndex_Ticket_Countainer">
            <div><h4 class="TheIndex_Ticket_Name TheIndex_Ticket_Name_Black">U25割引チケット</h4></div>
            <p class="TheIndex_Ticket_Text">
            <a href="https://nomeets2024.peatix.com/" class="TheIndex_Ticket_Link TheIndex_Ticket_Link_Blue" target="_blank">購入ページへ</a>
              2000円
            </p>
          </div>
          <div class="TheIndex_Ticket_Countainer">
            <div><h4 class="TheIndex_Ticket_Name TheIndex_Ticket_Name_Black">U18割引チケット</h4></div>
            <p class="TheIndex_Ticket_Text">
            <a href="https://nomeets2024.peatix.com/" class="TheIndex_Ticket_Link TheIndex_Ticket_Link_Blue" target="_blank">購入ページへ</a>
              1000円
            </p>
          </div>
        </div>
     </div> -->
     <p class="TheIndex_Ticket_Text_Small">
       【『むこうのくに』公演概要】<br>
        ＜公演日＞7月23日(木)・24日（金）・25日（土）・26日（日） 15:00 / 21:00 (全8回)<br>
        ＜場所＞ Zoomにて生配信上演<br>
        ＜チケット販売＞<br>
        <!-- ・5月12日(火)より特典付き先行チケット数量限定発売<br> -->
        先行限定チケット：2200円<br>
        一般チケット：2800円、<br>
        RT割引チケット：2500円、U18割引チケット：500円<br>
        ※各種チケット詳細・申込み方法はむこうのくに公式Peatixページにてご確認ください。</p>
    </div>
    <div class="TheIndex_Goods">
      <div class="TheIndex_Goods_Countainer">
        <h2 class="TheIndex_Text TheIndex_Header TheIndex_Goods_Header">SUZURI OFFICIAL SITE</h2>
      <p class="TheIndex_Text TheIndex_Goods_Text">（Tシャツ・ポスター・ステッカーetc）</p>
      <a href="https://suzuri.jp/nomeets" target="_blank" class="TheIndex_Text TheIndex_Goods_Link">購入ページ</a>
      </div>
      <div class="TheIndex_Goods_Countainer">
        <h2 class="TheIndex_Text TheIndex_Header TheIndex_Goods_Header">STORE OFFICIAL SITE</h2>
        <p class="TheIndex_Text TheIndex_Goods_Text">（公式パンフレット）</p>
        <a href="https://nomeets.stores.jp/" target="_blank" class="TheIndex_Text TheIndex_Goods_Link">購入ページ</a>
      </div>
    </div>
    <!-- <div class="TheIndex_Twitter">
      <div class="TheIndex_Twitter_Container">
        <Tweet id="1264568146251243520" class="TheIndex_Twitter_Tweet"></Tweet>
        <Tweet id="1264576131140730881" class="TheIndex_Twitter_Tweet"></Tweet>
        <Tweet id="1264471053838856193" class="TheIndex_Twitter_Tweet"></Tweet>
        <Tweet id="1264205612419739648" class="TheIndex_Twitter_Tweet"></Tweet>
        <Tweet id="1264576842037485568" class="TheIndex_Twitter_Tweet"></Tweet>
        <Tweet id="1264118909285707777" class="TheIndex_Twitter_Tweet"></Tweet>
      </div>
    </div> -->
    <div class="TheIndex_Message">
      <div class="TheIndex_Message_Container">
         <p class="TheIndex_Message_Text">
          この時代だからこそ生まれる物語」を書きました。<br>
          その物語を実際に会ったことのない座組みで、<br>
          画面を隔てたコミュニケーションで立ち上げていきます。<br>
          きっと映画でも演劇でもない新しい何かが生まれるのだと思いますが、<br>
          逆境に負けない人間の強さが滲んだたくましいエンタメにしていきたいです。
        </p>
        <p class="TheIndex_Message_Name">
          劇団ノーミーツ主宰、脚本・演出 小御門優一郎
        </p>
      </div>
    </div>
     <!-- <div class="TheIndex_Song">
      <p class="TheIndex_Song_Text"><span class="TheIndex_Song_Text_Small">主題歌</span>　重力の虹 / lie</p>
    </div> -->
    <div class="TheIndex_Staff" id="staff">
      <h2 class="TheIndex_Text TheIndex_Staff_Header">STAFF <span class="TheIndex_Staff_Header_Jp">スタッフ</span></h2>
      <div class="TheIndex_Staff_Staff_Container">
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">主宰、脚本・演出</p></div>
          <div><p class="TheIndex_Staff_Member_Name">小御門優一郎</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
           <div><p class="TheIndex_Staff_Member_Role">主宰、監督・プロデュース</p></div>
           <div><p class="TheIndex_Staff_Member_Name">林健太郎</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
           <div><p class="TheIndex_Staff_Member_Role">主宰、企画・プロデュース</p></div>
           <div><p class="TheIndex_Staff_Member_Name">広屋佑規</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
           <div><p class="TheIndex_Staff_Member_Role">舞台監督</p></div>
           <div><p class="TheIndex_Staff_Member_Name">梅田ゆりか</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
           <div><p class="TheIndex_Staff_Member_Role">演出助手</p></div>
           <div><p class="TheIndex_Staff_Member_Name">オツハタ</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
           <div><p class="TheIndex_Staff_Member_Role">制作プロデュース</p></div>
           <div><p class="TheIndex_Staff_Member_Name">菅波和也</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role TheIndex_Staff_Member_Role_Small">クリエイティブディレクター/コピーライター</p></div>
          <div><p class="TheIndex_Staff_Member_Name">鈴木健太</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">宣伝美術</p></div> 
          <div><p class="TheIndex_Staff_Member_Name">目黒水海</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">テクニカルディレクター</p></div>
          <div><p class="TheIndex_Staff_Member_Name">藤原遼</p></div>
        </a>
        <!-- <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">劇伴</p></div>
          <div><p class="TheIndex_Staff_Member_Name TheIndex_Staff_Member_Name_Small">サクライケンタ</p></div>
        </a> -->
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">UI/UXデザイナー</p></div>
          <div><p class="TheIndex_Staff_Member_Name">藤木良祐</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">企画・宣伝</p></div>
          <div><p class="TheIndex_Staff_Member_Name">小野寺正人</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">広報・PR</p></div>
          <div><p class="TheIndex_Staff_Member_Name">オギユカ</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">ディレクター</p></div>
          <div><p class="TheIndex_Staff_Member_Name">松永つぐみ</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">撮影監督</p></div>
          <div><p class="TheIndex_Staff_Member_Name">林大智</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">スイッチング監修</p></div>
          <div><p class="TheIndex_Staff_Member_Name">水落大</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">カメラワーク監修</p></div>
          <div><p class="TheIndex_Staff_Member_Name">松永夏紀</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">カメラワーク監修</p></div>
          <div><p class="TheIndex_Staff_Member_Name">鈴木健太</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">技術協力</p></div>
          <div><p class="TheIndex_Staff_Member_Name">田中義丸</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">広報・PR</p></div>
          <div><p class="TheIndex_Staff_Member_Name">さとうみずほ</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">広報・PR</p></div>
          <div><p class="TheIndex_Staff_Member_Name ">平岡祐子</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">Producer</p></div>
          <div><p class="TheIndex_Staff_Member_Name ">岩崎裕介</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">衣装</p></div>
          <div><p class="TheIndex_Staff_Member_Name">石塚愛理</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">美術</p></div>
          <div><p class="TheIndex_Staff_Member_Name ">石坪明希子</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">AI監修</p></div>
          <div><p class="TheIndex_Staff_Member_Name">岸裕真</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">企画・製作</p></div>
          <div><p class="TheIndex_Staff_Member_Name TheIndex_Staff_Member_Name_Small">劇団ノーミーツ</p></div>
        </a>
      </div>
    </div>
    <div class="TheIndex_Sns">
      <div class="TheIndex_Sns_Container">
        <a target="_blank" href="https://twitter.com/gekidan_nomeets" class="TheIndex_Sns_Link"> <img :src="snsTwitterImg" alt="" class="TheIndex_Sns_Img"></a>
        <a target="_blank" href="https://www.youtube.com/channel/UCT7hZww9WW94UmkxXjVMCLg" class="TheIndex_Sns_Link"> <img :src="snsYoutubeImg" alt="" class="TheIndex_Sns_Img"></a>
        <a target="_blank" href="https://www.instagram.com/gekidan_nomeets/" class="TheIndex_Sns_Link"> <img :src="snsInstagramImg" alt="" class="TheIndex_Sns_Img"></a>
        <a target="_blank" href="https://www.tiktok.com/@nomeets?lang=ja" class="TheIndex_Sns_Link"> <img :src="snsTiktokImg" alt="" class="TheIndex_Sns_Img"></a>
      </div>
    </div>
    <div class="TheIndex_Contact">
      <h2 class="TheIndex_Text TheIndex_Header">CONTACT <span class="TheIndex_Header_Jp">お問い合わせ</span></h2>
      <a class="TheIndex_Text TheIndex_Contact_MailLink" href="nomeets2020@gmail.com">nomeets2020@gmail.com</a>
      <p class="TheIndex_Text">担当：オギ ユカ</p>
    </div>
    <footer class="TheIndex_Footer">
      <div class="TheIndex_Footer_Image_Container">
        <img :src="nomeetsLogoWhiteImg" alt="" class="TheIndex_Footer_Image">
      </div>
      <p class="TheIndex_Footer_Text">©︎ nomeets 2020</p>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import Logo from '~/components/Logo.vue'
import { Tweet } from 'vue-tweet-embed'
import VLazyImage from "v-lazy-image";

import { mapGetters } from "vuex";
import { TweenMax, Elastic, Expo, Back, Linear } from "gsap";

import Glitch from "~/components/Glitch";

import ShuffleText from 'shuffle-text';
// import VueYoutube from 'vue-youtube'

export default Vue.extend({
  components: {
    Logo,
    Tweet,
    Glitch,
    VLazyImage,
  },
  data() {
    return {
      logoImg: "/home/logo.png",
      keyVisualImg: "/home/keyvisual.png",
      keyVisualGif: "/home/keyvisual.gif",
      copyImg: "/home/copy.svg",
      copyTitleImg: "/home/copy_title.svg",
      castImg01: "/home/cast/cast1.png",
      castImg02: "/home/cast/cast2.png",
      castImg03: "/home/cast/cast3.png",
      songImg:  "/home/song.svg",
      nomeetsLogoWhiteImg: "/home/Logo_White_GekidanNoMeets.png",
      snsTwitterImg: "/home/twitter.svg",
      snsYoutubeImg: "/home/youtube.svg",
      snsInstagramImg: "/home/instagram.svg",
      snsTiktokImg:  "/home/tiktok.svg",

      headerSnsInstagramImg: "/home/sns/instagram.svg",
      headerSnsTwitterImg: "/home/sns/twitter.svg",
      headerSnsYoutubeImg: "/home/sns/youtube.svg",
      headerSnsTiktokImg: "/home/sns/tiktok.svg",
      videoId: "Zu9r-7uZfas",
    }
  },
  methods: {
    testMethod: function() {
    },
    youtube_defer: function(){
      console.log("LOAD")
      const iframes = document.querySelectorAll('.TheIndex_Copy_Youtube');
      iframes.forEach(function(iframe){
        if(iframe.getAttribute('data-src')) {
          iframe.setAttribute('src',iframe.getAttribute('data-src'));
        }
      });
    },
    handleScroll: function(){
      console.log("HOGE")
    }
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
    window.addEventListener('load', this.youtube_defer);
    window.addEventListener('scroll', this.handleScroll);
    var el = document.getElementById("myText");
    var text = new ShuffleText(el);
    // text.sourceRandomCharacter = "こあ生"
    text.start();
    // window.addEventListener("scroll", this.scrollStart, false);
  },
  destroyed() {
    window.removeEventListener("load", this.youtube_defer, false);
    window.removeEventListener('scroll', this.handleScroll);
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

.TheIndex_Nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 60px;
  /* background: rgba(255, 255, 255, 0); */
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  opacity: 1;
  padding: 10px 120px;
}
.TheIndex_Nav_Img{
  height: 60px;
  /* margin-right: 32px; */
  margin-top: 40px;
}
.TheIndex_Nav_Item{
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
  display: block;
  margin-right: 28px;
  transition: 0.2s;
  font-family: din-2014, sans-serif;
  font-weight: 700;
  font-style: normal;
  mix-blend-mode: difference;
  margin-top: 40px;
}
.TheIndex_Nav_Sns{
  display: block;
  margin-top: 40px;
  margin-right: 24px;
  transition: 0.2s;
}
.TheIndex_Nav_Sns:hover{
  opacity: 0.6;
}
.TheIndex_Nav_Sns_Img{
  display: block;
  width: 20px;
}
.TheIndex_Nav_Lists{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  /* width: 80%; */
}

.TheIndex_Nav_Item:hover{
  opacity: 0.6;
}

.TheIndex_Text{
  font-size: 20px;
  color: #000000;
  text-align: center;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
}
.TheIndex_Header{
  font-family: din-2014, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 60px;
  margin-bottom: 24px;
  /* font-weight: 500;f */
}
.TheIndex_Hero{
  min-width: 100vw;
  min-height: 100vh;
  background: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border-bottom: 6px solid #eaeaea; */
}
.TheIndex_Hero_Img{
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}
.TheIndex_Hero_Dummy_Text{
  color: #eaeaea;
  font-size: 20px;
}

.TheIndex_Copy{
  min-width: 100vw;
  min-height: 100vh;
  background: #ebf4ef;
  /* display: flex;
  align-items: center;
  justify-content: center; */
  border-bottom: 6px solid #eaeaea;
  padding: 80px 120px;
}
.TheIndex_Copy_Img{
  width: 100%;
  display: block;
}
.TheIndex_Copy_Flexbox{
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  /* background: red; */
  margin-top: 40px;
}
.TheIndex_Copy_Youtube{
  display: block;
  /* width: 400px; */
  width: 45%;
  height: 480px;
}
.TheIndex_Copy_Text_Container{
  width: 50%;

}
.TheIndex_Copy_Text{
  display: block;
  color: #000000;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 24px;
  width: 100%;
}
.TheIndex_Copy_Text_Img{
  margin-top: 40px;
}

.TheIndex_Information{
  background: #000000;
  padding: 80px 120px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;
}
.TheIndex_Information_Contents{
  width: 740px;
  margin-bottom: 40px;
}
.TheIndex_Information_Header{
  color: #fa5d95;
  /* color: #ffffff; */
  font-size: 48px;
  font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
}
.TheIndex_Information_Text{
  color: #ffffff;
  font-size: 60px;
  font-weight: 900;
}
.TheIndex_Information_Text_Small{
  font-size: 40px;
}
.Color_Blue{
  color: #04abff;
}
.Color_Yellow{
  /* color: #d7e5ff; */
  color: #fa5d95;
}

.TheIndex_Cast{
  background: #d7e5ff;
  padding: 80px 120px;
}
.The_Index_Cast_Flexbox{
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  flex-wrap: wrap;
  /* background: red; */
}
.TheIndex_Cast_Text{
  background: #ffffff;
  color: #000000;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
  font-size: 32px;
  width: 100%;
  display: inline;
}
.The_Index_Cast_Member{
  display: block;
  width: 100%;
  /* height: 80%; */
  margin-top: 40px;
  position: relative;
  transition: 0.2;
  color: #000000;
  text-decoration: none;
}
.The_Index_Cast_Member:hover{
  opacity: 0.6;
}
.The_Index_Cast_Member_Countainer{
  width: 60%;
  position: absolute;
  left: 40%;
  top: 10%;
}
.The_Index_Cast_Member_Img{
  width: 50%;
  /* height: 100%; */
  /* position: absolute;
  top: 0;
  left: 0; */
}
.The_Index_Cast_Name{
  display: inline-block;
  background: #000000;
  color: #ffffff;
  font-size: 120px;
  /* position: absolute;
  top: 0;
  left: 40%; */
  font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
}
.The_Index_Cast_Role{
  display: inline-block;
  font-size: 40px;
  background: #ffffff;
  /* letter-spacing: -20px; */
  /* position: absolute;
  top: 0;
  left: 40%; */
  font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
}
.The_Index_Cast_Message{
  display: block;
  /* width: 50%; */
  font-size: 16px;
  background: #ffffff;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
  /* position: absolute;
  bottom: 0;
  right: 0; */
  margin-top: 20px;
  padding: 20px 20px;
}
.The_Index_Cast_Message_Sp{
  /* display: block; */
  /* width: 50%; */
  font-size: 16px;
  background: #ffffff;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
  /* position: absolute;
  bottom: 0;
  right: 0; */
  margin-top: 20px;
  padding: 8px 8px;
  display: none;
}

.The_Index_Cast_Member_Small{
  display: block;
  width: 32%;
  /* height: 80%; */
  margin-top: 40px;
  position: static;
  transition: 0.2;
  text-decoration: none;
  color: #000000;
}
.The_Index_Cast_Member_Countainer_Small{
  width: 100%;
  position: static;
  /* position: absolute;
  top: 40%;
  left: 0; */
  /* bottom: 0; */
}
.The_Index_Cast_Member_Img_Small{
  width: 100%;
  
  /* height: 100%; */
  /* position: absolute;
  top: 0;
  left: 0; */
}
.The_Index_Cast_Name_Small{
  display: inline-block;
  background: #000000;
  color: #ffffff;
  font-size: 80px;
  /* position: absolute;
  top: 0;
  left: 40%; */
  font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
}
.The_Index_Cast_Role_Small{
  display: inline-block;
  font-size: 48px;
  background: #ffffff;
  /* letter-spacing: -20px; */
  /* position: absolute;
  top: 0;
  left: 40%; */
  font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
}
.The_Index_Cast_Message_Small{
  display: block;
  /* width: 50%; */
  font-size: 16px;
  background: #ffffff;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
  /* position: absolute;
  bottom: 0;
  right: 0; */
  margin-top: 0;
  padding: 20px 20px;
}




.TheIndex_Ticket{
  background: #04abff;
  padding: 80px 120px;
}
.TheIndex_Ticket_Header{
  font-family: din-2014, sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #ffffff;
}
.TheIndex_Ticket_Countainer{
  margin-bottom: 40px;
  margin-right: 24px;
}
.TheIndex_Ticket_Date{
  font-size: 60px;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
  color: #ffffff;
}
.TheIndex_Ticket_Day{
  font-size: 24px;
  position: relative;
  top: -2px;
}
.TheIndex_Ticket_Name{
  display: inline-block;
  font-size: 56px;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
  transition: 0.6s;
  background: #ff1e26;
  color: #ffffff;
  margin-top: 12px;
}
.TheIndex_Ticket_Name_White{
  background: #ffffff;
  color: #000000;
   font-size: 40px;
}
.TheIndex_Ticket_Name_Black{
  background: #000000;
  color: #ffffff;
  font-size: 40px;
}

.TheIndex_Ticket_Text{
  margin-top: 24px;
  font-size: 28px;
  color: #ffffff;
}
.TheIndex_Ticket_Link{
  position: relative;
  top: -4px;
  margin-top: 12px;
  font-size: 32px;
  color: #ffffff;
  background: #ff1e26;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  box-sizing: content-box;
  font-size: 20px;
  /* border-bottom: solid 8px #d1151b; */
  box-shadow: 0 8px 0 #d1151b;
  transition: none;
  margin-right: 12px;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 1.0); */
}
.TheIndex_Ticket_Link:hover{
  box-shadow: 0 4px 0 #d1151b;
  top: 0px;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 1.0); */
}
.TheIndex_Ticket_Link_Blue{
  background: #008fd6;
  box-shadow: 0 8px 0 #0074ad;
}
.TheIndex_Ticket_Link_Blue:hover{
  box-shadow: 0 4px 0 #0074ad;
  top: 0px;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 1.0); */
}
.TheIndex_Ticket_Flexbox{
  display: flex;
}
.TheIndex_Ticket_Section{
  margin-bottom: 40px;
}
.TheIndex_Ticket_Text_Small{
  color: #ffffff;
  font-size: 24px;
  margin-top: 4px;
  /* font-weight: 900; */
}
.TheIndex_Ticket_Date_Small{
  font-size: 40px;
}
.TheIndex_Ticket_Date_Small_Red{
  font-size: 40px;
  background: #ff1e26;
}

.TheIndex_Goods{
  background: #d7e5ff;
  padding: 80px 120px;
}
.TheIndex_Goods_Countainer{
  text-align: center;
  margin-bottom: 40px;
}
.TheIndex_Goods_Header{
  font-family: din-2014, sans-serif;
  font-weight: 700;
  font-style: normal;
  /* font-family: din-2014; */
  margin-bottom: 0px;
}
.TheIndex_Goods_Text{
  font-size: 28px;
}
.TheIndex_Goods_Link{
  display: inline-block;
  background: #ffffff;
  text-decoration: none !important;
  font-weight: normal;
  font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
  transition: 0.6s;
  font-size: 48px;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
}
.TheIndex_Goods_Link:hover{
  opacity: 0.6;
}


.TheIndex_Twitter{
  width: 100%;
  background: #04abff;
  padding: 80px 120px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.TheIndex_Twitter_Container{
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.TheIndex_Twitter_Tweet{
  width: 400px;
}


.TheIndex_Message{
  padding: 80px 0px;
}
.TheIndex_Message_Container{
  margin: 0 auto;
  width: 84%;
}
.TheIndex_Message_Text{
  font-size: 40px;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
  background: #000000;
  color: #ffffff;
  display: inline;
}
.TheIndex_Message_Name{
  margin-top: 20px;
  font-size: 20px;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
  color: #000000;
}

.TheIndex_Song{
  background: #d7e5ff;
  padding-top: 40px;
  padding-bottom: 40px;
}
.TheIndex_Song_Text{
  color: #000000;
  text-align: center;
  font-size: 80px;
  font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;;
}
.TheIndex_Song_Text_Small{
  font-size: 48px;
}
.TheIndex_Song_Img{
  width: 800px;
  display: block;
  margin: 0 auto;
}

.TheIndex_Staff{
  /* background: #c4c4c4; */
  background: #d1d1d1;
  padding-top: 60px;
  padding-bottom: 60px;
}
.TheIndex_Staff_Header{
  font-family: din-2014, sans-serif;
  font-weight: 700;
  font-style: normal;
  font-size: 60px;
  margin-bottom: 24px;
  color: #000000;;
}
.TheIndex_Staff_Header_Jp{
  font-size: 32px;
  font-weight: 500;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
}
.TheIndex_Staff_Staff_Container{
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 auto;
}
.TheIndex_Staff_Member{
  text-align: left;
  margin-bottom: 40px;
  width: 380px;
  /* height: 160px; */
  color: #000000;
  transition: 0.2s;
  display: block;
  font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;;
}
.TheIndex_Staff_Member:hover{
  opacity: 0.6;
}
.TheIndex_Staff_Member_Role{
  display: inline-block;
  background: #ffffff;
  font-size: 28px;
  letter-spacing: -2px;
  margin-bottom:12px;
}
.TheIndex_Staff_Member_Role_Small{
  font-size: 20px;
  letter-spacing: -2px;
  margin-bottom:20px;
}
.TheIndex_Staff_Member_Name{
  display: inline-block;
  background: #d7e5ff;
  font-size: 60px;
}
.TheIndex_Staff_Member_Name_Small{
  font-size: 48px;
}




.TheIndex_Sns{
  background: #f9f9f9;
  padding: 40px 0px;
}
.TheIndex_Sns_Container{
  margin: 0 auto;
  display: flex;
  width: 400px;
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
  background: #d7e5ff;
  padding-top: 60px;
  padding-bottom: 60px;
}


.TheIndex_Header_Jp{
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
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
  /* align-content: center; */
  height: auto;
  align-items: flex-start;
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
  .TheIndex_Twitter_Container{
    width: 100%;
  }
  .TheIndex_Twitter_Tweet{
    width: 360px;
  }
  .TheIndex_Ticket_Section{
    margin-bottom: 40px;
  }
  .TheIndex_Ticket_Name{
    font-size: 28px;
    /* margin-right: 12px; */
  }
  .TheIndex_Ticket_Link{
    font-size: 12px;
  }
  .TheIndex_Message_Text{
    font-size: 24px;
  }
  .The_Index_Cast_Message{
    /* font-size: 10px;
    margin-top: 4px; */
    /* margin-top: 8px; */
    display: none;
  }
  .The_Index_Cast_Message_Sp{
  /* display: block; */
  /* width: 50%; */
  font-size: 20px;
  background: #ffffff;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
  /* position: absolute;
  bottom: 0;
  right: 0; */
  margin-top: 0px;
  padding: 8px 8px;
  display: block;
}
  .The_Index_Cast_Name{
    font-size: 80px;
  }
  .The_Index_Cast_Name_Small{
    font-size: 48px;
  }
  .The_Index_Cast_Role_Small{
    font-size: 24px;
  }
  /* .TheIndex_Nav{
    padding: ;
  } */
  .TheIndex_Cast{
    padding: 80px 60px;
  }
  .TheIndex_Ticket{
     padding: 80px 60px;
  }
  .TheIndex_Copy{
    padding: 80px 60px;
  }
}
@media screen and (max-width: 768px) {
  .TheIndex_Header{
    font-size: 48px;
  }
  .TheIndex_Information_Text{
    font-size: 48px;
  }
  .TheIndex_Ticket_Flexbox{
    display: block;
  }
   .TheIndex_Ticket_Section{
    margin-bottom: 60px;
  }
  .TheIndex_Ticket_Countainer{
    margin-bottom: 20px;
  }
  .TheIndex_Twitter_Tweet{
    width: 100%;
  }
  .TheIndex_Message_Text{
    font-size: 18px;
  }
  .TheIndex_Song_Text_Small{
    font-size: 32px;
  }
  .TheIndex_Song_Text{
    font-size: 40px;
  }
  .TheIndex_Staff_Member{
    width: 280px;
  }
  .TheIndex_Staff_Member_Role{
    font-size: 20px;
  }
  .TheIndex_Staff_Member_Role_Small{
    font-size: 14px;
  }
  .TheIndex_Staff_Member_Name{
    font-size: 40px;
  }
  .TheIndex_Cast{
    padding: 80px 60px;
  }
  .TheIndex_Ticket{
     padding: 80px 60px;
  }
  .TheIndex_Copy{
    padding: 80px 60px;
  }
  .The_Index_Cast_Name{
    font-size: 60px;
  }
  .The_Index_Cast_Name_Small{
    font-size: 40px;
  }
  .The_Index_Cast_Role_Small{
    font-size: 24px;
  }
}
@media screen and (max-width: 480px) {
  .TheIndex_Text{
    font-size: 16px;
  } 
  .TheIndex_Contact_MailLink{
    font-size: 20px;
  }
  .TheIndex_Header{
    font-size: 28px;
    margin-bottom: 12px;
  }
  .TheIndex_Header_Jp{
    font-size: 16px;
  }

  .TheIndex_Copy{
    padding: 40px 20px;
  }
  .TheIndex_Copy_Flexbox{
    display: block;
    /* flex-wrap: wrap; */
  }
  .TheIndex_Copy_Youtube{
    width: 100%;
    height: 280px;
    margin-top: 40px;
  }
  .TheIndex_Copy_Text_Container{
    width: 100%;
  }
  .TheIndex_Copy_Text{
    font-size: 16px;
  }

  .TheIndex_Cast{
  background: #d7e5ff;
  padding: 40px 20px;
  }
  .TheIndex_Cast_Text{
    font-size: 16px;
  }
  .The_Index_Cast_Member_Countainer{
    width: 60%;
  }
  .The_Index_Cast_Member{
    margin-top: 20px;
    /* height: 320px; */
  }
  .The_Index_Cast_Name{
    font-size: 28px;
  }
  .The_Index_Cast_Role{
    font-size: 20px;
  }
  .The_Index_Cast_Message{
    /* font-size: 10px;
    margin-top: 4px; */
    /* margin-top: 8px; */
    display: none;
  }
  .The_Index_Cast_Member_Small{
    width: 47%;
  }
  .The_Index_Cast_Name_Small{
    font-size: 16px;
  }
  .The_Index_Cast_Role_Small{
    font-size: 16px;
  }
  .The_Index_Cast_Message_Small{
    font-size: 10px;
    margin-top: 4px;
    padding: 8px;
  }
  .The_Index_Cast_Message_Sp{
  /* display: block; */
  /* width: 50%; */
  font-size: 10px;
  background: #ffffff;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
  /* position: absolute;
  bottom: 0;
  right: 0; */
  margin-top: 0px;
  padding: 8px 8px;
  display: block;
}

  .TheIndex_Twitter{
    padding: 40px 20px;
  }
  .TheIndex_Message{
    padding: 40px 20px;
  }
  .TheIndex_Staff{
    padding: 40px 0px;
  }
  .TheIndex_Goods_Header{
    margin-bottom: 0px;
  }
  .TheIndex_Goods{
    padding: 40px 0px;
    padding-bottom: 1px;
  }
  .TheIndex_Goods_Link{
    margin-top: 8px;
    font-size: 28px;
  }
  .TheIndex_Ticket{
    padding: 40px 20px;
  }
  .TheIndex_Information{
    padding: 40px 20px;
  }
  .TheIndex_Information_Header{
    font-size: 28px;
  }
  .TheIndex_Information_Text{
    font-size: 32px;
  }
  .TheIndex_Information_Text_Small{
    font-size: 24px;
  }

  .TheIndex_Ticket_Link{
    padding: 4px 8px;
    box-shadow: 0 4px 0 #d1151b;
  }
  .TheIndex_Ticket_Link_Blue{
    box-shadow: 0 4px 0 #0074ad;
  }
  .TheIndex_Ticket_Date{
    font-size: 40px;
  }
  .TheIndex_Ticket_Text{
    font-size: 16px;
  }
  .TheIndex_Ticket_Date_Small{
    font-size: 28px;
  }
  .TheIndex_Ticket_Date_Small_Red{
    font-size: 28px;
  }



  .TheIndex_Twitter_Container{
    width: 100%;
  }

  .TheIndex_Message_Container{
    width: 100%;
  }
  .TheIndex_Message_Text{
    font-size: 20px;
  }
  .TheIndex_Message_Name{
    font-size: 14px;
  }
  


  .TheIndex_Song_Text_Small{
    font-size: 20px;
  }
  .TheIndex_Song_Text{
    font-size: 28px;
  }

  .TheIndex_Staff_Header{
    font-size: 28px;
  }
  .TheIndex_Staff_Header_Jp{
    font-size: 16px;
  }
  .TheIndex_Staff_Member{
    width: 140px;
    margin-bottom: 20px;
  }
  .TheIndex_Staff_Member_Role{
    font-size: 12px;
    margin-bottom: 4px;
  }
  .TheIndex_Staff_Member_Name{
    font-size: 20px;
  }

  .TheIndex_Sns_Container{
    width: 280px;
  }
  .TheIndex_Sns_Img{
    width: 60px;
  }
  .TheIndex_Nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 32px;
  /* background: #d7e5ff; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 10;
}
.TheIndex_Nav_Img{
  height: 32px;
  margin-right: 12px;
}
.TheIndex_Nav_Item{
  font-size: 14px;
  color: #000000;
  text-decoration: none;
  display: block;
  margin-right: 8px;
  font-weight: 900;
  transition: 0.2s;
}
.TheIndex_Ticket_Section{
  margin-bottom: 20px;
}
.TheIndex_Ticket_Text_Small{
  font-size: 16px;
}
.TheIndex_Ticket_Text{
  margin-top: 12px;
}
}
@media screen and (max-width: 320px) {
  .TheIndex_Nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 32px;
  /* background: #d7e5ff; */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 10;
}
.TheIndex_Nav_Img{
  height: 32px;
  margin-right: 12px;
}
.TheIndex_Nav_Item{
  font-size: 12px;
  color: #000000;
  text-decoration: none;
  display: block;
  margin-right: 8px;
  font-weight: 900;
  transition: 0.2s;
}
.TheIndex_Ticket_Date{
  font-size: 32px;
}
.TheIndex_Ticket_Date_Small{
  font-size: 24px;
}
.TheIndex_Ticket_Name{
  font-size: 24px;
}
.TheIndex_Ticket_Text{
  font-size: 12px;
}
.TheIndex_Ticket_Text_Small{
  font-size: 14px;
}
.TheIndex_Staff_Member{
  width: 120px;
}
}
</style>
