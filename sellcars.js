(function () {
    function initSellCarsRYT_V3() {
        if (window._scBotLoaded_V3) return;
        window._scBotLoaded_V3 = true;

        var CONFIG = {
            NOMBRE: 'SellCars',
            WHATSAPP: '34679934531',
            WEBHOOK: 'https://services.leadconnectorhq.com/hooks/368VdvUOgwnpeYUA3WTt/webhook-trigger/e5f6a405-f60b-435e-b021-d4484167a930', 
            COLOR_ACC: '#e30613',
            AVATAR: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80',
            RYT_URL: 'https://rytagency.es/'
        };

        var pageTitle = document.title.split('|')[0].trim();
        var isVDP = window.location.href.includes('/coches-de-ocasion/');
        var state = { isOpen: false, intent: "", title: pageTitle, url: window.location.href };

        var style = document.createElement('style');
        style.innerHTML = `
            #sc-bot-wrap { position: fixed; bottom: 25px; right: 25px; z-index: 9999999; font-family: -apple-system, sans-serif; display: flex; flex-direction: column; align-items: flex-end; }
            #sc-wa-left { position: fixed; bottom: 25px; left: 25px; z-index: 9999999; text-decoration: none; }
            .sc-wa-btn { background: #25D366; color: white; padding: 12px 22px; border-radius: 50px; font-weight: 700; display: flex; align-items: center; gap: 10px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); font-size: 14px; }
            .sc-trigger { width: 62px; height: 62px; background: ${CONFIG.COLOR_ACC}; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 25px rgba(0,0,0,0.2); }
            .sc-badge { position: absolute; top: -38px; right: 0; background: white; padding: 6px 14px; border-radius: 30px; font-size: 13px; font-weight: 700; color: #333; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid #eee; white-space: nowrap; }
            .sc-card { display: none; width: 350px; background: #fff; border-radius: 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.2); overflow: visible; margin-bottom: 15px; animation: scPop 0.3s ease-out; }
            @keyframes scPop { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            .sc-header { background: ${CONFIG.COLOR_ACC}; color: white; padding: 45px 20px 25px; text-align: center; position: relative; border-radius: 24px 24px 0 0; }
            .sc-avatar-header { width: 70px; height: 70px; border-radius: 50%; border: 4px solid ${CONFIG.COLOR_ACC}; position: absolute; top: -35px; left: 50%; transform: translateX(-50%); box-shadow: 0 4px 10px rgba(0,0,0,0.1); object-fit: cover; background: white; }
            .sc-header h3 { margin: 10px 0 0; font-size: 18px; font-weight: 800; }
            .sc-header p { margin: 8px 0 0; font-size: 15px; opacity: 0.95; line-height: 1.3; }
            .sc-close { position: absolute; top: 15px; right: 15px; cursor: pointer; font-size: 24px; color: white; opacity: 0.7; }
            .sc-back { position: absolute; top: 15px; left: 20px; cursor: pointer; font-size: 22px; color: white; display: none; }
            .sc-body { padding: 25px 20px; }
            .sc-agent-row { display: flex; gap: 10px; margin-bottom: 20px; align-items: flex-start; }
            .sc-mini-avatar { width: 35px; height: 35px; border-radius: 50%; object-fit: cover; flex-shrink: 0; border: 1px solid #eee; }
            .sc-agent-msg { font-size: 14px; color: #444; background: #f2f2f2; padding: 12px 16px; border-radius: 0 15px 15px 15px; line-height: 1.4; text-align: left; }
            .sc-btn-main { width: 100%; padding: 16px; margin-bottom: 12px; border: none; border-radius: 14px; background: ${CONFIG.COLOR_ACC}; color: white; cursor: pointer; font-size: 16px; font-weight: 700; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.1); }
            .sc-input { width: 100%; padding: 16px; border: 1px solid #ddd; border-radius: 14px; box-sizing: border-box; font-size: 15px; margin-bottom: 12px; outline: none; text-align: center; }
            .sc-footer { padding: 15px; text-align: center; font-size: 11px; color: #888; border-top: 1px solid #f0f0f0; }
            .sc-footer a { color: #888; text-decoration: none; font-weight: 700; }
        `;
        document.head.appendChild(style);

        var wa = document.createElement('a');
        wa.id = 'sc-wa-left'; wa.href = `https://wa.me/${CONFIG.WHATSAPP}`; wa.target = '_blank';
        wa.innerHTML = `<div class="sc-wa-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="18"> WhatsApp</div>`;
        document.body.appendChild(wa);

        var wrap = document.createElement('div');
        wrap.id = 'sc-bot-wrap';
        var welcomeLabel = isVDP ? "¡Hola! Veo que te interesa este <b>"+state.title+"</b>" : "¡Hola! 👋 ¿En qué podemos ayudarte?";

        wrap.innerHTML = `
            <div id="sc-card" class="sc-card">
                <div class="sc-header">
                    <img src="${CONFIG.AVATAR}" class="sc-avatar-header">
                    <span id="sc-back-btn" class="sc-back" onclick="window._scInit()">←</span>
                    <span class="sc-close" onclick="window._scToggle()">×</span>
                    <h3>${CONFIG.NOMBRE}</h3>
                    <p id="sc-welcome">${welcomeLabel}</p>
                </div>
                <div id="sc-content" class="sc-body"></div>
                <div class="sc-footer">Desarrollado por <a href="${CONFIG.RYT_URL}" target="_blank">RYT AGENCY</a></div>
            </div>
            <div class="sc-trigger" onclick="window._scToggle()">
                <div class="sc-badge">Ventas <span style="color:#25D366">●</span> En línea</div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
            </div>
        `;
        document.body.appendChild(wrap);

        window._scToggle = function() {
            var c = document.getElementById('sc-card');
            state.isOpen = !state.isOpen;
            c.style.display = state.isOpen ? 'block' : 'none';
        };

        window._scInit = function() {
            document.getElementById('sc-back-btn').style.display = 'none';
            var content = document.getElementById('sc-content');
            if (isVDP) {
                content.innerHTML = `<button class="sc-btn-main" onclick="window._scForm('¡Sí, me interesa! ✅')">¡Sí, me interesa! ✅</button>`;
            } else {
                content.innerHTML = `
                    <button class="sc-btn-main" onclick="window._scForm('Comprar coche 🚗')">Comprar coche 🚗</button>
                    <button class="sc-btn-main" onclick="window._scForm('Citas taller 🔧')">Citas taller 🔧</button>
                `;
            }
        };

        window._scForm = function(intent) {
            state.intent = intent;
            document.getElementById('sc-back-btn').style.display = 'block';
            document.getElementById('sc-content').innerHTML = `
                <div class="sc-agent-row">
                    <img src="${CONFIG.AVATAR}" class="sc-mini-avatar">
                    <div class="sc-agent-msg">Genial, completa tus datos y un comercial de nuestro equipo se pondrá en contacto contigo muy pronto.</div>
                </div>
                <input type="text" id="sc-n" class="sc-input" placeholder="Tu nombre">
                <input type="tel" id="sc-p" class="sc-input" placeholder="Tu teléfono">
                <button id="sc-sub-btn" class="sc-btn-main" onclick="window._scSend()">ENVIAR SOLICITUD</button>
            `;
        };

        window._scSend = function() {
            var n = document.getElementById('sc-n').value;
            var t = document.getElementById('sc-p').value;
            if(!n || !t) return alert("Por favor, rellena los datos");
            var btn = document.getElementById('sc-sub-btn'); btn.innerText = "PROCESANDO..."; btn.disabled = true;

            var xhr = new XMLHttpRequest();
            xhr.open("POST", CONFIG.WEBHOOK, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    document.getElementById('sc-back-btn').style.display = 'none';
                    document.getElementById('sc-content').innerHTML = `<div style="text-align:center; padding:20px;"><div style="font-size:35px;">✅</div><p style="font-weight:700; color:#333;">¡Solicitud enviada!</p></div>`;
                    setTimeout(function() {
                        window.open(`https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent('Hola, soy ' + n + '. Me interesa ' + state.intent + '. Estaba viendo en vuestra web: ' + state.url)}`, '_blank');
                    }, 1200);
                }
            };

            var crmLabel = isVDP ? "🚗 VDP - " + state.title : state.intent;
            var fullNameForCRM = n + " [" + crmLabel + "]";

            xhr.send(JSON.stringify({ 
                firstName: fullNameForCRM, 
                phone: t, 
                source: "CHATBOT WEB", 
                tags: ["chatbot"], 
                notes: "Interés: " + state.intent + " | Vehículo: " + state.title 
            }));
        };

        window._scInit();
        setTimeout(() => { if(!state.isOpen) window._scToggle(); }, 2500);
    }
    if (document.readyState === 'complete') initSellCarsRYT_V3();
    else window.addEventListener('load', initSellCarsRYT_V3);
})();
