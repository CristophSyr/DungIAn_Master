import { state } from '../../core/state.js';
import { openFinishModal } from '../../components/modals/satisfaction.js';

const aiSamples = {
  trama: `### 📜 RAMIFICACIONES DEL DESTINO (CONEXIÓN DE TRASFONDOS)

* **Impacto en Corrin Vale (Pícaro):**
  El maestro forjador secuestrado, *Vornak*, fue quien grabó originalmente el emblema del *Cuervo Negro* en la daga robada del padre de Corrin. Vornak revelará que el mercader responde al nombre de 'El Alquimista Pálido'.

* **Impacto en Hermana Elora (Clériga):**
  La *llama sacrílega* de su profecía arde en el foso central de la forja: es fuego alquímico profanado que drena la vitalidad de la montaña para animar el metal.

**Bifurcaciones Tácticas para los Aventureros:**
* **Opción A (Infiltración de Corrin):** Forzar las esclusas de ventilación superiores (Prueba de Destreza / Sigilo CD 14) para cortar los fuelles de la forja sin alertar a los guardias.
* **Opción B (Purificación de Elora):** Realizar un rito de consagración sobre el crisol (Prueba de Religión CD 15) que debilita temporalmente a los autómatas.
* **Opción C (Conflicto Frontal):** Destruir los soportes de madera de la vagoneta central para bloquear la salida del convoy.`,
  
  npc: `### 🐉 STAT BLOCK D&D 5e: MAESTRO FORJADOR VORNAK
*Humanoide Mediano (Enano de las Colinas), Legal Bueno*
___
* **Clase de Armadura (CA):** 14 (Cota de escamas de herrero)
* **Puntos de Golpe (PG):** 38 (5d8 + 15)
* **Velocidad:** 25 pies
___
| FUE | DES | CON | INT | SAB | CAR |
|:---:|:---:|:---:|:---:|:---:|:---:|
| 16 (+3) | 10 (+0) | 16 (+3) | 13 (+1) | 14 (+2) | 9 (-1) |
___
* **Habilidades:** Atletismo +5, Historia +3, Perspicacia +4
* **Sentidos:** Visión en la oscuridad 60 pies, Percepción pasiva 12
* **Idiomas:** Común, Enano
* **Desafío (VD):** 1 (200 PX)
___
**Resistencia Enana.** Vornak tiene ventaja en tiradas de salvación contra veneno.
**Vínculo con Corrin Vale.** Reconoce el estilo de esgrima de Corrin y le entregará una llave secreta de la mina si se gana su confianza.
___
**ACCIONES**
* **Martillo de Fragua.** *Ataque de arma cuerpo a cuerpo:* +5 a impactar, alcance 5 pies, un objetivo. *Impacto:* 7 (1d8 + 3) de daño contundente más 3 (1d6) de daño de fuego.`,
  
  mapa: `### 🗺️ ESPECIFICACIÓN DEL MAPA TÁCTICO: LA FORJA OLVIDADA
*Escala de Cuadrícula: 1 casilla = 5 pies cuadrados (30 x 40 casillas)*
___
* **Zona 1 - El Andén de las Vagonetas (Casillas A1 a G15):**
  - *Terreno Difícil:* Escombros y escoria de hierro. Reduce la velocidad a la mitad.
  - *Cobertura:* Las vagonetas de mineral otorgan Cobertura Media (+2 a la CA y salvaciones de Destreza).

* **Zona 2 - El Crisol Alquímico (Casillas M15 a R25):**
  - *Peligro Ambiental:* Radio de 10 pies emite calor extremo. Una criatura que empiece su turno en el foso sufre 2d6 de daño de fuego.
  - *Mecánica Táctica:* Una palanca de contrapeso en P14 permite liberar vapor caliente (ceguera temporal por 1 asalto).

* **Zona 3 - El Yunque Ancestral (Casillas T28 a Z38):**
  - Plataforma elevada a 10 pies. Otorga Ventaja a tiradores a distancia contra criaturas en el andén.`
};

export function startTimer() {
  state.secondsElapsed = 0;
  if (state.timerInterval) clearInterval(state.timerInterval);
  
  state.timerInterval = setInterval(() => {
    state.secondsElapsed++;
    const m = Math.floor(state.secondsElapsed / 60).toString().padStart(2, '0');
    const s = (state.secondsElapsed % 60).toString().padStart(2, '0');
    document.getElementById('timer-display').innerText = `${m}:${s}`;
  }, 1000);
}

export function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
  }
}

export function setGenerationTab(tabName) {
  state.currentTab = tabName;
  
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('bg-dnd-red', 'text-dnd-goldLight', 'border-dnd-gold');
    btn.classList.add('bg-black/60', 'text-stone-400', 'border-stone-800');
  });
  
  const activeBtn = document.getElementById(`tab-btn-${tabName}`);
  activeBtn.classList.remove('bg-black/60', 'text-stone-400', 'border-stone-800');
  activeBtn.classList.add('bg-dnd-red', 'text-dnd-goldLight', 'border-dnd-gold');

  const label = document.getElementById('tab-action-label');
  const btnText = document.getElementById('ai-btn-text');
  
  if (tabName === 'trama') {
    label.innerText = 'Conexión de Trama y Ramas No Lineales';
    btnText.innerText = 'Consultar al Oráculo IA';
  } else if (tabName === 'npc') {
    label.innerText = 'Generación de Stat Block 5e';
    btnText.innerText = 'Forjar NPC Mágico';
  } else if (tabName === 'mapa') {
    label.innerText = 'Diseño de Mapa Táctico Grid 5ft';
    btnText.innerText = 'Trazar Plano de Batalla';
  }
  
  document.getElementById('ai-editor').value = '';
}

export function simulateAIGeneration() {
  document.getElementById('ai-loader').classList.remove('hidden');
  document.getElementById('btn-generate').disabled = true;
  
  setTimeout(() => {
    document.getElementById('ai-editor').value = aiSamples[state.currentTab];
    document.getElementById('ai-loader').classList.add('hidden');
    document.getElementById('btn-generate').disabled = false;
  }, 1200);
}

export function addValidatedElement() {
  const content = document.getElementById('ai-editor').value.trim();
  const c1 = document.getElementById('check-c1').checked;
  const c2 = document.getElementById('check-c2').checked;
  const c3 = document.getElementById('check-c3').checked;

  if (!content) {
    alert("No hay pergamino que sellar. Pide primero una propuesta a la IA.");
    return;
  }
  
  if (!c1 || !c2 || !c3) {
    alert("El Dungeon Master debe validar los 3 criterios de la rúbrica (M2) para sellar el elemento.");
    return;
  }

  let typeLabel = "Elemento";
  let typeColor = "text-stone-400";
  if (state.currentTab === 'trama') { typeLabel = "Trama / Ramificación"; typeColor = "text-purple-400"; }
  if (state.currentTab === 'npc') { typeLabel = "Stat Block 5e"; typeColor = "text-red-400"; }
  if (state.currentTab === 'mapa') { typeLabel = "Mapa Táctico"; typeColor = "text-blue-400"; }

  state.validatedElementsList.push({ type: typeLabel, content: content });
  state.validatedElementsCount++;

  document.getElementById('valid-count-display').innerText = state.validatedElementsCount;
  document.getElementById('validated-badge').innerText = `${state.validatedElementsCount} elementos`;

  const emptyHint = document.getElementById('empty-elements-hint');
  if (emptyHint) emptyHint.style.display = 'none';

  const shortPreview = content.substring(0, 70).replace(/\n/g, ' ') + '...';

  const elHtml = `
    <div class="p-3 rounded border border-dnd-gold/50 bg-[#e8ddbe] shadow-sm animate-fade-in">
      <div class="flex items-center justify-between mb-1">
        <span class="text-[10px] font-dnd-heading font-bold uppercase tracking-wider ${typeColor} bg-black/80 px-1.5 py-0.5 rounded">${typeLabel}</span>
        <span class="text-[10px] text-dnd-red font-bold flex items-center gap-1"><span>✓</span> DM Aprobado</span>
      </div>
      <p class="text-xs font-dnd-body text-dnd-ink leading-snug line-clamp-2">${shortPreview}</p>
    </div>
  `;

  document.getElementById('elements-list').insertAdjacentHTML('beforeend', elHtml);
  document.getElementById('ai-editor').value = '';
}

export function initWorkspace() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      setGenerationTab(e.target.getAttribute('data-tab'));
    });
  });

  const btnGenerate = document.getElementById('btn-generate');
  if (btnGenerate) btnGenerate.addEventListener('click', simulateAIGeneration);

  const btnAdd = document.getElementById('btn-add-validated');
  if (btnAdd) btnAdd.addEventListener('click', addValidatedElement);

  const btnConclude = document.getElementById('btn-conclude-prep');
  if (btnConclude) btnConclude.addEventListener('click', openFinishModal);
}
