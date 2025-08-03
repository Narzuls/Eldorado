ServerEvents.recipes(event => {
  event.remove({ output: 'tiab:time_in_a_bottle' })

  event.shaped('tiab:time_in_a_bottle', [
    'CTC',
    'PEP',
    'RGR'
  ], {
    C: 'mekanism:dust_refined_obsidian',
    T: 'minecraft:clock',
    P: 'minecraft:diamond',
    E: 'minecraft:glass_bottle',
    R: 'minecraft:golden_apple',
    G: 'mekanism:teleportation_core'
  })
});
