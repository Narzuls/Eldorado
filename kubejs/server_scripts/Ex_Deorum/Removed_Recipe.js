ServerEvents.recipes(event => {
    
//#region Removed_Recipes
    event.remove({id: 'exdeorum:diamond_mesh'})
    event.remove({id: 'exdeorum:gold_mesh'})
    event.remove({id: 'exdeorum:iron_mesh'})
    event.remove({id: 'exdeorum:flint_mesh'})
    event.remove({ type: 'exdeorum:sieve'})
    event.remove({ type: 'exdeorum:crucible_heat_source'})
//#endregion

    console.log('Ex_Deorum recipes removed KubeJS has fired !')
})