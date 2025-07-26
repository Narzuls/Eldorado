ServerEvents.blockLootTables(event => {
    
  event.addBlock('kubejs:eldorado_ore', table => {
    table.addPool(pool => {
      pool.rolls = 1 
      pool.addItem('kubejs:eldorado_dust', 85) 
      pool.addItem('kubejs:eldorado_gem', 15)   
    })
  })

  event.addBlock('kubejs:unoctanium_ore', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('kubejs:unoctanium_raw', 100)   
    })
  })

  event.addBlock('kubejs:unoctanium_deepslate_ore', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('kubejs:unoctanium_raw', 100)   
    })
  })


})