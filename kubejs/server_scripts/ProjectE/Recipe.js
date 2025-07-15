// KubeJS recipe script for ProjectE items with Extended Crafting - 1.20.1
 ServerEvents.recipes(event => {
    
//#region 3x3

//#endregion

//#region 9x9

    const toRemove = [
        'projecte:dark_matter_pedestal',
        'projecte:watch_of_flowing_time',
        'projectexpansion:final_star',
        'projecte:tome',
        'projecte:transmutation_tablet',
        'projecte:transmutation_table',
        'projecte:philosophers_stone',
        'projecte:condenser_mk1',
        'projecte:condenser_mk2',
        // 'projecte:gem_helmet',
        // 'projecte:gem_chestplate',
        // 'projecte:gem_leggings',
        // 'projecte:gem_boots'
    ];
    
    toRemove.forEach(item => event.remove({output: item}));

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
        D: 'projecte:dark_matter_block',
        R: 'projecte:red_matter',
        C: 'projectexpansion:magenta_matter'
    });

    // Watch of Flowing Time
    extendCraftingService.createRecipe('extendedcrafting:shaped_table', 'projecte:watch_of_flowing_time', 4, 1,
    [
        '   DDD   ',
        '  DIIID  ',
        ' DIFFFID ',
        'DIFACAFID',
        'DIFCNCFID',
        'DIFACAFID',
        ' DIFFFID ',
        '  DIIID  ',
        '   DDD   '
    ], {
        D: 'projecte:dark_matter',
        I: '#forge:ingots/magnetic_iron',
        F: 'projecte:aeternalis_fuel',
        C: 'minecraft:clock',
        N: 'avaritia:crystal_matrix_ingot',
        A: 'projectexpansion:orange_matter'
    });

    // The Final Star
    extendCraftingService.createRecipe('extendedcrafting:shaped_table', 'projectexpansion:final_star', 4, 1,
    [
        '   UUU   ',
        '  UCCCU  ',
        ' UCSTSCU ',
        'UCSOPOSCU',
        'UCTPXPTCU',
        'UCSOPOSCU',
        ' UCSTSCU ',
        '  UCCCU  ',
        '   UUU   '
    ],
    {
        U: 'extendedcrafting:the_ultimate_catalyst',
        C: 'projectexpansion:magenta_matter',
        S: 'projectexpansion:final_star_shard',
        T: 'projecte:tome',
        O: 'projectexpansion:colossal_star_omega',
        P: 'projectexpansion:final_power_flower',
        X: 'extendedcrafting:ultimate_singularity'
    });

    // Tome of Knowledge
    extendCraftingService.createRecipe('extendedcrafting:shaped_table', 'projecte:tome', 4, 1,
    [
        'ABBBBBBBA',
        'BEEEQEEEB',
        'BEI2D2IEB',
        'BE2G4G2EB',
        'NQD4T4DQN',
        'BE2G4G2EB',
        'BEI2D2IEB',
        'BEEEQEEEB',
        'ABBBBBBBA'
    ],
    {
        A: '#forge:plates/caravky',
        B: '#forge:bookshelves',
        E: '#forge:ingots/enderium',
        I: 'avaritia:infinity_ingot',
        Q: 'projecte:high_covalence_dust',
        D: 'projecte:low_covalence_dust',
        2: 'projecte:medium_covalence_dust',
        G: 'minecraft:glowstone',
        4: 'deep_dark_regrowth:etherium_gem',
        N: 'industrialupgrade:crafting_elements/crafting_504_element',
        T: 'projecte:transmutation_tablet'
    });

    // Transmutation Tablet
    extendCraftingService.createRecipe('extendedcrafting:shaped_table', 'projecte:transmutation_tablet', 4, 1,
    [
        'DDDDDDDDD',
        'DDGGGGGDD',
        'DGC212CGD',
        'DG2CSC2GD',
        'DG1STS1GD',
        'DG2CSC2GD',
        'DGC212CGD',
        'DDGGGGGDD',
        'DDDDDDDDD'
    ],
    {
        D: 'projecte:dark_matter_block',
        G: '#forge:ingots/refined_glowstone',
        C: '#forge:ingots/crystaltine',
        1: 'projecte:low_covalence_dust',
        2: 'projecte:medium_covalence_dust',
        S: '#forge:ingots/supremium',
        T: 'projecte:transmutation_table'
    });

    // Transmutation Table
    extendCraftingService.createRecipe('extendedcrafting:shaped_table', 'projecte:transmutation_table', 4, 1,
    [
        'DDDDDDDDD',
        'DD77777DD',
        'DBGBBBGBD',
        'DBBGAGBBD',
        'DBBAPABBD',
        'DBBGAGBBD',
        'DBGBBBGBD',
        'DD77777DD',
        'DDDDDDDDD'
    ],
    {
        D: 'projecte:dark_matter',
        7: '#forge:ingots/crystaltine',
        B: '#forge:ingots/beryllium',
        G: 'extendedcrafting:ultimate_catalyst',
        A: 'avaritia:crystal_matrix_ingot',
        P: 'projecte:philosophers_stone'
    });

    // Philosophers' Stone
    extendCraftingService.createRecipe('extendedcrafting:shaped_table', 'projecte:philosophers_stone', 4, 1,
    [
        'ADEGGGEDA',
        'AEGCCCGEA',
        'AGCOOOCGA',
        'GCOSSSOCG',
        'GCOSZSOCG',
        'GCOSSSOCG',
        'AGCOOOCGA',
        'AEGCCCGEA',
        'ADEGGGEDA'
    ],
    {
        E: 'mysticalagriculture:supremium_essence',
        G: 'botanicalextramachinery:shadow_dragonstone',
        C: '#forge:ingots/crystaltine',
        O: 'cataclysm:abyssal_sacrifice',
        D: 'mysticalagradditions:supremium_coal_block',
        A: 'deep_dark_regrowth:etherium_gem',
        S: 'extendedcrafting:ender_star',
        Z: 'deep_dark_regrowth:soul_of_the_depths'
    });

    // Energy Condenser MK1
    extendCraftingService.createRecipe('extendedcrafting:shaped_table', 'projecte:condenser_mk1', 4, 1,
    [
        'BBBBBBBBB',
        ' RRRRRRR ',
        ' RCCACCR ',
        ' RCCACCR ',
        ' RAACAAR ',
        ' RCCACCR ',
        ' RCCACCR ',
        ' RRRRRRR ',
        'BBBBBBBBB'
    ],
    {
        B: 'projectexpansion:white_matter',
        R: 'projecte:red_matter',
        C: '#forge:ingots/crystaltine',
        A: 'ae2:fluix_crystal'
    });

    // Energy Condenser MK2
    extendCraftingService.createRecipe('extendedcrafting:shaped_table', 'projecte:condenser_mk2', 4, 1,
    [
        '         ',
        ' IRRRRRI ',
        ' RMSSSMR ',
        ' RSMQMSR ',
        ' RSQCQSR ',
        ' RSMQMSR ',
        ' RMSSSMR ',
        ' IRRRRRI ',
        '         '
    ],
    {
        I: 'projectexpansion:fading_matter_block',
        R: 'projecte:red_matter_block',
        M: 'avaritia:crystal_matrix_ingot',
        S: '#forge:ingots/supremium',
        Q: '#forge:plates/enderium',
        C: 'projecte:condenser_mk1'
    });
//#endregion


    console.info('ProjectE Extended Crafting recipes loaded!');
 });
