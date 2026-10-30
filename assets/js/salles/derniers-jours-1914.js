(function(){
  var curseur=document.getElementById("s13-curseur");
  if(curseur){
    var elA=document.getElementById("s13-ans"), elAn=document.getElementById("s13-annee"), elT=document.getElementById("s13-texte");
    function annee(v){ return v<607 ? (607-v)+" av. n. è." : (v-606)+" de n. è."; }
    function texte(v){
      if(v<1260) return "La souche reste cerclée : Babylone, la Médo-Perse, la Grèce et Rome se succèdent (salle 07). Aucun trône humain ne porte la couronne de David.";
      if(v<2520) return "Le compte dépasse sa moitié : trois temps et demi sont passés. Les siècles défilent sans que le signe annoncé se produise encore.";
      return "Octobre 1914 : les sept temps s'achèvent. Selon la lecture retenue, le Royaume est intronisé au ciel ; sur terre s'ouvre la période du signe composite : première guerre mondiale, puis le faisceau décrit ci-dessous.";
    }
    function maj(){ var v=parseInt(curseur.value,10); elA.textContent=v; elAn.textContent=annee(v); elT.textContent=texte(v); }
    curseur.addEventListener("input", maj);
    document.querySelectorAll(".s13-jalons button").forEach(function(b){ b.addEventListener("click", function(){ curseur.value=b.getAttribute("data-v"); maj(); }); });
    maj();
  }
  document.querySelectorAll(".s13-tuile").forEach(function(t){
    var b=t.querySelector(".s13-ouvre");
    b.addEventListener("click", function(){ var o=t.classList.toggle("ouvert"); b.setAttribute("aria-expanded", o); b.textContent=o?"Refermer":"Source et limites"; });
  });
})();
