(function(){
  var RECIT={
   splendeur:{t:"Assise sur les grandes eaux",x:"La vision ouvre sur l’apogée : pourpre, écarlate, or, perles, bois précieux, ivoire, parfums — la liste de Révélation 18:12-13 lit comme un inventaire de port antique. Les rois « se sont enrichis de son luxe » et les marchands sont devenus « les grands de la terre ». La ville ne manque de rien ; c’est précisément cette autosuffisance que le récit va renverser.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 17:1-4 ; 18:3, 12-13."},
   marchands:{t:"« Personne n’achète plus leur cargaison »",x:"Le second temps est économique autant que spirituel : capitaines, passagers, marins et marchands regardent de loin la fumée et pleurent une cliente disparue. Le texte ne les montre pas repentants mais ruinés : quand le système tombe, tout un commerce bâti sur lui s’arrête net. La distance — « ils se tiendront éloignés » — dit aussi la rapidité de l’effondrement.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 18:9-19."},
   appel:{t:"« Sortez d’elle, mon peuple »",x:"Avant la chute, une voix du ciel adresse un appel, pas une menace : sortir du système pour ne pas participer à ses péchés ni partager son sort. Cet appel suppose que des personnes sincères se trouvent encore à l’intérieur — c’est la clé qui interdit de confondre le jugement du système avec un jugement des fidèles, quels qu’ils soient.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 18:4-5 ; comparer Jérémie 51:45."},
   chute:{t:"« En une seule heure »",x:"Trois fois, le refrain tombe : « en une seule heure, ton jugement est venu », « en une seule heure, tant de richesses ont été dévastées ». Les pouvoirs politiques que la ville chevauchait se retournent contre elle (Révélation 17:16-17) : l’alliance se renverse en destruction, et la grande tribulation commence. Aucune date n’est donnée ; seule la soudaineté est soulignée.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 17:16-17 ; 18:10, 17, 19."},
   silence:{t:"Une meule jetée à la mer",x:"Un ange jette dans la mer une pierre « comme une grande meule » : ainsi sera précipitée Babylone, « et on ne la trouvera plus ». Suit le silence le plus complet du livre : plus de musique, plus d’artisans, plus de meule, plus de lampe, plus de voix d’époux. Après la ville du bruit et du commerce, la vision se tait — avant que le ciel n’éclate en allégresse (Révélation 19:1-3).",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 18:21-24 ; 19:1-3."}
  };
  var cle="splendeur";
  var ti=document.getElementById("s36-titre"), tx=document.getElementById("s36-texte"), bd=document.getElementById("s36-badge");
  var boutons=document.querySelectorAll(".s36-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
