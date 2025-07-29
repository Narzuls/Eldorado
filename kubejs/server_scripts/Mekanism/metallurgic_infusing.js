ServerEvents.recipes(event => {
  // Infusion avec du quartz (gemme)
  event.custom({
    type: 'mekanism:metallurgic_infusing',
    chemicalInput: {
      amount: 10,
      infuse_type: 'kubejs:quartz'
    },
    itemInput: {
      ingredient: {
        item: 'minecraft:iron_ingot'
      }
    },
    output: {
      item: 'refinedstorage:quartz_enriched_iron'
    }
  })
})
