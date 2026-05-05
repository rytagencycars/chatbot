(function () {
    function initGSanchoRYT_FinalJS() {
        if (window._gsBotLoaded_FinalJS) return;
        window._gsBotLoaded_FinalJS = true;

        var CONFIG = {
            NOMBRE: 'GSancho',
            WHATSAPP: '34626037262', 
            WEBHOOK: 'https://services.leadconnectorhq.com/hooks/oq7X7DQ0PSmkExuEI46j/webhook-trigger/5d6acf42-6a61-49b4-9f12-caf70dd841b8',
            COLOR_BG: '#111111', 
            COLOR_ACCENT: '#ffcc00', // Amarillo G. Sancho
            AVATAR: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80',
            RYT_URL: 'https://rytagency.es/'
        };

        var pageTitle = document.title.split('|')[0].trim();
        var isVDP = window.location.href.includes('/producto/');
        var state = { isOpen: false, intent: "", title: pageTitle, url: window.location.href };

        var style = document.createElement('style');
        style.innerHTML = `
            #gs-bot-wrap { position: fixed; bottom: 20px; right: 20px; z-index: 99999999; font-family: sans-serif; display: flex; flex-direction: column; align-items: flex-end; }
            
            .gs-card { 
                display: none; 
                width: 310px; 
                background: white; 
                border-radius: 15px; 
                box-shadow: 0 10px 30px rgba(0,0,0,0.4); 
                overflow: visible; 
                margin-bottom: 12px;
                animation: gsSlideUp 0.3s ease-out;
            }
            @keyframes gsSlideUp { from { transform: translateY(15px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
            
            .gs-header { 
                background: ${CONFIG.COLOR_BG}; 
                color: white; 
                padding: 35px 15px 15px; 
                text-align: center; 
                position: relative; 
                border-radius: 15px 15px 0 0;
            }
            
            .gs-avatar-header { 
                width: 65px; height: 65px; 
                border-radius: 50%; 
                border: 3px solid ${CONFIG.COLOR_ACCENT}; 
                position: absolute; 
                top: -33px; 
                left: 50%; transform: translateX(-50%); 
                object-fit: cover; background: white; 
                box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            }
            
            .gs-header h3 { margin: 10px 0 5px; font-size: 20px; color: ${CONFIG.COLOR_ACCENT}; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
            .gs-header p { margin: 0; font-size: 14px; opacity: 0.9; line-height: 1.4; font-weight: 500; }
            .gs-close { position: absolute; top: 12px; right: 12px; cursor: pointer; font-size: 20px; color: white; opacity: 0.5; }
            
            .gs-body { padding: 20px 15px; }
            .gs-btn-main { 
                width: 100%; 
                padding: 15px; 
                border: none; 
                border-radius: 50px; 
                background: ${CONFIG.COLOR_ACCENT}; 
                color: #000; 
                cursor: pointer; 
                font-size: 15px; font-weight: 900; 
                box-shadow: 0 4px 15px rgba(255, 204, 0, 0.3);
                transition: 0.2s;
            }
            .gs-btn-main:hover { transform: scale(1.03); filter: brightness(1.1); }
            
            .gs-input { 
                width: 100%; padding: 14px; 
                border: 1px solid #eee; border-radius: 12px; 
                margin-bottom: 10px; outline: none; text-align: center; font-size: 15px; background: #fafafa;
            }
            .gs-footer { padding: 10px; text-align: center; font-size: 10px; color: #bbb; border-top: 1px solid #f9f9f9; }
            .gs-footer a { color: #bbb; text-decoration: none; font-weight: bold; }

            .gs-trigger { 
                width: 55px; height: 55px; 
                background: ${CONFIG.COLOR_BG}; 
                border-radius: 50%; cursor: pointer; 
                display: flex; align-items: center; justify-content: center; 
                box-shadow: 0 5px 20px rgba(0,0,0,0.3);
                border: 2px solid ${CONFIG.COLOR_ACCENT};
                transition: 0.3s;
            }
            .gs-trigger:hover { transform: scale(1.1); }
        `;
        document.head.appendChild(style);

        var wrap = document.createElement('div');
        wrap.id = 'gs-bot-wrap';
        var welcomeLabel = isVDP ? "¿Te interesa este <br><b>"+state.title+"</b>?" : "¡Hola! 👋 ¿Buscando tu próximo coche?<br><b>¡Te ayudamos a encontrarlo!</b>";

        wrap.innerHTML = `
            <div id="gs-card" class="gs-card">
                <div class="gs-header">
                    <img src="${CONFIG.AVATAR}" class="gs-avatar-header">
                    <span class="gs-close" onclick="window._gsToggle()">×</span>
                    <h3>${CONFIG.NOMBRE}</h3>
                    <p id="gs-welcome">${welcomeLabel}</p>
                </div>
                <div id="gs-content" class="gs-body"></div>
                <div class="gs-footer">Desarrollado por <a href="${CONFIG.RYT_URL}" target="_blank">RYT AGENCY</a></div>
            </div>
            <div class="gs-trigger" onclick="window._gsToggle()">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="${CONFIG.COLOR_ACCENT}"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
            </div>
        `;
        document.body.appendChild(wrap);

        window._gsToggle = function() {
            var c = document.getElementById('gs-card');
            state.isOpen = !state.isOpen;
            c.style.display = state.isOpen ? 'block' : 'none';
        };

        window._gsInit = function() {
            var content = document.getElementById('gs-content');
            var btnText = isVDP ? "¡Sí, me interesa! ✅" : "¡Sí, quiero más información!";
            content.innerHTML = `<button class="gs-btn-main" onclick="window._gsForm('${btnText}')">${btnText}</button>`;
        };

        window._gsForm = function(intent) {
            state.intent = intent;
            document.getElementById('gs-content').innerHTML = `
                <input type="text" id="gs-n" class="gs-input" placeholder="Tu nombre">
                <input type="tel" id="gs-p" class="gs-input" placeholder="Tu teléfono">
                <button id="gs-sub" class="gs-btn-main" onclick="window._gsSend()">ENVIAR SOLICITUD</button>
            `;
        };

        window._gsSend = function() {
            var n = document.getElementById('gs-n').value;
            var t = document.getElementById('gs-p').value;
            if(!n || !t) return alert("Por favor, rellena los datos");
            var btn = document.getElementById('gs-sub'); btn.innerText = "ENVIANDO..."; btn.disabled = true;

            var xhr = new XMLHttpRequest();
            xhr.open("POST", CONFIG.WEBHOOK, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    document.getElementById('gs-content').innerHTML = `<div style="text-align:center; padding:10px;"><p style="font-weight:700; color:#333; font-size:15px;">✅ ¡Enviado! <br>Te contactamos por WhatsApp ahora mismo.</p></div>`;
                    setTimeout(function() {
                        window.open(`https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent('Hola, soy ' + n + '. Me interesa ' + state.intent + '. Estaba viendo en la web: ' + state.url)}`, '_blank');
                    }, 1200);
                }
            };
            xhr.send(JSON.stringify({ firstName: n + " [" + (isVDP ? "🚗 VDP" : "ℹ️ Info") + "]", phone: t, source: "CHATBOT WEB", notes: "URL: " + state.url }));
        };

        window._gsInit();
        setTimeout(() => { if(!state.isOpen) window._gsToggle(); }, 2500);
    }
    if (document.readyState === 'complete') initGSanchoRYT_FinalJS();
    else window.addEventListener('load', initGSanchoRYT_FinalJS);
})();
