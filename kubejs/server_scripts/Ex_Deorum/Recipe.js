ServerEvents.recipes(event => {
    
//#region Removed_Recipes
    event.remove({id: 'exdeorum:diamond_mesh'})
    event.remove({id: 'exdeorum:gold_mesh'})
    event.remove({id: 'exdeorum:iron_mesh'})
    event.remove({id: 'exdeorum:flint_mesh'})
    event.remove({ type: 'exdeorum:sieve', ingredient: 'minecraft:gravel' })
    event.remove({ type: 'exdeorum:sieve', ingredient: 'minecraft:sand' })
    event.remove({ type: 'exdeorum:sieve', ingredient: 'exdeorum:dust' })
//#endregion

const addSieveRecipes = (input, mesh, result, chance) =>{
    if(chance >0){
        event.custom({
            type: 'exdeorum:sieve',
            ingredient: { item: input },
            mesh: mesh,
            result: result,
            result_amount: {
                type: 'minecraft:binomial',
                n:1.0,
                p:chance
            }
        })
    }
}

const addSieveItem = (input, itemName, stringChance, flintChance, ironChance, goldChance, diamondChance, netheriteChance) =>{
    addSieveRecipes(input, 'exdeorum:string_mesh', itemName, stringChance)
    addSieveRecipes(input, 'exdeorum:flint_mesh', itemName, flintChance)
    addSieveRecipes(input, 'exdeorum:iron_mesh', itemName, ironChance)
    addSieveRecipes(input, 'exdeorum:gold_mesh', itemName, goldChance)
    addSieveRecipes(input, 'exdeorum:diamond_mesh', itemName, diamondChance)
    addSieveRecipes(input, 'exdeorum:netherite_mesh', itemName, netheriteChance)
}

//#region Gravel
    addSieveItem('minecraft:gravel', 'minecraft:flint', 0.125, 0.15, 0.20, 0.30, 0.40, 0.45)
    addSieveItem('minecraft:gravel', 'minecraft:coal', 0, 0.15, 0.20, 0.30, 0.40, 0.45)
    addSieveItem('minecraft:gravel', 'exdeorum:gold_ore_chunk', 0, 0, 0.1, 0.2, 0.3, 0.4)
    addSieveItem('minecraft:gravel', 'exdeorum:iron_ore_chunk', 0, 0, 0.75, 1.0, 1.0, 1.0)
    addSieveItem('minecraft:gravel', 'exdeorum:copper_ore_chunk', 0, 0, 0.75, 1.0, 1.0, 1.0)
    addSieveItem('minecraft:gravel', 'exdeorum:osmium_ore_chunk', 0, 0, 0.01, 0.085, 0.125, 0.220)
    addSieveItem('minecraft:gravel', 'exdeorum:tin_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:gravel', 'exdeorum:silver_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:gravel', 'exdeorum:lead_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:gravel', 'exdeorum:nickel_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:gravel', 'exdeorum:platinum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:gravel', 'exdeorum:aluminum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:gravel', 'minecraft:diamond', 0, 0, 0, 0.02, 0.18, 0.35)
    addSieveItem('minecraft:gravel', 'minecraft:emerald', 0, 0, 0.04, 0.1, 0.2, 0.35)
    addSieveItem('minecraft:gravel', 'minecraft:lapis_lazuli', 0, 0, 0.04, 0.08, 0.12, 0.15)
//#endregion

//#region Sand
    addSieveItem('minecraft:sand', 'minecraft:flint', 0.125, 0.15, 0.20, 0.30, 0.40, 0.45)
    addSieveItem('minecraft:sand', 'minecraft:coal', 0, 0.15, 0.20, 0.30, 0.40, 0.45)
    addSieveItem('minecraft:sand', 'exdeorum:gold_ore_chunk', 0, 0, 0.1, 0.2, 0.3, 0.4)
    addSieveItem('minecraft:sand', 'exdeorum:iron_ore_chunk', 0, 0.50, 1.0, 1.0, 1.0, 1.0)
    addSieveItem('minecraft:sand', 'exdeorum:copper_ore_chunk', 0, 0, 0.05, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:sand', 'exdeorum:osmium_ore_chunk', 0, 0, 0.01, 0.085, 0.125, 0.225)
    addSieveItem('minecraft:sand', 'exdeorum:tin_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:sand', 'exdeorum:silver_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:sand', 'exdeorum:lead_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:sand', 'exdeorum:nickel_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:sand', 'exdeorum:platinum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:sand', 'exdeorum:aluminum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:sand', 'exdeorum:uranium_ore_chunk', 0, 0, 0, 0, 0.8, 0.2)
    addSieveItem('minecraft:sand', 'exdeorum:zinc_ore_chunk', 0, 0, 0, 0, 0.8, 0.2)
    addSieveItem('minecraft:sand', 'exdeorum:cobalt_ore_chunk', 0, 0, 0, 0, 0.08, 0.2)
    addSieveItem('minecraft:sand', 'exdeorum:thorium_ore_chunk', 0, 0, 0, 0, 0.08, 0.2)
    addSieveItem('minecraft:sand', 'exdeorum:magnesium_ore_chunk', 0, 0, 0, 0, 0.08, 0.2)
    addSieveItem('minecraft:sand', 'exdeorum:lithium_ore_chunk', 0, 0, 0, 0, 0.08, 0.2)
    addSieveItem('minecraft:sand', 'exdeorum:boron_ore_chunk', 0, 0, 0, 0, 0.08, 0.2)
    addSieveItem('minecraft:sand', 'minecraft:diamond', 0, 0, 0.01, 0.08, 0.2, 0.50)
    addSieveItem('minecraft:sand', 'minecraft:emerald', 0, 0, 0.01, 0.08, 0.2, 0.50)
    addSieveItem('minecraft:sand', 'minecraft:redstone', 0, 0, 0.04, 0.1, 0.2, 1.0)
    addSieveItem('minecraft:sand', 'minecraft:lapis_lazuli', 0, 0, 0.08, 0.12, 0.15, 0.25)
    addSieveItem('minecraft:sand', 'minecraft:blaze_powder', 0, 0, 0, 0.12, 0.15, 0.25)
    addSieveItem('minecraft:sand', 'minecraft:gunpowder', 0, 0, 0.15, 0.20, 0.35)
    addSieveItem('minecraft:sand', 'ae2:certus_quartz_crystal', 0, 0, 0.15, 0.20, 0.35)
    addSieveItem('minecraft:sand', 'ae2:charged_certus_quartz_crystal', 0, 0, 0.15, 0.20, 0.35)


    const gemTag = '#silentgems:gems';
    const gems = Ingredient.of(gemTag).getStacks();

    // Loop through each gem and add sieve recipes
    gems.forEach(gem => {
        addSieveRecipes('minecraft:sand', 'exdeorum:iron_mesh', gem.getId(), 0.001);
        addSieveRecipes('minecraft:sand', 'exdeorum:gold_mesh', gem.getId(), 0.001);
        addSieveRecipes('minecraft:sand', 'exdeorum:diamond_mesh', gem.getId(), 0.001);
        addSieveRecipes('minecraft:sand', 'exdeorum:netherite_mesh', gem.getId(), 0.001);
    });

//#endregion

//#region Dust

    addSieveItem('exdeorum:dust', 'minecraft:gunpowder', 0, 0, 0.25, 0.30, 0.40, 0.70)
    addSieveItem('exdeorum:dust', 'ae2:certus_quartz_dust', 0, 0, 0.25, 0.30, 0.40, 0.70)
    addSieveItem('exdeorum:dust', 'ae2:sky_dust', 0, 0, 0, 0.30, 0.40, 0.70)
    addSieveItem('exdeorum:dust', 'enderio:grains_of_infinity', 0, 0, 0, 0.30, 0.40, 0.70)
    addSieveItem('exdeorum:dust', 'minecraft:bone_meal', 0, 0, 0.25, 0.30, 0.40, 0.70)
    addSieveItem('exdeorum:dust', 'minecraft:coal', 0, 0.15, 0.20, 0.30, 0.50, 1.0)
    addSieveItem('exdeorum:dust', 'minecraft:redstone', 0, 0.20, 0.25, 0.30, 0.40, 0.70)
    addSieveItem('exdeorum:dust', 'minecraft:glowstone_dust', 0, 0.20, 0.25, 0.30, 0.4, 0.70)
    addSieveItem('exdeorum:dust', 'minecraft:blaze_powder', 0, 0, 0.25, 0.30, 0.4, 0.70)
    addSieveItem('exdeorum:dust', 'exdeorum:gold_ore_chunk', 0, 0, 0.1, 0.2, 0.3, 0.4)
    addSieveItem('exdeorum:dust', 'exdeorum:iron_ore_chunk', 0, 0.50, 1.0, 1.0, 1.0, 1.0)
    addSieveItem('exdeorum:dust', 'exdeorum:copper_ore_chunk', 0, 0, 0.05, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:dust', 'exdeorum:osmium_ore_chunk', 0, 0, 0.01, 0.085, 0.125, 0.225)
    addSieveItem('exdeorum:dust', 'exdeorum:tin_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:dust', 'exdeorum:silver_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:dust', 'exdeorum:lead_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:dust', 'exdeorum:nickel_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:dust', 'exdeorum:platinum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:dust', 'exdeorum:aluminum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('exdeorum:dust', 'exdeorum:uranium_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:dust', 'exdeorum:zinc_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:dust', 'exdeorum:cobalt_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:dust', 'exdeorum:thorium_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:dust', 'exdeorum:magnesium_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:dust', 'exdeorum:lithium_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:dust', 'exdeorum:boron_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('exdeorum:dust', 'minecraft:diamond', 0, 0, 0, 0.08, 0.22, 1.0)
    addSieveItem('exdeorum:dust', 'minecraft:emerald', 0, 0, 0, 0.08, 0.022, 1.0)
    addSieveItem('exdeorum:dust', 'minecraft:lapis_lazuli', 0, 0, 0.12, 0.15, 0.25, 0.35)
    addSieveItem('exdeorum:dust', 'minecraft:raw_iron', 0, 0, 0, 0, 0, 0.30)
    addSieveItem('exdeorum:dust', 'minecraft:raw_copper', 0, 0, 0, 0, 0, 0.30)
    addSieveItem('exdeorum:dust', 'minecraft:raw_gold', 0, 0, 0, 0, 0, 0.30)



    // Loop through each gem and add sieve recipes
    gems.forEach(gem => {
        addSieveRecipes('exdeorum:dust', 'exdeorum:iron_mesh', gem.getId(), 0.001);
        addSieveRecipes('exdeorum:dust', 'exdeorum:gold_mesh', gem.getId(), 0.001);
        addSieveRecipes('exdeorum:dust', 'exdeorum:diamond_mesh', gem.getId(), 0.001);
        addSieveRecipes('exdeorum:dust', 'exdeorum:netherite_mesh', gem.getId(), 0.001);
    });
//#endregion2

//#region Netherrack
   addSieveItem('minecraft:netherrack', 'minecraft:glowstone_dust', 0, 0, 0, 0.20, 0.30, 0.60)
   addSieveItem('minecraft:netherrack', 'minecraft:coal', 0, 0.15, 0.20, 0.25, 0.30, 1.0)
   addSieveItem('minecraft:netherrack', 'minecraft:raw_iron', 0, 0, 0, 0, 0.2, 1.0)
   addSieveItem('minecraft:netherrack', 'minecraft:raw_copper', 0, 0, 0, 0, 0.2, 1.0)
   addSieveItem('minecraft:netherrack', 'minecraft:raw_gold', 0, 0, 0, 0, 0.2, 1.0)
   addSieveItem('minecraft:netherrack', 'minecraft:quartz', 0, 0, 0.10, 0.2, 0.3, 1.0)
   addSieveItem('minecraft:netherrack', 'minecraft:nether_wart', 0, 0, 0.10, 0.2, 0.3, 1.0)
   addSieveItem('minecraft:netherrack', 'minecraft:magma_cream', 0, 0, 0.10, 0.2, 0.3, 1.0)
   addSieveItem('minecraft:netherrack', 'minecraft:gunpowder', 0, 0, 0.30, 0.40, 0.80, 1)
   addSieveItem('minecraft:netherrack', 'minecraft:warped_nylium_spores', 0, 0, 0.30, 0.40, 0.80, 1)
   addSieveItem('minecraft:netherrack', 'minecraft:crimson_nylium_spores', 0, 0, 0.30, 0.40, 0.80, 1)

//#endregion

//#region EndSton
   addSieveItem('minecraft:end_stone', 'minecraft:ender_pearl', 0, 0, 0.01, 0.08, 0.10, 0.12)
   addSieveItem('minecraft:end_stone', 'minecraft:ender_eye', 0, 0, 0.01, 0.08, 0.10, 0.12)
   addSieveItem('minecraft:end_stone', 'minecraft:chorus_fruit', 0, 0, 0.45, 0.50, 0.55, 0.65)
   addSieveItem('minecraft:end_stone', 'minecraft:chorus_flower', 0, 0, 0.45, 0.50, 0.5, 0.65)
   addSieveItem('minecraft:end_stone', 'minecraft:echo_shard', 0, 0, 0, 0, 0, 0.10)
   addSieveItem('minecraft:end_stone', 'minecraft:sculk_shrieker', 0, 0, 0, 0, 0, 0.03)
//#endregion

//#region SoulSand
   addSieveItem('minecraft:soul_sand', 'minecraft:quartz', 0, 0, 0.10, 0.2, 0.3, 1.0)
   addSieveItem('minecraft:soul_sand', 'minecraft:bone', 0, 0, 0.30, 0.40, 0.50, 1.0)
   addSieveItem('minecraft:soul_sand', 'minecraft:gunpowder', 0, 0, 0.30, 0.40, 0.80, 1.0)
   addSieveItem('minecraft:soul_sand', 'minecraft:glowstone_dust', 0, 0, 0, 0.20, 0.30, 0.70)
   addSieveItem('minecraft:soul_sand', 'minecraft:ghast_tear', 0, 0, 0.20, 0.30, 0.50, 1.0)
   addSieveItem('minecraft:soul_sand', 'minecraft:nether_wart', 0, 0, 0.10, 0.2, 0.3, 1.0)
   addSieveItem('minecraft:soul_sand', 'minecraft:warped_nylium_spores', 0, 0, 0.30, 0.40, 0.80, 1)
   addSieveItem('minecraft:soul_sand', 'minecraft:crimson_nylium_spores', 0, 0, 0.30, 0.40, 0.80, 1)
//#endregion

//#region Dirt
   addSieveItem('minecraft:dirt', 'minecraft:sculk_shrieker', 0, 0, 0, 0, 0, 0.03)

//#endregion

//#region DeepSlate
    addSieveItem('minecraft:deepslate', 'exdeorum:gold_ore_chunk', 0, 0, 0.1, 0.2, 0.3, 0.4)
    addSieveItem('minecraft:deepslate', 'exdeorum:iron_ore_chunk', 0, 0.50, 1.0, 1.0, 1.0, 1.0)
    addSieveItem('minecraft:deepslate', 'exdeorum:copper_ore_chunk', 0, 0, 0.05, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:deepslate', 'exdeorum:osmium_ore_chunk', 0, 0, 0.01, 0.085, 0.125, 0.225)
    addSieveItem('minecraft:deepslate', 'exdeorum:tin_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:deepslate', 'exdeorum:silver_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:deepslate', 'exdeorum:lead_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:deepslate', 'exdeorum:nickel_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:deepslate', 'exdeorum:platinum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:deepslate', 'exdeorum:aluminum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:deepslate', 'exdeorum:uranium_ore_chunk', 0, 0, 0, 0.02, 0.10, 0.3)
    addSieveItem('minecraft:deepslate', 'exdeorum:zinc_ore_chunk', 0, 0, 0, 0.05, 0.10, 0.3)
    addSieveItem('minecraft:deepslate', 'exdeorum:cobalt_ore_chunk', 0, 0, 0, 0.02, 0.10, 0.3)
    addSieveItem('minecraft:deepslate', 'exdeorum:thorium_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('minecraft:deepslate', 'exdeorum:magnesium_ore_chunk', 0, 0, 0, 0.15, 0.10, 0.3)
    addSieveItem('minecraft:deepslate', 'exdeorum:lithium_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('minecraft:deepslate', 'exdeorum:boron_ore_chunk', 0, 0, 0, 0, 0.10, 0.3)
    addSieveItem('minecraft:deepslate', 'minecraft:diamond', 0, 0, 0, 0.08, 0.22, 1)
    addSieveItem('minecraft:deepslate', 'minecraft:emerald', 0, 0, 0, 0.08, 0.22, 1)
    addSieveItem('minecraft:deepslate', 'minecraft:lapis_lazuli', 0, 0, 0.12, 0.15, 0.25, 1)
    addSieveItem('minecraft:deepslate', 'minecraft:amethyst_shard', 0, 0, 0.12, 0.15, 0.25, 1)
//#endregion

//#region BlackStone
    addSieveItem('minecraft:blackstone', 'exdeorum:gold_nugget', 0, 0, 0.1, 0.2, 0.3, 0.4)
    addSieveItem('minecraft:blackstone', 'minecraft:magma_cream', 0, 0, 0.10, 0.2, 0.3, 1.0)
    addSieveItem('minecraft:blackstone', 'minecraft:gunpowder', 0, 0, 0.30, 0.40, 0.80, 1.0)
    addSieveItem('minecraft:blackstone', 'minecraft:black_dye', 0, 0, 0.30, 0.40, 0.80, 1.0)
    addSieveItem('minecraft:blackstone', 'minecraft:ancient_debris', 0, 0, 0.30, 0.40, 0.80, 1.0)
//#endregion

    console.log('Ex_Deorum KubeJS has fired !')
})