ServerEvents.recipes(event => {

  // Recette shapeless pour le Pulverizer de Thermal
  event.custom({
    type: 'thermal:pulverizer',
    ingredients: [
      { item: 'minecraft:black_wool' }
    ],
    result: [
      {
        item: 'minecraft:string',
        count: 4
      },
      {
        item: 'minecraft:ink_sac',
        count: 1
      },
      {
        item: 'gtceu:chemical_black_dye',
        chance: 0.15
      }
    ],
    energy: 4000
  });

});
