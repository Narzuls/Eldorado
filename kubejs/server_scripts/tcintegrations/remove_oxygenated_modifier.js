// Supprime le modificateur 'oxygenated' de tcintegrations si le mod est chargé
if (Platform.mods.tcintegrations) {

  console.log('[KubeJS] Suppression de tcintegrations:oxygenated...');

  // Supprime la recette du modificateur
  ServerEvents.recipes(event => {
    event.remove({ id: 'tcintegrations:modifier/oxygenated' });
  });

  // Supprime le tag de modificateur s’il existe
  ServerEvents.tags('tconstruct:modifiers', event => {
    event.remove('tcintegrations:oxygenated');
  });

}
