(function(){
  var RECIT={
   famine:{t:"Une « maison du pain » sans pain",x:"La famine pousse la famille d'Élimélec de Bethléem — Bêṯ-Leḥem, « maison du pain » — vers les champs de Moab. Dix ans plus tard, Naomi a enterré son mari et ses deux fils ; il ne lui reste que deux belles-filles moabites et la nouvelle que Jéhovah « a visité son peuple en lui donnant du pain ». Elle se lève pour rentrer, et la route de retour devient la scène du choix.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Ruth 1:1-7 (résumé sobre)."},
   choix:{t:"« Où tu mourras, je mourrai »",x:"Naomi pousse honnêtement ses belles-filles à la quitter : elle n'a ni fils à leur donner ni avenir à leur promettre. Orpa repart en pleurant ; Ruth s'attache à elle et prononce son serment — marcher, demeurer, un peuple, un Dieu, une tombe commune. Le récit précise qu'elle était « décidée à aller avec elle » : le verbe du choix, avant toute récompense en vue.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Ruth 1:8-18."},
   glanage:{t:"« Laisse-moi aller glaner des épis »",x:"Arrivées au début de la moisson des orges, c'est la jeune étrangère qui prend l'initiative du travail : glaner derrière les moissonneurs, droit que la loi réserve aux pauvres et aux étrangers. Elle échoit « par hasard » dans le champ de Boaz, homme puissant et parent d'Élimélec, qui a entendu parler de sa fidélité et lui accorde protection, eau des cruches et épis laissés à dessein. Le soir, elle rapporte à Naomi environ un épha d'orge battu — bien plus qu'un glanage ordinaire.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Ruth 1:22 ; 2 (chapitre) ; Lévitique 19:9-10."},
   racheteur:{t:"À la porte, devant les anciens",x:"Sur le conseil de Naomi, Ruth rappelle à Boaz son rôle de parent-rédempteur (gōʾēl) ; Boaz loue sa loyauté puis règle l'affaire publiquement, à la porte de la ville, devant dix anciens. Un parent plus proche, qui voulait la terre mais non le nom du mort, se décharge de son droit en ôtant sa sandale selon la coutume. Boaz peut alors racheter la parcelle et épouser Ruth « pour relever le nom du défunt ». Le musée ne montre pas la scène de nuit de l'aire de battage : la salle tient la pudeur du récit, qui conduit directement à la transaction publique.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Ruth 3 ; 4:1-12 (résumé sobre)."},
   lignee:{t:"« Un fils est né à Naomi »",x:"Les femmes de Bethléem célèbrent la naissance d'Obed en bénissant celle qui « vaut mieux que sept fils » ; Naomi prend l'enfant sur ses genoux. La généalogie finale court alors de Perets à David en dix noms — et l'évangile de Matthieu reprendra ce maillon en nommant Ruth, étrangère devenue arrière-grand-mère de rois et, dans la lecture du musée, ancêtre du Messie. Aucun des voyageurs de la route d'ouverture ne pouvait deviner cette dernière page : c'est toute la leçon de la salle.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Ruth 4:13-22 ; Matthieu 1:5."}
  };
  var cle="famine";
  var ti=document.getElementById("s50-titre"), tx=document.getElementById("s50-texte"), bd=document.getElementById("s50-badge");
  var boutons=document.querySelectorAll(".s50-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
