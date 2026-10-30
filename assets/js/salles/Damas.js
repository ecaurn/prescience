(function(){
  var E={
   annonce:{t:"vers 740 av. n. è. — L'oracle contre Damas",x:"Isaïe prononce un oracle contre Damas (Isaïe 17) : la ville « cessera d'être une ville », ses places fortes disparaîtront, « et le royaume disparaîtra de Damas ». Le même message vise l'alliance que Damas ourdit avec le royaume d'Israël du Nord contre Juda. Amos, un peu plus tôt, avait déjà annoncé l'exil des Damascènes « à Kir » (Amos 1:5)."},
   alliance:{t:"735-732 — La crise syro-Éphraïmite",x:"Retsin de Damas et Pékah d'Israël assiègent Jérusalem pour forcer Juda dans leur coalition contre l'Assyrie. Le roi Achaz refuse le signe proposé par Isaïe (Isaïe 7) et achète au contraire l'aide de Tiglath-Piléser III — payant le protecteur qui va dévorer toute la région."},
   chute:{t:"732 — Tiglath-Piléser prend Damas",x:"Le roi d'Assyrie monte contre Damas, prend la ville, fait mourir Retsin et déporte les habitants à Kir (2 Rois 16:9). Le royaume araméen de Damas cesse d'exister comme État. C'est le fait politique central de cette salle, attesté des deux côtés : récit biblique et histoire assyrienne concordent sur la campagne de 734-732."},
   province:{t:"Après 732 — Une ville de province, toujours habitée",x:"Damas survit comme ville : chef-lieu de province assyrienne, puis ville perse, hellénistique et romaine — c'est près de ses murs que Paul est arrêté par la lumière du récit des Actes (chapitre 9), et sa « rue Droite » existe toujours. Mais jamais elle ne redevient capitale d'un royaume damascène indépendant."},
   aujourdhui:{t:"Aujourd'hui — Capitale de la Syrie",x:"Damas est une capitale de plusieurs millions d'habitants, dont la vieille ville est inscrite au patrimoine mondial de l'UNESCO (n° 20, 1979). C'est cette évidence qui nourrit l'objection traitée ci-dessous : la salle la regarde en face, puis discute ce que « cesser d'être une ville » pouvait signifier pour un oracle du VIIIe siècle."}};
  var ti=document.getElementById("s22-titre"), tx=document.getElementById("s22-texte");
  function montrer(k){ ti.textContent=E[k].t; tx.textContent=E[k].x; }
  document.querySelectorAll(".s22-onglets [data-et]").forEach(function(b){
    b.addEventListener("click", function(){
      document.querySelectorAll(".s22-onglets [data-et]").forEach(function(x){x.classList.remove("actif");});
      b.classList.add("actif"); montrer(b.dataset.et);
    });
  });
  montrer("annonce");
})();
