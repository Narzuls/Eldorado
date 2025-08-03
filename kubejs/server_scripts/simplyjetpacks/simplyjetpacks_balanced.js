ServerEvents.recipes(event => {
  // ---------------- VANILLA ----------------
  for (let tier = 1; tier <= 4; tier++) { 
    event.remove({ output: `simplyjetpacks:jetpack_vanilla${tier}` })
  }

  event.shaped('simplyjetpacks:jetpack_vanilla1', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'thermal:lead_ingot',
    B: 'powah:capacitor_basic',
    C: 'thermal:invar_gear',
    D: 'minecraft:iron_chestplate',
    E: 'thermal:rf_coil',
    F: 'thermal:machine_frame'
  })

  event.shaped('simplyjetpacks:jetpack_vanilla2', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'mekanism:alloy_infused',
    B: 'powah:capacitor_hardened',
    C: 'mekanism:basic_control_circuit',
    D: 'simplyjetpacks:jetpack_vanilla1',
    E: 'thermal:rf_coil',
    F: 'thermal:upgrade_augment_1'
  })

  event.shaped('simplyjetpacks:jetpack_vanilla3', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'mekanism:alloy_reinforced',
    B: 'powah:capacitor_blazing',
    C: 'mekanism:advanced_control_circuit',
    D: 'simplyjetpacks:jetpack_vanilla2',
    E: 'draconicevolution:draconium_core',
    F: 'botania:rune_air'
  })

  event.shaped('simplyjetpacks:jetpack_vanilla4', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'mekanism:pellet_antimatter',
    B: 'powah:capacitor_nitro',
    C: 'draconicevolution:awakened_core',
    D: 'simplyjetpacks:jetpack_vanilla3',
    E: 'botania:gaia_ingot',
    F: 'powah:reactor_nitro'
  })

  // ---------------- THERMAL (te1 - te4) ----------------
  for (let tier = 1; tier <= 4; tier++) {
    event.remove({ output: `simplyjetpacks:jetpack_te${tier}` })
  }

  event.shaped('simplyjetpacks:jetpack_te1', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'thermal:invar_ingot',
    B: 'thermal:flux_capacitor',
    C: 'thermal:invar_gear',
    D: 'minecraft:iron_chestplate',
    E: 'thermal:rf_coil',
    F: 'thermal:upgrade_augment_1'
  })

  event.shaped('simplyjetpacks:jetpack_te2', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'thermal:signalum_ingot',
    B: 'thermal:flux_capacitor',
    C: 'thermal:signalum_gear',
    D: 'simplyjetpacks:jetpack_te1',
    E: 'thermal:rf_coil',
    F: 'thermal:upgrade_augment_2'
  })

  event.shaped('simplyjetpacks:jetpack_te3', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'thermal:lumium_ingot',
    B: 'thermal:flux_capacitor',
    C: 'thermal:lumium_gear',
    D: 'simplyjetpacks:jetpack_te2',
    E: 'thermal:rf_coil',
    F: 'thermal:upgrade_augment_3'
  })

  event.shaped('simplyjetpacks:jetpack_te4', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'thermal:enderium_ingot',
    B: 'thermal:flux_capacitor',
    C: 'thermal:enderium_gear',
    D: 'simplyjetpacks:jetpack_te3',
    E: 'thermal:rf_coil',
    F: 'thermal:machine_frame'
  })

  // ---------------- MEKANISM (mek1 - mek4) ----------------
  for (let tier = 1; tier <= 4; tier++) {
    event.remove({ output: `simplyjetpacks:jetpack_mek${tier}` })
  }

  event.shaped('simplyjetpacks:jetpack_mek1', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'mekanism:alloy_reinforced',
    B: 'mekanism:advanced_control_circuit',
    C: 'mekanism:ingot_refined_obsidian',
    D: 'minecraft:iron_chestplate',
    E: 'mekanism:energy_tablet',
    F: 'mekanism:upgrade_energy'
  })

  event.shaped('simplyjetpacks:jetpack_mek2', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'mekanism:alloy_atomic',
    B: 'mekanism:elite_control_circuit',
    C: 'mekanism:hdpe_sheet',
    D: 'simplyjetpacks:jetpack_mek1',
    E: 'mekanism:ultimate_energy_cube',
    F: 'mekanism:upgrade_gas'
  })

  event.shaped('simplyjetpacks:jetpack_mek3', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'mekanism:pellet_polonium',
    B: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:thermonuclear_boiler_valve',
    D: 'simplyjetpacks:jetpack_mek2',
    E: 'mekanism:structural_glass',
    F: 'mekanism:laser'
  })

  event.shaped('simplyjetpacks:jetpack_mek4', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'mekanism:pellet_antimatter',
    B: 'mekanism:ultimate_control_circuit',
    C: 'mekanism:teleportation_core',
    D: 'simplyjetpacks:jetpack_mek3',
    E: 'mekanism:hdpe_sheet',
    F: 'mekanism:ultimate_energy_cube'
  })

  // ---------------- IMMERSIVE ENGINEERING (ie1 - ie3) ----------------
  for (let tier = 1; tier <= 3; tier++) {
    event.remove({ output: `simplyjetpacks:jetpack_ie${tier}` })
  }

  event.shaped('simplyjetpacks:jetpack_ie1', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'immersiveengineering:component_steel',
    B: 'immersiveengineering:capacitor_mv',
    C: 'immersiveengineering:wirecoil_steel',
    D: 'minecraft:iron_chestplate',
    E: 'immersiveengineering:plate_steel',
    F: 'immersiveengineering:blastbrick'
  })

  event.shaped('simplyjetpacks:jetpack_ie2', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'immersiveengineering:electron_tube',
    B: 'immersiveengineering:capacitor_hv',
    C: 'immersiveengineering:toolbox',
    D: 'simplyjetpacks:jetpack_ie1',
    E: 'immersiveengineering:plate_aluminum',
    F: 'immersiveengineering:component_electronic'
  })

  event.shaped('simplyjetpacks:jetpack_ie3', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'immersiveengineering:component_electronic_adv',
    B: 'immersiveengineering:capacitor_hv',
    C: 'immersiveengineering:toolbox',
    D: 'simplyjetpacks:jetpack_ie2',
    E: 'immersiveengineering:plate_uranium',
    F: 'immersiveengineering:blastbrick_reinforced'
  })

  // ---------------- CREATIVE ----------------
  event.remove({ output: 'simplyjetpacks:jetpack_creative_armored' })
  event.shaped('simplyjetpacks:jetpack_creative_armored', [
    'ABA',
    'CDC',
    'EFE'
  ], {
    A: 'extendedcrafting:the_ultimate_component',
    B: 'draconicevolution:chaotic_core',
    C: 'extendedcrafting:ultimate_singularity',
    D: 'simplyjetpacks:jetpack_vanilla4',
    E: 'projecte:red_matter_block',
    F: 'botania:life_essence'
  })
})
