ServerEvents.recipes(event => {

    event.remove({ type: 'exdeorum:crucible_heat_source'})

    const addCrucibleHeatSource = (block, heatValue) => {
        event.custom({
            type: 'exdeorum:crucible_heat_source',
            block_predicate: {
                block: block
            },
            heat_value: heatValue
        });
    };

    addCrucibleHeatSource('minecraft:torch', 1);
    addCrucibleHeatSource('minecraft:soul_torch', 2);
    addCrucibleHeatSource('minecraft:lava', 6);
    addCrucibleHeatSource('minecraft:campfire', 4);
    addCrucibleHeatSource('minecraft:soul_campfire', 8);
    addCrucibleHeatSource('minecraft:magma_block', 120);
    addCrucibleHeatSource('botania:blaze_quartz', 10);
    addCrucibleHeatSource('botania:blaze_block', 30);
    addCrucibleHeatSource('bigreactors:yellorium_block', 20);
    addCrucibleHeatSource('bigreactors:blutonium_block', 40);
    addCrucibleHeatSource('bigreactors:ludicrite_block', 60);
    addCrucibleHeatSource('draconicevolution:awakened_draconium_block', 480);

    console.log('Ex_Deorum Crucible KubeJS has fired !')
})