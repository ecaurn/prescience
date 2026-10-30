(function(){
  var T={
   meprise:{t:"« Méprisé et abandonné des hommes » (Isaïe 53:3)",a:"« Homme de douleurs et habitué à la souffrance (…) nous l'avons dédaigné, nous n'avons fait de lui aucun cas. »",e:"Les récits rapportent le rejet par les foules et les chefs, et la parole « il est venu chez les siens, et les siens ne l'ont pas reçu » (Jean 1:11)."},
   blessures:{t:"« Blessé pour nos transgressions » (Isaïe 53:4, 5)",a:"« Ce sont nos souffrances qu'il a portées (…) par ses meurtrissures nous sommes guéris. »",e:"Matthieu cite déjà ce passage à propos de Jésus (Matthieu 8:17) ; la lecture chrétienne y voit le sens de sa mort pour les autres, au cœur du chapitre."},
   silence:{t:"« Comme un agneau qu'on mène à la boucherie » (Isaïe 53:7)",a:"« Maltraité et opprimé, il n'a point ouvert la bouche. »",e:"Les récits le montrent silencieux devant le sanhédrin et Pilate malgré les accusations (Matthieu 27:12-14). C'est ce passage précis que lit le dignitaire éthiopien en Actes 8, quand il demande de qui parle le prophète."},
   criminels:{t:"« Compté parmi les criminels, il intercédait » (Isaïe 53:12)",a:"« Il a été mis au nombre des malfaiteurs (…) et il a intercédé pour les coupables. »",e:"Exécuté entre deux brigands selon les récits, Jésus y est aussi montré priant pour ceux qui l'exécutent (Luc 23:34)."},
   tombeau:{t:"« Son sépulcre avec le riche » (Isaïe 53:9)",a:"« On a mis son sépulcre parmi les méchants, son tombeau avec le riche. »",e:"Les récits rapportent qu'un homme riche, Joseph d'Arimathée, offrit son tombeau neuf creusé dans le roc (Matthieu 27:57-60) — détail hors du contrôle de l'intéressé et de ses proches."},
   jours:{t:"« Il prolongera ses jours » (Isaïe 53:10, 11)",a:"« Après les souffrances de son âme, il verra la lumière (…) par sa connaissance, mon serviteur juste justifiera beaucoup d'hommes. »",e:"La lecture chrétienne y voit l'annonce de la résurrection : le Serviteur mis à mort n'en reste pas là. C'est l'élément de lecture prophétique du portrait, affiché comme tel."}};
  var ti=document.getElementById("s19-titre"), an=document.getElementById("s19-annonce"), ec=document.getElementById("s19-echo");
  if(!ti) return;
  function montrer(k){ ti.textContent=T[k].t; an.textContent=T[k].a; ec.textContent=T[k].e; }
  document.querySelectorAll(".s19-onglets [data-trait]").forEach(function(b){
    b.addEventListener("click", function(){
      document.querySelectorAll(".s19-onglets [data-trait]").forEach(function(x){x.classList.remove("actif");});
      b.classList.add("actif"); montrer(b.dataset.trait);
    });
  });
  montrer("meprise");
})();
