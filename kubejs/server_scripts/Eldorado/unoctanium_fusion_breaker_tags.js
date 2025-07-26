// unoctanium_fusion_breaker_tags.js
ServerEvents.tags('item', event => {
  // Weapon tags
  event.add('forge:tools/swords', 'kubejs:unoctanium_fusion_breaker')
  event.add('minecraft:swords', 'kubejs:unoctanium_fusion_breaker')
  
  // Mining tags (these make it mine blocks fast)
  event.add('minecraft:mineable/pickaxe', 'kubejs:unoctanium_fusion_breaker')
  event.add('minecraft:mineable/axe', 'kubejs:unoctanium_fusion_breaker')
  event.add('minecraft:mineable/shovel', 'kubejs:unoctanium_fusion_breaker')
  event.add('minecraft:needs_diamond_tool', 'kubejs:unoctanium_fusion_breaker')
  event.add('forge:tools/pickaxes', 'kubejs:unoctanium_fusion_breaker')
  event.add('forge:tools/axes', 'kubejs:unoctanium_fusion_breaker')
  event.add('forge:tools/shovels', 'kubejs:unoctanium_fusion_breaker')
})