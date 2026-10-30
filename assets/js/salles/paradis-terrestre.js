(function(){
  var RECIT={
   loup:{t:"Le prédateur devenu voisin",x:"Isaïe juxtapose les paires impossibles : loup et agneau, panthère et chevreau, veau et lionceau, « et un petit enfant les conduira ». Le tableau ne dit pas que la nature est aujourd’hui ainsi ; il annonce un état où la peur change de camp, sous un règne qui commence par juger « les pauvres avec équité » et frapper la violence.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Isaïe 11:6-9."},
   desert:{t:"Des eaux dans le pays aride",x:"Le chapitre 35 retourne le désert en jardin : « il fleurira comme le narcisse », des eaux jaillissent, le pays de la soif devient source. La même image servait au retour d’exil — une route sainte dans le désert — ; relue à l’échelle du règne, elle devient la remise en eau d’une terre entière, plaine après plaine.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Isaïe 35:1-7."},
   maisons:{t:"Bâtir et habiter, planter et manger",x:"Le cœur social du paradis tient en une négation abolie : « ils ne bâtiront pas pour qu’un autre habite ». Expropriations, loyers de misère, récoltes saisies : le texte vise les vieilles dépossessions. La terre restaurée se reconnaît d’abord à ceci — le fruit du travail reste à celui qui travaille.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Isaïe 65:21-22."},
   longevite:{t:"« Comme les jours d’un arbre seront les jours de mon peuple »",x:"La longévité promise se mesure aux chênes, pas aux éphémères : on « usera » l’ouvrage de ses mains, on verra grandir ses petits-enfants. Même ici, la mort n’a pas encore disparu du paysage — le centenaire pécheur reste sous jugement : les mille ans sont un recul progressif de la mort avant sa destruction (salle 39).",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Isaïe 65:20-22 ; 1 Corinthiens 15:26."},
   enfants:{t:"« Ils ne travailleront pas en vain ni n’enfanteront pour le trouble »",x:"Le dernier temps regarde les générations : des enfants qui ne naissent plus pour la peur, des descendants « avec eux », et même le loup et l’agneau paissant ensemble jusqu’au bout du chapitre. Le paradis terrestre n’est pas un décor vide : c’est une transmission réussie, enfin.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Isaïe 65:23-25."}
  };
  var cle="loup";
  var ti=document.getElementById("s41-titre"), tx=document.getElementById("s41-texte"), bd=document.getElementById("s41-badge");
  var boutons=document.querySelectorAll(".s41-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
