ServerEvents.recipes(event => {
  // Supprimer la recette de base
  event.remove({ output: 'angelring:angel_ring' })

  // Nouvelle recette 3x3 équilibrée
  event.shaped('angelring:angel_ring', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'botania:gaia_ingot',
    B: 'minecraft:elytra',
    C: 'draconicevolution:draconium_core',
    D: 'angelring:diamond_ring',
    E: 'mekanism:hdpe_sheet',
    F: 'powah:capacitor_nitro'
  })
})
