// Place this in kubejs/server_scripts/pebble_generation_tags.js

ServerEvents.tags('item', event => {
    // Add Ex Deorum pebbles to the pebble tag
    event.add('forge:pebble_tag', [
        'exdeorum:stone_pebble',
        // 'exdeorum:andesite_pebble',
        // 'exdeorum:granite_pebble',
        // 'exdeorum:diorite_pebble'
    ])
    
    // Remove the placeholder air item
    event.remove('forge:pebble_tag', 'minecraft:air')
})

ServerEvents.tags('block', event => {
    // Add blocks that can generate pebbles when shift+right-clicked
    event.add('forge:pebble_sources', [
        'minecraft:grass_block',
        'minecraft:dirt',
        // 'minecraft:coarse_dirt',
        // 'minecraft:podzol',
        // 'minecraft:mycelium'
    ])
})