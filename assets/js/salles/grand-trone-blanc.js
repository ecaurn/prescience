(function(){
  var PLANS=[
   {t:"Le trône — le ciel et la terre s’enfuient (20:11)",x:"« Puis je vis un grand trône blanc, et celui qui était assis dessus. La terre et le ciel s’enfuirent devant sa face, et il ne fut plus trouvé de place pour eux. » La blancheur dit la pureté de la justice ; la fuite du ciel et de la terre dit qu’aucun ancien ordre corrompu ne servira d’abri. Le musée ne représente pas Celui qui siège : l’image laisse le trône vide.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:11."},
   {t:"Les morts debout — les grands et les petits (20:12a)",x:"Ceux qui étaient morts se tiennent devant le trône, sans distinction de rang : « les grands et les petits ». Les titres, les fortunes et les réputations ne plaident plus. La scène est universelle dans son langage, mais son centre est précis : les morts revenus à la vie pendant le règne des mille ans arrivent au bilan de cette période.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:12."},
   {t:"Les livres ouverts — et le livre de vie (20:12b)",x:"Des livres, au pluriel, sont ouverts ; puis un autre livre, au singulier, celui de la vie. Les morts sont jugés « selon leurs œuvres, d’après ce qui était écrit dans ces livres ». Les premiers disent la base du jugement — les actes et la réponse de chacun à la vérité connue ; le second dit l’issue : la vie durable pour ceux dont le nom s’y trouve.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:12 ; Daniel 7:10."},
   {t:"La mer, la mort et le séjour des morts rendent leurs morts (20:13)",x:"Aucun lieu d’oubli ne retient personne : la mer rend ses morts, la mort et le séjour des morts rendent les leurs. Le mot grec Hadès (translittération d’ᾅδης) désigne ici le séjour ou la tombe commune des morts, d’où ils peuvent revenir ; il ne désigne pas encore l’étang de feu, d’où rien ne revient.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:13."},
   {t:"La mort jetée dans l’étang de feu (20:14-15)",x:"La fin renverse l’attente : ce ne sont pas seulement des humains qui sont jugés, mais la mort et le séjour des morts eux-mêmes, jetés dans l’étang de feu. Le texte explique son symbole : « C’est la seconde mort. » Celui dont le nom n’est pas trouvé dans le livre de vie y est jeté aussi : la destruction est définitive, sans retour.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:14-15."}];
  var i=0, ti=document.getElementById("s33-titre"), tx=document.getElementById("s33-texte"), bd=document.getElementById("s33-badge"),
      num=document.getElementById("s33-num"), barre=document.getElementById("s33-barre-i"),
      prec=document.getElementById("s33-prec"), suiv=document.getElementById("s33-suiv");
  function montrerPlan(){
    ti.textContent=PLANS[i].t; tx.textContent=PLANS[i].x; bd.innerHTML=PLANS[i].b; num.textContent=i+1;
    barre.style.width=((i+1)/PLANS.length*100)+"%"; prec.disabled=i===0; suiv.disabled=i===PLANS.length-1;
  }
  prec.addEventListener("click",function(){ if(i>0){ i--; montrerPlan(); }});
  suiv.addEventListener("click",function(){ if(i<PLANS.length-1){ i++; montrerPlan(); }});
  montrerPlan();

  var CLES={
   livres:{t:"Deux sortes de livres, deux fonctions",x:"Les livres ouverts manifestent que rien n’est jugé sur une impression : les actes sont connus. Le livre de vie, lui, ne contient pas des mérites accumulés comme des points ; il atteste l’issue du jugement, la vie accordée à ceux qui demeurent fidèles. La salle distingue donc la preuve (les œuvres lues dans les livres) et le verdict (le nom maintenu dans le livre de vie), sans transformer cette image d’archive en mécanisme comptable complet.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:12, 15."},
   oeuvres:{t:"Des actes qui révèlent une réponse",x:"« Selon leurs œuvres » ne signifie pas que la vie éternelle s’achète. Les œuvres montrent ce qu’une personne a fait de la lumière reçue : repentance ou endurcissement, obéissance ou révolte, amour ou mépris. Le jugement est donc moral et relationnel avant d’être arithmétique. C’est pourquoi le musée insiste sur le temps des mille ans : les ressuscités ne sont pas piégés par leur ignorance passée, ils sont éclairés avant d’être définitivement jugés.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:12-13 ; Romains 2:6-8."},
   "seconde-mort":{t:"La seconde mort : sans retour",x:"La première mort atteint tous les descendants d’Adam ; le séjour des morts peut être vidé par la résurrection. La seconde mort est différente : elle est définitive. La preuve interne que l’étang de feu est un symbole tient au verset même : la mort et le séjour des morts y sont jetés, alors qu’ils ne peuvent ni brûler ni souffrir. Ils y sont abolis. Dans la lecture de cette salle, les humains rebelles y connaissent donc une destruction sans retour, non une vie éternelle de souffrance.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 20:6, 14 ; 21:8."},
   gehenne:{t:"Ne pas confondre la vallée et le symbole final",x:"La Géhenne est d’abord un lieu réel : la vallée de Hinnom, au sud de Jérusalem (fiche EV-41). Dans les Évangiles, son nom devient l’image d’une destruction complète et sans sépulture d’honneur. L’étang de feu de Révélation 20 n’est ni cette vallée ni un cratère localisable : Jean le définit comme « la seconde mort ». Confondre les deux images fait perdre la précision du texte et transforme un symbole apocalyptique en géographie touristique.",b:"<span class=\"badge avenir\">DÉBATTU</span> Topographie de Hinnom débattue ; distinction textuelle nette."}
  };
  var ct=document.getElementById("s33-cle-titre"), cx=document.getElementById("s33-cle-texte"), cb=document.getElementById("s33-cle-badge");
  var boutons=document.querySelectorAll(".s33-onglets button");
  function montrerCle(cle){
    var q=CLES[cle]; if(!q) return;
    ct.textContent=q.t; cx.textContent=q.x; cb.innerHTML=q.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-cle")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ montrerCle(b.getAttribute("data-cle")); }); });
  montrerCle("livres");
})();
