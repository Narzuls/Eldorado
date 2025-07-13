ServerEvents.recipes(event => {

    event.shaped(
        Item.of('solarpanels:carbone_solar_element', 1),
        [
            'AAA',
            'CCC',
            'BBB'
        ],
        {
            A: 'minecraft:black_stained_glass_pane',
            B: 'mekanism:enriched_carbon',
            C: 'mekanism:dust_lapis_lazuli'
        }
    )

});

