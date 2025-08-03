// Crée un type d'infusion personnalisé "quartz"
Platform.mods.kubejs.name === 'KubeJS' && StartupEvents.registry('mekanism:infuse_type', event => {
  event.create('quartz').displayName('Quartz Infusion')
})
