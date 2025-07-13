// Script KubeJS pour recréer les recettes des Energy Tablets du mod solarpanels
ServerEvents.recipes(event => {
  event.shaped('solarpanels:improved_energy_tablet', [
    'ABA',
    'DCD',
    'ABA',
  ], {
    'A': 'mekanism:enriched_redstone',
    'B': 'mekanism:enriched_gold',
    'C': 'mekanism:energy_tablet',
    'D': 'mekanism:alloy_reinforced',
  })

  event.shaped('solarpanels:quantum_energy_tablet', [
    'ABA',
    'DCD',
    'ABA',
  ], {
    'A': 'mekanism:basic_control_circuit',
    'B': 'mekanism:enriched_gold',
    'C': 'solarpanels:improved_energy_tablet',
    'D': 'mekanism:alloy_reinforced',
  })

  event.shaped('solarpanels:spectral_energy_tablet', [
    'ABA',
    'DCD',
    'ABA',
  ], {
    'A': 'mekanism:advanced_control_circuit',
    'B': 'mekanism:enriched_gold',
    'C': 'solarpanels:quantum_energy_tablet',
    'D': 'mekanism:alloy_atomic',
  })

  event.shaped('solarpanels:singular_energy_tablet', [
    'ABA',
    'DCD',
    'ABA',
  ], {
    'A': 'mekanism:elite_control_circuit',
    'B': 'mekanism:enriched_gold',
    'C': 'solarpanels:spectral_energy_tablet',
    'D': 'mekanism:alloy_atomic',
  })

  event.shaped('solarpanels:light_absorbing_energy_tablet', [
    'ABA',
    'DCD',
    'ABA',
  ], {
    'A': 'mekanism:ultimate_control_circuit',
    'B': 'mekanism:enriched_gold',
    'C': 'solarpanels:singular_energy_tablet',
    'D': 'mekanism:alloy_atomic',
  })

  event.shaped('solarpanels:photonic_energy_tablet', [
    'ABA',
    'DCD',
    'ABA',
  ], {
    'A': 'mekanism:ultimate_control_circuit',
    'B': 'mekanism:pellet_antimatter',
    'C': 'solarpanels:light_absorbing_energy_tablet',
    'D': 'mekanism:alloy_atomic',
  })

})