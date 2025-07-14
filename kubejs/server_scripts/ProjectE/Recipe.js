// KubeJS recipe script for ProjectE items with Extended Crafting - 1.20.1
 ServerEvents.recipes(event => {
    

    event.remove({output: 'projecte:dm_pedestal'});

    const extendCraftingService = new global.createExtendedCraftingService(event); 

    // Dark Matter Pedestal
    extendCraftingService.createRecipe('extendedcrafting:shaped_table', 'projecte:dm_pedestal', 4, 1,
    [
        '  DDDDD  ',
        '  RDDDR  ',
        '  RDDDR  ',
        '  RDDDR  ',
        '  RDDDR  ',
        '  CDDDC  ',
        '  DDDDD  ',
        ' DDDDDDD ',
        'DDDDDDDDD'
    ], 
    {
        D: { item : 'projecte:dark_matter_block'},
        R: {item : 'projecte:red_matter'},
        C: {item: 'projecte:dark_matter'}
    });

    

    console.info('ProjectE Extended Crafting recipes loaded!');
 });
