(function(){
  var ETAPES=[
   {t:"Les ossements desséchés — « notre espérance est perdue »",x:"La vallée est couverte d'ossements « très nombreux et très secs ». Le texte donne la clé : c'est ce que disent les exilés — « Nos os sont desséchés, notre espérance est perdue, nous sommes retranchés » (37:11). Un peuple qui se croit mort, dispersé entre Babylone et un pays vidé."},
   {t:"Le rassemblement — « un bruit, un frémissement »",x:"À la parole prophétique, les os se rapprochent, « os contre son os ». Première étape : la dispersion prend fin, les pièces d'un peuple éclaté se rassemblent — comme les déportés se rassembleront pour le retour."},
   {t:"Les tendons, la chair, la peau — mais pas encore de souffle",x:"Les corps se reconstituent : tendons, chair, peau. Pourtant, note le texte, « il n'y avait point en eux d'esprit ». Une structure restaurée ne suffit pas : un pays repeuplé et un temple rebâti ne font pas encore une nation vivante."},
   {t:"Le souffle des quatre vents — une très grande armée",x:"Le souffle (en hébreu rouah : vent, esprit) entre dans les corps : « ils reprirent vie, et ils se tinrent sur leurs pieds : c'était une armée nombreuse, très nombreuse » (37:10)."},
   {t:"Les tombeaux ouverts — le retour au pays",x:"L'interprétation tombe, donnée par le texte lui-même : « Je vous ouvrirai vos sépulcres (…) et je vous ramènerai dans le pays d'Israël (…) Je mettrai mon esprit en vous » (37:12-14). Réalisation datée : l'édit de Cyrus en 539, le retour dès 537 (salle 06)."}];
  var i=0, ti=document.getElementById("s24-titre"), tx=document.getElementById("s24-texte"),
      num=document.getElementById("s24-num"), barre=document.getElementById("s24-barre-i"),
      prec=document.getElementById("s24-prec"), suiv=document.getElementById("s24-suiv");
  function montrer(){
    ti.textContent=ETAPES[i].t; tx.textContent=ETAPES[i].x; num.textContent=i+1;
    barre.style.width=((i+1)/ETAPES.length*100)+"%";
    prec.disabled = i===0; suiv.disabled = i===ETAPES.length-1;
  }
  prec.addEventListener("click", function(){ if(i>0){ i--; montrer(); } });
  suiv.addEventListener("click", function(){ if(i<ETAPES.length-1){ i++; montrer(); } });
  montrer();
})();
