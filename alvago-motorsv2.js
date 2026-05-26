/* CONFIG:{"nombre":"Alvago Motors ","color":"#c19d56","color2":"#1a1a1a","wa":"34663697060","waLabel":"WhatsApp","waMsg":"Hola, me gustaria recibir mas informacion.","agentMsg":"Genial, completa tus datos y un comercial de nuestro equipo se pondra en contacto contigo muy pronto.","vdp":"segunda-mano","vdpUrl":"https://www.alvagomotors.com/renault-scenic-intens-energy-dci-70kw-95cv-diesel-de-2017-de-segunda-mano-afd7e118-e85b-4398-a27e-7d570f87403e","webhook":"https://services.leadconnectorhq.com/hooks/D6XS4zkI1G2yym82AYmM/webhook-trigger/ee73b5a5-0270-4eac-86d3-35c26d5020c7","avatar":"https://assets.cdn.filesafe.space/oq7X7DQ0PSmkExuEI46j/media/54173186-f89e-4f70-94a8-4d18e934da24.png","btns":["Comprar coche"],"slug":"alvago-motorsv2","updatedAt":"2026-05-26T12:39:29.741Z"} */
/* RYT AGENCY — Chatbot Web v3 */
(function(){
  function init(){
    if(window._rytBot)return;
    window._rytBot=true;
    var N='Alvago Motors ',COLOR='#c19d56',COLOR2='#1a1a1a',WA='34663697060';
    var WA_LABEL='WhatsApp',WA_MSG='Hola, me gustaria recibir mas informacion.';
    var AGENT_MSG='Genial, completa tus datos y un comercial de nuestro equipo se pondra en contacto contigo muy pronto.';
    var VDP='segunda-mano';
    var BTNS=['Comprar coche'];
    var AVATAR='https://assets.cdn.filesafe.space/oq7X7DQ0PSmkExuEI46j/media/54173186-f89e-4f70-94a8-4d18e934da24.png';
    var ttl=document.title.split(' - ')[0].split('|')[0].trim();
    var isVDP=window.location.href.includes(VDP);
    var s={isOpen:false,intent:'',title:ttl,url:window.location.href,isVDP:isVDP};
    function getContrast(hex){hex=hex.replace('#','');if(hex.length===3)hex=hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];var r=parseInt(hex.substr(0,2),16),g=parseInt(hex.substr(2,2),16),b=parseInt(hex.substr(4,2),16);return(r*0.299+g*0.587+b*0.114)>186?'#111111':'#ffffff';}
    var cHeader=getContrast(COLOR2),cBtn=getContrast(COLOR);
    var st=document.createElement('style');
    st.innerHTML=`
      #ryt-wa{position:fixed;bottom:25px;left:25px;z-index:9999998;text-decoration:none;}
      .ryt-wa-btn{background:#25D366;color:#fff;padding:11px 20px;border-radius:50px;font-weight:700;display:flex;align-items:center;gap:8px;box-shadow:0 6px 18px rgba(0,0,0,.15);font-size:14px;font-family:-apple-system,sans-serif;}
      #ryt-wrap{position:fixed;bottom:25px;right:15px;z-index:9999999;font-family:-apple-system,sans-serif;display:flex;flex-direction:column;align-items:flex-end;gap:5px;max-width:calc(100vw - 20px);}
      .ryt-badge{background:#fff;padding:5px 13px;border-radius:30px;font-size:12px;font-weight:700;color:#333;box-shadow:0 3px 12px rgba(0,0,0,.1);border:1px solid #eee;white-space:nowrap;display:inline-flex;align-items:center;gap:5px;}
      .ryt-dot{width:7px;height:7px;border-radius:50%;background:#25D366;display:inline-block;}
      .ryt-trig{width:58px;height:58px;background:${COLOR2};border-radius:50%;border:2.5px solid ${COLOR};box-sizing:border-box;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 20px rgba(0,0,0,.2);}
      .ryt-card{display:none;width:300px;max-width:calc(100vw - 40px);background:#fff;border-radius:18px;box-shadow:0 12px 35px rgba(0,0,0,.18);overflow:visible;animation:rytPop .3s ease-out;margin-bottom:2px;}
      @keyframes rytPop{from{transform:scale(.95);opacity:0}to{transform:scale(1);opacity:1}}
      .ryt-hdr{padding:30px 14px 14px;text-align:center;position:relative;border-radius:18px 18px 0 0;background:${COLOR2};}
      .ryt-hdr h3{margin:4px 0 0;font-size:15px;font-weight:800;color:${COLOR}!important;}
      .ryt-hdr p{margin:4px 0 0;font-size:12px;color:${cHeader};opacity:.95;line-height:1.3;}
      .ryt-x{position:absolute;top:13px;right:14px;cursor:pointer;font-size:22px;color:${cHeader};opacity:.7;}
      .ryt-bk{position:absolute;top:13px;left:18px;cursor:pointer;font-size:20px;color:${cHeader};display:none;}
      .ryt-body{padding:14px 14px;}
      .ryt-arow{display:flex;gap:9px;margin-bottom:16px;align-items:flex-start;}
      .ryt-amsg{font-size:13px;color:#444;background:#f2f2f2;padding:11px 14px;border-radius:0 13px 13px 13px;line-height:1.4;}
      .ryt-btn{width:100%;padding:11px;margin-bottom:8px;border:none;border-radius:10px;background:${COLOR};color:${cBtn};cursor:pointer;font-size:14px;font-weight:700;font-family:-apple-system,sans-serif;}
      .ryt-btn:last-child{margin-bottom:0;}
      .ryt-inp{width:100%;padding:14px;border:1px solid #ddd;border-radius:13px;box-sizing:border-box;font-size:14px;margin-bottom:10px;outline:none;text-align:left;font-family:-apple-system,sans-serif;}
      .ryt-inp:focus{border-color:${COLOR};}
      .ryt-send{width:100%;padding:11px;border:none;border-radius:10px;background:${COLOR};color:${cBtn};cursor:pointer;font-size:14px;font-weight:700;margin-bottom:6px;font-family:-apple-system,sans-serif;}
      .ryt-bkf{width:100%;padding:11px;border:.5px solid #ddd;border-radius:13px;background:#f5f5f5;color:#555;cursor:pointer;font-size:13px;font-family:-apple-system,sans-serif;}
      .ryt-foot{padding:12px;text-align:center;font-size:11px;color:#888;border-top:1px solid #f0f0f0;}
      .ryt-foot a{color:#888;text-decoration:none;font-weight:700;}
    `;
    document.head.appendChild(st);
    var waEl=document.createElement('a');
    waEl.id='ryt-wa';
    waEl.href='https://wa.me/'+WA+'?text='+encodeURIComponent(WA_MSG);
    waEl.target='_blank';
    waEl.innerHTML='<div class="ryt-wa-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.541 4.064 1.487 5.782L0 24l6.395-1.671A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.028-1.38l-.36-.214-3.733.976.999-3.638-.235-.374A9.817 9.817 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/></svg>'+WA_LABEL+'</div>';
    document.body.appendChild(waEl);
    var wrap=document.createElement('div');
    wrap.id='ryt-wrap';
    var wMsg=isVDP?'Hola! Veo que te interesa este <b>'+ttl+'</b>':'Hola! &#128075; En que podemos ayudarte?';
    var avHTML=AVATAR?'<img src="'+AVATAR+'" style="width:52px;height:52px;border-radius:50%;position:absolute;top:-26px;left:50%;transform:translateX(-50%);object-fit:cover;box-shadow:0 3px 10px rgba(0,0,0,.25);border:2.5px solid '+COLOR+';">':'';
    var avMiniHTML=AVATAR?'<img src="'+AVATAR+'" style="width:28px;height:28px;border-radius:50%;object-fit:cover;flex-shrink:0;">':'';
    wrap.innerHTML='<div id="ryt-card" class="ryt-card"><div class="ryt-hdr">'+avHTML+'<span id="ryt-bk" class="ryt-bk" onclick="window._rytBk()">&#8592;</span><span class="ryt-x" onclick="window._rytTog()">&#215;</span><h3>'+N+'</h3><p id="ryt-msg">'+wMsg+'</p></div><div id="ryt-body" class="ryt-body"></div><div class="ryt-foot">Desarrollado por <a href="https://rytagency.es/" target="_blank">RYT AGENCY</a></div></div><div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px;"><div class="ryt-badge">En linea <span class="ryt-dot"></span></div><div class="ryt-trig" onclick="window._rytTog()"><svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg></div></div>';
    document.body.appendChild(wrap);
    function g(id){return document.getElementById(id);}
    window._rytTog=function(){var c=g('ryt-card');s.isOpen=!s.isOpen;c.style.display=s.isOpen?'block':'none';};
    window._rytBk=function(){g('ryt-bk').style.display='none';home();};
    function home(){var c=g('ryt-body');c.innerHTML=isVDP?'<button class="ryt-btn" onclick="window._rytForm(&quot;Si, me interesa!&quot;)">Si, me interesa!</button>':BTNS.map(function(b){return '<button class="ryt-btn" onclick="window._rytForm(&quot;'+b+'&quot;)">'+b+'</button>';}).join('');}
    window._rytForm=function(intent){s.intent=intent;g('ryt-bk').style.display='block';g('ryt-body').innerHTML='<div class="ryt-arow">'+avMiniHTML+'<div class="ryt-amsg">'+AGENT_MSG+'</div></div><input type="text" id="ryt-n" class="ryt-inp" placeholder="Tu nombre*"><input type="tel" id="ryt-t" class="ryt-inp" placeholder="Tu telefono*"><button id="ryt-sub" class="ryt-send" onclick="window._rytSend()">ENVIAR SOLICITUD</button><button class="ryt-bkf" onclick="window._rytBk()">Volver</button>';};
    window._rytSend=function(){var n=g('ryt-n').value,ph=g('ryt-t').value;if(!n||!ph){alert('Por favor, rellena nombre y telefono');return;}var btn=g('ryt-sub');btn.innerText='ENVIANDO...';btn.disabled=true;function done(n,ph,s){g('ryt-bk').style.display='none';g('ryt-body').innerHTML='<div style="text-align:center;padding:24px 0"><div style="font-size:42px">&#10003;</div><p style="font-weight:700;color:#333;margin-top:10px;font-family:-apple-system,sans-serif">Solicitud enviada!<br><span style="font-size:13px;font-weight:400;color:#666">En breve te contactaremos.</span></p></div>';setTimeout(function(){window.open('https://wa.me/'+WA+'?text='+encodeURIComponent(s.isVDP?'Hola! Soy '+n+', me interesa el '+s.title+' que vi en vuestra web.\nMi telefono es '+ph+'.\n'+s.url:'Hola, soy '+n+'. Me interesa: '+s.intent+'.\nTelefono: '+ph+'\nWeb: '+s.url),'_blank');},1200);}
    var xhr=new XMLHttpRequest();xhr.open("POST","https://services.leadconnectorhq.com/hooks/D6XS4zkI1G2yym82AYmM/webhook-trigger/ee73b5a5-0270-4eac-86d3-35c26d5020c7",true);xhr.setRequestHeader("Content-Type","application/json");xhr.onreadystatechange=function(){if(xhr.readyState===4)done(n,ph,s);};var lbl=s.isVDP?"VDP: "+s.title:s.intent;xhr.send(JSON.stringify({firstName:n+" ["+lbl+"]",phone:ph,source:"CHATBOT WEB",tags:["chatbot"],notes:"Página: "+s.title}));};
    home();
    setTimeout(function(){if(!s.isOpen)window._rytTog();},2500);
  }
  if(document.readyState==='complete')init();
  else window.addEventListener('load',init);
})();