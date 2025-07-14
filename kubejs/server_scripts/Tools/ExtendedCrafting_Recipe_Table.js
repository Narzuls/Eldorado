global.createExtendedCraftingService = function(event) {
    return {
        event: event,
        recipesCreated: 0,
        createRecipe: function(type, itemName, tier, count, pattern, keys) {
            try {
                this.event.custom({
                    type: type,
                    tier: tier,
                    pattern: pattern,
                    key: keys,
                    result: {
                        item: itemName,
                        count: count
                    }
                });
                this.recipesCreated++;
                return true;
            }
            catch(e) {
                console.log('failed: ' + itemName + '- error: ' + e);
                return false;
            }
        }
    };
};