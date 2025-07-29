StartupEvents.registry('item', event => {
  event.create('repeat_tick_module')
    .displayName('Repeat Tick Module (Custom)')
    .tooltip('§6Recette personnalisée difficile')
    .texture('quarryplus:item/repeat_tick_module') // Utilise la texture originale
    .maxStackSize(64)
})