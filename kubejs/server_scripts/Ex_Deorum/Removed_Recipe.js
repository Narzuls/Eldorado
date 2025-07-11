ServerEvents.recipes(event => {
    
//#region Removed_Recipes
    event.remove({id: 'exdeorum:diamond_mesh'})
    event.remove({id: 'exdeorum:gold_mesh'})
    event.remove({id: 'exdeorum:iron_mesh'})
    event.remove({id: 'exdeorum:flint_mesh'})
//#endregion

    console.log('Ex_Deorum recipes removed KubeJS has fired !')
})