(function(){
  var RECIT={
   promesse:{t:"« Je répandrai de mon Esprit sur toute chair »",x:"Des siècles avant, Joël avait annoncé un jour où l’esprit ne serait plus réservé à quelques prophètes : « vos fils et vos filles prophétiseront, vos vieillards auront des songes, vos jeunes gens des visions ; même sur les serviteurs et les servantes, je répandrai mon Esprit ». Pierre cite ce texte au présent : le jour annoncé a commencé ce matin-là.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Joël 2:28-29 ; Actes 2:16-18."},
   vent:{t:"« Comme le bruit d’un vent impétueux »",x:"Le récit procède par signes mesurés : un son qui remplit la maison, des langues « comme de feu » qui se posent, puis des langues humaines qui se délient. Cette salle ne figure ni les flammes ni les visages : le rideau gonflé et la poussière dorée suffisent à dire qu’il s’est passé quelque chose que la maison entière a entendu.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Actes 2:1-4."},
   nations:{t:"Parthes, Mèdes, Élamites… et Romains",x:"La liste des auditeurs dessine la carte du monde connu : de la Mésopotamie à Rome, de la Cappadoce à l’Égypte et à la Libye. Chacun entend « dans son propre langage ». La Pentecôte inverse Babel à sa manière : non pas une langue unique imposée, mais un même message rendu intelligible à toutes.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Actes 2:5-11 ; comparer Genèse 11."},
   discours:{t:"Pierre explique au lieu d’exhiber",x:"À la foule perplexe — et aux moqueurs qui parlent d’ivresse —, Pierre ne répond pas par un spectacle mais par un argument enchaîné : Joël cité, Jésus présenté, le Psaume 16 et le Psaume 110 convoqués, puis la conclusion : « Dieu a fait Seigneur et Christ ce Jésus que vous avez mis à mort sur un poteau. » L’événement appelle une décision, pas seulement une émotion.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Actes 2:14-36."},
   baptemes:{t:"Trois mille décisions dans les bassins",x:"« Que ferons-nous ? » — « Repentez-vous, et que chacun de vous soit baptisé. » Le jour même, environ trois mille personnes descendent dans les bains de la ville (salle 25). Ainsi naît, en une journée de fête, la communauté qui portera la « bonne nouvelle du royaume » jusqu’aux extrémités du monde connu (salle 40).",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Actes 2:37-42."}
  };
  var cle="promesse";
  var ti=document.getElementById("s45-titre"), tx=document.getElementById("s45-texte"), bd=document.getElementById("s45-badge");
  var boutons=document.querySelectorAll(".s45-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
