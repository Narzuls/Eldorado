ServerEvents.recipes(event => {
  const infiniteParts = [
    'extradisks:infinite_storage_part',
    'extradisks:infinite_fluid_storage_part'
  ]

  // Suppression des anciennes recettes
  infiniteParts.forEach(item => event.remove({ output: item }))

  // === infinite_storage_part ===
  event.custom({
    type: 'extendedcrafting:shaped_table',
    tier: 3,
    pattern: [
      'AAAAAAA',
      'ABBBBBA',
      'ABCCCBA',
      'ABCDCBA',
      'ABCCCBA',
      'ABBBBBA',
      'AAAAAAA'
    ],
    key: {
      A: { item: 'avaritia:infinity_ingot' },
      B: { item: 'mysticalagriculture:awakened_supremium_block' },
      C: { item: 'botania:gaia_ingot' },
      D: { item: 'extradisks:1048576k_storage_part' }
    },
    result: { item: 'extradisks:infinite_storage_part' }
  })

  // === infinite_fluid_storage_part ===
  event.custom({
    type: 'extendedcrafting:shaped_table',
    tier: 3,
    pattern: [
      'FHFHFHF',
      'BGBGBGB',
      'FHFHFHF',
      'BGCBCGB',
      'FHFHFHF',
      'BGBGBGB',
      'FHFHFHF'
    ],
    key: {
      F: { item: 'avaritia:infinity_ingot' },
      H: { item: 'mekanism:pellet_antimatter' },
      B: { item: 'extradisks:1048576k_fluid_storage_part' },
      G: { item: 'botania:gaia_ingot' },
      C: { item: 'mysticalagriculture:awakened_supremium_block' }
    },
    result: { item: 'extradisks:infinite_fluid_storage_part' }
  })

  console.log('[KubeJS] Recettes Infinite Storage & Fluid Parts enregistrées.')
})
