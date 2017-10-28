var replacementAd = `
<style>
#change {
  height: 50vh;
  width: 100vw;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -o-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  background: #fff;
  font-size: 16px;
  font-family: 'proxima nova', 'open sans', 'Helvetica', sans-serif;
}
.Marquee {
  background: -webkit-linear-gradient(225deg, #f5f5f5, #f5f5f5);
  background: -moz-linear-gradient(225deg, #f5f5f5, #f5f5f5);
  background: -o-linear-gradient(225deg, #f5f5f5, #f5f5f5);
  background: -ms-linear-gradient(225deg, #f5f5f5, #f5f5f5);
  background: linear-gradient(-135deg, #f5f5f5, #f5f5f5);
  width: 85vw;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 1em;
  color: #fff;
  font-weight: 200;
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  overflow: hidden;
}
.Marquee-content {
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  -webkit-animation: marquee 10s linear infinite running;
  -moz-animation: marquee 10s linear infinite running;
  -o-animation: marquee 10s linear infinite running;
  -ms-animation: marquee 10s linear infinite running;
  animation: marquee 10s linear infinite running;
}
.Marquee-content:hover {
  -webkit-animation-play-state: paused;
  -moz-animation-play-state: paused;
  -o-animation-play-state: paused;
  -ms-animation-play-state: paused;
  animation-play-state: paused;
}
.Marquee-tag {
  width: 400px;
  height: 150px;
  margin: 0 0.5em;
  padding: 0.5em;
  display: -webkit-inline-box;
  display: -moz-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-box;
  display: inline-flex;
  -webkit-box-align: center;
  -moz-box-align: center;
  -o-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
  -webkit-box-pack: center;
  -moz-box-pack: center;
  -o-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-transition: all 0.2s ease;
  -moz-transition: all 0.2s ease;
  -o-transition: all 0.2s ease;
  -ms-transition: all 0.2s ease;
  transition: all 0.2s ease;
}

img.c {
  height: 150px;
}
.Marquee-tag:hover {
  background: rgba(255,255,255,0.5);
  -webkit-transform: scale(1.1);
  -moz-transform: scale(1.1);
  -o-transform: scale(1.1);
  -ms-transform: scale(1.1);
  transform: scale(1.1);
  cursor: pointer;
}
@-moz-keyframes marquee {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -o-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }
}
@-webkit-keyframes marquee {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -o-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }
}
@-o-keyframes marquee {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -o-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }
}
@keyframes marquee {
  0% {
    -webkit-transform: translateX(0);
    -moz-transform: translateX(0);
    -o-transform: translateX(0);
    -ms-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translate(-50%);
    -moz-transform: translate(-50%);
    -o-transform: translate(-50%);
    -ms-transform: translate(-50%);
    transform: translate(-50%);
  }
}

</style>

<div id="change">



  <div class="Marquee">
  <div class="Marquee-content">

    <div class="Marquee-tag">
    <img class="c" src="https://i.imgur.com/IdfwKxD.gif">
    <img class="c" style="background-color:white" src="https://imgur.com/TNCnXvB.gif">
    </div>

    <div class="Marquee-tag">
    <img class="c" style="background-color:white" src="https://i.imgur.com/hHrUBEY.gif">
        <img class="c" style="background-color:white" src="https://imgur.com/OdtKu9Z.gif">
    </div>

    <div class="Marquee-tag">
    <img class="c" style="background-color:white" src="https://imgur.com/5lZBKsb.gif">
        <img class="c" style="background-color:white" src="https://imgur.com/LKINmfQ.gif">
    </div>


  </div>
</div>
    <script>
    function getElements(className) {
      return document.getElementsByClassName(className);
    }
    const content = getElements('Marquee-content');
    const container = getElements('Marquee');
    const contentWidth = content[0].offsetWidth;
    const containerWidth = container[0].offsetWidth;
    </script>
`;

//yahoo, yahoo, sfgate, sfgate, amazon,
var div = document.createElement( 'div' );
div.innerHTML = replacementAd;
var siteID = 'main';

// for(var i = 0; i < siteIDs.length; i++){
    // if(document.getElementById(siteID) !== null){
        document.getElementById(siteID).appendChild(div);
    // }
// }
