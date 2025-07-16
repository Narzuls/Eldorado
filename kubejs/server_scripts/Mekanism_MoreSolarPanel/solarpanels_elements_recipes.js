// Script KubeJS pour recréer les recettes des Solar Elements du mod solarpanels
ServerEvents.recipes(event => {

  event.remove({id: 'solarpanels:hybrid_solar_element'})

  event.shaped('solarpanels:carbone_solar_element', [
    'AAA',
    'BBB',
    'CCC',
  ], {
    'A': 'minecraft:black_stained_glass_pane',
    'B': '#forge:dusts/lapis',
    'C': 'mekanism:enriched_carbon',
  })

  event.shaped('solarpanels:hybrid_solar_element', [
    'AAA',
    'BBB',
    'CCC',
  ], {
    'A': 'minecraft:glass_pane',
    'B': '#forge:dusts/lapis',
    'C': 'mekanism:hdpe_sheet',
  })

  event.shaped('solarpanels:improved_hybrid_solar_element', [
    'AAA',
    'BBB',
    'CCC',
  ], {
    'A': 'minecraft:glass_pane',
    'B': 'mekanism:enriched_diamond',
    'C': 'mekanism:hdpe_sheet',
  })

  event.shaped('solarpanels:quantum_solar_element', [
    'AAA',
    'BBB',
    'CCC',
  ], {
    'A': 'minecraft:purple_stained_glass_pane',
    'B': 'mekanism:enriched_refined_obsidian',
    'C': 'mekanism:hdpe_sheet',
  })

  event.shaped('solarpanels:spectral_solar_element', [
    'AAA',
    'BBB',
    'CCC',
  ], {
    'A': 'minecraft:yellow_stained_glass_pane',
    'B': 'mekanism:crystal_gold',
    'C': 'mekanism:hdpe_sheet',
  })

  event.shaped('solarpanels:singular_solar_element', [
    'AAA',
    'BBB',
    'CCC',
  ], {
    'A': 'minecraft:pink_stained_glass_pane',
    'B': 'mekanism:ingot_refined_glowstone',
    'C': 'mekanism:hdpe_sheet',
  })

  event.shaped('solarpanels:light_absorbing_solar_element', [
    'AAA',
    'BBB',
    'CXC',
  ], {
    'A': 'minecraft:red_stained_glass_pane',
    'B': 'mekanism:ingot_uranium',
    'C': 'mekanism:hdpe_sheet',
    'X': 'minecraft:nether_star',
  })

  event.shaped('solarpanels:photonic_solar_element', [
    'AAA',
    'BBB',
    'CCC',
  ], {
    'A': 'minecraft:lime_stained_glass_pane',
    'B': 'mekanism:crystal_uranium',
    'C': 'minecraft:nether_star',
  })

})