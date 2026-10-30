// Boucle unique : Lenis pilote par le ticker GSAP ; repli natif si mouvement réduit.
(function(){
  var reduit = localStorage.getItem("mouvement-reduit")==="1" || matchMedia("(prefers-reduced-motion: reduce)").matches;
  function bascule(){ document.documentElement.classList.toggle("mouvement-reduit", reduit); }
  bascule();
  var btn=document.getElementById("btn-mouvement"); if(btn){ btn.setAttribute("aria-pressed", reduit); btn.addEventListener("click", function(){ reduit=!reduit; localStorage.setItem("mouvement-reduit", reduit?"1":"0"); btn.setAttribute("aria-pressed", reduit); bascule(); if(reduit && window.__lenis){ window.__lenis.destroy(); } location.reload(); }); }
  var tiroir=document.getElementById("tiroir");
  document.querySelectorAll("[data-ouvre-tiroir]").forEach(function(b){ b.addEventListener("click", function(){ tiroir.setAttribute("aria-hidden","false"); }); });
  document.querySelectorAll("[data-ferme-tiroir]").forEach(function(b){ b.addEventListener("click", function(){ tiroir.setAttribute("aria-hidden","true"); }); });
  var visibles=document.querySelectorAll("[data-reveal]");
  if(reduit || !("IntersectionObserver" in window)){ visibles.forEach(function(e){ e.classList.add("is-visible"); }); }
  else { var io=new IntersectionObserver(function(es){ es.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("is-visible"); io.unobserve(e.target); } }); },{threshold:.12}); visibles.forEach(function(e){ io.observe(e); }); }
  document.querySelectorAll("[data-compteur]").forEach(function(el){ var fin=+el.dataset.compteur; if(reduit){ el.textContent=fin; return; } var debut=null; function pas(t){ if(!debut)debut=t; var p=Math.min((t-debut)/1400,1); el.textContent=Math.round(fin*p); if(p<1) requestAnimationFrame(pas); } requestAnimationFrame(pas); });
  if(!reduit && window.Lenis && window.gsap){
    var lenis=new Lenis({lerp:.09}); window.__lenis=lenis;
    if(window.ScrollTrigger){ gsap.registerPlugin(ScrollTrigger); lenis.on("scroll", ScrollTrigger.update); }
    gsap.ticker.add(function(t){ lenis.raf(t*1000); }); gsap.ticker.lagSmoothing(0);
  }

  if("serviceWorker" in navigator && document.currentScript){
    var racine = document.currentScript.src.replace(/assets\/js\/main\.js.*$/, "");
    navigator.serviceWorker.register(racine + "sw.js").catch(function(){});
  }
})();
