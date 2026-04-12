/* CONFIG:{"nombre":"Sellcars","color":"#0F181F","wa":"679934531","waLabel":"¿Hablamos?","waMsg":"Hola, me gustaría recibir más información.","agentMsg":"Genial, completa tus datos y un comercial de nuestro equipo se pondrá en contacto contigo muy pronto.","vdp":"/coches/","vdpUrl":"https://services.leadconnectorhq.com/hooks/368VdvUOgwnpeYUA3WTt/webhook-trigger/e5f6a405-f60b-435e-b021-d4484167a930","webhook":"https://services.leadconnectorhq.com/hooks/368VdvUOgwnpeYUA3WTt/webhook-trigger/ba437443-994f-41cc-a4f6-5950fdcd8df9","avatar":"","btns":["Comprar coche 🚗","Taller🔨 "],"slug":"sellcars","updatedAt":"2026-04-12T20:13:37.682Z"} */
/* RYT AGENCY — Chatbot Web v3 */
(function(){
  function init(){
    if(window._rytBot)return;
    window._rytBot=true;
    var N='Sellcars',COLOR='#0F181F',WA='679934531';
    var WA_LABEL='¿Hablamos?',WA_MSG='Hola, me gustaría recibir más información.';
    var AGENT_MSG='Genial, completa tus datos y un comercial de nuestro equipo se pondrá en contacto contigo muy pronto.';
    var VDP='/coches/';
    var BTNS=['Comprar coche 🚗','Taller🔨 '];
    var AVATAR='';
    var ttl=document.title.split('|')[0].trim();
    var isVDP=window.location.href.includes(VDP);
    var s={isOpen:false,intent:'',title:ttl,url:window.location.href,isVDP:isVDP};
    var st=document.createElement('style');
    st.innerHTML=`
      #ryt-wa{position:fixed;bottom:25px;left:25px;z-index:9999998;text-decoration:none;}
      .ryt-wa-btn{background:#25D366;color:#fff;padding:11px 20px;border-radius:50px;font-weight:700;display:flex;align-items:center;gap:8px;box-shadow:0 6px 18px rgba(0,0,0,.15);font-size:14px;font-family:-apple-system,sans-serif;}
      #ryt-wrap{position:fixed;bottom:25px;right:25px;z-index:9999999;font-family:-apple-system,sans-serif;display:flex;flex-direction:column;align-items:flex-end;gap:5px;}
      .ryt-badge{background:#fff;padding:5px 13px;border-radius:30px;font-size:12px;font-weight:700;color:#333;box-shadow:0 3px 12px rgba(0,0,0,.1);border:1px solid #eee;white-space:nowrap;display:inline-flex;align-items:center;gap:5px;}
      .ryt-dot{width:7px;height:7px;border-radius:50%;background:#25D366;display:inline-block;}
      .ryt-trig{width:58px;height:58px;background:COLOR_PH;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 6px 20px rgba(0,0,0,.2);}
      .ryt-card{display:none;width:340px;background:#fff;border-radius:22px;box-shadow:0 18px 45px rgba(0,0,0,.2);overflow:visible;animation:rytPop .3s ease-out;margin-bottom:2px;}
      @keyframes rytPop{from{transform:scale(.95);opacity:0}to{transform:scale(1);opacity:1}}
      .ryt-hdr{padding:44px 18px 20px;text-align:center;position:relative;border-radius:22px 22px 0 0;}
      .ryt-hdr h3{margin:6px 0 0;font-size:17px;font-weight:800;color:#fff;}
      .ryt-hdr p{margin:6px 0 0;font-size:14px;color:#fff;opacity:.95;line-height:1.3;}
      .ryt-x{position:absolute;top:13px;right:14px;cursor:pointer;font-size:22px;color:#fff;opacity:.7;}
      .ryt-bk{position:absolute;top:13px;left:18px;cursor:pointer;font-size:20px;color:#fff;display:none;}
      .ryt-body{padding:20px 18px;}
      .ryt-arow{display:flex;gap:9px;margin-bottom:16px;align-items:flex-start;}
      .ryt-amsg{font-size:13px;color:#444;background:#f2f2f2;padding:11px 14px;border-radius:0 13px 13px 13px;line-height:1.4;}
      .ryt-btn{width:100%;padding:15px;margin-bottom:10px;border:none;border-radius:13px;background:COLOR_PH;color:#fff;cursor:pointer;font-size:15px;font-weight:700;font-family:-apple-system,sans-serif;}
      .ryt-btn:last-child{margin-bottom:0;}
      .ryt-inp{width:100%;padding:14px;border:1px solid #ddd;border-radius:13px;box-sizing:border-box;font-size:14px;margin-bottom:10px;outline:none;text-align:center;font-family:-apple-system,sans-serif;}
      .ryt-inp:focus{border-color:COLOR_PH;}
      .ryt-send{width:100%;padding:15px;border:none;border-radius:13px;background:COLOR_PH;color:#fff;cursor:pointer;font-size:15px;font-weight:700;margin-bottom:8px;font-family:-apple-system,sans-serif;}
      .ryt-bkf{width:100%;padding:11px;border:.5px solid #ddd;border-radius:13px;background:#f5f5f5;color:#555;cursor:pointer;font-size:13px;font-family:-apple-system,sans-serif;}
      .ryt-foot{padding:12px;text-align:center;font-size:11px;color:#888;border-top:1px solid #f0f0f0;}
      .ryt-foot a{color:#888;text-decoration:none;font-weight:700;}
    `.replace(/COLOR_PH/g,COLOR);
    document.head.appendChild(st);
    var waEl=document.createElement('a');
    waEl.id='ryt-wa';
    waEl.href='https://wa.me/'+WA+'?text='+encodeURIComponent(WA_MSG);
    waEl.target='_blank';
    waEl.innerHTML='<div class="ryt-wa-btn"><svg width="16" height="16" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.096.541 4.064 1.487 5.782L0 24l6.395-1.671A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.028-1.38l-.36-.214-3.733.976.999-3.638-.235-.374A9.817 9.817 0 012.182 12c0-5.42 4.398-9.818 9.818-9.818 5.42 0 9.818 4.398 9.818 9.818 0 5.42-4.398 9.818-9.818 9.818z"/></svg>'+WA_LABEL+'</div>';
    document.body.appendChild(waEl);
    var wrap=document.createElement('div');
    wrap.id='ryt-wrap';
    var wMsg=isVDP?'¡Hola! Veo que te interesa este <b>'+ttl+'</b>':'¡Hola! 👋 ¿En qué podemos ayudarte?';
    var avHTML=AVATAR?'<img src="'+AVATAR+'" style="width:66px;height:66px;border-radius:50%;position:absolute;top:-33px;left:50%;transform:translateX(-50%);object-fit:cover;box-shadow:0 4px 12px rgba(0,0,0,.25);">':'';
    var avMiniHTML=AVATAR?'<img src="'+AVATAR+'" style="width:32px;height:32px;border-radius:50%;object-fit:cover;flex-shrink:0;">':'';
    wrap.innerHTML='<div id="ryt-card" class="ryt-card"><div class="ryt-hdr" style="background:'+COLOR+'">'+avHTML+'<span id="ryt-bk" class="ryt-bk" onclick="window._rytBk()">←</span><span class="ryt-x" onclick="window._rytTog()">×</span><h3>'+N+'</h3><p id="ryt-msg">'+wMsg+'</p></div><div id="ryt-body" class="ryt-body"></div><div class="ryt-foot">Desarrollado por <a href="https://rytagency.es/" target="_blank">RYT AGENCY</a></div></div><div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px;"><div class="ryt-badge">En línea <span class="ryt-dot"></span></div><div class="ryt-trig" onclick="window._rytTog()"><svg width="26" height="26" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg></div></div>';
    document.body.appendChild(wrap);
    function g(id){return document.getElementById(id);}
    window._rytTog=function(){var c=g('ryt-card');s.isOpen=!s.isOpen;c.style.display=s.isOpen?'block':'none';};
    window._rytBk=function(){g('ryt-bk').style.display='none';home();};
    function home(){var c=g('ryt-body');c.innerHTML=isVDP?'<button class="ryt-btn" onclick="window._rytForm('¡Sí, me interesa! ✅')">¡Sí, me interesa! ✅</button>':BTNS.map(function(b){return '<button class="ryt-btn" onclick="window._rytForm(''+b+'')">'+b+'</button>';}).join('');}
    window._rytForm=function(intent){s.intent=intent;g('ryt-bk').style.display='block';g('ryt-body').innerHTML='<div class="ryt-arow">'+avMiniHTML+'<div class="ryt-amsg">'+AGENT_MSG+'</div></div><input type="text" id="ryt-n" class="ryt-inp" placeholder="Tu nombre*"><input type="tel" id="ryt-t" class="ryt-inp" placeholder="Tu teléfono*"><button id="ryt-sub" class="ryt-send" onclick="window._rytSend()">ENVIAR SOLICITUD</button><button class="ryt-bkf" onclick="window._rytBk()">Volver</button>';};
    window._rytSend=function(){var n=g('ryt-n').value,ph=g('ryt-t').value;if(!n||!ph){alert('Por favor, rellena nombre y teléfono');return;}var btn=g('ryt-sub');btn.innerText='ENVIANDO...';btn.disabled=true;function done(n,ph,s){g('ryt-bk').style.display='none';g('ryt-body').innerHTML='<div style="text-align:center;padding:24px 0"><div style="font-size:42px">✅</div><p style="font-weight:700;color:#333;margin-top:10px;font-family:-apple-system,sans-serif">¡Solicitud enviada!<br><span style="font-size:13px;font-weight:400;color:#666">En breve te contactaremos.</span></p></div>';setTimeout(function(){window.open('https://wa.me/'+WA+'?text='+encodeURIComponent('Hola, soy '+n+'. Me interesa: '+s.intent+(s.isVDP?' — '+s.title:'')+'. Web: '+s.url),'_blank');},1200);}
    var xhr=new XMLHttpRequest();xhr.open("POST","https://services.leadconnectorhq.com/hooks/368VdvUOgwnpeYUA3WTt/webhook-trigger/ba437443-994f-41cc-a4f6-5950fdcd8df9",true);xhr.setRequestHeader("Content-Type","application/json");xhr.onreadystatechange=function(){if(xhr.readyState===4)done(n,ph,s);};var lbl=s.isVDP?"VDP: "+s.title:s.intent;xhr.send(JSON.stringify({firstName:n+" ["+lbl+"]",phone:ph,source:"CHATBOT WEB",tags:["chatbot"],notes:"Página: "+s.title}));};
    home();
    setTimeout(function(){if(!s.isOpen)window._rytTog();},2500);
  }
  if(document.readyState==='complete')init();
  else window.addEventListener('load',init);
})();