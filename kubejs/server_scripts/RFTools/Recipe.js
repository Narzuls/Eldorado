ServerEvents.recipes(event => {
    event.remove({id: 'rftoolsbase:machine_frame'})

    event.shaped(
        Item.of('rftoolsbase:machine_frame', 1),
        [
            'ABA',
            'C C',
            'ABA'
        ],
        {
            A: 'mekanism:ingot_refined_glowstone',
            B: 'industrialupgrade:crafting_elements/crafting_480_element',
            C: '#forge:nuggets/gold'
        }
    );

    console.log('RFTools Recipe KubeJS has fired !');
})