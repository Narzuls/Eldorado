ServerEvents.recipes(event => {

  // Supprimer la recette existante de Black Iron Ingot
  event.remove({ output: 'extendedcrafting:black_iron_ingot' });

  // Recette shapeless avec l'Induction Smelter de Thermal
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      { item: 'minecraft:iron_ingot' },
      { item: 'gtceu:chemical_black_dye' }
    ],
    result: [
      {
        item: 'extendedcrafting:black_iron_ingot',
        count: 1
      }
    ],
    energy: 4000
  });

});
