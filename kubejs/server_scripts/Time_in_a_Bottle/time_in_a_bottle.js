ServerEvents.recipes(event => {
  // Supprime la recette de base
  event.remove({ output: 'tiab:time_in_a_bottle' })

  // Ajoute une nouvelle recette difficile
  event.shaped('tiab:time_in_a_bottle', [
    'CTC',
    'PEP',
    'RGR'
  ], {
    C: 'mekanism:ingot_refined_obsidian',
    T: 'minecraft:clock',
    P: 'refinedstorage:advanced_processor',
    E: 'powah:crystal_nitro', // ou autre composant end-game
    R: 'botania:rune_mana',
    G: 'minecraft:nether_star'
  })
});