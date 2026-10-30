(function(){
  var RECIT={
   fuite:{t:"« Lève-toi, va à Ninive » — il part pour Tarsis",x:"La parole de Jéhovah ordonne à Jonas d'aller crier contre Ninive, « car leur méchanceté est montée jusqu'à moi ». Jonas descend à Joppé, paie sa place sur un navire de Tarsis et s'embarque dans la direction opposée. Le récit ne donne pas tout de suite son motif ; il le laissera avouer lui-même : il fuit un Dieu dont il connaît la miséricorde envers les ennemis d'Israël (4:2).",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jonas 1:1-3 ; 4:2."},
   tempete:{t:"Le sort tombe sur Jonas, la mer s'apaise",x:"Jéhovah envoie un grand vent ; les marins, réduits à jeter la cargaison, prient chacun son dieu pendant que Jonas dort à fond de cale. Réveillé, désigné par le sort, il se confesse et demande : « prenez-moi et jetez-moi à la mer. » Les marins rameront d'abord pour lui sauver la vie, puis, à regret, le jettent — et la fureur de la mer cesse. Même des marins étrangers repartent en craignant Jéhovah.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jonas 1:4-16 (résumé sobre)."},
   poisson:{t:"« Du ventre du séjour des morts j'ai crié »",x:"Un grand poisson, préparé selon le récit, avale Jonas, qui prie trois jours et trois nuits : une prière d'action de grâce avant même la délivrance — « le salut appartient à Jéhovah ». Le poisson le vomit sur la terre ferme. Le musée n'illustre pas l'intérieur du poisson : l'image d'ouverture tient la tempête, et le débat des zoologistes est signalé au banc des preuves plutôt que tranché par une reconstruction spectaculaire.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jonas 1:17 ; 2 (chapitre) ; « grand poisson » : identité débattue."},
   repentir:{t:"« Encore quarante jours, et Ninive sera détruite »",x:"À la seconde commission, Jonas traverse la grande ville en proclamant le délai. Dès le premier jour, les Ninivites croient : jeûne général, le roi quitte son trône, s'assied sur la cendre et décrète le repentir pour les hommes comme pour le bétail — « qui sait si Dieu ne reviendra pas et ne se repentira pas ? » Devant ce changement, le malheur annoncé est retiré : la prophétie a rempli son office.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jonas 3 (chapitre) ; Jérémie 18:7-8."},
   ricin:{t:"« Fais-tu bien de t'irriter au sujet du ricin ? »",x:"Jonas, furieux du pardon accordé, s'installe à l'est de la ville pour « voir ce qui arrivera ». Jéhovah fait pousser un ricin qui l'abrite, puis le fait dessécher ; Jonas s'émeut pour une plante d'une nuit. La réponse tombe, dernière phrase du livre : s'il a pitié d'une plante sans travail, comment Jéhovah n'aurait-il pas pitié de cent vingt mille Ninivites « et de beaucoup de bétail » ? Le livre se ferme sur la question — au lecteur d'y répondre.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Jonas 4 (chapitre)."}
  };
  var cle="fuite";
  var ti=document.getElementById("s49-titre"), tx=document.getElementById("s49-texte"), bd=document.getElementById("s49-badge");
  var boutons=document.querySelectorAll(".s49-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
