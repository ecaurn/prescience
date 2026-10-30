(function(){
  var ETAPES=[
   {badge:"DONNÉE HISTORIQUE",vt:"Verset 2 — Les rois de Perse",v:"Trois rois encore en Perse, puis un quatrième, très riche, qui « soulève tout contre le royaume de Grèce ».",ht:"La Perse achéménide, puis Xerxès",h:"Après Cyrus et ses successeurs, Xerxès Iᵉʳ, le plus riche des rois perses, lance contre la Grèce l'immense expédition de 480 av. n. è. — Salamine et Platées. La trajectoire est lancée : la Grèce répondra.",sens:"sud"},
   {badge:"DONNÉE HISTORIQUE",vt:"Versets 3-4 — Le roi vaillant brisé",v:"Un roi vaillant domine, puis son royaume « se brise et se divise vers les quatre vents des cieux », sans passer à ses descendants.",ht:"Alexandre et le partage de 301",h:"Alexandre renverse la Perse (334-323), meurt sans héritier adulte ; après vingt ans de guerres, quatre généraux se partagent l'empire. Deux des quatre héritages comptent pour la suite : l'Égypte des Lagides, au sud, et la Syrie des Séleucides, au nord.",sens:"deux"},
   {badge:"DONNÉE HISTORIQUE",vt:"Versets 5-6 — L'alliance par mariage",v:"Le roi du Sud devient fort ; « au bout de quelques années », une alliance : la fille du roi du Sud vient au roi du Nord « pour faire des arrangements équitables » — mais elle ne conservera pas le pouvoir.",ht:"Bérénice, vers 252 av. n. è.",h:"Ptolémée II donne sa fille Bérénice à Antiochos II. À la mort de Ptolémée, l'ancienne épouse répudiée, Laodice, fait assassiner Bérénice et son enfant. L'alliance par mariage s'effondre exactement comme annoncé.",sens:"nord"},
   {badge:"DONNÉE HISTORIQUE",vt:"Versets 7-9 — Le rejeton qui riposte",v:"« Un rejeton de ses racines » — un frère de la reine assassinée — entre dans la forteresse du roi du Nord, l'emporte, et rapporte en Égypte un immense butin.",ht:"Ptolémée III, 246 av. n. è.",h:"Le frère de Bérénice envahit la Syrie, atteint l'Euphrate et rentre en Égypte chargé des dépouilles des temples syriens. Les inscriptions et les historiens grecs racontent la campagne.",sens:"sud"},
   {badge:"DONNÉE HISTORIQUE",vt:"Versets 10-15 — Raphia et le retour du Nord",v:"Le fils du Nord lève deux armées, passe « comme un torrent », est arrêté au sud ; plus tard le Nord revient, prend les villes fortifiées et « le pays de gloire ».",ht:"Raphia (217) puis Antiochos III (vers 200)",h:"À Raphia, Ptolémée IV écrase Antiochos III (Polybe, livre V). Une génération plus tard, Antiochos revient, gagne à Panion (vers 200) et annexe durablement la Judée : le corridor change de mains, comme le texte le décrit.",sens:"nord"},
   {badge:"DONNÉE HISTORIQUE",vt:"Versets 17-20 — La fille donnée, le tribut levé",v:"Le Nord « donne la fille des femmes » pour perdre le Sud, « mais cela ne tiendra pas » ; ensuite un roi envoie « un exacteur » et disparaît « sans colère et sans bataille ».",ht:"Cléopâtre I (193) et la fin de Séleucos IV",h:"Antiochos III marie sa fille Cléopâtre I à Ptolémée V : loin de livrer l'Égypte au Nord, elle penche pour son mari. Puis Séleucos IV, pressé par le tribut dû à Rome, envoie son ministre Héliodore lever l'argent — et meurt peu après, sans bataille.",sens:"sud"},
   {badge:"DONNÉE HISTORIQUE",vt:"Versets 21-31 — Le roi méprisé",v:"Un « personnage méprisé » s'empare du royaume par intrigues, brise l'alliance du prince, monte deux fois contre le sanctuaire et place « la chose immonde qui cause la désolation ».",ht:"Antiochos IV (175-164)",h:"Antiochos IV, cadet sans droit direct au trône, le prend par manœuvres. Ses campagnes d'Égypte échouent devant Rome ; sa vengeance tombe sur Jérusalem : pillage du temple en 169, puis profanation de l'autel en 167 et révolte des Maccabées.",sens:"nord"},
   {badge:"LECTURE PROPHÉTIQUE",vt:"Versets 32-39 — Le fil se prolonge",v:"Le chapitre ne s'arrête pas au IIᵉ siècle : il court « jusqu'au temps de la fin », avec un roi qui exalte sa volonté au-dessus de tout.",ht:"Le duo se reforme aux époques suivantes",h:"Selon la lecture retenue ici, les titres de roi du Nord et de roi du Sud passent ensuite aux puissances rivales de chaque époque autour du peuple de Dieu : l'Allemagne rivale de la puissance anglo-américaine pendant les guerres mondiales est lue comme une étape de ce duel. Identification présentée comme une lecture, avec neutralité.",sens:"deux"},
   {badge:"LECTURE PROPHÉTIQUE",vt:"Verset 34 — « Un peu de secours »",v:"Dans la chute du roi du Nord, les persécutés reçoivent « un peu de secours ».",ht:"1945-1991, puis la dissolution",h:"Toujours selon cette lecture, l'Union des républiques socialistes soviétiques (« Union soviétique ») et ses alliés tiennent le rôle du Nord de 1945 à 1991 ; leur dissolution soudaine laisse un répit — le « peu de secours » — avant que le rôle ne soit repris progressivement.",sens:"deux"},
   {badge:"LECTURE PROPHÉTIQUE",vt:"Versets 40-45 — La poussée finale (en cours)",v:"« Au temps de la fin », le roi du Sud engage le combat, le roi du Nord fond sur lui « avec des chars, des cavaliers et beaucoup de navires » — mais « il arrivera à sa fin, et personne ne le secourra ».",ht:"La phase actuelle, selon cette lecture",h:"Roi du Sud : la puissance anglo-américaine. Roi du Nord : la Russie et ses alliés — rivalité exposée ici sans hostilité envers aucun peuple. Statut : EN COURS. Aucun des deux rois ne gagne : la conclusion revient au Royaume de la salle 07 (voir aussi la salle 15).",sens:"nord"}
  ];
  var i=0, vt=document.getElementById("s08-verset-titre"), v=document.getElementById("s08-verset"),
      ht=document.getElementById("s08-hist-titre"), h=document.getElementById("s08-hist"),
      num=document.getElementById("s08-num"), badge=document.getElementById("s08-badge"),
      pointsBox=document.querySelector(".s08-points");
  document.getElementById("s08-total").textContent=ETAPES.length;
  var pts=ETAPES.map(function(e,k){ var b=document.createElement("button"); b.type="button"; b.textContent=k+1; b.setAttribute("aria-label","Étape "+(k+1)+" : "+e.ht); b.addEventListener("click", function(){ aller(k); }); pointsBox.appendChild(b); return b; });
  var cv=document.getElementById("s08-carte"), ctx=cv.getContext("2d");
  function carte(sens){
    ctx.clearRect(0,0,880,300);
    ctx.fillStyle="#0d2f4a"; ctx.fillRect(0,0,250,300);
    ctx.fillStyle="#7fc4bd"; ctx.font="600 20px Inter, sans-serif"; ctx.fillText("MER",30,150); ctx.fillText("MÉDITERRANÉE",30,176);
    ctx.fillStyle="#2a3040"; ctx.fillRect(250,0,630,300);
    ctx.fillStyle="#a2482b"; ctx.fillRect(250,0,630,92);
    ctx.fillStyle="#f7f3ea"; ctx.font="700 22px Inter, sans-serif"; ctx.fillText("ROI DU NORD — la Syrie, puis ses successeurs",280,44);
    ctx.font="500 17px Inter, sans-serif"; ctx.fillStyle="#e8d9b5"; ctx.fillText("Antioche / Damas",280,70);
    ctx.fillStyle="#1e3a8a"; ctx.fillRect(250,208,630,92);
    ctx.fillStyle="#f7f3ea"; ctx.font="700 22px Inter, sans-serif"; ctx.fillText("ROI DU SUD — l'Égypte, puis ses successeurs",280,240);
    ctx.font="500 17px Inter, sans-serif"; ctx.fillStyle="#e8d9b5"; ctx.fillText("Alexandrie / le Nil",280,266);
    ctx.fillStyle="#d4af37"; ctx.fillRect(250,92,630,116);
    ctx.fillStyle="#141310"; ctx.font="700 20px Inter, sans-serif"; ctx.fillText("LE CORRIDOR — Juda / Israël, pris entre les deux",280,138);
    ctx.font="500 16px Inter, sans-serif"; ctx.fillText("Jérusalem",280,164);
    ctx.strokeStyle="#f7f3ea"; ctx.lineWidth=5; ctx.beginPath();
    if(sens==="nord"){ ctx.moveTo(560,88); ctx.lineTo(560,196); }
    else if(sens==="sud"){ ctx.moveTo(560,212); ctx.lineTo(560,104); }
    else { ctx.moveTo(470,88); ctx.lineTo(470,196); ctx.moveTo(650,212); ctx.lineTo(650,104); ctx.stroke(); ctx.beginPath(); }
    ctx.stroke();
    if(sens==="nord"){ ctx.fillStyle="#f7f3ea"; ctx.beginPath(); ctx.moveTo(560,208); ctx.lineTo(548,190); ctx.lineTo(572,190); ctx.fill(); }
    if(sens==="sud"){ ctx.beginPath(); ctx.moveTo(560,92); ctx.lineTo(548,110); ctx.lineTo(572,110); ctx.fill(); }
  }
  function aller(k){
    i=Math.max(0, Math.min(ETAPES.length-1, k)); var e=ETAPES[i];
    vt.textContent=e.vt; v.textContent=e.v; ht.textContent=e.ht; h.textContent=e.h;
    num.textContent=i+1; badge.textContent=e.badge;
    pts.forEach(function(b,j){ b.setAttribute("aria-pressed", j===i?"true":"false"); });
    carte(e.sens);
    document.getElementById("s08-prec").disabled = i===0;
    document.getElementById("s08-suiv").disabled = i===ETAPES.length-1;
  }
  document.getElementById("s08-prec").addEventListener("click", function(){ aller(i-1); });
  document.getElementById("s08-suiv").addEventListener("click", function(){ aller(i+1); });
  var cartePreuve=document.querySelector(".s08-preuve");
  if(cartePreuve){ var btn=cartePreuve.querySelector(".s08-retourne"); btn.addEventListener("click", function(){ var o=cartePreuve.classList.toggle("ouverte"); btn.setAttribute("aria-expanded", o); }); }
  aller(0);
})();
