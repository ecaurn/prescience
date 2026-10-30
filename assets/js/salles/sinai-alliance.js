(function(){
  var RECIT={
   proposition:{t:"« Vous serez mon bien propre parmi tous les peuples »",x:"Moïse monte vers Dieu et redescend avec une proposition : si Israël écoute la voix de Jéhovah et garde son alliance, il deviendra son bien propre, « un royaume de prêtres et une nation sainte ». La terre entière appartient à Jéhovah, précise le texte — ce peuple-ci reçoit une fonction : servir d’intermédiaire et de témoin pour les autres.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Exode 19:3-6."},
   preparation:{t:"Trois jours pour se préparer, une limite à ne pas franchir",x:"Le peuple se sanctifie, lave ses vêtements et attend le troisième jour ; une limite est tracée au pied de la montagne, que nul ne doit franchir. Le récit ménage une attente : la rencontre n’est ni banale ni manipulable, et le délai — comme les quatre jours de l’agneau en salle 46 — construit la mémoire autant que l’émotion.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Exode 19:9-15."},
   theophanie:{t:"Tonnerres, nuée épaisse et son de trompe",x:"Au matin du troisième jour : tonnerres, éclairs, nuée épaisse sur la montagne, son de trompe « très fort », et la montagne qui « tremblait fort ». Le musée ne figure aucun être au sommet : seule la montagne sous la nuée est montrée, comme sur l’image d’ouverture. Dieu se dit présent sans devenir un portrait — pudeur constante de ce musée.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Exode 19:16-20."},
   paroles:{t:"Dix paroles, à commencer par « je t’ai fait sortir »",x:"Les dix paroles (Exode 20:1-17) ouvrent sur la libération — « je suis Jéhovah ton Dieu, qui t’ai fait sortir du pays d’Égypte » — avant les interdits : pas d’autres dieux, pas d’image taillée, le nom de Jéhovah respecté, le sabbat gardé, les parents honorés, puis la protection de la vie, du couple, du bien et de la parole d’autrui, jusqu’au désir lui-même. La salle les résume sans prétendre trancher les numérotations discutées entre traditions.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Exode 20:1-17 (résumé sobre)."},
   reponse:{t:"« Tout ce que Jéhovah a dit, nous ferons »",x:"Le peuple, tenu à distance, demande que Moïse serve d’intermédiaire ; après la lecture du « livre de l’alliance », l’engagement est confirmé — « nous ferons et nous écouterons » (Exode 24:7). Deux tables de Pierre, « écrites du doigt de Dieu » selon le récit (31:18), scellent l’alliance. La suite du livre racontera la fidélité comme les écarts : l’engagement était réel, il n’était pas automatique.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Exode 20:18-21 ; 24:3-8 ; 31:18."}
  };
  var cle="proposition";
  var ti=document.getElementById("s47-titre"), tx=document.getElementById("s47-texte"), bd=document.getElementById("s47-badge");
  var boutons=document.querySelectorAll(".s47-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
