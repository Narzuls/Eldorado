// Priority: 1000
// Combined Mekanism tag fixes - DELETE your old mekanism_tags_priority.js

ServerEvents.highPriorityData(event => {
    // ITEM TAGS
    // Create the paxel item tag without block tag references
    event.addJson('forge:tags/items/mineables/paxel.json', {
        replace: true,  // This will replace any existing definition
        values: [
            "#forge:ores",
            "#forge:raw_materials", 
            "#forge:storage_blocks",
            "#minecraft:logs",
            "#minecraft:planks",
            "#minecraft:wool",
            "#minecraft:terracotta"
        ]
    });
    
    // BLOCK TAGS
    // Create the paxel block tag with proper block references
    event.addJson('forge:tags/blocks/mineables/paxel.json', {
        replace: true,
        values: [
            "#minecraft:mineable/pickaxe",
            "#minecraft:mineable/axe",
            "#minecraft:mineable/shovel",
            "#minecraft:mineable/hoe"
        ]
    });
    
    // Coal-related tags with optional values
    event.addJson('forge:tags/items/coal.json', {
        replace: false,
        values: [
            'minecraft:coal',
            'minecraft:charcoal'
        ]
    });
    
    event.addJson('forge:tags/items/dusts/coal.json', {
        replace: true,
        values: [
            {"id": "mekanism:coal_dust", "required": false},
            {"id": "mekanism:charcoal_dust", "required": false}
        ]
    });
    
    event.addJson('forge:tags/items/storage_blocks/coal.json', {
        replace: false,
        values: [
            'minecraft:coal_block'
        ]
    });
    
    event.addJson('forge:tags/items/dusts/wood.json', {
        replace: true,
        values: [
            {"id": "mekanism:sawdust", "required": false}
        ]
    });
    
    event.addJson('forge:tags/items/rods/wooden.json', {
        replace: false,
        values: [
            'minecraft:stick'
        ]
    });
    
    // Fluid tags
    event.addJson('minecraft:tags/fluids/water.json', {
        replace: false,
        values: [
            'minecraft:water',
            'minecraft:flowing_water'
        ]
    });
    
    console.log('Added all Mekanism tag data files with proper references');
});

// Backup tag additions in normal events
ServerEvents.tags('item', event => {
    // Only add items that actually exist
    if (Item.exists('mekanism:coal_dust')) {
        event.add('forge:dusts/coal', 'mekanism:coal_dust');
    }
    if (Item.exists('mekanism:sawdust')) {
        event.add('forge:dusts/wood', 'mekanism:sawdust');
    }
    
    // Add other tags
    event.add('forge:coal', 'minecraft:coal');
    event.add('forge:coal', 'minecraft:charcoal');
    event.add('forge:storage_blocks/coal', 'minecraft:coal_block');
    event.add('forge:rods/wooden', 'minecraft:stick');
});

ServerEvents.tags('block', event => {
    // Block-specific tags are already handled in highPriorityData
    console.log('Block tags loaded');
});