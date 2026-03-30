(function () {
    function initSellCarsMadridRYT() {
        if (window._scMadridBotLoaded) return;
        window._scMadridBotLoaded = true;

        var CONFIG = {
            NOMBRE: 'SellCars',
            WHATSAPP: '34679934531',
            WEBHOOK: 'https://services.leadconnectorhq.com/hooks/368VdvUOgwnpeYUA3WTt/webhook-trigger/e5f6a405-f60b-435e-b021-d4484167a930', 
            COLOR_ACC: '#e30613',
            // Avatar profesional limpio
            AVATAR: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png', 
            RYT_URL: 'https://rytagency.es/'
        };

        var pageTitle = document.title.split('|')[0].trim();
        var isVDP = window.location.href.includes('/coches-de-ocasion/');
        var state = { isOpen: false, intent: "", title: pageTitle, url: window.location.href };

        var style = document.createElement('style');
        style.innerHTML = `
            #scm-bot-wrap { position: fixed; bottom: 25px; right: 25px; z-index: 99999999; font-family: sans-serif; display: flex; flex-direction: column; align-items: flex-end; }
            #scm-wa-left { position: fixed; bottom: 25px; left: 25px; z-index: 99999999; text-decoration: none; }
            .scm-wa-btn { background: #25D366; color: white; padding: 12px 22px; border-radius: 50px; font-weight: 700; display: flex; align-items: center; gap: 10px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); font-size: 14px; }
            .scm-trigger { width: 62px; height: 62px; background: ${CONFIG.COLOR_ACC}; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 25px rgba(0,0,0,0.2); }
            .scm-badge { position: absolute; top: -38px; right: 0; background: white; padding: 6px 14px; border-radius: 30px; font-size: 13px; font-weight: 700; color: #333; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid #eee; white-space: nowrap; }
            .scm-card { display: none; width: 350px; background: #fff; border-radius: 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.2); overflow: visible; margin-bottom: 15px; animation: scmPop 0.3s ease-out; }
            @keyframes scmPop { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            .scm-header { background: ${CONFIG.COLOR_ACC}; color: white; padding: 45px 20px 25px; text-align: center; position: relative; border-radius: 24px 24px 0 0; }
            .scm-avatar-header { width: 70px; height: 70px; border-radius: 50%; border: 4px solid ${CONFIG.COLOR_ACC}; position: absolute; top: -35px; left: 50%; transform: translateX(-50%); box-shadow: 0 4px 10px rgba(0,0,0,0.1); object-fit: cover; background: white; }
            .scm-header h3 { margin: 10px 0 0; font-size: 18px; font-weight: 800; }
            .scm-header p { margin: 8px 0 0; font-size: 15px; opacity: 0.95; line-height: 1.3; }
            .scm-close { position: absolute; top: 15px; right: 15px; cursor: pointer; font-size: 24px; color: white; opacity: 0.7; }
            .scm-back { position: absolute; top: 15px; left: 20px; cursor: pointer; font-size: 22px; color: white; display: none; }
            .scm-body { padding: 25px 20px; }
            .scm-agent-row { display: flex; gap: 10px; margin-bottom: 20px; align-items: flex-start; }
            .scm-mini-avatar { width: 35px; height: 35px; border-radius: 50%; object-fit: cover; flex-shrink: 0; border: 1px solid #eee; }
            .scm-agent-msg { font-size: 14px; color: #444; background: #f2f2f2; padding: 12px 16px; border-radius: 0 15px 15px 15px; line-height: 1.4; text-align: left; }
            .scm-btn-main { width: 100%; padding: 16px; margin-bottom: 12px; border: none; border-radius: 14px; background: ${CONFIG.COLOR_ACC}; color: white; cursor: pointer; font-size: 16px; font-weight: 700; text-align: center; }
            .scm-input { width: 100%; padding: 16px; border: 1px solid #ddd; border-radius: 14px; box-sizing: border-box; font-size: 15px; margin-bottom: 12px; outline: none; text-align: center; }
            .scm-footer { padding: 15px; text-align: center; font-size: 11px; color: #888; border-top: 1px solid #f0f0f0; }
            .scm-footer a { color: #888; text-decoration: none; font-weight: 700; }
        `;
        document.head.appendChild(style);

        var wa = document.createElement('a');
        wa.id = 'scm-wa-left'; wa.href = `https://wa.me/${CONFIG.WHATSAPP}`; wa.target = '_blank';
        wa.innerHTML = `<div class="scm-wa-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="18"> WhatsApp</div>`;
        document.body.appendChild(wa);

        var wrap = document.createElement('div');
        wrap.id = 'scm-bot-wrap';
        var welcomeLabel = isVDP ? "¡Hola! Veo que te interesa este <b>"+state.title+"</b>" : "¡Hola! 👋 ¿En qué podemos ayudarte?";

        wrap.innerHTML = `
            <div id="scm-card" class="scm-card">
                <div class="scm-header">
                    <img src="${CONFIG.AVATAR}" class="scm-avatar-header">
                    <span id="scm-back-btn" class="scm-back" onclick="window._scmInit()">←</span>
                    <span class="scm-close" onclick="window._scToggle()">×</span>
                    <h3>${CONFIG.NOMBRE}</h3>
                    <p id="scm-welcome">${welcomeLabel}</p>
                </div>
                <div id="scm-content" class="scm-body"></div>
                <div class="ryt-sc-footer scm-footer">Desarrollado por <a href="${CONFIG.RYT_URL}" target="_blank">RYT AGENCY</a></div>
            </div>
            <div class="scm-trigger" onclick="window._scToggle()">
                <div class="scm-badge">Ventas <span style="color:#25D366">●</span> En línea</div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
            </div>
        `;
        document.body.appendChild(wrap);

        window._scToggle = function() {
            var c = document.getElementById('scm-card');
            state.isOpen = !state.isOpen;
            c.style.display = state.isOpen ? 'block' : 'none';
        };

        window._scmInit = function() {
            document.getElementById('scm-back-btn').style.display = 'none';
            var content = document.getElementById('scm-content');
            if (isVDP) {
                content.innerHTML = `<button class="scm-btn-main" onclick="window._scmForm('¡Sí, me interesa! ✅')">¡Sí, me interesa! ✅</button>`;
            } else {
                content.innerHTML = `
                    <button class="scm-btn-main" onclick="window._scmForm('Comprar coche 🚗')">Comprar coche 🚗</button>
                    <button class="scm-btn-main" onclick="window._scmForm('Citas taller 🔧')">Citas taller 🔧</button>
                `;
            }
        };

        window._scmForm = function(intent) {
            state.intent = intent;
            document.getElementById('scm-back-btn').style.display = 'block';
            document.getElementById('scm-content').innerHTML = `
                <div class="scm-agent-row">
                    <img src="${CONFIG.AVATAR}" class="scm-mini-avatar">
                    <div class="scm-agent-msg">Genial, completa tus datos y un asesor se pondrá en contacto contigo muy pronto.</div>
                </div>
                <input type="text" id="scm-n" class="scm-input" placeholder="Tu nombre">
                <input type="tel" id="scm-p" class="scm-input" placeholder="Tu teléfono">
                <button id="scm-sub-btn" class="scm-btn-main" onclick="window._scmSend()">ENVIAR SOLICITUD</button>
            `;
        };

        window._scmSend = function() {
            var n = document.getElementById('scm-n').value;
            var t = document.getElementById('scm-p').value;
            if(!n || !t) return alert("Por favor, rellena los datos");
            var btn = document.getElementById('scm-sub-btn'); btn.innerText = "PROCESANDO..."; btn.disabled = true;

            var xhr = new XMLHttpRequest();
            xhr.open("POST", CONFIG.WEBHOOK, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    document.getElementById('scm-back-btn').style.display = 'none';
                    document.getElementById('scm-content').innerHTML = `<div style="text-align:center; padding:20px;"><div style="font-size:35px;">✅</div><p style="font-weight:700; color:#333;">¡Solicitud enviada!</p></div>`;
                    setTimeout(function() {
                        window.open(`https://wa.me/${CONFIG.WHATSAPP}?text=${encodeURIComponent('Hola, soy ' + n + '. Me interesa ' + state.intent + '. Estaba viendo en vuestra web: ' + state.url)}`, '_blank');
                    }, 1200);
                }
            };
            var fullNameForCRM = n + " [" + (isVDP ? "🚗 VDP - " + state.title : state.intent) + "]";
            xhr.send(JSON.stringify({ firstName: fullNameForCRM, phone: t, source: "CHATBOT WEB", tags: ["chatbot"], notes: "Interés: " + state.intent }));
        };

        window._scmInit();
        setTimeout(() => { if(!state.isOpen) window._scToggle(); }, 2000);
    }
    if (document.readyState === 'complete') initSellCarsMadridRYT();
    else window.addEventListener('load', initSellCarsMadridRYT);
})();
