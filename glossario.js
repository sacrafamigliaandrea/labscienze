/* ============================================
   LABORATORIO SCIENTIFICO — GLOSSARIO CONDIVISO
   Sistema ipertestuale + stelle + livello
   ============================================ */

// === LIVELLO COMPLESSITÀ ===
let currentLevel = 1;
(function(){
  const params = new URLSearchParams(window.location.search);
  const lv = parseInt(params.get('livello'));
  if(lv >= 1 && lv <= 3) currentLevel = lv;
})();

function setLevel(lv){
  currentLevel = lv;
  document.querySelectorAll('.complexity-btn').forEach(b =>
    b.classList.toggle('active', +b.dataset.level === lv)
  );
  // Aggiorna URL senza ricaricare
  const url = new URL(window.location);
  url.searchParams.set('livello', lv);
  history.replaceState(null, '', url);
}

function getLevelName(){
  return currentLevel === 1 ? '3\u00aa-4\u00aa Primaria' : currentLevel === 2 ? '5\u00aa Primaria \u2014 1\u00aa Sec.' : '2\u00aa-3\u00aa Secondaria';
}
function getLevelClass(){
  return currentLevel === 1 ? 'l1' : currentLevel === 2 ? 'l2' : 'l3';
}

// === STELLE ===
function initStars(count){
  const c = document.getElementById('starsContainer');
  if(!c) return;
  for(let i = 0; i < (count||80); i++){
    const s = document.createElement('div');
    s.className = 'star';
    const sz = Math.random()*2.2 + 0.4;
    s.style.cssText = `width:${sz}px;height:${sz}px;left:${Math.random()*100}%;top:${Math.random()*100}%;--dur:${Math.random()*3+1}s;animation-delay:${Math.random()*3}s`;
    c.appendChild(s);
  }
}

// === GLOSSARIO COMPLETO ===
const GLOSSARIO = {

  // ─── NUCLEO 1: MATERIA E TRASFORMAZIONI ───
  'stati-materia': { title: 'Gli stati della materia', levels: {
    1: 'La materia esiste in tre forme: solida (come un sasso, le particelle stanno ferme e vicine), liquida (come l\'acqua, le particelle scivolano una sull\'altra) e gassosa (come l\'aria, le particelle volano libere in tutte le direzioni). Se riscaldi un solido diventa liquido, e poi gas!',
    2: 'I tre stati classici dipendono dall\'energia cinetica delle particelle. Nei solidi le molecole vibrano attorno a posizioni fisse (reticolo cristallino o struttura amorfa). Nei liquidi hanno energia sufficiente per muoversi ma restano coese. Nei gas l\'energia supera le forze intermolecolari e le particelle si muovono liberamente. Esistono anche altri stati: plasma (gas ionizzato), condensato di Bose-Einstein.',
    3: 'La transizione tra stati è descritta dai diagrammi di fase (P-T). Il punto triplo è la condizione in cui coesistono tutti e tre gli stati (per l\'acqua: 273,16 K e 611,73 Pa). Il punto critico segna la temperatura sopra la quale non esiste distinzione liquido-gas (acqua: 647 K, 22,06 MPa). Le transizioni di fase sono del primo ordine (con calore latente: fusione, evaporazione) o del secondo ordine (senza calore latente: transizioni magnetiche).'
  }},
  'particelle': { title: 'Le particelle della materia', levels: {
    1: 'Tutto quello che ci circonda è fatto di particelle piccolissime, invisibili a occhio nudo. Anche un bicchiere d\'acqua contiene miliardi e miliardi di particelle! Queste particelle si muovono sempre: piano nel ghiaccio, più veloce nell\'acqua, velocissime nel vapore.',
    2: 'Le particelle sono atomi e molecole. Un atomo è la più piccola unità di un elemento chimico; una molecola è un gruppo di atomi legati insieme. L\'acqua (H₂O) è fatta di molecole composte da 2 atomi di idrogeno e 1 di ossigeno. La temperatura misura l\'energia cinetica media delle particelle: più calore = più movimento.',
    3: 'Il modello cinetico-molecolare descrive quantitativamente il comportamento dei gas: PV = nRT (gas ideale). L\'energia cinetica media è E = 3/2 kT dove k è la costante di Boltzmann. La distribuzione delle velocità segue la curva di Maxwell-Boltzmann. Nei solidi, il modello di Debye descrive le vibrazioni reticolari come fononi con una densità di stati caratteristica.'
  }},
  'passaggi-stato': { title: 'I passaggi di stato', levels: {
    1: 'Quando il ghiaccio si scalda, si scioglie e diventa acqua (fusione). Se continui a scaldare, l\'acqua diventa vapore (evaporazione). E al contrario: se raffreddi il vapore diventa acqua (condensazione), e poi ghiaccio (solidificazione). Anche la brina sul vetro è un passaggio di stato: sublimazione!',
    2: 'I passaggi di stato avvengono a temperature precise per ogni sostanza: l\'acqua fonde a 0°C e bolle a 100°C (a pressione atmosferica). Durante il passaggio, la temperatura resta costante anche se continui a fornire calore: l\'energia serve a rompere i legami tra molecole, non a riscaldare. Questa energia si chiama calore latente.',
    3: 'Il calore latente di fusione dell\'acqua è 334 J/g, di vaporizzazione 2260 J/g. La curva di riscaldamento mostra plateau orizzontali durante le transizioni di fase. L\'equazione di Clausius-Clapeyron dP/dT = L/(TΔV) descrive come la temperatura di transizione varia con la pressione. L\'acqua è anomala: la pendenza della curva solido-liquido è negativa (il ghiaccio galleggia perché è meno denso dell\'acqua liquida, conseguenza dei legami idrogeno).'
  }},
  'miscugli': { title: 'Miscugli e soluzioni', levels: {
    1: 'Se mescoli sale e acqua, il sale "sparisce" ma l\'acqua diventa salata: hai fatto una soluzione! Se mescoli sabbia e acqua, la sabbia si vede ancora: è un miscuglio eterogeneo. Puoi separare i miscugli con filtri, evaporazione o setacci.',
    2: 'Le soluzioni sono miscugli omogenei: il soluto si distribuisce uniformemente nel solvente a livello molecolare. La solubilità dipende dalla temperatura (generalmente aumenta col calore per i solidi) e dalla natura delle sostanze (il simile scioglie il simile). I miscugli eterogenei possono essere separati per filtrazione, decantazione, centrifugazione o distillazione.',
    3: 'La solubilità è governata dall\'energia libera di Gibbs: ΔG = ΔH - TΔS. Un processo di dissoluzione è favorito quando ΔG < 0. La concentrazione si esprime in molarità (mol/L), molalità (mol/kg solvente) o frazione molare. Le proprietà colligative (innalzamento ebullioscopio, abbassamento crioscopico, pressione osmotica) dipendono solo dal numero di particelle di soluto, non dalla loro natura.'
  }},
  'reazione-chimica': { title: 'Le reazioni chimiche', levels: {
    1: 'In una reazione chimica, le sostanze si trasformano in qualcosa di nuovo! Se mischi bicarbonato e aceto, fanno le bolle: è una reazione che produce un gas (anidride carbonica). La ruggine sul ferro è un\'altra reazione chimica, solo molto più lenta.',
    2: 'In una reazione, i legami tra atomi si rompono e se ne formano di nuovi. La legge di conservazione della massa (Lavoisier) dice che nessun atomo si crea o si distrugge: i reagenti si trasformano in prodotti con gli stessi atomi riorganizzati. Le reazioni possono essere esotermiche (rilasciano calore, come la combustione) o endotermiche (assorbono calore).',
    3: 'Il bilanciamento stechiometrico garantisce la conservazione della massa e della carica. La velocità di reazione dipende dalla concentrazione (legge cinetica), dalla temperatura (equazione di Arrhenius: k = A·e^(-Ea/RT)) e dalla presenza di catalizzatori. L\'equilibrio chimico è descritto dalla costante K = [prodotti]/[reagenti] (legge di azione di massa). Il principio di Le Chatelier predice la risposta del sistema a perturbazioni.'
  }},
  'atomo': { title: 'L\'atomo', levels: {
    1: 'L\'atomo è il mattoncino più piccolo di cui è fatta la materia. È talmente piccolo che in una goccia d\'acqua ce ne sono più di un miliardo di miliardi! Ogni materiale è fatto di un tipo diverso di atomo: il ferro è fatto di atomi di ferro, l\'oro di atomi d\'oro.',
    2: 'L\'atomo ha un nucleo centrale (protoni positivi + neutroni neutri) circondato da elettroni negativi che orbitano intorno. Il numero di protoni definisce l\'elemento chimico (idrogeno = 1, ossigeno = 8, ferro = 26). Gli atomi si legano tra loro per formare molecole: l\'acqua H₂O ha 2 atomi di idrogeno e 1 di ossigeno.',
    3: 'Il modello quantistico descrive gli elettroni come onde di probabilità (orbitali), non orbite definite. I numeri quantici (n, l, ml, ms) specificano lo stato di ogni elettrone. Il principio di esclusione di Pauli limita a 2 gli elettroni per orbitale. La configurazione elettronica determina le proprietà chimiche e la posizione nella tavola periodica (la periodicità nasce dal riempimento degli orbitali s, p, d, f).'
  }},
  'tavola-periodica': { title: 'La tavola periodica', levels: {
    1: 'La tavola periodica è come un grande album di figurine: contiene tutti i tipi di atomi (elementi) che esistono nell\'universo! Ce ne sono 118. Sono ordinati per peso, e quelli nella stessa colonna si comportano in modo simile.',
    2: 'Mendeleev nel 1869 organizzò gli elementi per massa atomica crescente, notando che le proprietà chimiche si ripetono periodicamente. Oggi sono ordinati per numero atomico (numero di protoni). I gruppi (colonne) raggruppano elementi con proprietà simili: i metalli alcalini (gruppo 1), gli alogeni (gruppo 17), i gas nobili (gruppo 18). I periodi (righe) corrispondono ai livelli energetici degli elettroni.',
    3: 'La periodicità chimica emerge dalla struttura elettronica: elementi dello stesso gruppo hanno la stessa configurazione degli elettroni di valenza. Le tendenze periodiche (raggio atomico, energia di ionizzazione, elettronegatività, affinità elettronica) si spiegano con l\'effetto di schermaggio nucleare e la penetrazione degli orbitali. L\'elettronegatività di Pauling scala da 0,7 (Cs) a 4,0 (F). I blocchi s, p, d, f corrispondono agli orbitali in fase di riempimento.'
  }},

  // ─── NUCLEO 2: FORZE, MOVIMENTO ED ENERGIA ───
  'forza': { title: 'Le forze', levels: {
    1: 'Una forza è una spinta o una tirata. Quando calci un pallone, gli dai una forza. La gravità è una forza che ti tira verso il basso. Le forze possono far muovere le cose, fermarle, o cambiargli direzione.',
    2: 'Newton ha formulato tre leggi del moto. La prima: un oggetto fermo resta fermo (e uno in moto resta in moto) finché una forza non agisce su di esso (inerzia). La seconda: F = m·a, la forza è uguale alla massa per l\'accelerazione. La terza: ad ogni azione corrisponde una reazione uguale e contraria. L\'unità di misura è il Newton (N).',
    3: 'La meccanica newtoniana è un caso limite della relatività ristretta (v << c) e della meccanica quantistica (scale macroscopiche). Le forze fondamentali sono quattro: gravitazionale (portata infinita, sempre attrattiva), elettromagnetica (portata infinita, attrattiva/repulsiva), nucleare forte (portata ~10⁻¹⁵ m, tiene insieme i nuclei) e nucleare debole (portata ~10⁻¹⁸ m, responsabile del decadimento beta). Il Modello Standard unifica le ultime tre.'
  }},
  'energia': { title: 'L\'energia', levels: {
    1: 'L\'energia è ciò che permette alle cose di funzionare, muoversi e cambiare. Il cibo ti dà energia per correre. La benzina dà energia alla macchina. Il sole dà energia alle piante. L\'energia non si crea e non si distrugge, si trasforma!',
    2: 'L\'energia esiste in molte forme: cinetica (del movimento), potenziale (della posizione), termica (del calore), chimica (nei legami molecolari), elettrica, luminosa, nucleare. La legge di conservazione dell\'energia dice che l\'energia totale di un sistema isolato resta costante: si trasforma da una forma all\'altra ma non si perde (primo principio della termodinamica).',
    3: 'L\'energia è definita come la capacità di compiere lavoro: W = F·s·cos(θ). L\'energia meccanica E = Ec + Ep si conserva nei sistemi conservativi. Il teorema dell\'energia cinetica: W_tot = ΔEc. Il primo principio della termodinamica: ΔU = Q - W. Il secondo principio (Clausius/Kelvin) introduce l\'entropia S: in ogni processo reale l\'entropia totale aumenta (ΔS_universo ≥ 0), spiegando perché le trasformazioni energetiche hanno sempre un rendimento < 100%.'
  }},
  'leva': { title: 'Le leve', levels: {
    1: 'Una leva è una sbarra rigida che gira intorno a un punto fisso (fulcro). Ti aiuta a spostare cose pesanti con poca forza! Un\'altalena è una leva. Anche le forbici e la carriola sono leve.',
    2: 'La legge della leva: F₁·b₁ = F₂·b₂ (forza per braccio). Esistono tre generi: 1° genere (fulcro tra forza e resistenza: altalena, forbici), 2° genere (resistenza tra fulcro e forza: carriola, schiaccianoci), 3° genere (forza tra fulcro e resistenza: pinzetta, braccio umano). Il vantaggio meccanico è il rapporto tra i bracci.',
    3: 'La leva è un\'applicazione del momento torcente (τ = r × F). L\'equilibrio statico richiede: ΣF = 0 e Στ = 0. Il vantaggio meccanico VM = F_resistente/F_motrice = b_motore/b_resistente. Il principio dei lavori virtuali generalizza: in equilibrio, il lavoro totale per uno spostamento virtuale è nullo (δW = 0). Le macchine semplici (leva, piano inclinato, puleggia, vite) non creano energia: riducono la forza necessaria aumentando lo spostamento.'
  }},
  'circuito': { title: 'I circuiti elettrici', levels: {
    1: 'Un circuito è un percorso chiuso dove scorre l\'elettricità, come l\'acqua in un tubo. Serve una batteria (che spinge l\'elettricità), dei fili (dove scorre) e un apparecchio (lampadina, motorino). Se il circuito è aperto (interrotto), la corrente non scorre!',
    2: 'La corrente elettrica è il flusso di cariche (elettroni nei metalli). La tensione (Volt) è la "spinta" data dalla batteria. La resistenza (Ohm) è l\'opposizione al flusso. La legge di Ohm: V = I·R (tensione = corrente × resistenza). In un circuito in serie la corrente è uguale ovunque; in parallelo si divide tra i rami.',
    3: 'La corrente I = dQ/dt, dove Q è la carica. La potenza P = V·I = I²R = V²/R. Le leggi di Kirchhoff: la somma delle correnti in un nodo è zero (KCL, conservazione della carica); la somma delle tensioni in un anello è zero (KVL, conservazione dell\'energia). La resistività ρ dipende dal materiale e dalla temperatura: R = ρL/A. I condensatori immagazzinano energia nel campo elettrico (E = ½CV²), gli induttori nel campo magnetico (E = ½LI²).'
  }},
  'onde': { title: 'Le onde', levels: {
    1: 'Quando lanci un sasso nell\'acqua, si formano cerchi che si allargano: sono onde! Anche il suono è un\'onda (dell\'aria) e la luce è un\'onda (elettromagnetica). Le onde trasportano energia senza spostare la materia.',
    2: 'Le onde si descrivono con: ampiezza (altezza → intensità), frequenza (quante volte oscillano al secondo, in Hz → tono del suono, colore della luce), lunghezza d\'onda (distanza tra due creste), velocità (v = λ·f). Le onde meccaniche (suono, onde marine) hanno bisogno di un mezzo; le onde elettromagnetiche (luce, radio) no.',
    3: 'L\'equazione d\'onda: ∂²ψ/∂x² = (1/v²)·∂²ψ/∂t². Le onde possono interferire (costruttivamente o distruttivamente), diffrangersi (aggirano ostacoli), riflettersi e rifrangersi (legge di Snell: n₁sinθ₁ = n₂sinθ₂). L\'effetto Doppler cambia la frequenza percepita per sorgente/osservatore in moto relativo: f\' = f·(v±v_o)/(v∓v_s). Le onde stazionarie si formano per sovrapposizione di onde viaggianti in direzioni opposte.'
  }},
  'luce': { title: 'La luce', levels: {
    1: 'La luce è ciò che ci permette di vedere! Viaggia velocissima (la cosa più veloce che esiste) e va dritta. Quando colpisce uno specchio rimbalza (riflessione), quando passa dall\'aria all\'acqua si piega (rifrazione). Un prisma separa la luce bianca nei colori dell\'arcobaleno!',
    2: 'La luce è un\'onda elettromagnetica con lunghezza d\'onda tra 380 nm (viola) e 700 nm (rosso). Viaggia a 300.000 km/s nel vuoto. La riflessione segue la legge: angolo di incidenza = angolo di riflessione. La rifrazione (legge di Snell) spiega perché le lenti funzionano. La luce bianca è la sovrapposizione di tutti i colori visibili.',
    3: 'La dualità onda-corpuscolo: la luce si comporta sia come onda (interferenza, diffrazione) sia come particella — il fotone, con energia E = hf (Planck). La velocità della luce nel vuoto c = 299.792.458 m/s è una costante fondamentale e il limite di velocità dell\'universo (relatività ristretta). Lo spettro elettromagnetico si estende dalle onde radio (λ ~ km) ai raggi gamma (λ ~ pm). L\'ottica geometrica è il limite dell\'ottica ondulatoria per λ → 0.'
  }},

  // ─── NUCLEO 3: ESSERI VIVENTI E CORPO UMANO ───
  'cellula': { title: 'La cellula', levels: {
    1: 'La cellula è il mattoncino più piccolo di tutti gli esseri viventi, come un LEGO microscopico. Il tuo corpo è fatto di migliaia di miliardi di cellule! Ogni cellula ha una membrana che la racchiude, un nucleo che contiene le istruzioni, e un citoplasma dove avvengono le reazioni chimiche.',
    2: 'Esistono cellule procariote (senza nucleo vero, come i batteri) ed eucariote (con nucleo, come le nostre). Le cellule animali e vegetali eucariote differiscono: quelle vegetali hanno parete cellulare rigida, cloroplasti (per la fotosintesi) e un grande vacuolo centrale. Gli organelli principali: mitocondri (energia), reticolo endoplasmatico (sintesi), apparato di Golgi (imballaggio), ribosomi (produzione proteine).',
    3: 'La teoria cellulare (Schleiden, Schwann, Virchow): ogni essere vivente è composto da cellule; la cellula è l\'unità funzionale della vita; ogni cellula deriva da una cellula preesistente. La membrana plasmatica è un doppio strato fosfolipidico con proteine integrate (modello a mosaico fluido). Il trasporto attraverso la membrana può essere passivo (diffusione, osmosi) o attivo (contro gradiente, con consumo di ATP). La mitosi produce cellule identiche; la meiosi cellule aploidi per la riproduzione.'
  }},
  'fotosintesi': { title: 'La fotosintesi', levels: {
    1: 'Le piante sono come piccole fabbriche: prendono luce dal sole, acqua dalle radici e anidride carbonica dall\'aria, e producono il loro cibo (glucosio) più l\'ossigeno che noi respiriamo. Senza le piante, non ci sarebbe ossigeno!',
    2: 'La fotosintesi avviene nei cloroplasti, organelli che contengono clorofilla (pigmento verde). La reazione complessiva: 6CO₂ + 6H₂O + luce → C₆H₁₂O₆ + 6O₂. È il processo inverso della respirazione cellulare. La fotosintesi è alla base di quasi tutte le catene alimentari: le piante sono i "produttori" primari.',
    3: 'La fotosintesi ha due fasi: la fase luminosa (nei tilacoidi, fotosistemi I e II, catena di trasporto elettronico, fotolisi dell\'acqua → O₂, sintesi di ATP e NADPH) e il ciclo di Calvin (nello stroma, fissazione del CO₂ da RuBisCO, riduzione, rigenerazione del RuBP). L\'efficienza è ~3-6%. Le piante C₃, C₄ e CAM differiscono nel meccanismo di fissazione del carbonio, adattamento a diversi climi.'
  }},
  'genetica': { title: 'La genetica', levels: {
    1: 'Hai gli occhi di tua mamma e il sorriso di tuo papà? È la genetica! I genitori passano ai figli delle "istruzioni" chiamate geni, che decidono come saremo: colore degli occhi, dei capelli, altezza e molto altro.',
    2: 'Mendel scoprì le leggi dell\'ereditarietà incrociando piante di pisello. Ogni carattere è controllato da geni (segmenti di DNA) in due copie (alleli). Un allele può essere dominante (si manifesta sempre) o recessivo (si manifesta solo se in doppia copia). Il genotipo è la combinazione di alleli; il fenotipo è l\'aspetto visibile. Il quadrato di Punnett prevede le probabilità nei figli.',
    3: 'Il DNA è una doppia elica (Watson e Crick, 1953) di nucleotidi (A-T, G-C). La replicazione è semiconservativa. La trascrizione produce mRNA dal DNA; la traduzione produce proteine dall\'mRNA (codice genetico: codoni di 3 basi → aminoacidi). Le mutazioni possono essere puntiformi, per delezione, inserzione o traslocazione. L\'epigenetica studia modificazioni ereditabili dell\'espressione genica senza cambio nella sequenza del DNA.'
  }},
  'ecosistema': { title: 'L\'ecosistema', levels: {
    1: 'Un ecosistema è una comunità di esseri viventi (animali, piante, funghi) che vivono insieme in un ambiente (bosco, lago, deserto). Tutti dipendono gli uni dagli altri: le piante nutrono gli erbivori, gli erbivori nutrono i carnivori. È una catena!',
    2: 'L\'ecosistema ha componenti biotiche (viventi: produttori, consumatori, decompositori) e abiotiche (non viventi: acqua, suolo, luce, temperatura). L\'energia fluisce in una direzione: sole → produttori → consumatori → decompositori. La materia invece cicla: ciclo del carbonio, dell\'azoto, dell\'acqua. La biodiversità misura la varietà di specie e rende l\'ecosistema più resiliente.',
    3: 'La piramide ecologica mostra la perdita di energia (~90% per livello trofico): la produttività primaria netta è ~1-5% dell\'energia solare incidente. La dinamica delle popolazioni è modellata dalle equazioni di Lotka-Volterra (predatore-preda). La capacità portante K limita la crescita logistica: dN/dt = rN(1-N/K). La successione ecologica porta da comunità pioniere a comunità climax. L\'indice di Shannon H\' = -Σ(pi·ln(pi)) quantifica la diversità.'
  }},

  // ─── NUCLEO 4: SCIENZE DELLA TERRA E AMBIENTE ───
  'ciclo-acqua': { title: 'Il ciclo dell\'acqua', levels: {
    1: 'L\'acqua fa un viaggio continuo: il sole scalda il mare, l\'acqua evapora e sale formando le nuvole, le nuvole si raffreddano e piove, l\'acqua dei fiumi torna al mare. E ricomincia! È lo stesso da miliardi di anni.',
    2: 'Il ciclo idrologico comprende: evaporazione (dai corpi idrici), traspirazione (dalle piante), condensazione (formazione nuvole), precipitazione (pioggia, neve), deflusso superficiale e infiltrazione nel suolo. Le acque sotterranee possono riemergere come sorgenti. L\'energia motrice è il Sole (evaporazione) e la gravità (precipitazione, deflusso).',
    3: 'Il bilancio idrologico: P = E + R + ΔS (Precipitazione = Evapotraspirazione + Deflusso + Variazione stoccaggio). L\'evapotraspirazione potenziale si stima con l\'equazione di Penman-Monteith. Il tempo di residenza varia enormemente: ~9 giorni in atmosfera, ~2-6 mesi nei fiumi, ~2.500 anni negli oceani, ~10.000 anni nelle calotte glaciali. Il ciclo dell\'acqua è accoppiato al ciclo energetico terrestre tramite il calore latente di vaporizzazione.'
  }},
  'vulcano': { title: 'I vulcani', levels: {
    1: 'Un vulcano è una montagna con un buco in cima da cui può uscire roccia fusa caldissima (lava), cenere e gas. Succede perché sotto la superficie terrestre fa molto caldo e le rocce si sciolgono! I vulcani possono anche formare nuove isole.',
    2: 'Il magma è roccia fusa che si forma nel mantello terrestre (fino a 1300°C). Risale attraverso fratture nella crosta. In superficie diventa lava. I vulcani si concentrano ai bordi delle placche tettoniche (Anello di Fuoco del Pacifico) e nei punti caldi (hot spot, come le Hawaii). Tipi: scudo (lava fluida, come l\'Etna), stratovulcano (esplosivo, come il Vesuvio).',
    3: 'La viscosità del magma (dipendente da composizione SiO₂, temperatura e contenuto di gas) determina il tipo di eruzione: magmi basaltici (bassa viscosità, 45-52% SiO₂) → eruzioni effusive; magmi riolitici (alta viscosità, >70% SiO₂) → eruzioni esplosive. L\'indice di esplosività vulcanica (VEI) va da 0 a 8 (scala logaritmica). La tettonica delle placche spiega la distribuzione: margini divergenti (dorsali), convergenti (subduzione) e intraplacca (pennacchi del mantello).'
  }},
  'effetto-serra': { title: 'L\'effetto serra', levels: {
    1: 'La Terra è avvolta da un "coperta" invisibile di gas che trattiene il calore del Sole, come una serra per le piante. Senza, la Terra sarebbe ghiacciata (-18°C)! Ma se aggiungiamo troppi gas serra (bruciando carburanti), la coperta diventa troppo spessa e la Terra si scalda troppo.',
    2: 'I gas serra (CO₂, CH₄, N₂O, vapor acqueo) sono trasparenti alla luce solare ma assorbono la radiazione infrarossa emessa dalla Terra, riscaldando l\'atmosfera. L\'effetto serra naturale mantiene la temperatura media a ~15°C. Le attività umane (combustibili fossili, deforestazione, allevamento) hanno aumentato la CO₂ da 280 ppm (pre-industriale) a oltre 420 ppm, causando il riscaldamento globale.',
    3: 'Il bilancio radiativo terrestre: la Terra riceve ~340 W/m² dal Sole e riemette la stessa quantità. I gas serra creano un forcing radiativo: ΔF = 5,35·ln(C/C₀) W/m² per la CO₂. La sensibilità climatica all\'equilibrio (ECS) è stimata 2,5-4°C per raddoppio di CO₂. I feedback positivi (albedo ghiaccio, vapore acqueo) amplificano il riscaldamento. I modelli GCM (General Circulation Models) accoppiano atmosfera, oceani, ghiacci e biosfera per le proiezioni climatiche.'
  }},

  // ─── NUCLEO 5: ASTRONOMIA E SPAZIO ───
  'artemis': { title: 'Il programma Artemis', levels: {
    1: 'Artemis è il programma della NASA per riportare gli esseri umani sulla Luna. Il nome viene dalla dea greca della Luna. Il primo volo con equipaggio, Artemis II, è partito il 1° aprile 2026.',
    2: 'Artemis è il successore del programma Apollo (1961-1972). Prevede una presenza permanente sulla Luna con la stazione orbitale Gateway. Artemis I (2022) ha testato Orion senza equipaggio; Artemis II (2026) è il primo volo con astronauti; Artemis III porterà il primo allunaggio dal 1972.',
    3: 'Il programma si basa su: SLS (8,8 milioni di libbre di spinta), capsula Orion con modulo di servizio ESA, stazione Gateway in orbita NRHO cislunare. Integra SpaceX (lander HLS), ESA, CSA, JAXA. Architettura a complessità crescente verso Marte.'
  }},
  'astronauti': { title: 'L\'equipaggio di Artemis II', levels: {
    1: 'Quattro astronauti hanno viaggiato verso la Luna: Reid Wiseman (comandante), Victor Glover (pilota), Christina Koch e Jeremy Hansen. Christina Koch è diventata la donna più lontana dalla Terra!',
    2: 'Tre NASA + uno CSA (canadese). Wiseman: ex pilota della Marina. Glover: veterano ISS. Koch: record femminile di permanenza nello spazio. Hansen: primo canadese oltre l\'orbita terrestre.',
    3: 'Selezione per ridondanza operativa: ogni membro addestrato per i compiti critici degli altri. Wiseman/Glover: navigazione e manovre. Koch: osservazioni scientifiche. Hansen: comunicazioni ed esperimenti. Turni durante le 7 ore di sorvolo.'
  }},
  'orbite': { title: 'Le orbite', levels: {
    1: 'Un\'orbita è il percorso che un oggetto fa intorno a un altro per la gravità — come una palla in una ciotola. La Luna orbita intorno alla Terra, la Terra intorno al Sole.',
    2: 'Un oggetto in orbita "cade" continuamente ma la velocità laterale lo fa curvare. Troppo lento → cade; giusta → circolare; più veloce → ellittica; ancora più veloce → fuga.',
    3: 'Leggi di Keplero: ellissi col corpo centrale in un fuoco; raggio vettore spazza aree uguali; T² ∝ a³. Velocità circolare v = √(GM/r). Velocità di fuga v = √(2GM/r).'
  }},
  'gravita': { title: 'La gravità', levels: {
    1: 'La gravità è la forza che ci tiene a terra e fa cadere le mele. Più una cosa è pesante, più attira.',
    2: 'Newton: F = G·m₁·m₂/r². Sulla Terra ~9,8 m/s², sulla Luna ~1,6 m/s² (un sesto).',
    3: 'Einstein (1915): non è una forza ma curvatura dello spaziotempo. Geodetiche nello spaziotempo curvo. Spiega precessione di Mercurio, onde gravitazionali, dilatazione temporale.'
  }},
  'lato-nascosto': { title: 'Il lato nascosto della Luna', levels: {
    1: 'La Luna mostra sempre la stessa faccia! Il "lato nascosto" non lo vediamo mai dalla Terra. Artemis II l\'ha sorvolato e fotografato.',
    2: 'Rotazione sincrona: stesso tempo per ruotare su sé stessa e orbitare (~27,3 giorni). Il lato nascosto ha più crateri, meno mari basaltici, crosta più spessa.',
    3: 'Blocco mareale. Asimmetria crostale: lato vicino ~30 km → maria basaltici; lato nascosto ~50 km. Equipaggio ha documentato bacino Hertzsprung e cratere Vavilov.'
  }},
  'traiettoria-ritorno': { title: 'Traiettoria a ritorno libero', levels: {
    1: 'Come una pallina su una rampa: sale, gira e torna giù da sola. Orion ha fatto lo stesso intorno alla Luna!',
    2: 'Sfrutta la gravità lunare per tornare senza motori. Piano di sicurezza usato anche da Apollo 13 nel 1970.',
    3: 'Dopo TLI (Δv ≈ 3,1 km/s), flyby a ~130 km. Periodo ~10 giorni. Possibilità di abort diretto nelle prime fasi della costa translunare.'
  }},
  'eclissi': { title: 'Eclissi solare', levels: {
    1: 'La Luna si mette tra Terra e Sole facendo ombra. Artemis II l\'ha vista per quasi un\'ora!',
    2: 'Dalla Terra max ~7,5 min. Da vicino alla Luna, la Luna appare enorme → 54 minuti di totalità, corona visibile.',
    3: 'θ_Sole dalla Terra ≈ 0,53°, θ_Luna ≈ 0,52°. Da 130 km: θ_Luna ≈ 170° → totalità estesa.'
  }},
  'orbita-circolare': { title: 'Orbita circolare', levels: {
    1: 'Quando un satellite gira sempre alla stessa distanza, come una giostra!',
    2: 'Forza gravitazionale bilanciata dalla centrifuga. ISS: ~7,7 km/s a 400 km.',
    3: 'v = √(GM/r), e = 0. E = -GM/(2r). T = 2π√(r³/GM).'
  }},
  'orbita-ellittica': { title: 'Orbita ellittica', levels: {
    1: 'Come un ovale: a volte vicino (veloce), a volte lontano (piano).',
    2: 'Keplero: ellissi col Sole in un fuoco. Accelera al perigeo, rallenta all\'apogeo.',
    3: '0 < e < 1. r = a(1-e²)/(1+e·cosθ). E = -GM/(2a). Hohmann: Δv minimo per cambio orbita.'
  }},
  'velocita-fuga': { title: 'Velocità di fuga', levels: {
    1: 'Se lanci fortissimo, la palla non torna più! Per la Terra serve ~40.000 km/h.',
    2: 'Dalla Terra ~11,2 km/s; dalla Luna ~2,4 km/s; da Giove ~60 km/s.',
    3: 'v = √(2GM/r). Parabola: e=1, E=0. Iperbole: e>1, C₃ = v∞².'
  }},
  'fionda': { title: 'Fionda gravitazionale', levels: {
    1: 'Le sonde "rimbalzano" sulla gravità dei pianeti per andare più veloci, gratis!',
    2: 'Rispetto al pianeta: stessa velocità in entrata e uscita. Rispetto al Sole: guadagno. Voyager 2: 4 fionde.',
    3: 'Deflessione elastica nel riferimento del pianeta. Δv max = 2·V_pianeta. Patched conic approximation.'
  }},
  'orion': { title: 'La navicella Orion', levels: {
    1: 'La capsula NASA per lo spazio profondo: 4 finestrini, scudo termico, pannelli solari.',
    2: 'Modulo equipaggio (NASA) + servizio (ESA). Scudo AVCOAT resiste a ~2.760°C. Ammara nell\'oceano.',
    3: 'ESM derivato dall\'ATV. OMS-E 25,7 kN + 8 ausiliari + 24 RCS. Skip entry: ~4g al rientro.'
  }},
  'tli': { title: 'Spinta translunare (TLI)', levels: {
    1: 'La grande spinta che porta la navicella dall\'orbita terrestre verso la Luna.',
    2: 'Da ~7,8 a ~10,8 km/s. Δv ~3 km/s in pochi minuti. Poi 4 giorni di viaggio.',
    3: 'ICPS, motore RL-10B-2, 110 kN, burn ~350 s. Timing critico: problema dei tre corpi ristretto.'
  }}
};

// === SISTEMA IPERTESTUALE ===
function initGlossario(){
  // Crea elementi DOM se non esistono
  if(!document.getElementById('overlay')){
    const ov = document.createElement('div');
    ov.className = 'overlay'; ov.id = 'overlay';
    document.body.appendChild(ov);
  }
  if(!document.getElementById('iperPanel')){
    const p = document.createElement('div');
    p.className = 'iper-panel'; p.id = 'iperPanel';
    p.innerHTML = '<button class="iper-close" id="iperClose" aria-label="Chiudi">&times;</button><div id="iperContent"></div>';
    document.body.appendChild(p);
  }

  document.addEventListener('click', function(e){
    if(e.target.classList.contains('iper')){
      e.stopPropagation();
      const key = e.target.dataset.iper;
      const entry = GLOSSARIO[key];
      if(!entry) return;
      document.getElementById('iperContent').innerHTML =
        `<span class="level-tag ${getLevelClass()}">${getLevelName()}</span><h4>${entry.title}</h4><p>${entry.levels[currentLevel]}</p>`;
      document.getElementById('iperPanel').classList.add('visible');
      document.getElementById('overlay').classList.add('visible');
    }
  });

  document.getElementById('iperClose').onclick = closeGlossario;
  document.getElementById('overlay').onclick = closeGlossario;
  document.addEventListener('keydown', e => { if(e.key === 'Escape') closeGlossario(); });
}

function closeGlossario(){
  document.getElementById('iperPanel').classList.remove('visible');
  document.getElementById('overlay').classList.remove('visible');
}

// === INIT AUTOMATICO ===
document.addEventListener('DOMContentLoaded', function(){
  initStars();
  initGlossario();
  // Seleziona il bottone livello corretto
  document.querySelectorAll('.complexity-btn').forEach(b =>
    b.classList.toggle('active', +b.dataset.level === currentLevel)
  );
});

// === SVG HELPERS ===
const SVG_BACK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>';
const SVG_BOOK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/></svg>';
const SVG_EXTERNAL = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>';
