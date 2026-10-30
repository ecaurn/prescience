(function(){
  var Q=[
   {q:"Quel conquérant Isaïe nomme-t-il environ un siècle et demi avant sa naissance ?",o:["Nébucadnetsar","Cyrus","Alexandre le Grand"],b:1,e:"Isaïe 44:28 et 45:1 nomment Cyrus, qui prendra Babylone en 539 (salle 02).",s:"Babylone-cyrus.html"},
   {q:"Qu'a mesuré l'étude de la revue PNAS en 2007 à propos de Tyr ?",o:["La hauteur des murs du temple","La chaussée d'Alexandre devenue tombolo, à 1-2 m sous la surface","L'âge des filets de pêche retrouvés"],b:1,e:"La chaussée de siège de 332 est devenue, par sédimentation, la presqu'île actuelle (salle 03).",s:"tyr.html"},
   {q:"Quel détail de la chute de Ninive ce musée classe-t-il DÉBATTU ?",o:["La date de 612","L'existence de la ville","La crue qui aurait aidé les assiégeants (Diodore)"],b:2,e:"La chute est attestée par la chronique BM 21901 ; le rôle de la crue, rapporté par Diodore, est présenté avec prudence (salle 04).",s:"ninive.html"},
   {q:"Selon la chronologie biblique retenue, les 70 ans de désolation courent de…",o:["605 à 535","607 à 537","587 à 517"],b:1,e:"607 → 537 dans la lecture retenue ; la chronologie profane dit 587/586, et la salle 06 expose les deux.",s:"jerusalem-exil-70-ans.html"},
   {q:"Dans la compréhension actuelle exposée au musée, les pieds de fer et d'argile représentent…",o:["Deux puissances rivales","Un seul royaume divisé, affaibli par « l'argile » — les gens du peuple","L'Europe contre l'Amérique"],b:1,e:"Un royaume unique et divisé : la puissance anglo-américaine, forte dehors, fragile dedans (salle 07).",s:"daniel-statue-et-betes.html"},
   {q:"Que se passe-t-il après le mariage de Bérénice en Daniel 11:6 ?",o:["Une paix de cent ans","Son assassinat, puis la riposte de son frère Ptolémée III","La conversion du roi du Nord"],b:1,e:"L'ancienne épouse répudiée, Laodice, fait assassiner Bérénice et son enfant (salle 08).",s:"roi-du-nord-roi-du-sud.html"},
   {q:"455 av. n. è. + 483 ans (69 semaines d'années) aboutit à…",o:["L'an 29 avant notre ère","L'an 29 de notre ère","L'an 33 de notre ère"],b:1,e:"29 de n. è., baptême du Messie — sans année zéro, sinon on se trompe d'un an (salle 10).",s:"soixante-dix-semaines.html"},
   {q:"Quel événement de 66 ouvre la « fenêtre de fuite » de Jérusalem ?",o:["Le premier incendie du temple","Le retrait inexpliqué de l'armée de Cestius Gallus","L'assassinat du gouverneur"],b:1,e:"Cestius se retire sans raison claire (Josèphe, II.19.7) ; la communauté part vers Pella (salle 11).",s:"jerusalem-an-70.html"},
   {q:"Que signifie l'hébreu ḥûg en Isaïe 40:22, selon la lecture À NUANCER du musée ?",o:["Une sphère parfaite","Un cercle","Un satellite"],b:1,e:"Ḥûg = « cercle » : la salle 12 refuse de le vendre comme une preuve de la sphère.",s:"science-en-avance.html"},
   {q:"Selon la lecture retenue, que désigne Gog de Magog ?",o:["Satan lui-même","Un seul pays nommé","Une coalition de nations qui attaquera le peuple de Dieu"],b:2,e:"Une coalition (nuance de 2015) ; Satan agit en coulisses, et aucune date n'est donnée (salle 15).",s:"ce-qui-vient.html"}
  ];
  var i=0, score=0, verrou=false;
  var elN=document.getElementById("s17-num"), elS=document.getElementById("s17-score"),
      elQ=document.getElementById("s17-question"), elO=document.getElementById("s17-options"),
      elR=document.getElementById("s17-retour"), elB=document.getElementById("s17-barre-i"),
      elSuiv=document.getElementById("s17-suivant"), elRec=document.getElementById("s17-recommencer"),
      elF=document.getElementById("s17-final");
  function poser(){
    verrou=false; var q=Q[i];
    elN.textContent=i+1; elS.textContent=score; elQ.textContent=q.q; elR.textContent=""; elF.textContent="";
    elB.style.width=(i/Q.length*100)+"%";
    elSuiv.hidden=true; elRec.hidden=true; elO.innerHTML="";
    q.o.forEach(function(txt, idx){
      var b=document.createElement("button"); b.type="button"; b.textContent=txt;
      b.addEventListener("click", function(){
        if(verrou) return; verrou=true;
        var bonne = idx===q.b;
        if(bonne){ score++; b.classList.add("bonne"); } else { b.classList.add("mauvaise"); elO.children[q.b].classList.add("bonne"); }
        Array.prototype.forEach.call(elO.children, function(x){ x.disabled=true; });
        elS.textContent=score;
        elR.innerHTML=(bonne?"Bonne réponse. ":"Non. ")+q.e+" <a href=\""+q.s+"\">Revoir la salle</a>";
        elB.style.width=((i+1)/Q.length*100)+"%";
        elSuiv.hidden=false; elSuiv.textContent = i===Q.length-1 ? "Voir mon verdict" : "Question suivante";
      });
      elO.appendChild(b);
    });
  }
  elSuiv.addEventListener("click", function(){
    if(i<Q.length-1){ i++; poser(); }
    else {
      elQ.textContent="Votre verdict, en toute liberté";
      elO.innerHTML=""; elR.textContent=""; elSuiv.hidden=true; elRec.hidden=false;
      elF.textContent = score>=9 ? "Score : "+score+"/10. Vous avez retenu l'essentiel du parcours — le fil d'or n'a plus de secret pour vous. La question de la salle reste ouverte : qui peut annoncer l'avenir ainsi ?"
        : score>=6 ? "Score : "+score+"/10. Belle traversée ! La grande frise de la salle 16 vous permettra de consolider les points manqués."
        : "Score : "+score+"/10. Le musée se revisite : la grande frise (salle 16) résume chaque prophétie en une ligne, badges et preuves à l'appui.";
    }
  });
  elRec.addEventListener("click", function(){ i=0; score=0; poser(); });
  poser();
})();
