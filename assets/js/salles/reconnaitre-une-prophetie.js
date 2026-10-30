(function(){
  var curseur=document.getElementById("s01-curseur");
  if(curseur){ var dessus=document.querySelector(".s01-dessus"); function maj(){ dessus.style.clipPath="inset(0 0 0 "+curseur.value+"%)"; } curseur.addEventListener("input", maj); maj(); }
  var btn=document.querySelector(".s01-retourne"), carte=document.querySelector(".s01-preuve");
  if(btn && carte){ btn.addEventListener("click", function(){ var ouvert=carte.classList.toggle("ouverte"); btn.setAttribute("aria-expanded", ouvert); }); }
})();

(function(){
  var MS={
   isaie:{t:"Le Grand rouleau d'Isaïe (1QIsaᵃ), grotte 1 de Qumrân",x:"Paléographie : vers 125-100 av. n. è. Radiocarbone : compatible. C'est la copie de référence de cette salle : le chapitre qui nomme Cyrus existait, fixé, avant l'ère chrétienne. Enoch confirme globalement les estimations traditionnelles pour les manuscrits de cette période."},
   daniel:{t:"Fragments du livre de Daniel (4Q114), grotte 4 de Qumrân",x:"Paléographie classique : fin du IIe siècle av. n. è. (vers 165). Enoch (2025) propose une fourchette plus ancienne, environ 230 à 160 av. n. è., rejoignant l'époque où la critique situe la composition finale du livre. Si cette estimation se confirme, la copie est quasi contemporaine de la rédaction — ce qui laisse très peu de place à une légende lentement fabriquée, mais ne tranche pas seul la question de l'auteur. Point classé DÉBATTU en salle 07."},
   ecclesiaste:{t:"Fragments de l'Ecclésiaste (4Q109), grotte 4 de Qumrân",x:"L'un des deux manuscrits, avec Daniel, qu'Enoch fait remonter jusqu'au temps de composition présumé du livre. Les chercheurs y voient un indice que la circulation écrite de ces textes a commencé plus tôt qu'on ne le pensait."}};
  var titre=document.getElementById("s01-ms-titre"), texte=document.getElementById("s01-ms-texte");
  if(!titre) return;
  function montrer(k){ titre.textContent=MS[k].t; texte.textContent=MS[k].x; }
  document.querySelectorAll(".s01-onglets [data-ms]").forEach(function(b){
    b.addEventListener("click", function(){
      document.querySelectorAll(".s01-onglets [data-ms]").forEach(function(x){x.classList.remove("actif");});
      b.classList.add("actif"); montrer(b.dataset.ms);
    });
  });
  montrer("isaie");
})();
