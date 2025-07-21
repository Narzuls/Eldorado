// KubeJS recipe for Draconic Evolution Fusion Crafting Core - 1.20.1
// ServerEvents.recipes(event => {
//     // Remove the original recipe
//     event.remove({output: 'draconicevolution:fusion_crafting_core'});
    
//     // Using the ExtendedCrafting service from your script
//     const extendCraftingService = new global.createExtendedCraftingService(event);
    
//     // Fusion Crafting Core - 9x9 recipe
//     extendCraftingService.createRecipe('extendedcrafting:shaped_table', 'draconicevolution:fusion_crafting_core', 4, 1,
//     [
//         'SS     SS',
//         'SDDDDDDS',
//         ' D     D ',
//         'CCC   CCC',
//         ' D  L  D ',
//         'CCC   CCC',
//         ' D     D ',
//         'SDDDDDDS',
//         'SS     SS'
//     ],
//     {
//         S: '#forge:stable_stone',
//         D: 'thermaldynamics:duct_0:5',
//         C: '#forge:blocks/crystaltine',
//         L: 'botania:lens_efficiency'  
//     });
    
// });