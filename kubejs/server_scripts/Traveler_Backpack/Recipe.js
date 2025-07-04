ServerEvents.recipes(event => {
    event.remove({id: 'travelersbackpack:standard'})
    event.remove({id: 'travelersbackpack:standard_no_tanks'})

    event.shaped(
        Item.of('travelersbackpack:standard', 1),
        [
            'ABA',
            'CDC',
            'AEA'
        ],
        {
            A: '#forge:leather',
            B: 'minecraft:string',
            C: 'travelersbackpack:backpack_tank',
            D: 'sophisticatedbackpacks:backpack',
            E: '#travelersbackpack:sleeping_bags'
        }
    )

    console.log('Ex_Traveler BackPack KubeJS has fired !')
})