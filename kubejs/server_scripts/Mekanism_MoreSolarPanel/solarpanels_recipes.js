// Script KubeJS pour recréer les recettes des panneaux solaires de solarpanels
ServerEvents.recipes(event => {
  event.shaped('solarpanels:advanced_solar_panel', [
    'GGG',
    'RAR',
    'OCO',
  ], {
    'G': 'solarpanels:carbone_solar_element',
    'O': 'mekanism:basic_control_circuit',
    'R': 'mekanism:ingot_osmium',
    'A': 'mekanismgenerators:solar_generator',
    'C': 'mekanism:energy_tablet',
  })

  event.shaped('solarpanels:hybrid_solar_panel', [
    'GGG',
    'RAR',
    'OCO',
  ], {
    'G': 'solarpanels:hybrid_solar_element',
    'O': 'mekanism:advanced_control_circuit',
    'R': 'mekanism:ingot_osmium',
    'A': 'solarpanels:advanced_solar_panel',
    'C': 'mekanism:energy_tablet',
  })

  event.shaped('solarpanels:ultimate_hybrid_solar_panel', [
    'GGG',
    'RAR',
    'OCO',
  ], {
    'G': 'solarpanels:improved_hybrid_solar_element',
    'O': 'mekanism:elite_control_circuit',
    'R': 'mekanism:ingot_osmium',
    'A': 'solarpanels:hybrid_solar_panel',
    'C': 'solarpanels:improved_energy_tablet',
  })

  event.shaped('solarpanels:quantum_solar_panel', [
    'GGG',
    'RAR',
    'OCO',
  ], {
    'G': 'solarpanels:quantum_solar_element',
    'O': 'mekanism:ultimate_control_circuit',
    'R': 'mekanism:ingot_osmium',
    'A': 'solarpanels:ultimate_hybrid_solar_panel',
    'C': 'solarpanels:quantum_energy_tablet',
  })

  event.shaped('solarpanels:spectral_solar_panel', [
    'GGG',
    'RAR',
    'OCO',
  ], {
    'G': 'solarpanels:spectral_solar_element',
    'O': 'mekanism:hdpe_sheet',
    'R': 'mekanism:ingot_osmium',
    'A': 'solarpanels:quantum_solar_panel',
    'C': 'solarpanels:spectral_energy_tablet',
  })

  event.shaped('solarpanels:singular_solar_panel', [
    'GGG',
    'RAR',
    'OCO',
  ], {
    'G': 'solarpanels:singular_solar_element',
    'O': 'mekanism:hdpe_sheet',
    'R': 'mekanism:ingot_osmium',
    'A': 'solarpanels:spectral_solar_panel',
    'C': 'solarpanels:singular_energy_tablet',
  })

  event.shaped('solarpanels:light_absorbing_solar_panel', [
    'GGG',
    'RAR',
    'OCO',
  ], {
    'G': 'solarpanels:light_absorbing_solar_element',
    'O': 'mekanism:hdpe_sheet',
    'R': 'mekanism:ingot_osmium',
    'A': 'solarpanels:singular_solar_panel',
    'C': 'solarpanels:light_absorbing_energy_tablet',
  })

  event.shaped('solarpanels:photonic_solar_panel', [
    'GGG',
    'RAR',
    'OCO',
  ], {
    'G': 'solarpanels:photonic_solar_element',
    'O': 'mekanism:hdpe_sheet',
    'R': 'mekanism:ingot_osmium',
    'A': 'solarpanels:light_absorbing_solar_panel',
    'C': 'solarpanels:photonic_energy_tablet',
  })

})