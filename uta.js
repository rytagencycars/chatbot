(function () {
    function initUtaRYTCloud() {
        if (window._utaBotRYT_FinalCloud) return;
        window._utaBotRYT_FinalCloud = true;

        var CONFIG = {
            NOMBRE: 'Automóviles UTA',
            WHATSAPP: '34689968146', 
            WEBHOOK: 'https://services.leadconnectorhq.com/hooks/k2sXuNZCXCpblHvX6z8t/webhook-trigger/c7a56b5b-59ee-42ef-a149-2aca78a40146', 
            COLOR_ACC: '#c19d56', 
            LOGO_CLIENTE: 'https://www.automovilesuta.com/img/automoviles_uta/logo-negro.png',
            RYT_URL: 'https://rytagency.es/'
        };

        var pageTitle = document.title.split('|')[0].trim();
        var isVDP = window.location.href.includes('/coches/');
        var state = { isOpen: false, intent: "", title: pageTitle, url: window.location.href };

        var style = document.createElement('style');
        style.innerHTML = `
            #uta-bot-wrap { position: fixed; bottom: 25px; right: 25px; z-index: 9999999; font-family: -apple-system, sans-serif; display: flex; flex-direction: column; align-items: flex-end; }
            #uta-wa-left { position: fixed; bottom: 25px; left: 25px; z-index: 9999999; text-decoration: none; }
            .uta-wa-btn { background: #25D366; color: white; padding: 12px 22px; border-radius: 50px; font-weight: 700; display: flex; align-items: center; gap: 10px; box-shadow: 0 8px 20px rgba(0,0,0,0.15); font-size: 14px; }
            .uta-trigger { width: 62px; height: 62px; background: ${CONFIG.COLOR_ACC}; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 25px rgba(0,0,0,0.2); }
            .uta-badge { position: absolute; top: -38px; right: 0; background: white; padding: 6px 14px; border-radius: 30px; font-size: 13px; font-weight: 700; color: #333; box-shadow: 0 4px 15px rgba(0,0,0,0.1); border: 1px solid #eee; white-space: nowrap; }
            .uta-card { display: none; width: 350px; background: #fff; border-radius: 24px; box-shadow: 0 20px 50px rgba(0,0,0,0.2); overflow: visible; margin-bottom: 15px; animation: utaPop 0.3s ease-out; }
            @keyframes utaPop { from { transform: scale(0.95); opacity: 0; } to { transform: scale(1); opacity: 1; } }
            .uta-header { background: ${CONFIG.COLOR_ACC}; color: white; padding: 45px 20px 25px; text-align: center; position: relative; border-radius: 24px 24px 0 0; }
            .uta-logo-header { width: 70px; height: 70px; border-radius: 50%; border: 3px solid ${CONFIG.COLOR_ACC}; position: absolute; top: -35px; left: 50%; transform: translateX(-50%); box-shadow: 0 4px 10px rgba(0,0,0,0.2); object-fit: contain; background: #111; padding: 8px; }
            .uta-header h3 { margin: 10px 0 0; font-size: 18px; font-weight: 800; }
            .uta-header p { margin: 8px 0 0; font-size: 15px; opacity: 0.95; line-height: 1.3; }
            .uta-close { position: absolute; top: 15px; right: 15px; cursor: pointer; font-size: 24px; color: white; opacity: 0.7; }
            .uta-back { position: absolute; top: 15px; left: 20px; cursor: pointer; font-size: 22px; color: white; display: none; }
            .uta-body { padding: 25px 20px; }
            .uta-agent-row { display: flex; gap: 10px; margin-bottom: 20px; align-items: flex-start; }
            .uta-mini-logo { width: 35px; height: 35px; border-radius: 50%; object-fit: contain; flex-shrink: 0; background: #111; padding: 4px; border: 1px solid ${CONFIG.COLOR_ACC}; }
            .uta-agent-msg { font-size: 14px; color: #444; background: #f2f2f2; padding: 12px 16px; border-radius: 0 15px 15px 15px; line-height: 1.4; text-align: left; }
            .uta-btn-main { width: 100%; padding: 16px; margin-bottom: 12px; border: none; border-radius: 14px; background: ${CONFIG.COLOR_ACC}; color: white; cursor: pointer; font-size: 16px; font-weight: 700; text-align: center; }
            .uta-input { width: 100%; padding: 16px; border: 1px solid #ddd; border-radius: 14px; box-sizing: border-box; font-size: 15px; margin-bottom: 12px; outline: none; text-align: center; }
            .uta-footer { padding: 15px; text-align: center; font-size: 11px; color: #888; border-top: 1px solid #f0f0f0; }
            .uta-footer a { color: #888; text-decoration: none; font-weight: 700; }
        `;
        document.head.appendChild(style);

        var wa = document.createElement('a');
        wa.id = 'uta-wa-left'; wa.href = `https://wa.me/${CONFIG.WHATSAPP}`; wa.target = '_blank';
        wa.innerHTML = `<div class="uta-wa-btn"><img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" width="18"> WhatsApp</div>`;
        document.body.appendChild(wa);

        var wrap = document.createElement('div');
        wrap.id = 'uta-bot-wrap';
        var welcomeLabel = isVDP ? "¡Hola! Veo que te interesa este <b>"+state.title+"</b>" : "¡Hola! 👋 ¿En qué podemos ayudarte?";

        wrap.innerHTML = `
            <div id="uta-card" class="uta-card">
                <div class="uta-header">
                    <img src="${CONFIG.LOGO_CLIENTE}" class="uta-logo-header">
                    <span id="uta-back-btn" class="uta-back" onclick="window._utaInit()">←</span>
                    <span class="uta-close" onclick="window._utaToggle()">×</span>
                    <h3>${CONFIG.NOMBRE}</h3>
                    <p id="uta-welcome">${welcomeLabel}</p>
                </div>
                <div id="uta-content" class="uta-body"></div>
                <div class="uta-footer">Desarrollado por <a href="${CONFIG.RYT_URL}" target="_blank">RYT AGENCY</a></div>
            </div>
            <div class="uta-trigger" onclick="window._utaToggle()">
                <div class="uta-badge">Ventas <span style="color:#25D366">●</span> En línea</div>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
            </div>
        `;
        document.body.appendChild(wrap);

        window._utaToggle = function() {
            var c = document.getElementById('uta-card');
            state.isOpen = !state.isOpen;
            c.style.display = state.isOpen ? 'block' : 'none';
        };

        window._utaInit = function() {
            document.getElementById('uta-back-btn').style.display = 'none';
            var content = document.getElementById('uta-content');
            if (isVDP) {
                content.innerHTML = `<button class="uta-btn-main" onclick="window._utaForm('¡Sí, me interesa! ✅')">¡Sí, me interesa! ✅</button>`;
            } else {
                content.innerHTML = `
                    <button class="uta-btn-main" onclick="window._utaForm('Comprar coche 🚗')">Comprar coche 🚗</button>
                    <button class="uta-btn-main" onclick="window._utaForm('Vender mi coche 💰')">Vender mi coche 💰</button>
                `;
            }
        };

        window._utaForm = function(intent) {
            state.intent = intent;
            document.getElementById('uta-back-btn').style.display = 'block';
            document.getElementById('uta-content').innerHTML = `
                <div class="uta-agent-row">
                    <img src="${CONFIG.LOGO_CLIENTE}" class="uta-mini-logo">
                    <div class="uta-agent-msg">Genial, completa tus datos y un comercial de nuestro equipo se pondrá en contacto contigo muy pronto.</div>
                </div>
                <input type="text" id="uta-n" class="uta-input" placeholder="Tu nombre">
                <input type="tel" id="uta-p" class="uta-input" placeholder="Tu teléfono">
                <button id="uta-sub" class="uta-btn-main" onclick="window._utaSend()">ENVIAR SOLICITUD</button>
            `;
        };

        window._utaSend = function() {
            var n = document.getElementById('uta-n').value;
            var t = document.getElementById('uta-p').value;
            if(!n || !t) return alert("Por favor, rellena los datos");
            var btn = document.getElementById('uta-sub'); btn.innerText = "PROCESANDO..."; btn.disabled = true;

            var xhr = new XMLHttpRequest();
            xhr.open("POST", CONFIG.WEBHOOK, true);
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                    document.getElementById('uta-back-btn').style.display = 'none';
                    document.getElementById('uta-content').innerHTML = `<div style="text-align:center; padding:20px;"><div style="font-size:35px;">✅</div><p style="font-weight:700; color:#333;">¡Solicitud enviada!</p></div>`;
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
                notes: "Vehículo/Página: " + state.title 
            }));
        };

        window._utaInit();
        setTimeout(() => { if(!state.isOpen) window._utaToggle(); }, 2500);
    }
    if (document.readyState === 'complete') initUtaRYTCloud();
    else window.addEventListener('load', initUtaRYTCloud);
})();
