(function(){
  var ETAPES=[
   {t:"Le bélier à deux cornes — Médie et Perse (8:3-4, 20)",x:"Le texte nomme lui-même le symbole : « les rois de Médie et de Perse ». Les deux cornes sont inégales, la plus haute montée en dernier : la Perse, cadette de l'alliance, finira par dominer la Médie. L'empire ainsi formé — celui du cylindre de Cyrus (salle 02) — heurte vers l'ouest, le nord et le sud, de l'Indus à l'Égypte, sans résistance durable.",b:"<span class=\"badge\">DONNÉE HISTORIQUE</span> Empire médo-perse, 539-330."},
   {t:"Le bouc venu de l'occident — la Grèce et son premier roi (8:5, 21)",x:"« Sans toucher le sol » : la vitesse est le cœur de l'image. Entre 334 et 330, Alexandre de Macédoine renverse l'empire perse (Granique, Issos, Gaugamèles, Persépolis) — un conquérant de 20 ans parti d'un petit royaume du nord de la Grèce abat en quatre ans le plus grand empire du monde connu. Le chapitre nomme le pays (la Grèce) ; l'histoire fournit le roi.",b:"<span class=\"badge\">DONNÉE HISTORIQUE</span> Campagnes d'Alexandre, 334-330."},
   {t:"La grande corne brisée à son apogée (8:8)",x:"« Comme il devenait puissant, la grande corne se brisa » : Alexandre meurt à Babylone en 323, à 32 ans, sans héritier adulte, au sommet exact de sa puissance. Aucune succession ne s'impose : ses généraux (les diadoques) se disputent l'empire pendant vingt ans.",b:"<span class=\"badge\">DONNÉE HISTORIQUE</span> Mort d'Alexandre, 323."},
   {t:"Quatre cornes — quatre royaumes héritiers (8:8, 22)",x:"De la corne brisée sortent « quatre cornes (…) mais sans sa force » : l'empire se stabilise en royaumes rivaux — l'Égypte des Ptolémées, l'Asie des Séleucides, et les royaumes de Macédoine et de Thrace/Asie Mineure. Quatre blocs qui se feront la guerre pendant deux siècles, avec la Judée coincée entre l'Égypte et la Syrie (c'est le décor de la salle 08).",b:"<span class=\"badge\">DONNÉE HISTORIQUE</span> Partage stabilisé après Ipsos, 301."},
   {t:"La petite corne — le sanctuaire foulé (8:9-14)",x:"D'un des quatre royaumes sort une corne qui grandit vers « le pays glorieux », s'élève contre le Prince, interrompt le sacrifice perpétuel et renverse le sanctuaire : le portrait correspond à Antiochos IV Épiphane, roi séleucide (175-164), qui pille le temple, interdit le culte et y installe un culte étranger en 167 — la crise qui déclenche la révolte des Maccabées et la purification du temple en 164. La durée annoncée, « 2 300 soirs et matins », se lit en jours ou en sacrifices : voir le débat ci-dessous.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Application à Antiochos IV, quasi consensuelle ; durée débattue."}];
  var i=0, ti=document.getElementById("s30-titre"), tx=document.getElementById("s30-texte"), bd=document.getElementById("s30-badge"),
      num=document.getElementById("s30-num"), barre=document.getElementById("s30-barre-i"),
      prec=document.getElementById("s30-prec"), suiv=document.getElementById("s30-suiv");
  function montrer(){
    ti.textContent=ETAPES[i].t; tx.textContent=ETAPES[i].x; bd.innerHTML=ETAPES[i].b; num.textContent=i+1;
    barre.style.width=((i+1)/ETAPES.length*100)+"%";
    prec.disabled = i===0; suiv.disabled = i===ETAPES.length-1;
  }
  prec.addEventListener("click", function(){ if(i>0){ i--; montrer(); } });
  suiv.addEventListener("click", function(){ if(i<ETAPES.length-1){ i++; montrer(); } });
  montrer();
})();
