ServerEvents.recipes(event => {
    event.remove({id: 'mekanism:steel_casing'})
    event.remove({id: 'mekanism:atomic_disassembler'})

    event.shaped(
        Item.of('mekanism:steel_casing', 1),
        [
            'ACA',
            'CBC',
            'ACA'
        ],
        {
            A: '#forge:ingots/steel',
            B: '#forge:ingots/osmium',
            C: 'industrialforegoing:plastic'
        }
    );

    event.shaped(
        Item.of('mekanism:atomic_disassembler', 1),
        [
            'CDC',
            'CBC',
            ' A '
        ],
        {
            A: '#forge:ingots/refined_obsidian',
            B: 'mekanism:elite_control_circuit',
            C: 'mekanism:ultimate_control_circuit',
            D: 'mekanism:energy_tablet'
        }
    );

    console.log('Mekanism Recipe KubeJS has fired !');
})