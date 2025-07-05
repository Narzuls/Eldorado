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
    addSieveItem('minecraft:gravel', 'exdeorum:iron_ore_chunk', 0, 0.50, 0.75, 1.0, 1.0, 1.0)
    addSieveItem('minecraft:gravel', 'exdeorum:copper_ore_chunk', 0, 0.25, 0.75, 1.0, 1.0, 1.0)
    addSieveItem('minecraft:gravel', 'exdeorum:osmium_ore_chunk', 0, 0, 0.01, 0.085, 0.125, 0.220)
    addSieveItem('minecraft:gravel', 'exdeorum:tin_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:gravel', 'exdeorum:silver_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:gravel', 'exdeorum:lead_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:gravel', 'exdeorum:nickel_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:gravel', 'exdeorum:platinum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:gravel', 'exdeorum:aluminum_ore_chunk', 0, 0, 0.04, 0.1, 0.2, 0.3)
    addSieveItem('minecraft:gravel', 'minecraft:diamond', 0, 0, 0.04, 0.1, 0.2, 0.35)
    addSieveItem('minecraft:gravel', 'minecraft:emerald', 0, 0, 0.04, 0.1, 0.2, 0.35)
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
    addSieveItem('minecraft:sand', 'minecraft:diamond', 0, 0, 0.04, 0.1, 0.2, 0.35)
    addSieveItem('minecraft:sand', 'minecraft:emerald', 0, 0, 0.04, 0.1, 0.2, 0.35)
    addSieveItem('minecraft:sand', 'minecraft:redstone', 0, 0, 0.04, 0.1, 0.2, 0.35)

    const gemTag = '#silentgems:gems';
    const gems = Ingredient.of(gemTag).getStacks().toArray();

    // Loop through each gem and add sieve recipes
    gems.forEach(gem => {
        addSieveRecipes('minecraft:sand', 'exdeorum:iron_mesh', gem.id, 0.001);
        addSieveRecipes('minecraft:sand', 'exdeorum:gold_mesh', gem.id, 0.001);
        addSieveRecipes('minecraft:sand', 'exdeorum:diamond_mesh', gem.id, 0.001);
        addSieveRecipes('minecraft:sand', 'exdeorum:netherite_mesh', gem.id, 0.001);
    });

//#endregion

//#region Dust

    addSieveItem('exdeorum:dust', 'minecraft:gunpowder', 0.15, 0.20, 0.25, 0.30, 0.40)
    addSieveItem('exdeorum:dust', 'minecraft:redstone', 0.15, 0.20, 0.25, 0.30, 0.40)
    addSieveItem('exdeorum:dust', 'minecraft:glowstone_dust', 0.15, 0.20, 0.25, 0.30, 0.4)
    addSieveItem('exdeorum:dust', 'minecraft:blaze_powder', 0.15, 0.20, 0.25, 0.30, 0.4)
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
    addSieveItem('exdeorum:dust', 'minecraft:diamond', 0, 0, 0, 0.008, 0.016, 0.020)
    addSieveItem('exdeorum:dust', 'minecraft:emerald', 0, 0, 0, 0.008, 0.016, 0.020)
    addSieveItem('exdeorum:dust', 'chemlib:iridium_dust', 0, 0, 0, 0, 0.01, 0.03)


    // Loop through each gem and add sieve recipes
    gems.forEach(gem => {
        addSieveRecipes('exdeorum:dust', 'exdeorum:iron_mesh', gem.id, 0.001);
        addSieveRecipes('exdeorum:dust', 'exdeorum:gold_mesh', gem.id, 0.001);
        addSieveRecipes('exdeorum:dust', 'exdeorum:diamond_mesh', gem.id, 0.001);
        addSieveRecipes('exdeorum:dust', 'exdeorum:netherite_mesh', gem.id, 0.001);
    });
//#endregion2

//#region Netherrack
   addSieveItem('minecraft:netherrack', 'minecraft:flint', 0.15, 0.20, 0.25, 0.30, 0.40)
//#endregion

    console.log('Ex_Deorum KubeJS has fired !')
})