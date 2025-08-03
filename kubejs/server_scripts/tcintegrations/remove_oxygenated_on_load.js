// 🛑 Empêche d'ajouter/modifier un objet avec le modificateur "oxygenated"
ItemEvents.modifying(event => {
  if (event.modifier === 'tcintegrations:oxygenated') {
    console.warn(`[KubeJS] Blocage du modificateur interdit : ${event.modifier}`);
    event.cancel();
  }
});

// 🧹 Nettoyage des items du joueur à la connexion (dans son inventaire)
PlayerEvents.loggedIn(event => {
  const player = event.player;
  let modified = false;

  player.getInventory().getAll().forEach(stack => {
    if (stack?.nbt && stack.nbt["tic:modifiers"]) {
      let mods = stack.nbt["tic:modifiers"];
      if (Array.isArray(mods)) {
        const cleaned = mods.filter(mod => mod.id !== 'tcintegrations:oxygenated');
        if (cleaned.length < mods.length) {
          stack.nbt["tic:modifiers"] = cleaned;
          modified = true;
        }
      }
    }
  });

  if (modified) {
    console.log(`[KubeJS] Nettoyage effectué sur l'inventaire de ${player.name.getString()}`);
  }
});