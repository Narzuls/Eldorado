ServerEvents.recipes(event => {

    const itemExists = (id) => {
        try {
            const item = Item.of(id);
            return item.id !== 'air' && item.id !== 'minecraft:air';
        } catch(e) {
            return false;
        }
    };
    
    // Remove all the broken recipes first
    const brokenRecipes = [
        'mekanism:processing/coal/from_dust',
        'mekanism:processing/coal/to_deepslate_ore',
        'mekanism:processing/coal/to_ore',
        'mekanism:separator/water',
        'mekanism:processing/gold/slurry/clean',
        'mekanism:processing/tin/slurry/clean',
        'mekanism:processing/osmium/slurry/clean',
        'mekanism:processing/iron/slurry/clean',
        'mekanism:processing/uranium/slurry/clean',
        'mekanism:processing/lead/slurry/clean',
        'mekanism:processing/copper/slurry/clean',
        'mekanism:processing/silver/slurry/clean',
        'mekanism:evaporating/brine',
        'mekanism:reaction/coal_gasification/blocks_coals',
        'mekanism:reaction/wood_gasification/wooden_slabs',
        'mekanism:reaction/substrate/water_hydrogen',
        'mekanism:reaction/wood_gasification/wooden_stairs',
        'mekanism:reaction/substrate/water_ethene',
        'mekanism:reaction/wood_gasification/logs',
        'mekanism:reaction/wood_gasification/dusts_wood',
        'mekanism:processing/lategame/polonium_pellet/from_reaction',
        'mekanism:processing/lategame/plutonium_pellet/from_reaction',
        'mekanism:reaction/coal_gasification/dusts_coals',
        'mekanism:reaction/wood_gasification/rods_wooden',
        'mekanism:reaction/coal_gasification/coals',
        'mekanism:reaction/wood_gasification/planks',
        'mekanism:rotary/water_vapor',
        'mekanism:crushing/venus_sandstone_to_venus_sand'
    ];
    
    brokenRecipes.forEach(id => {
        event.remove({ id: id });
    });
    
    // 1. Water Separator - Always works
    event.custom({
        type: "mekanism:separating",
        input: { amount: 2, fluid: "minecraft:water" },
        leftGasOutput: { amount: 2, gas: "mekanism:hydrogen" },
        rightGasOutput: { amount: 1, gas: "mekanism:oxygen" }
    }).id('mekanism:separator/water_fixed');

    // 2. Combining Recipe - Simplified with validation
    if (itemExists('mekanism:sulfur_dust')) {
        event.recipes.mekanismCombining(
            'mekanism:sulfur_dust',
            '#forge:coal',
            'minecraft:water_bucket'
        ).id('mekanism:combining/sulfur_from_coal');
    }

    // 3. Metallurgic Infusing - Safe version
    if (itemExists('mekanism:basic_control_circuit')) {
        event.recipes.mekanismMetallurgicInfusing(
            'mekanism:basic_control_circuit',
            'minecraft:redstone',
            { chemicalType: "mekanism:iron", amount: 100 }
        ).id('mekanism:infusing/control_circuit');
    }

    // 4. Purifying Recipe - Tag-safe version
    try {
        const testIron = Ingredient.of('#mekanism:dirty_iron').stacks[0];
        if (testIron && !testIron.isEmpty()) {
            event.recipes.mekanismPurifying(
                'minecraft:iron_ingot',
                '#mekanism:dirty_iron',
                { gas: 'mekanism:oxygen', amount: 200 }
            ).id('mekanism:purifying/dirty_iron');
        }
    } catch (e) {
        console.log('Could not setup purifying recipe:', e);
    }

    // 5. Washing Recipes - Error-proof version
    const metals = ['iron', 'gold', 'copper', 'osmium', 'tin', 'lead', 'uranium', 'silver'];
    metals.forEach(metal => {
        try {
            event.custom({
                type: "mekanism:washing",
                fluidInput: { amount: 5, fluid: "minecraft:water" },
                slurryInput: { amount: 1, slurry: `mekanism:dirty_${metal}` },
                output: { slurry: `mekanism:clean_${metal}`, amount: 1 }
            }).id(`mekanism:washing/${metal}_slurry`);
        } catch (e) {
            console.log(`Skipping ${metal} washing recipe:`, e.message);
        }
    });

    // 6. Venus Sandstone Crushing Recipe - Fixed version
    // Activate only if you add Ad Astra to the modpack
    // Only add if both items exist (likely from a space mod like Ad Astra or Beyond Earth)
    // if (itemExists('ad_astra:venus_sandstone') && itemExists('ad_astra:venus_sand')) {
    //     try {
    //         event.recipes.mekanismCrushing(
    //             'ad_astra:venus_sand',
    //             'ad_astra:venus_sandstone'
    //         ).id('mekanism:crushing/venus_sandstone_to_venus_sand_fixed');
    //     } catch (e) {
    //         console.log('Could not create Venus sandstone crushing recipe:', e.message);
    //     }
    // } else if (itemExists('beyond_earth:venus_sandstone') && itemExists('beyond_earth:venus_sand')) {
    //     // Alternative if using Beyond Earth mod
    //     try {
    //         event.recipes.mekanismCrushing(
    //             'beyond_earth:venus_sand',
    //             'beyond_earth:venus_sandstone'
    //         ).id('mekanism:crushing/venus_sandstone_to_venus_sand_fixed');
    //     } catch (e) {
    //         console.log('Could not create Venus sandstone crushing recipe:', e.message);
    //     }
    // }

    console.log('Mekanism recipes processed successfully executed');
});

// Safe tag additions
ServerEvents.tags('item', event => {
    const safeTags = [
        ['forge:dusts/coal', 'mekanism:coal_dust'],
        ['forge:dusts/wood', 'mekanism:sawdust'],
        ['forge:coal', 'minecraft:coal'],
        ['forge:coal', 'minecraft:charcoal'],
        ['forge:storage_blocks/coal', 'minecraft:coal_block'],
        ['forge:rods/wooden', 'minecraft:stick']
    ];

    safeTags.forEach(([tag, item]) => {
        try {
            event.add(tag, item);
        } catch (e) {
            console.log(`Could not add ${item} to ${tag}:`, e.message);
        }
    });
});

