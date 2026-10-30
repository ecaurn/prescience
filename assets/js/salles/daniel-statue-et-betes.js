(function(){
  var INFOS={
    tete:{etape:"Premier métal — Daniel 2:38",titre:"La tête d'or — Babylone",dates:"Période de domination : 625-539 av. n. è. environ.",texte:"« C'est toi qui es la tête d'or », dit Daniel au roi Nébucadnetsar (Daniel 2:38). L'Empire néo-babylonien domine alors le Proche-Orient ; c'est lui qui a détruit Jérusalem et déporté son peuple. Premier métal, le plus précieux : la suite descend en valeur à mesure que les siècles avancent."},
    poitrine:{etape:"Deuxième métal — Daniel 2:39",titre:"La poitrine et les bras d'argent — la Médo-Perse",dates:"Période de domination : 539-331 av. n. è. environ.",texte:"Un royaume « moindre » que Babylone, dit le texte — l'argent vaut moins que l'or. En 539, Cyrus prend Babylone (salle 02) : l'Empire médo-perse règne deux siècles. Deux bras pour deux peuples unis, les Mèdes et les Perses, que Daniel 8 nommera explicitement."},
    ventre:{etape:"Troisième métal — Daniel 2:39 ; 8:21",titre:"Le ventre et les cuisses de bronze — la Grèce",dates:"Période de domination : à partir de 331 av. n. è., puis les royaumes hellénistiques.",texte:"« Un troisième royaume, d'airain, qui dominera sur toute la terre. » Alexandre brise l'Empire perse en douze ans ; mort au faîte de sa force, il laisse quatre généraux se partager son empire (Daniel 8:22). Le bronze grec résonnera pendant des siècles dans la langue, les villes et les routes du monde méditerranéen."},
    jambes:{etape:"Quatrième métal — Daniel 2:40",titre:"Les jambes de fer — Rome",dates:"Période de domination : à partir du IIᵉ siècle av. n. è., pour des siècles.",texte:"« Fort comme le fer » qui « broie et écrase tout » : Rome absorbe le monde hellénistique, dure plus longtemps que toutes les puissances précédentes — deux jambes, comme l'Empire finira partagé entre Occident et Orient. C'est sous Rome que naît le Messie, et c'est Rome qui détruira Jérusalem en 70 (salles 09 et 11)."},
    pieds:{etape:"Dernier métal — Daniel 2:41-43",titre:"Les pieds de fer et d'argile — un royaume divisé",dates:"Période : la phase finale des puissances humaines, encore en cours.",texte:"La succession se termine en un royaume à la fois fort et divisé : la puissance anglo-américaine. Le fer y tient encore, mais l'argile — les gens du peuple, glissements, contestations, divisions internes — l'empêche de « tenir » comme le fer pur. Aucun métal ne suit les pieds : l'histoire humaine annoncée par la statue s'arrête ici."},
    Pierre:{etape:"Hors statue — Daniel 2:34, 44, 45",titre:"La Pierre — le Royaume de Dieu",dates:"Statut : À VENIR. Aucune date n'est annoncée.",texte:"Une Pierre « détachée sans le secours d'aucune main » frappe la statue aux pieds : les métaux deviennent poussière, et la Pierre devient une montagne qui remplit la terre. Lecture retenue : le Royaume de Dieu remplace définitivement les gouvernements humains. La salle 15 détaillera la séquence annoncée — sans aucune date."}
  };
  var titre=document.getElementById("s07-titre"), texte=document.getElementById("s07-texte"),
      dates=document.getElementById("s07-dates"), etape=document.getElementById("s07-etape");
  var boutons=Array.prototype.slice.call(document.querySelectorAll(".s07-boutons button"));
  var selection="tete", HOOK={};
  function afficher(part){
    if(part==="reinitialiser"){ part="pieds"; reinitialiser(); }
    selection=part; var info=INFOS[part]; if(!info) return;
    titre.textContent=info.titre; texte.textContent=info.texte; dates.innerHTML="<strong>"+info.dates+"</strong>"; etape.textContent=info.etape;
    boutons.forEach(function(b){ b.setAttribute("aria-pressed", b.getAttribute("data-part")===part ? "true":"false"); });
    if(HOOK.choisir) HOOK.choisir(part);
  }
  boutons.forEach(function(b){ b.addEventListener("click", function(){ afficher(b.getAttribute("data-part")); }); });

  var reduit = localStorage.getItem("mouvement-reduit")==="1" || matchMedia("(prefers-reduced-motion: reduce)").matches;
  var wrap=document.getElementById("s07-canvas-wrap"), canvas=document.getElementById("s07-canvas");
  function reinitialiser(){ if(HOOK.reinit) HOOK.reinit(); }
  import("../../vendor/three.module.min.js").then(function(THREE){
    var renderer=new THREE.WebGLRenderer({canvas:canvas, antialias:true, alpha:true});
    renderer.setPixelRatio(Math.min(devicePixelRatio,2));
    var scene=new THREE.Scene();
    var camera=new THREE.PerspectiveCamera(42, 1, .1, 100); camera.position.set(4.2,3.4,9);
    scene.add(new THREE.AmbientLight(0xfff2d8,.55));
    var cle=new THREE.DirectionalLight(0xffe9b0,1.6); cle.position.set(5,9,7); scene.add(cle);
    var rim=new THREE.DirectionalLight(0x3fa7a0,.7); rim.position.set(-6,4,-5); scene.add(rim);
    function mat(c,m,r){ return new THREE.MeshStandardMaterial({color:c, metalness:m, roughness:r, transparent:true}); }
    var OR=mat(0xd4af37,.95,.25), AR=mat(0xc0c6ce,.95,.3), BR=mat(0xa0682b,.9,.35),
        FER=mat(0x3c4148,.85,.45), ARG=mat(0xa2482b,.05,.9), PIER=mat(0x8d9299,.1,.85);
    var statue=new THREE.Group(), parties={};
    function ajouter(part, geo, materiau, x,y,z){
      var m=new THREE.Mesh(geo,materiau); m.position.set(x,y,z); m.userData.part=part;
      (parties[part]=parties[part]||[]).push(m); statue.add(m); return m;
    }
    ajouter("scene", new THREE.BoxGeometry(3.2,.3,2), mat(0x2a3040,.2,.8), 0,.15,0);
    ajouter("pieds", new THREE.BoxGeometry(.62,.34,.95), FER, -.48,.47,0);
    ajouter("pieds", new THREE.BoxGeometry(.62,.34,.95), FER, .48,.47,0);
    ajouter("pieds", new THREE.BoxGeometry(.62,.2,.3), ARG, -.48,.4,.6);
    ajouter("pieds", new THREE.BoxGeometry(.62,.2,.3), ARG, .48,.4,.6);
    ajouter("jambes", new THREE.CylinderGeometry(.27,.3,1.5,20), FER, -.46,1.35,0);
    ajouter("jambes", new THREE.CylinderGeometry(.27,.3,1.5,20), FER, .46,1.35,0);
    ajouter("ventre", new THREE.CylinderGeometry(.72,.88,1.15,24), BR, 0,2.65,0);
    ajouter("poitrine", new THREE.CylinderGeometry(.88,.74,1.05,24), AR, 0,3.7,0);
    ajouter("poitrine", new THREE.CylinderGeometry(.2,.24,1.35,14), AR, -1.05,3.55,0).rotation.z=.25;
    ajouter("poitrine", new THREE.CylinderGeometry(.2,.24,1.35,14), AR, 1.05,3.55,0).rotation.z=-.25;
    ajouter("tete", new THREE.SphereGeometry(.52,24,18), OR, 0,4.75,0);
    ajouter("tete", new THREE.CylinderGeometry(.34,.42,.42,18), OR, 0,5.3,0);
    scene.add(statue);
    var pierre=new THREE.Mesh(new THREE.DodecahedronGeometry(.5,0), PIER); pierre.position.set(3,0.65,1.6); pierre.userData.part="Pierre"; scene.add(pierre);
    var montagne=new THREE.Mesh(new THREE.ConeGeometry(2.6,2.3,7), mat(0x51683f,.05,.95)); montagne.position.set(0,1.15,0); montagne.scale.setScalar(.001); scene.add(montagne);
    var etat="debout", prog=0;
    function surligner(part){
      Object.keys(parties).forEach(function(k){ (parties[k]||[]).forEach(function(m){
        if(m.material.emissive) m.material.emissive.setHex(k===part ? 0x6b5510 : 0x000000); }); });
      pierre.material.emissive && pierre.material.emissive.setHex(part==="Pierre"?0x444444:0x000000);
    }
    HOOK.choisir=function(part){
      surligner(part);
      if(part==="Pierre" && etat==="debout"){ etat="frappe"; prog=0; }
      if(part!=="Pierre" && etat==="tombe"){ /* reste au sol jusqu'à réinitialiser */ }
    };
    HOOK.reinit=function(){ etat="debout"; prog=0; statue.rotation.set(0,statue.rotation.y,0); statue.position.y=0;
      statue.traverse(function(m){ if(m.material) m.material.opacity=1; }); montagne.scale.setScalar(.001); pierre.position.set(3,0.65,1.6); };
    var ray=new THREE.Raycaster(), ptr=new THREE.Vector2();
    canvas.addEventListener("pointerdown", function(e){
      var r=canvas.getBoundingClientRect(); ptr.x=((e.clientX-r.left)/r.width)*2-1; ptr.y=-((e.clientY-r.top)/r.height)*2+1;
      ray.setFromCamera(ptr,camera); var hits=ray.intersectObjects(scene.children,true);
      for(var i=0;i<hits.length;i++){ var p=hits[i].object.userData.part; if(p && INFOS[p]){ afficher(p); break; } }
    });
    var glissant=false, px=0;
    canvas.addEventListener("pointerdown", function(e){ glissant=true; px=e.clientX; });
    addEventListener("pointerup", function(){ glissant=false; });
    canvas.addEventListener("pointermove", function(e){ if(glissant){ statue.rotation.y += (e.clientX-px)*.008; px=e.clientX; } });
    function dimensionner(){ var w=wrap.clientWidth, h=Math.max(wrap.clientHeight,420); renderer.setSize(w,h,false); camera.aspect=w/h; camera.updateProjectionMatrix(); }
    dimensionner(); addEventListener("resize", dimensionner);
    var horloge=new THREE.Clock();
    (function boucle(){
      requestAnimationFrame(boucle); var t=horloge.getElapsedTime();
      if(!reduit && !glissant && etat==="debout") statue.rotation.y += .0016;
      if(etat==="frappe"){
        prog=Math.min(1, prog+.012);
        pierre.position.lerpVectors(new THREE.Vector3(3,0.65,1.6), new THREE.Vector3(0,0.5,0.7), prog);
        if(prog>=1){ etat="tombe"; }
      } else if(etat==="tombe"){
        statue.rotation.x=Math.max(-1.35, statue.rotation.x-.03); statue.position.y=Math.max(-.4, statue.position.y-.01);
        statue.traverse(function(m){ if(m.material) m.material.opacity=Math.max(.12,(m.material.opacity||1)-.012); });
        montagne.scale.setScalar(Math.min(1, montagne.scale.x+.012));
      }
      camera.lookAt(0,2.6,0); renderer.render(scene,camera); void t;
    })();
    surligner("tete");
  }).catch(function(){ document.getElementById("s07-repli").hidden=false; });
})();
