(function(){
  document.querySelectorAll(".s03-preuve").forEach(function(carte){
    var btn=carte.querySelector(".s03-retourne");
    btn.addEventListener("click", function(){ var o=carte.classList.toggle("ouverte"); btn.setAttribute("aria-expanded", o); });
  });
  var curseur=document.getElementById("s03-temps"); if(!curseur) return;
  var titres=["VIᵉ siècle av. n. è. — Nébucadnetsar contre la ville du continent","332 av. n. è. — Alexandre jette la ville dans la mer","Aujourd'hui — l'île est devenue presqu'île","Aujourd'hui — des filets sur le rocher"];
  var textes=[
    "Ézéchiel vient d'annoncer la chute quand Nébucadnetsar met le siège devant Tyr : treize ans d'efforts, la ville continentale tombe, l'île résiste (Josèphe, Contre Apion, I.21). Première vague annoncée en Ézéchiel 26:3, 7-11.",
    "Alexandre le Grand fait démolir la vieille ville du continent et jette ses décombres dans le détroit : une chaussée d'environ un kilomètre atteint l'île après sept mois de siège (Arrien, Anabase, II.18-24). Pierres, bois et poussière, au milieu des eaux — mot pour mot (Ézéchiel 26:12).",
    "La chaussée a figé un haut-fond sableux naturel : l'île est devenue presqu'île (étude géologique de 2007, revue scientifique PNAS). La forteresse au milieu de la mer n'existe plus comme île.",
    "Sur les rochers de l'ancienne Tyr, les pêcheurs étendent leurs filets pour les faire sécher (Ézéchiel 26:5, 14) : le « lieu où l'on étend les filets » se photographie encore chaque matin."];
  var images=[document.getElementById("s03-img-s"),document.getElementById("s03-img-a"),document.getElementById("s03-img-b"),document.getElementById("s03-img-c")];
  var titre=document.getElementById("s03-titre"), texte=document.getElementById("s03-texte");
  function maj(){ var e=+curseur.value; images.forEach(function(im,i){ im.classList.toggle("actif", i===e); }); titre.textContent=titres[e]; texte.textContent=textes[e]; }
  curseur.addEventListener("input", maj); maj();
})();
