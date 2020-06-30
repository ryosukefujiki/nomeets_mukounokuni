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
    <!-- <Glitch class="TheIndex_Hero"></Glitch> -->

    <div class="TheIndex_Hero">
      <!-- <h1 class="TheIndex_Hero_Dummy_Text">KEY VISUAL</h1> -->
      <img :src="heroLogoImg" alt="" class="TheIndex_Hero_Img_Logo">
      <img :src="heroCopyImg" alt="" class="TheIndex_Hero_Img_Copy">
      <img :src="heroDateImg" alt="" class="TheIndex_Hero_Img_Date">
      <div class="The_Hero_Title_Flexbox">
        <img :src="heroTitleImg" alt="" class="TheIndex_Hero_Img_Title">
      </div>
      <img :src="keyVisualImg_Sp" alt="" class="TheIndex_Hero_Img_Sp">
      <img :src="keyVisualImg" alt="" class="TheIndex_Hero_Img">

      <!-- <v-lazy-image  class="TheIndex_Hero_Img" :src="keyVisualGif" :src-placeholder="keyVisualImg" /> -->
    </div>
    <div class="TheIndex_Copy" id="about">
      <!-- <h1 class="TheIndex_Hero_Dummy_Text">COPY</h1> -->
      <div class="TheIndex_Copy_Flexbox">
        <div class="TheIndex_Copy_Text_Container">
          <img :src="copyImg" alt="" class="TheIndex_Copy_Img">
          <p class="TheIndex_Copy_Text">
            現実世界のつながりを絶たれた時代が終わろうとしていた。<br>
            多くの人は喜んで太陽の下へと駆け出したが、<br class="Sp_Brank">
            ”むこうのくに”に残ることを選んだ人もいた。<br>
            <br>
            そこは、画面を一枚隔てれば、<br class="Sp_Brank">
            生まれた場所や話す言葉、ヒトかどうかさえも関係ない、<br class="Sp_Brank">
            現実のしがらみが無効化された世界。<br>
            <br>
            その夏、ぼくは相変わらず画面の前にいて、<br class="Sp_Brank">
            ”むこうのくに”へアクセスしようとしていた。<br>
            <br>
            <span class="TheIndex_Copy_Text_Big">
            劇団ノーミーツ　第二回長編公演<br>
            「むこうのくに」開演</span>
          </p>
          <!-- <img :src="copyTitleImg" alt="" class="TheIndex_Copy_Text_Img"> -->
        </div>
        <!-- <youtube ref="youtube" :video-id="videoId" class="TheIndex_Copy_Youtube" /> -->
        <img :src="aboutImg" alt="" class="TheIndex_Copy_BuildingImg">
        <!-- <iframe class="TheIndex_Copy_Youtube" data-src="https://www.youtube.com/embed/Zu9r-7uZfas" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->
      </div>
      <!-- <youtube ref="youtube" :video-id="videoId" class="TheDetail_Category_Movie"/> -->

    </div>

    <div class="TheIndex_Information">
      <!-- <div class="TheIndex_Information_Contents">
        <h3 class="TheIndex_Information_Header">再公演日</h3>
        <p class="TheIndex_Information_Text"><span class="Color_Yellow">5.31</span> <span class="TheIndex_Information_Text_Small">日</span>　18:00</p>
      </div> -->
      <div class="TheIndex_Information_Contents">
        <h3 class="TheIndex_Information_Header">公演日程</h3>
        <p class="TheIndex_Information_Text"><span class="Color_Yellow">7.23</span> <span class="TheIndex_Information_Text_Small">木</span> 昼公演：14:00 <span class="TheIndex_Information_Text_Small">(開場13:30)</span> / 夜公演：20:00<span class="TheIndex_Information_Text_Small"> (開場19:30)</span></p>
        <p class="TheIndex_Information_Text"><span class="Color_Yellow">7.24</span> <span class="TheIndex_Information_Text_Small">金</span> 昼公演：14:00 <span class="TheIndex_Information_Text_Small">(開場13:30)</span> / 夜公演：20:00<span class="TheIndex_Information_Text_Small"> (開場19:30)</span></p>
        <p class="TheIndex_Information_Text"><span class="Color_Yellow">7.25</span> <span class="TheIndex_Information_Text_Small">木</span> 昼公演：14:00 <span class="TheIndex_Information_Text_Small">(開場13:30)</span> / 夜公演：20:00<span class="TheIndex_Information_Text_Small"> (開場19:30)</span></p>
        <p class="TheIndex_Information_Text"><span class="Color_Yellow">7.26</span> <span class="TheIndex_Information_Text_Small">金</span> 昼公演：14:00 <span class="TheIndex_Information_Text_Small">(開場13:30)</span> / 夜公演：20:00<span class="TheIndex_Information_Text_Small"> (開場19:30)</span></p>
      </div>
      <!-- <div class="TheIndex_Information_Contents">
        <h3 class="TheIndex_Information_Header Color_Blue">場所</h3>
        <p class="TheIndex_Information_Text"> <span class="Color_Blue">Zoom</span> にて生配信上映</p>
      </div> -->
    </div>

     <div class="TheIndex_Cast" id="cast">
      <h2 class="TheIndex_Text TheIndex_Header">CAST <span class="TheIndex_Header_Jp">キャスト</span></h2>
      <p class="TheIndex_Cast_Text">メインキャストは劇団ノーミーツの出演俳優を除き、 ZOOM上でのオーディションにより400名を超える応募者の中から選出。</p>
      <div class="The_Index_Cast_Flexbox">
        <a class="The_Index_Cast_Member" href="" target="_blank">
          <img :src="castImg01" alt="" class="The_Index_Cast_Member_Img">
          <div class="The_Index_Cast_Member_Countainer">
            <div>
              <p class="The_Index_Cast_Name">竹田光稀</p>
            </div>
             <div><p class="The_Index_Cast_Role" id="myText">マナブ役</p></div>
            
             <div><p class="The_Index_Cast_Message">
              はじめまして。今回、マナブ役を演じさせていただく竹田光稀と申します。時代が大きく変わっていくこの時期に、何かがきっかけで少しでも前向きに皆様が生活できるように。そう願いながら、自分自身もこの作品とともに精進していきます。観ていただいた方に観て良かったと思っていただけるよう、全力で頑張りますので、よろしくお願いいたします。
              </p></div>
          </div>
          <div><p class="The_Index_Cast_Message_Sp">
             はじめまして。今回、マナブ役を演じさせていただく竹田光稀と申します。時代が大きく変わっていくこの時期に、何かがきっかけで少しでも前向きに皆様が生活できるように。そう願いながら、自分自身もこの作品とともに精進していきます。観ていただいた方に観て良かったと思っていただけるよう、全力で頑張りますので、よろしくお願いいたします。
              </p></div>
        </a>
        <a class="The_Index_Cast_Member" href="" target="_blank">
          <img :src="castImg02" alt="" class="The_Index_Cast_Member_Img">
          <div class="The_Index_Cast_Member_Countainer">
            <div>
              <p class="The_Index_Cast_Name">尾崎由香</p>
            </div>
             <div><p class="The_Index_Cast_Role">スズ役</p></div>
            
             <div><p class="The_Index_Cast_Message">
              スズ役を演じます、尾崎由香です。今回出演が決定したことを聞いた時は、本当に驚きました！オーディションの時、リモートに慣れていなく、目の当たりにしたリモートでのお芝居に衝撃を受けたのを覚えています。リモート演劇は、新しい可能性が沢山詰まっていてワクワクしますし、まだ経験のない私は本当に0からスタートです！私がオーディションで体感した衝撃を、観劇して頂く多くの方にも感じて頂けるよう、この夏全力で頑張ります。自分自身も楽しみたいですし、観ていただく皆さんにも楽しんでいただきたいです！
              </p></div>
          </div>
           <div><p class="The_Index_Cast_Message_Sp">
              スズ役を演じます、尾崎由香です。今回出演が決定したことを聞いた時は、本当に驚きました！オーディションの時、リモートに慣れていなく、目の当たりにしたリモートでのお芝居に衝撃を受けたのを覚えています。リモート演劇は、新しい可能性が沢山詰まっていてワクワクしますし、まだ経験のない私は本当に0からスタートです！私がオーディションで体感した衝撃を、観劇して頂く多くの方にも感じて頂けるよう、この夏全力で頑張ります。自分自身も楽しみたいですし、観ていただく皆さんにも楽しんでいただきたいです！
              </p></div>
        </a>
        <a class="The_Index_Cast_Member" href="" target="_blank">
          <img :src="castImg03" alt="" class="The_Index_Cast_Member_Img">
          <div class="The_Index_Cast_Member_Countainer">
            <div>
              <p class="The_Index_Cast_Name">イトウハルヒ</p>
            </div>
             <div><p class="The_Index_Cast_Role">コトリ役</p></div>
             <div><p class="The_Index_Cast_Message">
              はじめまして。コトリ役を演じさせていただきます、イトウハルヒです。今回の物語はオンライン上でのコミュニケーションが多くなった私たちに起こるかもしれない未来…。みなさんに想像して楽しんでいただけるよう、精一杯がんばります。よろしくお願いいたします！
              </p></div>
          </div>
          <div><p class="The_Index_Cast_Message_Sp">
              はじめまして。コトリ役を演じさせていただきます、イトウハルヒです。今回の物語はオンライン上でのコミュニケーションが多くなった私たちに起こるかもしれない未来…。みなさんに想像して楽しんでいただけるよう、精一杯がんばります。よろしくお願いいたします！
              </p></div>
        </a>

         <div class="The_Index_Cast_Flexbox">
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="" target="_blank">
            <img :src="castImg04" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">オツハタ</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">ゲン役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
                  皆様、こんにちは。劇団ノーミーツのオツハタと申します。名前を聞き間違えられやすく、また読み間違えられやすいため、カタカナの芸名にしました。絶対に絶対に今やる価値のある公演です。今観る価値ある公演だったとお客様に感じてもらえるよう、精一杯演じます。みなさまの毎日が、健やかなものでありますように！
            </p></div>
          </a>
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="" target="_blank">
            <img :src="castImg05" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small The_Index_Cast_Name_Small_Group">アバンティーズ</p><br>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">そら</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">ソウスケ役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">皆さん初めまして、アバンティーズのそらと言います。実は、あまり知られていませんが大学時代は演劇を専攻していました。しかし、演劇にしっかりと携わるのは今回が初めてです（笑）YouTube黎明期からネットと密に生きてきた僕だからこそ、この作品で濃く強く輝く瞬間があると思っています。よろしくお願いします。
            </p></div>
          </a>
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="" target="_blank">
            <img :src="castImg06" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">大山実音</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">マミ役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
               オンライン舞台という全く新しいエンターテインメントに、胸が躍って眠れません！画面を通して、観てくださっている皆さんの心に何か変化を与えることができたなら…そんな思いで劇団の仲間と「むこうのくに」を創りあげたいと思います！
            </p></div>
          </a>
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="" target="_blank">
            <img :src="castImg07" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">出口晴臣</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">タイチ役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
                初めまして！出口晴臣です。劇団ノーミーツさんの作品は最初からずっと拝見していたので、出演する側で関われること光栄です。今回初めて演劇に出演するので、自分にとって一生忘れない大切な作品になると思います。若輩者ですが、やる気は誰にも負けないつもりなので、沢山吸収して、その分、自分の持つエネルギーを全部ぶつけたいと思います。精一杯頑張ります！自粛期間中に、劇団ノーミーツさんの作品を観て自分が勇気をもらったように、誰かの気持ちを動かせればと思います。よろしくお願いします！
            </p></div>
          </a>
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="" target="_blank">
            <img :src="castImg08" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">めがね</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">DJめがね役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
            DJめがね役を演じさせていただきます！めがねです！ノーミーツさんをSNSで初めて見た時、体の中にオモシロ衝撃がズドーンと走り、すぐに自分のYouTubチャンネルの動画に落とし込んで、「リモート会議」という作品を作ってしまいました。そんな新しい演劇を見せてくれるノーミーツさんの「むこうの国」。まだどんな役になるかは想像しきれていないですが、ノーミーツ色に染まって、みんなの体の中にズドーンと衝撃が走る演者になることをここに誓います。
            </p></div>
          </a>
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="" target="_blank">
            <img :src="castImg09" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small The_Index_Cast_Name_Small_Group">演劇集団キャラメルボックス</p><br>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">鍛治本大樹</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">バトラー役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
                コロナ禍で活動を制限された演劇界。何も出来ない自分が悔しかったです。そんな中、いち早くオンライン演劇という新しい可能性を見つけ出して表現した劇団ノーミーツさんに衝撃を受けました。そもそも演劇は制限があってなんぼ。それを面白がれるかが演劇を面白くする要素の一つだと改めて気付かせてくれました。今回一緒にたくさん面白がって新しい演劇をまた一つ作りたいと思っています。
            </p></div>
          </a>
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="" target="_blank">
            <img :src="castImg10" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">河内美里</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">ピコ役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
                ピコ役で出演させて頂きます、河内美里です。劇団ノーミーツさんの第2回公演、私自身も作品の一部として関わらせて頂けることにドキドキワクワクしております。"NO蜜で濃密なひととき"をより多くの方に体験して頂けますように、丁寧に物語を紡いでいきたいと思います。ぜひ、上演を楽しみに待っていて下さい！
            </p></div>
          </a>
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="" target="_blank">
            <img :src="castImg11" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">青山郁代</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">議員役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
              STAY HOMEの中、どうか俳優として生きさせてくださいと願った。あの日、パソコンの画面ごしにオーディション応募ボタンをポチッとした私の人差し指を、よしよしと撫で回して褒めたい。でかした！と。劇団ノーミーツさんとの出逢いは、あまりに味わい深く刺激的で、それはもう言うなれば＜蜜＞で＜密＞だ。「オンラインであることを、容赦しない」本番パソコンの画面に向かい、俳優として生きる。濃蜜で濃密な２０２０年夏を、生きる。
            </p></div>
          </a>
           <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="" target="_blank">
            <img :src="castImg12" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                 <p class="The_Index_Cast_Name The_Index_Cast_Name_Small The_Index_Cast_Name_Small_Group">柿喰う客</p><br>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">淺場万矢</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">議員役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
              新型コロナの渦中ではありますが、そんな機会でもなければ、出会えなかったかもしれない皆様との創作は、まさに奇跡です。濃厚なメンバーでお送りする、濃密な時間。お客様に存分にお楽しみいただければ幸いです。
            </p></div>
          </a>
           <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="" target="_blank">
            <img :src="castImg13" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">水石亜飛夢</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">秘書役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
              またご一緒させていただけることを素直に嬉しく思います！常にチャレンジを続け、リモートの可能性を信じられないくらい広げてゆく劇団ノーミーツさん。新たな演劇（Live）の形を、素敵な皆さまと探っていける日々に胸が躍ります。今回も皆さんの想像を遥かに超えてゆくはず。楽しみにしていてください。
            </p></div>
          </a>
          <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="" target="_blank">
            <img :src="castImg14" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">渡辺芳博</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small">刑事役</p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
              zoomによるリモートオーディションでの一言。「リモートにはリモートの演技があり、劇団ノーミーツではそれを追求していきたい」画面越しに語りかけられたこの一言にシビれました。ガジェット、ネットの進歩に四苦八苦する中年の役柄同様に、画面に向かって四苦八苦するであろう自分。楽しみに満ち満ちた挑戦です。劇団ノーミーツの追求を共にできることに感謝。そして是非、この追求を見つめに来てください。
            </p></div>
          </a>
           <a class="The_Index_Cast_Member The_Index_Cast_Member_Small" href="" target="_blank">
            <img :src="castImg15" alt="" class="The_Index_Cast_Member_Img The_Index_Cast_Member_Img_Small">
            <div class="The_Index_Cast_Member_Countainer The_Index_Cast_Member_Countainer_Small">
              <div>
                <p class="The_Index_Cast_Name The_Index_Cast_Name_Small">安藤聡海</p>
              </div>
              <div><p class="The_Index_Cast_Role The_Index_Cast_Role_Small Letter_Spacing">リィン・カーネーション<span class="Letter_Spacing_Out">役</span></p></div>
            </div>
            <div><p class="The_Index_Cast_Message_Small">
              この作品は私にとっておそらく挑戦的なことが多く、だからこそ今からとてもワクワクしています。キャスト・スタッフの全員力で、オンライン演劇ならではの、今までにない体験をお届けできたらと思います。楽しみにしていてください！！
            </p></div>
          </a>

         

        

      

         </div>

      </div>
    </div>
    <div class="TheIndex_Ticket" id="ticket">
      <h2 class="TheIndex_Text TheIndex_Header TheIndex_Ticket_Header">TICKET <span class="TheIndex_Header_Jp">チケット情報</span></h2>
      <div class="TheIndex_Ticket_Section">
        <div class="TheIndex_Ticket_Countainer">
          <div><h4 class="TheIndex_Ticket_Name">先行限定</h4></div>
          <p class="TheIndex_Ticket_Text_Small">＊先行チケット限定の特典付き</p>
          <p class="TheIndex_Ticket_Text">
          <a href="https://mukounokuni.peatix.com/" class="TheIndex_Ticket_Link" target="_blank">購入ページへ</a>
            2200円（1000枚限定）
          </p>
        </div>
        <div class="TheIndex_Ticket_Flexbox">
           <div class="TheIndex_Ticket_Countainer">
          <div><h4 class="TheIndex_Ticket_Name TheIndex_Ticket_Name_White">一般チケット</h4></div>
          <p class="TheIndex_Ticket_Text_Small">＊近日OPEN</p>
          <p class="TheIndex_Ticket_Text">
          <a href="https://mukounokuni.peatix.com/" class="TheIndex_Ticket_Link TheIndex_Ticket_Link_Blue" target="_blank">購入ページへ</a>
            2800円
          </p>
          </div>
          <div class="TheIndex_Ticket_Countainer">
            <div><h4 class="TheIndex_Ticket_Name TheIndex_Ticket_Name_Black">RT割引チケット</h4></div>
            <p class="TheIndex_Ticket_Text_Small">＊近日OPEN</p>
            <p class="TheIndex_Ticket_Text">
            <a href="https://mukounokuni.peatix.com/" class="TheIndex_Ticket_Link TheIndex_Ticket_Link_Blue" target="_blank">購入ページへ</a>
              2500円
            </p>
          </div>
          <div class="TheIndex_Ticket_Countainer">
            <div><h4 class="TheIndex_Ticket_Name TheIndex_Ticket_Name_Black">U18割引チケット</h4></div>
            <p class="TheIndex_Ticket_Text_Small">＊近日OPEN</p>
            <p class="TheIndex_Ticket_Text">
            <a href="https://mukounokuni.peatix.com/" class="TheIndex_Ticket_Link TheIndex_Ticket_Link_Blue" target="_blank">購入ページへ</a>
              500円
            </p>
          </div>
      </div>
      <p class="TheIndex_Ticket_Text_Small">
       【『むこうのくに』公演概要】<br>
        ＜公演日＞<br>
        　2020年7月23日（木・祝）〜7月26日（日）4日間<br>
        　14:00/20:00 (全8回)<br>
        ＜場所＞<br>
        　特設サイトにてオンライン生配信上演<br>
        ＜チケット＞<br>
        　Peatixにて、7月1日12時発売開始<br>
        　https://mukounokuni.peatix.com/<br>
        　・一般チケット：¥2,800<br>
        　・先行限定チケット：¥2,200<br>
        　　※先着1,000枚限定、なくなり次第終了<br>
        　　※購入者限定生配信ライブ特典つき<br>
        　・RT割引チケット：¥2,500<br>
        　・U18チケット：¥500<br>
        ※各種チケット詳細・申込み方法はむこうのくに公式Peatixページにてご確認ください。<br>
        </p>
      </div>
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
           会わないで作る以上、<br class="Sp_Brank">
          どんなに素晴らしいチームワークで力を合わせようとも、<br class="Sp_Brank">
          画面の隔たりを超えることはできません。<br>
          それが、リモートエンタメの宿命です。<br>
          でも実は、直接会って作品を作っていた頃と、<br class="Sp_Brank">
          そんなに変わらないのかもしれないなと、最近は思います。<br>
          思い返せば同じ空間にいても、いつもなんらかの隔たりはあって、<br class="Sp_Brank">
          ものづくりというのは、その隔たりをなんとか乗り越えていこう<br class="Sp_Brank">
          とする営みのことを言うのではないか、と考えたりするのです。<br>
          今回もメンバーと直接会うことはありませんが、<br class="Sp_Brank">
          画面を超えるくらいの気持ちで心を合わせ、<br class="Sp_Brank">
          オンラインエンタメの限界、<br class="Sp_Brank">
          そのむこうがわを目指していきたいと思います。<br>
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
         <a class="TheIndex_Staff_Member" href="https://twitter.com/hiroyayuki">
           <div><p class="TheIndex_Staff_Member_Role">主宰/製作総指揮</p></div>
           <div><p class="TheIndex_Staff_Member_Name">広屋佑規</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">主宰/企画・プロデュース</p></div>
          <div><p class="TheIndex_Staff_Member_Name">林健太郎</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/KentarooH">
           <div><p class="TheIndex_Staff_Member_Role">主宰/脚本・演出</p></div>
           <div><p class="TheIndex_Staff_Member_Name">小御門優一郎</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/Ganamiii">
           <div><p class="TheIndex_Staff_Member_Role">制作・プロデュース</p></div>
           <div><p class="TheIndex_Staff_Member_Name">菅波和也</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/yuri_____flower">
           <div><p class="TheIndex_Staff_Member_Role">プロデュース・舞台監督</p></div>
           <div><p class="TheIndex_Staff_Member_Name">梅田ゆりか</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/iwsk_">
          <div><p class="TheIndex_Staff_Member_Role">よりどころ</p></div>
          <div><p class="TheIndex_Staff_Member_Name ">岩崎裕介</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
           <div><p class="TheIndex_Staff_Member_Role">俳優・演出助手</p></div>
           <div><p class="TheIndex_Staff_Member_Name">オツハタ</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/minamimag">
          <div><p class="TheIndex_Staff_Member_Role">デザイナー・宣伝美術</p></div> 
          <div><p class="TheIndex_Staff_Member_Name">目黒水海</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/suzkikenta">
          <div><p class="TheIndex_Staff_Member_Role TheIndex_Staff_Member_Role_Small">クリエイティブディレクター/コピーライター</p></div>
          <div><p class="TheIndex_Staff_Member_Name">鈴木健太</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="">
          <div><p class="TheIndex_Staff_Member_Role">テクニカルディレクター</p></div>
          <div><p class="TheIndex_Staff_Member_Name">藤原遼</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/rfuji625">
          <div><p class="TheIndex_Staff_Member_Role">UI/UXデザイナー</p></div>
          <div><p class="TheIndex_Staff_Member_Name">藤木良祐</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="">
          <div><p class="TheIndex_Staff_Member_Role">企画・宣伝</p></div>
          <div><p class="TheIndex_Staff_Member_Name">小野寺正人</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="https://twitter.com/ogiyuca">
          <div><p class="TheIndex_Staff_Member_Role">広報</p></div>
          <div><p class="TheIndex_Staff_Member_Name">オギユカ</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="">
          <div><p class="TheIndex_Staff_Member_Role">広報</p></div>
          <div><p class="TheIndex_Staff_Member_Name">さとうみずは</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="">
          <div><p class="TheIndex_Staff_Member_Role">広報</p></div>
          <div><p class="TheIndex_Staff_Member_Name ">平岡祐子</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="">
          <div><p class="TheIndex_Staff_Member_Role">スタイリスト</p></div>
          <div><p class="TheIndex_Staff_Member_Name">石塚愛理</p></div>
        </a>
         
        <!-- <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">劇伴</p></div>
          <div><p class="TheIndex_Staff_Member_Name TheIndex_Staff_Member_Name_Small">サクライケンタ</p></div>
        </a> -->
        <a class="TheIndex_Staff_Member" href="">
          <div><p class="TheIndex_Staff_Member_Role">映像ディレクター</p></div>
          <div><p class="TheIndex_Staff_Member_Name">松永つぐみ</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="">
          <div><p class="TheIndex_Staff_Member_Role">撮影監督</p></div>
          <div><p class="TheIndex_Staff_Member_Name">林大智</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">映像技術・美術</p></div>
          <div><p class="TheIndex_Staff_Member_Name">水落大</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="">
          <div><p class="TheIndex_Staff_Member_Role">技術監修</p></div>
          <div><p class="TheIndex_Staff_Member_Name">松永夏紀</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="">
          <div><p class="TheIndex_Staff_Member_Role">技術監修</p></div>
          <div><p class="TheIndex_Staff_Member_Name">鈴木健太</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="">
          <div><p class="TheIndex_Staff_Member_Role">技術監修</p></div>
          <div><p class="TheIndex_Staff_Member_Name">田中義丸</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="">
          <div><p class="TheIndex_Staff_Member_Role">AI監修</p></div>
          <div><p class="TheIndex_Staff_Member_Name">kishi yuma</p></div>
        </a>
        <a class="TheIndex_Staff_Member" href="">
          <div><p class="TheIndex_Staff_Member_Role">美術・小道具</p></div>
          <div><p class="TheIndex_Staff_Member_Name ">カミヒラ</p></div>
        </a>
         <a class="TheIndex_Staff_Member" href="">
          <div><p class="TheIndex_Staff_Member_Role">フォトグラファー</p></div>
          <div><p class="TheIndex_Staff_Member_Name">yansuKIM</p></div>
        </a>
        <!-- <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">劇伴</p></div>
           <div><p class="TheIndex_Staff_Member_Name TheIndex_Staff_Member_Name_Small">パソコン音楽クラブ</p></div>
        </a> -->
         <!-- <a class="TheIndex_Staff_Member" href="https://twitter.com/KoMIkado_21g">
          <div><p class="TheIndex_Staff_Member_Role">企画・製作</p></div>
          <div><p class="TheIndex_Staff_Member_Name TheIndex_Staff_Member_Name_Small">劇団ノーミーツ</p></div>
        </a> -->
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
      <a class="TheIndex_Text TheIndex_Contact_MailLink" href="mailto:nomeets2020@gmail.com">nomeets2020@gmail.com</a>
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
      heroCopyImg: "/home/hero_copy.png",
      heroLogoImg: "/home/hero_logo.png",
      heroDateImg: "/home/hero_date.png",
      heroTitleImg: "/home/hero_title.png",
      logoImg: "/home/logo.png",
      logoImg: "/home/logo.png",
      keyVisualImg: "/home/keyvisual.jpg",
      keyVisualImg_Sp: "/home/keyvisual_sp.jpg",
      keyVisualGif: "/home/keyvisual.gif",
      aboutImg: "/home/about_img.jpg",
      copyImg: "/home/copy.svg",
      copyTitleImg: "/home/copy_title.svg",
      castImg01: "/home/cast/cast1.jpg",
      castImg02: "/home/cast/cast2.jpg",
      castImg03: "/home/cast/cast3.jpg",
      castImg04: "/home/cast/cast4.jpg",
      castImg05: "/home/cast/cast5.jpg",
      castImg06: "/home/cast/cast6.jpg",
      castImg07: "/home/cast/cast7.jpg",
      castImg08: "/home/cast/cast8.jpg",
      castImg09: "/home/cast/cast9.jpg",
      castImg10: "/home/cast/cast10.jpg",
      castImg11: "/home/cast/cast11.jpg",
      castImg12: "/home/cast/cast12.jpg",
      castImg13: "/home/cast/cast13.jpg",
      castImg14: "/home/cast/cast14.jpg",
      castImg15: "/home/cast/cast15.jpg",
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
.Opacity{
  opacity: 0;
}
.TheIndex {
  width: 100%;
  height: 100%;
  /* min-height: 100%; */
  /* margin: 0 auto;
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.TheIndex_Nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
  width: 100%;
  height: 100%;
  background: #000000;
  position: relative;

  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* border-bottom: 6px solid #eaeaea; */
}
.TheIndex_Hero_Img{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* position: absolute;
  top: 0;
  left: 0; */
}
.TheIndex_Hero_Img_Sp{
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.The_Hero_Title_Flexbox{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.TheIndex_Hero_Img_Title{
  width: 45%;
}
.TheIndex_Hero_Img_Logo{
  width: 16%;
  position: absolute;
  bottom: 20px;
  right: 20px;
}
.TheIndex_Hero_Img_Copy{
 /* width: 20%; */
  height: 70%;
  position: absolute;
  top: 60px;
  right: 40px;
}
.TheIndex_Hero_Img_Date{
  width: 20%;
  position: absolute;
  bottom: 20px;
  left: 0px;
}
.TheIndex_Hero_Dummy_Text{
  color: #eaeaea;
  font-size: 20px;
}

.TheIndex_Copy{
  width: 100%;
  /* min-height: 100%; */
  background: #ebeef4;
  /* background: #ffffff; */
  /* display: flex;
  align-items: center;
  justify-content: center; */
  /* border-bottom: 6px solid #eaeaea; */
  padding: 20px 20px;
}
.TheIndex_Copy_Img{
  width: 80%;
  display: block;
}
.TheIndex_Copy_BuildingImg{
  width: 45%;
}
.TheIndex_Copy_Flexbox{
  /* min-width: 100%; */
  /* min-height: 100%; */
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  background: #ffffff;
  /* margin-top: 40px; */
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
  /* color: #000000; */
  color: #6E88AF;
  font-family: a-otf-ryumin-pr6n, serif;
  /* font-weight: 600;
  font-style: normal; */
  letter-spacing: 4px;
  line-height: 35px;
  font-size: 20px;
  width: 100%;
  margin-top: 40px;
}
.TheIndex_Copy_Text_Img{
  margin-top: 40px;
}

.TheIndex_Information{
  background: #ffffff;
  /* background: #D9E5FD; */
  padding: 80px 120px;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-wrap: wrap;
}
.TheIndex_Information_Contents{
  width: 960px;
  text-align: center;
  /* margin-bottom: 40px; */
}
.TheIndex_Information_Header{
  font-family: a-otf-ryumin-pr6n, serif;
  color: #ff3e72;
  /* color: #ffffff; */
  font-size: 48px;
  /* font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif; */
}
.TheIndex_Information_Text{
  /* color: #ffffff; */
  font-family: a-otf-ryumin-pr6n, serif;
  /* color: #ffffff; */
  color: #6E88AF;
  font-size: 40px;
  /* font-weight: 900; */
}
.TheIndex_Information_Text_Small{
  font-size: 24px;
}
.Color_Blue{
  color: #04abff;
}
.Color_Yellow{
  /* color: #d7e5ff; */
  color: #ff366b;
  color: #6E88AF;
}

.TheIndex_Cast{
  background: #d7e5ff;
  background: #ebeef4;
  /* background: #ffffff; */
  /* background: #ebeef4; */
  padding: 80px 120px;
}
.The_Index_Cast_Flexbox{
  width: 100%;
  height: 100%;
  justify-content: space-between;
  display: flex;
  /* align-items: center; */
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
  width: 32%;
  /* height: 80%; */
  /* margin: 0 auto; */
  margin-top: 40px;
  position: relative;
  /* transition: 0.2; */
  color: #000000;
  text-decoration: none;
  pointer-events: none;
}
.The_Index_Cast_Member:hover{
  /* opacity: 0.6; */
}
.The_Index_Cast_Member_Countainer{
  width: 100%;
  /* position: absolute;
  left: 40%;
  top: 10%; */
}
.The_Index_Cast_Member_Img{
  width: 100%;
  /* height: 600px; */
  object-fit: cover;
  /* height: 40%;
  object-fit: cover; */
  /* height: 100%; */
  /* position: absolute;
  top: 0;
  left: 0; */
}
.The_Index_Cast_Name{
  display: inline-block;
  background: #000000;
  color: #ffffff;
  font-size: 60px;
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
  /* font-family: a-otf-ryumin-pr6n, serif; */
  font-weight: 600;
  font-style: normal;
  /* position: absolute;
  bottom: 0;
  right: 0; */
  margin-top: 4px;
  padding: 20px 20px;
}
.The_Index_Cast_Message_Sp{
  /* display: block; */
  /* width: 50%; */
  font-size: 16px;
  background: #ffffff;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  /* font-family: a-otf-ryumin-pr6n, serif; */
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
  width: 23%;
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
  font-size: 48px;
  /* position: absolute;
  top: 0;
  left: 40%; */
  font-family: "游明朝", YuMincho, "Hiragino Mincho ProN W3", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
}
.The_Index_Cast_Name_Small_Group{
  font-size: 20px;
}
.The_Index_Cast_Role_Small{
  display: inline-block;
  font-size: 32px;
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

.Letter_Spacing{
  letter-spacing: -4px;
  font-size: 24px;
}
.Letter_Spacing_Out{
  letter-spacing: 0px;
}





.TheIndex_Ticket{
  /* background: #04abff; */
  background: #ffffff;
  /* padding: 20px 20px; */
   padding: 80px 120px;
}
/* .TheIndex_Ticket_Container{
  background: #d7e5ff;
  background: #ebeef4;
  background: #ffffff;
} */
.TheIndex_Ticket_Header{
  font-family: din-2014, sans-serif;
  font-weight: 700;
  font-style: normal;
  color: #000000;
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
  color: #000000;
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
  background: #ff3e72;
  color: #ffffff;
  margin-top: 12px;
}
.TheIndex_Ticket_Name_White{
  background: #9b9b9b;
  color: #ffffff;
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
  color: #000000;
}
.TheIndex_Ticket_Link{
  position: relative;
  top: -4px;
  margin-top: 12px;
  font-size: 32px;
  color: #ffffff;
  background: #ff3e72;
  padding: 12px 24px;
  border-radius: 30px;
  text-decoration: none;
  box-sizing: content-box;
  font-size: 20px;
  /* border-bottom: solid 8px #d1151b; */
  box-shadow: 0 8px 0 #dd2959;
  transition: none;
  margin-right: 12px;
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, 1.0); */
}
.TheIndex_Ticket_Link:hover{
  box-shadow: 0 4px 0 #dd2959;
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
  color: #000000;
  font-size: 24px;
  margin-top: 4px;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  /* font-family: a-otf-ryumin-pr6n, serif; */
  
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
  display: flex;
  justify-content: center;
}
.TheIndex_Message_Container{
  /* margin: 0 auto; */
  /* width: 84%; */
}
.TheIndex_Message_Text{
  font-size: 24px;
  line-height: 40px;
  /* font-family: a-otf-midashi-go-mb31-pr6n, sans-serif; */
  font-family: a-otf-ryumin-pr6n, serif;
  /* font-family: a-otf-midashi-go-mb31-pr6n, sans-serif; */
  /* font-weight: 600;
  font-style: normal; */
  /* background: #000000; */
  color: #000000;
  display: block;
  /* margin: 0 auto; */
}
.TheIndex_Message_Name{
  margin-top: 20px;
  font-size: 28px;
  font-family: a-otf-midashi-go-mb31-pr6n, sans-serif;
  font-weight: 600;
  font-style: normal;
  color: #ffffff;
  background: #000000;
  display: inline-block;
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
  /* background: #d1d1d1; */
  background: #ebeef4;
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
  font-size: 40px;
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
  width: 100%;
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
  width: 100%;
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

@media screen and (max-width: 1400px) {
  .TheIndex_Copy_Text{
    font-size: 16px;
    line-height: 24px;
  }
  .The_Index_Cast_Name{
    font-size: 48px;
  }
  .TheIndex_Hero_Img{
  display: none;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.TheIndex_Hero_Img_Sp{
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.The_Index_Cast_Name_Small_Group{
  font-size: 20px;
}
}


@media screen and (max-width: 1080px) {
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
  .TheIndex_Information{
    padding-left: 40px;
    padding-right: 40px;
  }
  .TheIndex_Information_Text{
    font-size: 32px;
  }
  .TheIndex_Ticket_Link{
    font-size: 12px;
  }
  .TheIndex_Message_Text{
    font-size: 24px;
  }
  .The_Index_Cast_Member{
    width: 100%;
  }
  .The_Index_Cast_Member_Img{
    width: 60%;
  }
  .The_Index_Cast_Member_Countainer{
    width: 50%;
    position: absolute;
    left: 50%;
    top: 10%;
  }
  .The_Index_Cast_Member_Img_Small{
    width: 100%;
  }
  .The_Index_Cast_Member_Countainer_Small{
    width: 100% !important;
    position: static;
  }
  .The_Index_Cast_Member_Small{
    width: 47%;
  }
  /* .The_Index_Cast_Role_Small{
    width: 100%;
  } */
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
    font-size: 72px;
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
    padding: 20px 20px;
  }
  .TheIndex_Copy_Flexbox{
    display: block;
    padding: 80px 12px 0px 12px;
    /* flex-wrap: wrap; */
  }
  .TheIndex_Copy_Text_Container{
    width: 70%;
    margin: 0 auto;
  }
  .TheIndex_Copy_BuildingImg{
    display: block;
    margin: 0 auto;
  }
  .TheIndex_Copy_Text{
    font-size: 20px;
    line-height: 32px;
  }
  .The_Index_Cast_Name_Small_Group{
  font-size: 20px;
}
}
@media screen and (max-width: 768px) {
  .TheIndex_Header{
    font-size: 48px;
  }
  .TheIndex_Information_Text{
    font-size: 28px;
  }
  .TheIndex_Information_Text_Small{
    font-size: 20px;
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
    padding: 20px 20px;
  }
  .TheIndex_Copy_Flexbox{
    padding-left: 0px;
    padding-right: 0px;
  }
  .TheIndex_Copy_Text_Container{
    width: 92%;
  }
  .The_Index_Cast_Name{
    font-size: 48px;
  }
  .The_Index_Cast_Name_Small{
    font-size: 40px;
  }
  .The_Index_Cast_Role_Small{
    font-size: 24px;
  }
  .The_Index_Cast_Name_Small_Group{
  font-size: 20px;
}
}
@media screen and (max-width: 480px) {
  .TheIndex_Hero_Img_Copy{
    height: 40%;
    top: 40px;
    right: 20px;
  }
  .TheIndex_Hero_Img_Logo{
    width: 32%;
  }
  .TheIndex_Hero_Img_Date{
    width: 40%;
  }
  .TheIndex_Hero_Img_Title{
    width: 60%;
  }
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
    padding: 10px 10px;
  }
  .TheIndex_Copy_Img{
    width: 100%;
    display: block;
  }
  .Sp_Brank{
    display: none;
  }
  .TheIndex_Copy_Flexbox{
    display: block;
    padding: 32px 12px 0px 12px;
    /* flex-wrap: wrap; */
  }
  .TheIndex_Copy_BuildingImg{
    width: 100%;
    /* transform:translateY(4px) */
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
    margin-top: 20px;
    font-size: 16px;
    line-height: 28px;
  }

  .TheIndex_Cast{
  background: #d7e5ff;
   background: #ebeef4;
  padding: 40px 20px;
  }
  .TheIndex_Cast_Text{
    font-size: 16px;
  }
  .The_Index_Cast_Member_Countainer{
    width: 50%;
    position: absolute;
    left: 50%;
    top: 14%;
  }
  .The_Index_Cast_Member_Countainer_Small{
    width: 100%;
    position: static;
  }
  .The_Index_Cast_Member{
    margin-top: 20px;
    /* height: 320px; */
  }
  .The_Index_Cast_Name{
    font-size: 26px;
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
    font-size: 12px;
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
    font-size: 24px;
    margin-bottom: 4px;
  }
  .TheIndex_Information_Text{
    font-size: 12px;
  }
  .TheIndex_Information_Text_Small{
    font-size: 11px;
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
    font-size: 16px;
    line-height: 30px;
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
  width: 100%;
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
.The_Index_Cast_Name_Small_Group{
  font-size: 12px;
}
}
@media screen and (max-width: 320px) {
  .TheIndex_Nav{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
.The_Index_Cast_Name{
    font-size: 20px;
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
.TheIndex_Information_Header{
  font-size: 16px;
}
.TheIndex_Information_Text{
    font-size: 10px;
  }
  .TheIndex_Information_Text_Small{
    font-size: 10px;
  }
  .The_Index_Cast_Name_Small_Group{
  font-size: 10px;
}

}
</style>
