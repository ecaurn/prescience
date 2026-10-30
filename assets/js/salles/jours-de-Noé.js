(function(){
  var PARALLELE={
   Noé:{
    avertissement:{t:"Une arche qui parle avant la pluie",x:"Noé reçoit l’ordre de construire une arche immense loin de toute mer. La construction elle-même devient un message public : quelque chose se prépare, à vue de tous, pendant que le ciel est encore calme. La tradition chrétienne appellera Noé un « prédicateur de justice » : l’avertissement n’était pas seulement en bois, il était aussi en paroles.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Genèse 6:13-22 ; 2 Pierre 2:5."},
    quotidien:{t:"Manger, boire, se marier",x:"Jésus choisit des occupations ordinaires et légitimes : manger, boire, fonder des familles. Il ne décrit ni une orgie permanente ni une civilisation de monstres. Le contraste est plus subtil : pendant que l’arche grandit, la vie suit son cours comme si demain devait toujours ressembler à hier.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Matthieu 24:38."},
    inattention:{t:"« Ils ne se doutèrent de rien »",x:"Le verbe de Jésus vise la perception, pas seulement l’information. On peut voir l’arche, entendre Noé, et ne pas relier ces signes à sa propre vie. L’inattention collective devient alors un choix répété : remettre au lendemain une question qui dérange aujourd’hui.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Matthieu 24:39."},
    basculement:{t:"Noé entre, la pluie commence",x:"Le temps de la construction prend fin en un jour : Noé entre dans l’arche avec les siens et les animaux, puis les eaux viennent. Ce qui paraissait lointain devient irréversible. Dans le récit, la soudaineté ne supprime pas le délai qui l’a précédée ; elle le conclut.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Genèse 7:1-16 ; Matthieu 24:39."}
   },
   venue:{
    avertissement:{t:"Un signe annoncé, pas une rumeur de dates",x:"Jésus donne un signe composite à observer (salle 13), tout en refusant le jour et l’heure. L’avertissement chrétien n’est donc ni un horoscope d’événements ni une prédiction de calendrier : c’est un faisceau de conditions et une manière de vivre, vérifiables dans la durée sans désigner une manchette précise.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Matthieu 24:3-42 ; aucune date."},
    quotidien:{t:"La normalité comme anesthésie possible",x:"À la venue du Fils de l’homme, les humains travailleront, mangeront, aimeront, construiront. Jésus ne demande pas de quitter la vie ordinaire ; il avertit contre une normalité qui absorbe tout, jusqu’à rendre impensable toute interruption du cours des choses.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Matthieu 24:37-41."},
    inattention:{t:"Savoir sans se sentir concerné",x:"L’équivalent moderne de « ne pas se douter » n’est pas nécessairement ignorer les prophéties : c’est les classer comme un sujet pour d’autres — trop lointain, trop religieux, trop dérangeant. La salle laisse au visiteur le soin de nommer ses propres mécanismes d’évitement.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Matthieu 24:39, 42-44."},
    basculement:{t:"« Vous ne savez pas quel jour »",x:"Comme la pluie a clos le temps de Noé, la venue du Fils de l’homme clora le temps présent. Mais Jésus retourne la soudaineté contre les calculateurs : parce que le jour est inconnu, la seule préparation possible est une fidélité quotidienne, pas une mobilisation de dernière minute.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Matthieu 24:42-44 ; 25:13."}
   }
  };
  var scene="Noé", point="avertissement";
  var ti=document.getElementById("s35-titre"), tx=document.getElementById("s35-texte"), bd=document.getElementById("s35-badge");
  var boutonsScene=document.querySelectorAll(".s35-bascule button"), boutonsPoint=document.querySelectorAll(".s35-points button");
  function montrer(){
    var p=PARALLELE[scene][point]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutonsScene.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-scene")===scene); });
    boutonsPoint.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-point")===point); });
  }
  boutonsScene.forEach(function(b){ b.addEventListener("click",function(){ scene=b.getAttribute("data-scene"); montrer(); }); });
  boutonsPoint.forEach(function(b){ b.addEventListener("click",function(){ point=b.getAttribute("data-point"); montrer(); }); });
  montrer();
})();
