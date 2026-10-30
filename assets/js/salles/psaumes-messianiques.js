(function(){
  var P={
   ps2:{t:"Psaume 2 — « Tu es mon fils, je t'ai engendré aujourd'hui »",x:"Le psaume couronne un « oint » (en hébreu : messie) rejeté par les rois de la terre, puis installé comme fils et héritier des nations.",e:"Les Actes citent ce psaume à deux reprises : pour la coalition contre Jésus (Actes 4:25-27) et pour sa résurrection (Actes 13:33). C'est le psaume du roi contesté puis reconnu.",v:"À l'origine, un psaume royal pour les rois de Juda ; son application au Messie est une relecture — affichée comme telle."},
   ps16:{t:"Psaume 16:10 — « Tu ne permettras pas que ton saint voie la corruption »",x:"Le psalmiste espère que Dieu ne l'abandonnera pas au séjour des morts et que son fidèle ne connaîtra pas la décomposition.",e:"Pierre raisonne publiquement (Actes 2:25-31) : David est mort, son tombeau est connu — le texte regarderait donc au-delà de David, vers celui qui ressusciterait sans voir la corruption.",v:"Le raisonnement repose sur la lecture messianique du psaume ; l'espérance d'une vie au-delà de la mort y est exprimée en langage poétique."},
   ps22:{t:"Psaume 22 — « Mon Dieu, pourquoi m'as-tu abandonné ? »",x:"Un juste souffrant : abandon ressenti, moqueries des spectateurs, mains et pieds atteints, vêtements partagés et tirés au sort, puis retournement final en louange universelle.",e:"Les récits de la mort de Jésus reprennent l'ouverture du psaume sur ses lèvres et ses détails vestimentaires (Matthieu 27 ; Jean 19). Pour les premiers lecteurs, citer le premier verset, c'était convoquer le psaume entier — y compris sa fin victorieuse.",v:"Le mot « percé » (22:17) dépend des témoins textuels : voir le zoom honnête ci-dessous. Le musée ne fonde rien sur ce seul mot."},
   ps110:{t:"Psaume 110 — « Assieds-toi à ma droite »",x:"Oracle adressé à un « seigneur » que David appelle le sien, prêtre pour toujours « selon l'ordre de Melchisédek », installé à la droite de Dieu.",e:"C'est le passage le plus cité de tout l'Ancien Testament dans le Nouveau : Jésus l'utilise pour interroger les pharisiens (Matthieu 22:41-46) ; les Actes et l'épître aux Hébreux y lisent son exaltation et son sacerdoce.",v:"L'identité du « seigneur » de David se débat depuis l'Antiquité ; le musée présente la question telle que Jésus lui-même la pose dans le récit."},
   ps118:{t:"Psaume 118 — « La Pierre qu'ont rejetée les bâtisseurs »",x:"Chant de procession et de victoire : une Pierre écartée par les constructeurs devient la Pierre d'angle de l'édifice, au jour fait par Jéhovah.",e:"Jésus applique l'image aux chefs qui le rejettent (Matthieu 21:42) ; Pierre la reprend devant le sanhédrin (Actes 4:11). Rejet d'abord, fondation ensuite : la trajectoire résume celle du Serviteur d'Isaïe 53.",v:"L'image est métaphorique à l'origine (le peuple ou son roi méprisé puis restauré) ; son application personnelle est une relecture ancienne et revendiquée comme telle."}};
  var ti=document.getElementById("s21-titre"), tx=document.getElementById("s21-texte"),
      ec=document.getElementById("s21-echo"), vi=document.getElementById("s21-vigilance");
  function montrer(k){ ti.textContent=P[k].t; tx.textContent=P[k].x; ec.textContent=P[k].e; vi.textContent=P[k].v; }
  document.querySelectorAll(".s21-onglets [data-ps]").forEach(function(b){
    b.addEventListener("click", function(){
      document.querySelectorAll(".s21-onglets [data-ps]").forEach(function(x){x.classList.remove("actif");});
      b.classList.add("actif"); montrer(b.dataset.ps);
    });
  });
  montrer("ps2");
})();
