ServerEvents.recipes(event => {
  event.shaped('kubejs:unoctanium_fusion_breaker', [
    'BBB',
    ' A ',
    ' A '
  ], {
    A: 'minecraft:netherite_ingot',
    B: 'minecraft:diamond_ingot'
  }).id('kubejs:fusion_breaker')
})
