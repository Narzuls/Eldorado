ServerEvents.recipes(event => {
  // Supprime l'ancienne recette
  event.remove({ output: 'quarryplus:repeat_tick_module' })
  
  // Recette difficile pour l'item original (pas besoin de kubejs:)
  event.shaped('quarryplus:repeat_tick_module', [
    'ADA',
    'BCB',
    'AEA'
  ], {
    A: 'mekanism:hdpe_sheet',
    B: 'powah:crystal_spirited',
    C: 'ifeu:empty_nether_star',
    D: 'refinedstorage:advanced_processor',
    E: 'create:precision_mechanism'
  })
})