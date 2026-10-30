(function(){
  var REP=[ 
   {p:"Seuil des mille ans",t:"Le seuil — Satan jeté dans l’abîme (20:1-3)",x:"La vision commence par un retrait : un ange saisit « le dragon, le serpent ancien, qui est le diable et Satan », le lie pour mille ans et scelle l’abîme au-dessus de lui. Le but est dit explicitement : « afin qu’il ne séduise plus les nations ». Le mal n’est pas encore détruit, mais son principal instigateur est mis hors d’état d’agir.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Événement à venir, sans date."},
   {p:"Résurrection",t:"L’aube — la première résurrection (20:4-6)",x:"Jean voit des trônes et ceux qui reviennent à la vie pour régner avec Christ comme prêtres. Le texte les distingue des « autres morts », qui ne reviennent pas à la vie avant le terme des mille ans. La salle lit donc deux temps : d’abord les associés du Christ, ensuite la résurrection générale de l’humanité.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Deux temps distingués dans le texte."},
   {p:"Guérison",t:"Le long jour — une terre qui se relève (20:4-6 ; Isaïe 35)",x:"Pendant les siècles du règne, les ressuscités apprennent ce qu’Adam et ses descendants n’ont jamais pu construire durablement : une société sans l’influence de Satan. Les prophètes anciens habillent cette période d’images de guérison : les yeux des aveugles s’ouvrent, le boiteux bondit, le désert refleurit, personne ne dit « je suis malade ». Le musée ne transforme pas ces images en calendrier médical : elles disent une restauration complète, progressive et universelle.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Restauration terrestre annoncée, modalités non datées."},
   {p:"Terme des mille ans",t:"Le terme — une humanité relevée, puis éprouvée (20:7-9)",x:"Quand les mille ans sont accomplis, Satan est relâché pour un peu de temps. L’épreuve n’arrive donc pas sur une humanité ignorante ou affaiblie, mais après une longue période de guérison et d’enseignement. Ceux qui le suivent alors le font en pleine connaissance de cause : c’est le sens de cette dernière séparation.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Épreuve courte, postérieure aux mille ans."},
   {p:"Après les mille ans",t:"Au-delà — la mort elle-même disparaît (20:10-15 ; 21:1-4)",x:"Après l’échec de la révolte, le Diable est détruit, les morts sont jugés, puis la mort et le séjour des morts sont jetés dans l’étang de feu. La promesse finale déborde le compteur : « Il essuiera toute larme de leurs yeux, et la mort ne sera plus. » Les mille ans sont donc un seuil, pas le dernier mot.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> État éternel annoncé après le jugement final."}
  ];
  var curseur=document.getElementById("s32-curseur"), pos=document.getElementById("s32-position"),
      ti=document.getElementById("s32-titre"), tx=document.getElementById("s32-texte"), bd=document.getElementById("s32-badge"),
      barre=document.getElementById("s32-barre-i");
  function montrerRepere(){
    var r=REP[Number(curseur.value)] || REP[0];
    pos.textContent=r.p; ti.textContent=r.t; tx.textContent=r.x; bd.innerHTML=r.b;
    barre.style.width=(4 + Number(curseur.value)/(REP.length-1)*96)+"%";
  }
  curseur.addEventListener("input", montrerRepere); montrerRepere();

  var QUESTIONS={
   lie:{t:"Pour que les nations ne soient plus séduites",x:"Le texte donne lui-même la raison de l’enchaînement : empêcher Satan d’égarer les nations pendant que l’humanité est relevée. Sans cette parenthèse, la résurrection risquerait de replacer les morts dans le même monde de confusion et de propagande. Les mille ans commencent donc par un silence imposé au mensonge.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Motif explicite de Révélation 20:3."},
   regne:{t:"Christ, avec des prêtres et des rois associés",x:"Jean voit des trônes, un jugement confié à ceux qui s’y assoient, et des ressuscités qui deviennent « prêtres de Dieu et du Christ ». La salle retient donc un règne partagé : Christ demeure le Roi, ses associés servent à la fois comme rois et comme prêtres, tandis que les fruits du règne — vie, santé, justice, terre restaurée — sont reçus sur la terre.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:4-6 ; 5:9-10."},
   resurrection:{t:"D’abord les associés du Christ, puis l’humanité",x:"La « première résurrection » concerne ceux qui règnent avec Christ ; « les autres morts » reviennent ensuite à la vie. La Bible parle ailleurs d’une résurrection « des justes et des injustes » : le musée lit les mille ans comme le cadre de ce relèvement général, où les ressuscités disposent du temps et de l’enseignement nécessaires pour choisir la vie en connaissance de cause.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:5-6 ; Actes 24:15."},
   epreuve:{t:"Parce qu’une fidélité éprouvée n’est pas une fidélité programmée",x:"Mille ans de guérison ne suppriment pas le libre arbitre. L’épreuve finale distingue ceux qui, après avoir connu la justice du règne, choisissent encore la révolte. Elle protège aussi l’avenir : l’univers ne repart pas avec une faille cachée. « Prescience n’est pas fatalité » : même au terme des mille ans, le choix reste réel.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:7-10 ; Deutéronome 30:19."}
  };
  var qt=document.getElementById("s32-q-titre"), qx=document.getElementById("s32-q-texte"), qb=document.getElementById("s32-q-badge");
  var boutons=document.querySelectorAll(".s32-onglets button");
  function montrerQuestion(cle){
    var q=QUESTIONS[cle]; if(!q) return;
    qt.textContent=q.t; qx.textContent=q.x; qb.innerHTML=q.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-question")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click", function(){ montrerQuestion(b.getAttribute("data-question")); }); });
  montrerQuestion("lie");
})();
