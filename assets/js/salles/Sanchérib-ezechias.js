(function(){
  var boutons=document.querySelectorAll(".s18-onglets [data-recit]");
  boutons.forEach(function(b){
    b.addEventListener("click", function(){
      boutons.forEach(function(x){ x.classList.remove("actif"); x.setAttribute("aria-selected","false"); });
      b.classList.add("actif"); b.setAttribute("aria-selected","true");
      ["bible","assyrien","archeo"].forEach(function(k){
        document.getElementById("s18-"+k).hidden = k!==b.dataset.recit;
      });
    });
  });
})();
