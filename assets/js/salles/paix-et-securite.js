(function(){
  var RECIT={
   proclamation:{t:"« Quand les hommes diront… »",x:"Le premier temps est une phrase dans la bouche des autres : « Paix et sécurité ! » Paul ne dit pas qui la prononcera, ni en quelle année, ni dans quelle capitale. Il décrit une assurance collective au moment précis où l’édifice est le plus fragile — le calme proclamé comme un titre de gloire, juste avant que l’histoire ne change de régime.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> 1 Thessaloniciens 5:3."},
   soudainete:{t:"Comme les douleurs de l’enfantement",x:"La comparaison est choisie avec soin : des douleurs certaines, dont l’heure exacte échappe, qui surviennent à un corps qui ne s’y attend plus — et dont le processus, une fois commencé, ne se remonte pas. « Ils n’échapperont point » ne vise pas des individus traqués un à un, mais une génération surprise dans son assurance même.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> 1 Thessaloniciens 5:3 ; comparer Matthieu 24:8."},
   nuitjour:{t:"« Vous êtes tous des fils de la lumière »",x:"Le contraste n’est pas entre informés et ignorants, mais entre nuit et jour : ceux qui dorment ou s’enivrent la nuit, et ceux qui, fils du jour, restent éveillés. Être « du jour » ne donne pas le calendrier — Paul vient de dire qu’il est inutile —, mais une manière d’habiter l’attente sans être surpris dans son âme.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> 1 Thessaloniciens 5:4-8."},
   armure:{t:"Cuirasse de foi, casque d’espérance",x:"L’équipement du veilleur est entièrement défensif et intérieur : « la cuirasse de la foi et de l’amour, et le casque de l’espérance du salut ». Aucune arme offensive, aucune consigne d’affrontement : la préparation demandée est une tenue morale — croire, aimer, espérer — tenue dans la durée plutôt que mobilisée dans l’urgence.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> 1 Thessaloniciens 5:8-10."},
   edification:{t:"« Édifiez-vous les uns les autres »",x:"La lettre ne se referme pas sur la ruine soudaine mais sur une consigne de chantier : « consolez-vous (…) et édifiez-vous les uns les autres ». Le dernier mot de l’avertissement n’est ni la peur ni le calcul, mais l’entraide — la même réponse concrète que la salle 35 tirait des jours de Noé : une conduite, tenue ensemble, pendant que la vie continue.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> 1 Thessaloniciens 5:11."}
  };
  var cle="proclamation";
  var ti=document.getElementById("s38-titre"), tx=document.getElementById("s38-texte"), bd=document.getElementById("s38-badge");
  var boutons=document.querySelectorAll(".s38-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
