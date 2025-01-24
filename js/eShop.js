var bagdownthenup = new Audio("/3dseshop/sfx/bag_downthenup.wav");
var eshoploadingsound = new Audio("/3dseshop/sfx/loading.wav");
eshoploadingsound.loop=true;
var eshopconnecting = new Audio("/3dseshop/bgm/eShop_Loading_BGM.mp3");
var eshopready = new Audio("/3dseshop/sfx/ready.mp3");
var bagspin = new Audio("/3dseshop/sfx/bag_spin.wav");


var eshopclickharsh = new Audio("/3dseshop/sfx/tap_down_title.wav");
var eshopclickover = new Audio("/3dseshop/sfx/tap_over_title.wav");

   // SE


   function eShopbigclick() {
    eshopclickharsh.play();
   }

   function eShopclickover() {
    eshopclickover.play();
   }

   // SE


// BGM HANDLER

const bgm_main = document.getElementById("mainbgmaudio");
const bgm_ext = document.getElementById("extrabgmaudio");


bgm_main.src= "/3dseshop/bgm/mainBGM/eshop_2019_BGM.wav";
// default 2011: eshop_2011_BGM.wav
// default 2019: eshop_2019_BGM.wav
// default 2020: eshop_2020_BGM.wav

// summer: eshop_2014summer_BGM
// christmas: eshop_2015christmas_BGM.wav
// halloween: eshop_halloween_BGM.wav


// eShop BGM

   function mainbgmplay() {
    bgm_main.play();
    higherbgm();
    lowerextbgm();
    setTimeout(pausecurrentextbgm,800);
   }

   function extbgmplay(bgmSource) {
    // hehe larsens bgm snippit
    bgm_ext.src = bgmSource;
    // hehe larsens bgm snippit
    bgm_ext.play(); 
    lowerbgm();     
    higherextbgm(); 
}

function settingsplay() {
  extbgmplay("/3dseshop/bgm/eShop_Settings_BGM.wav");
}

function wishlistplay() {
  extbgmplay("/3dseshop/bgm/eShop_wishlist_BGM.wav");
}

function ratetitlesplay() {
  extbgmplay("/3dseshop/bgm/eShop_Rating_BGM.wav");
}

function downloadplay() {
  extbgmplay("/3dseshop/bgm/eShop_Download_BGM.wav");
}

function fakeplay() {
  extbgmplay("/3dseshop/static_audio_bgm.mp3");
}

  

   function pausecurrentextbgm() {
    bgm_ext.volume=0.0;
   }


   // thanks to https://drive.google.com/drive/folders/1Wmn2z2NOA2h9Cqk_r8Q4jSu-A7eUJ5Sd?usp=drive_link for the high quality BGMS!


// BGM HANDLER


// connecting

   function startup() {
    eshopconnecting.play();
       eshoploadingsound.pause();
       document.getElementById("initialloading").style.display="none";
       document.getElementById("initialloading2").style.display="none";
   }
   function loading2initial() {
       bagspin.play();
       eshoploadingsound.pause();
       document.getElementById("loadingnotice").style.opacity="0%";
     document.getElementById("eshopbagintro").style.display="none";
     document.getElementById("eshopbagintrospin").style.display="block";
     setTimeout(connectingpage,290);
     setTimeout(hidespinnybag,200);
   }
   function hidespinnybag() {
       document.getElementById("initialloading").style.opacity="0%";
       document.getElementById("initialloading2").style.opacity="0%";
     document.getElementById("eshopbagintro").style.display="none";
     document.getElementById("eshopbagintrospin").style.display="none";
   }

   function connectingpage() {
       eshopconnecting.play();
       bagspin.pause();
       document.getElementById("initialloading").style.display="none";
       document.getElementById("initialloading2").style.display="none";
     document.getElementById("eshopbagintro").style.display="none";
     document.getElementById("eshopbagintrospin").style.display="none";
     document.getElementById("connecting").style.display="block";
     document.getElementById("connecting2").style.display="block";
     setTimeout(eshopconnected,4488);
   }

   function eshopconnected() {
    document.getElementById("preparingtext").innerText="Ready!";
    document.getElementById("preparingtext").style.marginTop="200px";
       eshopconnecting.pause();
       eshopready.play();
       document.getElementById("initialloading").style.display="none";
       document.getElementById("initialloading2").style.display="none";
     document.getElementById("eshopbagintro").style.display="none";
     document.getElementById("eshopbagintrospin").style.display="none";
     setTimeout(gotomainshop,1580);
    }
    function gotomainshop() {
      window.location.href="frontpage.html";
    }


// connecting


// frontpage


// frontpage
 

// main bgm volume handler

function lowerbgm() {
    bgm_main.volume=0.8;
    setTimeout(lowerbgm2,200);
}
function lowerbgm2() {
    bgm_main.volume=0.6;
    setTimeout(lowerbgm3,200);
}

function lowerbgm3() {
    bgm_main.volume=0.4;
    setTimeout(lowerbgm4,200);
}

function lowerbgm4() {
    bgm_main.volume=0.2;
    setTimeout(lowerbgm5,200);
}

function lowerbgm5() {
    bgm_main.volume=0.0;
}

function higherbgm() {
    bgm_main.volume=0.2;
    setTimeout(higherbgm2,200);
}
function higherbgm2() {
    bgm_main.volume=0.4;
    setTimeout(higherbgm3,200);
}

function higherbgm3() {
    bgm_main.volume=0.6;
    setTimeout(higherbgm4,200);
}

function higherbgm4() {
    bgm_main.volume=0.8;
    setTimeout(higherbgm5,200);
}

function higherbgm5() {
    bgm_main.volume=1.0;
}

// main bgm volume handler


// ext bgm volumer handler

   function lowerextbgm() {
    bgm_ext.volume=0.8;
    setTimeout(lowerextbgm2,200);
}
function lowerextbgm2() {
  bgm_ext.volume=0.6;
    setTimeout(lowerextbgm3,200);
}

function lowerextbgm3() {
  bgm_ext.volume=0.4;
    setTimeout(lowerextbgm4,200);
}

function lowerextbgm4() {
  bgm_ext.volume=0.2;
    setTimeout(lowerextbgm5,200);
}

function lowerextbgm5() {
  bgm_ext.volume=0.0;
}

function higherextbgm() {
  bgm_ext.play();
      bgm_ext.volume=0.0;
      setTimeout(higherextbgm2,200);
  }
  function higherextbgm2() {
    bgm_ext.volume=0.2;
      setTimeout(higherextbgm3,200);
  }
  
  function higherextbgm3() {
    bgm_ext.volume=0.4;
      setTimeout(higherextbgm4,200);
  }
  
  function higherextbgm4() {
    bgm_ext.volume=0.6;
      setTimeout(higherextbgm5,200);
  }
  
  function higherextbgm5() {
    bgm_ext.volume=0.8;
  }


// ext bgm volumer handler

// eShop BGM