(function(){
  function isRealVisitor(){
    var ua=navigator.userAgent.toLowerCase();
    if(navigator.webdriver)return false;
    if(/bot|crawl|spider|slurp|facebook|mediapartners/i.test(ua))return false;
    if(!navigator.plugins||navigator.plugins.length===0)return false;
    return true;
  }

  function showAds(){
    var div=document.createElement("div");
    
    // Fix: Use pure inline CSS instead of Tailwind classes so it works on Bootstrap/Magz themes
    div.style.cssText = "position: fixed; bottom: 0; left: 0; width: 100%; z-index: 9999; background-color: #ffffff; border-top: 1px solid #e2e8f0; box-shadow: 0 -4px 6px -1px rgba(0,0,0,0.1); display: flex; justify-content: center; align-items: center; padding: 8px; min-height: 70px;";

    // Create first script (config)
    var s1=document.createElement("script");
    s1.type="text/javascript";
    s1.innerHTML="atOptions={'key':'12424e3bfec4f392838a56944e6ceeed','format':'iframe','height':60,'width':468,'params':{}};";

    // Create second script (invoke)
    var s2=document.createElement("script");
    s2.type="text/javascript";
    s2.src="https://summonteacherjunction.com/12424e3bfec4f392838a56944e6ceeed/invoke.js";
    s2.async=true;

    div.appendChild(s1);
    div.appendChild(s2);
    document.body.appendChild(div);
    document.body.style.paddingBottom="80px";
  }

  function init(){
    if(isRealVisitor()){
      showAds();
    }
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded",init);
  }else{
    init();
  }
})();