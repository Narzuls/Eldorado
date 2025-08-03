ServerEvents.recipes(event => {

    let recipeCounter = 0;
    
    try {
        event.remove({ type: 'exdeorum:compressed_sieve', mod: 'exdeorum' })
    } catch (e) {
        console.log('Some Ex Deorum sieve recipes were not found (this is normal on first startup)')
    }

const addSieveRecipes = (input, mesh, result, chance) =>{
        recipeCounter++;
        
    // Use a custom namespace to avoid conflicts
    const recipeId = `kubejs:exdeorum_compressed_sieve_${input.replace(':', '_')}_${result.replace(':', '_')}_${mesh.split(':')[1]}_${recipeCounter}`;
    if(chance >0){
        event.custom({
            type: 'exdeorum:compressed_sieve',
            ingredient: { item: input },
            mesh: mesh,
            result: result,
            result_amount: {
                type: 'minecraft:binomial',
                n:1.0,
                p:chance
            }
        }).id(recipeId);
    }
}

const addSieveItem = (input, itemName, stringChance, flintChance, ironChance, goldChance, diamondChance, netheriteChance) =>{
    addSieveRecipes(input, 'exdeorum:string_mesh', itemName, stringChance)
    addSieveRecipes(input, 'exdeorum:flint_mesh', itemName, flintChance)
    addSieveRecipes(input, 'exdeorum:iron_mesh', itemName, ironChance)
    addSieveRecipes(input, 'exdeorum:golden_mesh', itemName, goldChance)
    addSieveRecipes(input, 'exdeorum:diamond_mesh', itemName, diamondChance)
    addSieveRecipes(input, 'exdeorum:netherite_mesh', itemName, netheriteChance)
}

//#region Gravel
    addSieveItem('exdeorum:compressed_gravel', 'exdeorum:gold_ore_chunk', 0, 0, 0.1, 0.2, 0.3, 0.4)
    addSieveItem('exdeorum:compressed_gravel', 'exdeorum:iron_ore_chunk', 0, 0, 0.75, 1.0, 1.0, 1.0)
    addSieveItem('exdeorum:compressed_gravel', 'exdeorum:copper_ore_chunk', 0, 0, 0.75, 1.0, 1.0, 1.0)
    addSieveItem('exdeorum:compressed_gravel', 'exdeorum:osmium_ore_chunk', 0, 0, 0.01, 0.085, 0.125, 0.220)
    addSieveItem('exdeorum:compressed_gravel', 'exdeorum:tin_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_gravel', 'exdeorum:silver_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_gravel', 'exdeorum:lead_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_gravel', 'exdeorum:nickel_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_gravel', 'exdeorum:platinum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_gravel', 'exdeorum:aluminum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_gravel', 'minecraft:diamond', 0, 0, 0, 0.02, 0.18, 0.35)
    addSieveItem('exdeorum:compressed_gravel', 'minecraft:emerald', 0, 0, 0.04, 0.1, 0.2, 0.35)
    addSieveItem('exdeorum:compressed_gravel', 'minecraft:lapis_lazuli', 0, 0, 0.04, 0.08, 0.12, 0.15)
    addSieveItem('exdeorum:compressed_gravel', 'minecraft:flint', 0.125, 0.15, 0.20, 0.30, 0.40, 0.45)
    addSieveItem('exdeorum:compressed_gravel', 'minecraft:coal', 0, 0.15, 0.20, 0.30, 0.40, 0.45)
//#endregion

//#region Sand
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:gold_ore_chunk', 0, 0, 0.1, 0.2, 0.3, 0.4)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:iron_ore_chunk', 0, 0.50, 1.0, 1.0, 1.0, 1.0)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:copper_ore_chunk', 0, 0, 0.05, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:osmium_ore_chunk', 0, 0, 0.01, 0.085, 0.125, 0.225)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:tin_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:silver_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:lead_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:nickel_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:platinum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:aluminum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:uranium_ore_chunk', 0, 0, 0, 0, 0.8, 0.2)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:zinc_ore_chunk', 0, 0, 0, 0, 0.8, 0.2)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:cobalt_ore_chunk', 0, 0, 0, 0, 0.08, 0.2)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:thorium_ore_chunk', 0, 0, 0, 0, 0.08, 0.2)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:magnesium_ore_chunk', 0, 0, 0, 0, 0.08, 0.2)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:lithium_ore_chunk', 0, 0, 0, 0, 0.08, 0.2)
    addSieveItem('exdeorum:compressed_sand', 'exdeorum:boron_ore_chunk', 0, 0, 0, 0, 0.08, 0.2)
    addSieveItem('exdeorum:compressed_sand', 'minecraft:flint', 0.125, 0.15, 0.20, 0.30, 0.40, 0.45)
    addSieveItem('exdeorum:compressed_sand', 'minecraft:coal', 0, 0.15, 0.20, 0.30, 0.40, 0.45)
    addSieveItem('exdeorum:compressed_sand', 'minecraft:diamond', 0, 0, 0.01, 0.08, 0.2, 0.50)
    addSieveItem('exdeorum:compressed_sand', 'minecraft:emerald', 0, 0, 0.01, 0.08, 0.2, 0.50)
    addSieveItem('exdeorum:compressed_sand', 'minecraft:redstone', 0, 0, 0.04, 0.1, 0.2, 1.0)
    addSieveItem('exdeorum:compressed_sand', 'minecraft:lapis_lazuli', 0, 0, 0.08, 0.12, 0.15, 0.25)
    addSieveItem('exdeorum:compressed_sand', 'minecraft:blaze_powder', 0, 0, 0, 0.12, 0.15, 0.25)
    addSieveItem('exdeorum:compressed_sand', 'minecraft:gunpowder', 0, 0, 0.15, 0.20, 0.35)
    addSieveItem('exdeorum:compressed_sand', 'ae2:certus_quartz_crystal', 0, 0, 0.15, 0.20, 0.35)
    addSieveItem('exdeorum:compressed_sand', 'ae2:charged_certus_quartz_crystal', 0, 0, 0.15, 0.20, 0.35)


    const gemTag = '#silentgems:gems';
    const gems = Ingredient.of(gemTag).getStacks();

    // Loop through each gem and add sieve recipes
    gems.forEach(gem => {
        addSieveRecipes('exdeorum:compressed_sand', 'exdeorum:iron_mesh', gem.getId(), 0.001);
        addSieveRecipes('exdeorum:compressed_sand', 'exdeorum:golden_mesh', gem.getId(), 0.001);
        addSieveRecipes('exdeorum:compressed_sand', 'exdeorum:diamond_mesh', gem.getId(), 0.001);
        addSieveRecipes('exdeorum:compressed_sand', 'exdeorum:netherite_mesh', gem.getId(), 0.001);
    });

//#endregion

//#region Dust

    addSieveItem('exdeorum:compressed_dust', 'ae2:certus_quartz_dust', 0, 0, 0.25, 0.30, 0.40, 0.70)
    addSieveItem('exdeorum:compressed_dust', 'ae2:sky_dust', 0, 0, 0, 0.30, 0.40, 0.70)
    addSieveItem('exdeorum:compressed_dust', 'enderio:grains_of_infinity', 0, 0, 0, 0.30, 0.40, 0.70)
    addSieveItem('exdeorum:compressed_dust', 'minecraft:bone_meal', 0, 0, 0.25, 0.30, 0.40, 0.70)
    addSieveItem('exdeorum:compressed_dust', 'minecraft:gunpowder', 0, 0, 0.25, 0.30, 0.40, 0.70)
    addSieveItem('exdeorum:compressed_dust', 'minecraft:coal', 0, 0.15, 0.20, 0.30, 0.50, 1.0)
    addSieveItem('exdeorum:compressed_dust', 'minecraft:redstone', 0, 0.20, 0.25, 0.30, 0.40, 0.70)
    addSieveItem('exdeorum:compressed_dust', 'minecraft:glowstone_dust', 0, 0.20, 0.25, 0.30, 0.4, 0.70)
    addSieveItem('exdeorum:compressed_dust', 'minecraft:blaze_powder', 0, 0, 0.25, 0.30, 0.4, 0.70)
    addSieveItem('exdeorum:compressed_dust', 'minecraft:diamond', 0, 0, 0, 0.08, 0.22, 0.40)
    addSieveItem('exdeorum:compressed_dust', 'minecraft:emerald', 0, 0, 0, 0.08, 0.022, 0.40)
    addSieveItem('exdeorum:compressed_dust', 'minecraft:lapis_lazuli', 0, 0, 0.12, 0.15, 0.25, 0.35)
    addSieveItem('exdeorum:compressed_dust', 'minecraft:raw_iron', 0, 0, 0, 0, 0, 0.30)
    addSieveItem('exdeorum:compressed_dust', 'minecraft:raw_copper', 0, 0, 0, 0, 0, 0.30)
    addSieveItem('exdeorum:compressed_dust', 'minecraft:raw_gold', 0, 0, 0, 0, 0, 0.30)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:gold_ore_chunk', 0, 0, 0.1, 0.2, 0.3, 0.4)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:iron_ore_chunk', 0, 0.50, 1.0, 1.0, 1.0, 1.0)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:copper_ore_chunk', 0, 0, 0.05, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:osmium_ore_chunk', 0, 0, 0.01, 0.085, 0.125, 0.225)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:tin_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:silver_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:lead_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:nickel_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:platinum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:aluminum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:uranium_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:zinc_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:cobalt_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:thorium_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:magnesium_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:lithium_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:compressed_dust', 'exdeorum:boron_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)




    // Loop through each gem and add sieve recipes
    gems.forEach(gem => {
        addSieveRecipes('exdeorum:compressed_dust', 'exdeorum:iron_mesh', gem.getId(), 0.001);
        addSieveRecipes('exdeorum:compressed_dust', 'exdeorum:golden_mesh', gem.getId(), 0.001);
        addSieveRecipes('exdeorum:compressed_dust', 'exdeorum:diamond_mesh', gem.getId(), 0.001);
        addSieveRecipes('exdeorum:compressed_dust', 'exdeorum:netherite_mesh', gem.getId(), 0.001);
    });
//#endregion2

//#region Crushed Netherrack
   addSieveItem('exdeorum:compressed_crushed_netherrack', 'minecraft:glowstone_dust', 0, 0, 0, 0.20, 0.30, 0.60)
   addSieveItem('exdeorum:compressed_crushed_netherrack', 'minecraft:coal', 0, 0.15, 0.20, 0.25, 0.30, 1.0)
   addSieveItem('exdeorum:compressed_crushed_netherrack', 'minecraft:raw_iron', 0, 0, 0, 0, 0.2, 1.0)
   addSieveItem('exdeorum:compressed_crushed_netherrack', 'minecraft:raw_copper', 0, 0, 0, 0, 0.2, 1.0)
   addSieveItem('exdeorum:compressed_crushed_netherrack', 'minecraft:raw_gold', 0, 0, 0, 0, 0.2, 1.0)
   addSieveItem('exdeorum:compressed_crushed_netherrack', 'minecraft:quartz', 0, 0, 0.10, 0.2, 0.3, 1.0)
   addSieveItem('exdeorum:compressed_crushed_netherrack', 'minecraft:nether_wart', 0, 0, 0.10, 0.2, 0.3, 1.0)
   addSieveItem('exdeorum:compressed_crushed_netherrack', 'minecraft:magma_cream', 0, 0, 0.10, 0.2, 0.3, 1.0)
   addSieveItem('exdeorum:compressed_crushed_netherrack', 'minecraft:gunpowder', 0, 0, 0.30, 0.40, 0.80, 1)
   addSieveItem('exdeorum:compressed_crushed_netherrack', 'exdeorum:warped_nylium_spores', 0, 0, 0.30, 0.40, 0.80, 1)
   addSieveItem('exdeorum:compressed_crushed_netherrack', 'exdeorum:crimson_nylium_spores', 0, 0, 0.30, 0.40, 0.80, 1)

//#endregion

//#region EndSton
   addSieveItem('exdeorum:compressed_crushed_end_stone', 'minecraft:ender_pearl', 0, 0, 0.01, 0.08, 0.10, 0.12)
   addSieveItem('exdeorum:compressed_crushed_end_stone', 'minecraft:ender_eye', 0, 0, 0.01, 0.08, 0.10, 0.12)
   addSieveItem('exdeorum:compressed_crushed_end_stone', 'minecraft:chorus_fruit', 0, 0, 0.45, 0.50, 0.55, 0.65)
   addSieveItem('exdeorum:compressed_crushed_end_stone', 'minecraft:chorus_flower', 0, 0, 0.45, 0.50, 0.5, 0.65)
   addSieveItem('exdeorum:compressed_crushed_end_stone', 'minecraft:echo_shard', 0, 0, 0, 0, 0, 0.10)
   addSieveItem('exdeorum:compressed_crushed_end_stone', 'minecraft:sculk_shrieker', 0, 0, 0, 0, 0, 0.03)
//#endregion

//#region SoulSand
   addSieveItem('exdeorum:compressed_crushed_soul_sand', 'minecraft:quartz', 0, 0, 0.10, 0.2, 0.3, 1.0)
   addSieveItem('exdeorum:compressed_crushed_soul_sand', 'minecraft:bone', 0, 0, 0.30, 0.40, 0.50, 1.0)
   addSieveItem('exdeorum:compressed_crushed_soul_sand', 'minecraft:gunpowder', 0, 0, 0.30, 0.40, 0.80, 1.0)
   addSieveItem('exdeorum:compressed_crushed_soul_sand', 'minecraft:glowstone_dust', 0, 0, 0, 0.20, 0.30, 0.70)
   addSieveItem('exdeorum:compressed_crushed_soul_sand', 'minecraft:ghast_tear', 0, 0, 0.20, 0.30, 0.50, 1.0)
   addSieveItem('exdeorum:compressed_crushed_soul_sand', 'minecraft:nether_wart', 0, 0, 0.10, 0.2, 0.3, 1.0)
   addSieveItem('exdeorum:compressed_crushed_soul_sand', 'exdeorum:warped_nylium_spores', 0, 0, 0.30, 0.40, 0.80, 1)
   addSieveItem('exdeorum:compressed_crushed_soul_sand', 'exdeorum:crimson_nylium_spores', 0, 0, 0.30, 0.40, 0.80, 1)
//#endregion

//#region Dirt
   addSieveItem('exdeorum:compressed_dirt', 'exdeorum:stone_pebble', 0.25, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'exdeorum:calcite_pebble', 0.25, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'exdeorum:blackstone_pebble', 0.25, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'exdeorum:andesite_pebble', 0.25, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'exdeorum:granite_pebble', 0.25, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'exdeorum:diorite_pebble', 0.25, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'exdeorum:basalt_pebble', 0.25, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'exdeorum:grass_seeds', 0.08, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'exdeorum:mycelium_spores', 0.15, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:wheat_seeds', 0.10, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:flint', 0.25, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:sugar_cane', 0.10, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:beetroot_seeds', 0.08, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:potato', 0.20, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:poisonous_potato', 0.20, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:carrot', 0.20, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:melon_seeds', 0.08, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:pumpkin_seeds', 0.02, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:torchflower_seeds', 0.02, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:pitcher_pod', 0.02, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:cocoa_beans', 0.05, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:bamboo', 0.15, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:sweet_berries', 0.10, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:pink_petals', 0.10, 0, 0, 0, 0, 0.3)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:golden_carrot', 0, 0, 0, 0, 0, 0.02)
   addSieveItem('exdeorum:compressed_dirt', 'minecraft:golden_apple', 0, 0, 0, 0, 0, 0.02)
   addSieveItem('exdeorum:compressed_dirt', 'ars_nouveau:sourceberry_bush', 0.10, 0, 0, 0, 0, 0.3)
//#endregion

//#region Moss
//    addSieveItem('exdeorum:compressed_moss_block', 'minecraft:oak_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'minecraft:spruce_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'minecraft:birch_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'minecraft:acacia_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'minecraft:dark_oak_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'minecraft:cherry_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'minecraft:jungle_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'ars_elemental:yellow_arcwood_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'ars_elemental:blue_arcwood_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'ars_elemental:red_arcwood_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'ars_elemental:purple_arcwood_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'ars_elemental:green_arcwood_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:origin_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:flowering_oak_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:cypress_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:rainbow_birch_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:fir_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:pine_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:red_maple_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:orange_maple_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:yellow_maple_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:redwood_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:mahogany_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:palm_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:dead_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:magic_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:umbran_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:hellbark_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:empyreal_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:almond_sapling', 0.25, 0, 0, 0, 0, 0.3)
//    addSieveItem('exdeorum:compressed_moss_block', 'biomeoplenty:_sapling', 0.25, 0, 0, 0, 0, 0.3)

    const saplingTag = '#minecraft:saplings';
    const saplings = Ingredient.of(saplingTag).getStacks();

    // Loop through each sapling and add sieve recipes
    saplings.forEach(sapling => {
        addSieveItem('exdeorum:compressed_moss_block', sapling.getId(), 0.03, 0.06, 0.08, 0.12, 0.15, 0.30);
    });

//#endregion

//#region Crushed DeepSlate
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:gold_ore_chunk', 0, 0, 0.1, 0.2, 0.3, 0.4)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:iron_ore_chunk', 0, 0.50, 1.0, 1.0, 1.0, 1.0)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:copper_ore_chunk', 0, 0, 0.05, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:osmium_ore_chunk', 0, 0, 0.01, 0.085, 0.125, 0.225)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:tin_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:silver_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:lead_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:nickel_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:platinum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:aluminum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:uranium_ore_chunk', 0, 0, 0, 0.02, 0.10, 0.3)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:zinc_ore_chunk', 0, 0, 0, 0.05, 0.10, 0.3)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:cobalt_ore_chunk', 0, 0, 0, 0.02, 0.10, 0.3)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:thorium_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:magnesium_ore_chunk', 0, 0, 0, 0.15, 0.10, 0.3)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:lithium_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'exdeorum:boron_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'minecraft:diamond', 0, 0, 0, 0.08, 0.22, 1)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'minecraft:emerald', 0, 0, 0, 0.08, 0.22, 1)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'minecraft:lapis_lazuli', 0, 0, 0.12, 0.15, 0.25, 1)
    addSieveItem('exdeorum:compressed_crushed_deepslate', 'minecraft:amethyst_shard', 0, 0, 0.12, 0.15, 0.25, 1)
//#endregion

//#region Crushed BlackStone
    addSieveItem('exdeorum:compressed_crushed_blackstone', 'minecraft:gold_nugget', 0, 0, 0.1, 0.2, 0.3, 0.4)
    addSieveItem('exdeorum:compressed_crushed_blackstone', 'minecraft:magma_cream', 0, 0, 0.1, 0.2, 0.3, 1.0)
    addSieveItem('exdeorum:compressed_crushed_blackstone', 'minecraft:gunpowder', 0, 0, 0.3, 0.4, 0.8, 1.0)
    addSieveItem('exdeorum:compressed_crushed_blackstone', 'minecraft:black_dye', 0, 0, 0.3, 0.4, 0.8, 1.0)
    addSieveItem('exdeorum:compressed_crushed_blackstone', 'minecraft:ancient_debris', 0, 0, 0.1, 0.2, 0.3, 0.4)
//#endregion

    console.log('Ex_Deorum Compressed Sieve KubeJS has fired !')
})