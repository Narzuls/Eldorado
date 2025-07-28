ServerEvents.recipes(event => {
  event.remove({ output: 'refinedstorage:machine_casing' })

  event.shaped('refinedstorage:machine_casing', [
    'SSS',
    'SXS',
    'SSS'
  ], {
    S: 'refinedstorage:quartz_enriched_iron', // l'item, pas l'ID de recette
    X: 'enderio:void_chassis'
  })
})
