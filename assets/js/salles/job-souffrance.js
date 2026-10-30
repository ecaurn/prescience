(function(){
  var RECIT={
   integre:{t:"« Intègre et droit, craignant Dieu »",x:"Job vit au pays d’Uts, père de sept fils et trois filles, riche de sept mille brebis, trois mille chameaux, cinq cents paires de bœufs et cinq cents ânesses. Sa piété est domestique et régulière : il offre des sacrifices au cas où ses enfants auraient péché en pensée lors de leurs festins. Le récit pose d’abord l’innocence, pour que nul ne lise la suite comme une punition.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Job 1:1-5."},
   accusation:{t:"« Est-ce pour rien que Job craint Dieu ? »",x:"Devant la cour céleste, l’Accusateur conteste la sincérité de Job : protégé et comblé, il servirait Dieu par intérêt. La fidélité de Job est alors éprouvée — d’abord dans ses biens et ses enfants, puis dans sa santé — sans que Job connaisse jamais cette scène. Le musée ne figure ni la cour ni l’Accusateur : il laisse le ciel hors champ, comme le récit laisse Job dans l’ignorance du prologue.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Job 1:6-2:7 (résumé sobre)."},
   amis:{t:"Sept jours de silence, puis de mauvais conseils",x:"Éliphaz (en hébreu, translittération : ʾĔlîp̄az), Bildad et Sophar (translittérations : Bildaḏ, Ṣôp̄ar) s’assoient avec Job sept jours sans parler — leur meilleur moment. Ensuite, leurs discours appliquent la rétribution automatique : « qui donc a péri étant innocent ? » Job réfute, réclame un arbitre, proteste de son intégrité, et formule son espérance d’un Défenseur vivant et d’un relèvement à venir.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Job 2:11-13 ; 4:7 ; 14:14-15 ; 19:25."},
   ouragan:{t:"« Où étais-tu quand je fondais la terre ? »",x:"Après le jeune Élihou (translittération : ʾĔlîhûʾ), qui critique les deux camps, la réponse vient du milieu de l’ouragan : une cinquantaine de questions sur la création — limites de la mer, magasins de la neige, chemins de la lumière, bêtes indomptables. Aucun motif de l’épreuve n’est livré ; c’est la perspective qui change d’échelle. Job confesse : « mon oreille avait entendu parler de toi ; maintenant mon œil t’a vu. »",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Job 32 à 42:6 (résumé sobre)."},
   restauration:{t:"Jéhovah rétablit Job, qui intercède pour ses amis",x:"La conclusion renverse les rôles : ce sont les amis bien-pensants qui ont besoin d’un intercesseur, et Job prie pour eux. Sa situation est rétablie au double, sa famille se reforme, et le récit précise que ses filles reçoivent un héritage parmi leurs frères — détail social remarquable. Job meurt « vieux et rassasié de jours », sans avoir jamais entendu parler du prologue : sa fidélité n’était pas un calcul, elle l’a prouvé en aveugle.",b:"<span class=\"badge avenir\">LECTURE PROPHÉTIQUE</span> Job 42:7-17."}
  };
  var cle="integre";
  var ti=document.getElementById("s48-titre"), tx=document.getElementById("s48-texte"), bd=document.getElementById("s48-badge");
  var boutons=document.querySelectorAll(".s48-temps button");
  function montrer(){
    var p=RECIT[cle]; ti.textContent=p.t; tx.textContent=p.x; bd.innerHTML=p.b;
    boutons.forEach(function(b){ b.classList.toggle("actif", b.getAttribute("data-temps")===cle); });
  }
  boutons.forEach(function(b){ b.addEventListener("click",function(){ cle=b.getAttribute("data-temps"); montrer(); }); });
  montrer();
})();
