ServerEvents.recipes(event => {
  // Conversion d'infusion : Quartz du Nether (10 unités)
  event.custom({
    type: 'mekanism:infusion_conversion',
    input: {
      ingredient: { item: 'minecraft:quartz' }
    },
    output: {
      infuse_type: 'kubejs:quartz',
      amount: 10
    }
  });

  // Conversion d'infusion : Quartz en poudre (5 unités)
  event.custom({
    type: 'mekanism:infusion_conversion',
    input: {
      ingredient: { tag: 'forge:dusts/quartz' }
    },
    output: {
      infuse_type: 'kubejs:quartz',
      amount: 5
    }
  });
});
