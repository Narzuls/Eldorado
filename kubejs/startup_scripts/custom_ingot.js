// Créer un lingot personnalisé
StartupEvents.registry('item', event => {
  event.create('custom_ingot')
    .displayName('Custom Ingot')
    .texture('kubejs:item/custom_ingot')
})
