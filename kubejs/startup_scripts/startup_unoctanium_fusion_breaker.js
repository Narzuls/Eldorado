// kubejs/startup_scripts/startup_unoctanium_fusion_breaker.js

StartupEvents.registry('item', event => {
  // Simple sword creation (MC 1.20.1 working version)
  event.create('unoctanium_fusion_breaker', 'sword')
    .displayName('Unoctanium Fusion Breaker')
    .tooltip([
      'A Powerful Weapon And Tool Unoctanium Fusion Breaker'
    ])
    .maxStackSize(1)
    .rarity('epic')
    .tier('netherite')
    .attackDamageBaseline(15.0)
    .speedBaseline(-2.0)
    .maxDamage(4096)
    .texture('kubejs:item/unoctanium_fusion_breaker')
})