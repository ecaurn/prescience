(function(){
  var RECIT={
   Pierre:{t:"Détachée « sans le secours d’aucune main »",x:"Dans le rêve de Nebucadnetsar, une Pierre se détache d’elle-même, frappe la statue aux pieds de fer et d’argile, puis devient une montagne qui remplit toute la terre. Daniel l’interprète : après les empires humains, « le Dieu du ciel suscitera un royaume qui ne sera jamais détruit ». Tout le musée est né de cette image : un gouvernement qui ne vient pas des hommes.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Daniel 2:34-35, 44 ; salle 07."},
   priere:{t:"La demande avant le pain quotidien",x:"Dans la prière modèle, la venue du Royaume précède la demande du pain : l’ordre est un enseignement en soi. Des générations ont répété « que ton royaume vienne » sans voir la réponse — la Didache la transmettait déjà aux premiers chrétiens (EV-49). Prier pour un gouvernement qu’on ne se donne pas soi-même : c’est l’attitude que cette salle documente.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Matthieu 6:9-13."},
   message:{t:"« C’est pour cela que j’ai été envoyé »",x:"Interrogé sur sa mission, Jésus la résume par l’annonce du Royaume aux villes de Galilée, puis à toute la terre habitée avant la fin (Matthieu 24:14). Le musée note la forme : une bonne nouvelle proclamée publiquement, de village en village, par des gens sans armée — la Pierre grandit d’abord comme une parole entendue.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Luc 4:43 ; Matthieu 24:14."},
   gouvernement:{t:"Un Roi au ciel, des sujets sur la terre",x:"Le psaume 110 installe le Roi « à la droite de Dieu » en attendant que ses ennemis soient soumis ; Paul déploie la suite : il faut qu’il règne jusqu’à la destruction de toute domination, la mort comprise, puis qu’il remette le royaume au Père. Pendant ce temps, la terre n’est pas un lot de consolation : c’est l’héritage promis aux hommes doux.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Psaume 110:1-2 ; 1 Corinthiens 15:24-28 ; Matthieu 5:5."},
   tente:{t:"« Il essuiera toute larme de leurs yeux »",x:"La dernière image n’est ni un trône lointain ni une bataille : une tente dressée parmi les humains. « La mort ne sera plus, et il n’y aura plus ni deuil, ni cri, ni douleur. » Le gouvernement annoncé finit en voisinage : c’est pour cette tente-là, dit le musée, que toutes les salles précédentes ont aligné leurs preuves.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Révélation 21:3-4 ; salle 34."}
  };
  var cle="Pierre";
  var ti=document.getElementById("s40-titre"), tx=document.getElementById("s40-texte"), bd=document.getElementById("s40-badge");
  var boutons=document.querySelectorAll(".s40-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
