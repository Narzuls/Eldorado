// Fichier : kubejs/server_scripts/remove_oxygenated_cleanup.js

/**
 * Objectif :
 * Supprimer tous les objets ayant le modificateur "tcintegrations:oxygenated"
 * dans les inventaires des joueurs, coffres, shulkers, entités etc.
 *
 * Ce script scanne le monde à chaque tick serveur et retire le modificateur défectueux.
 */

const MODIFIER_ID = 'tcintegrations:oxygenated';

ServerEvents.tick(event => {
  // Scan tous les joueurs
  event.server.players.forEach(player => {
    cleanInventory(player.inventory);
    cleanInventory(player.offHandInventory);
    cleanInventory(player.armorInventory);
  });

  // Scan les entités avec inventaire autour des joueurs
  event.server.players.forEach(player => {
    const radius = 32;
    const center = player.block.position;
    const level = player.level;

    level.getEntitiesWithin(AxisAlignedBB.of(center, radius)).forEach(entity => {
      if (entity.hasInventory) cleanInventory(entity.inventory);
    });

    // Scan des blocs avec inventaire (tile entities)
    BlockPos.betweenClosed(center.offset(-radius, -radius, -radius), center.offset(radius, radius, radius)).forEach(pos => {
      const blockEntity = level.getBlockEntity(pos);
      if (blockEntity && blockEntity.inventory) cleanInventory(blockEntity.inventory);
    });
  });
});

function cleanInventory(inv) {
  if (!inv) return;

  for (let i = 0; i < inv.size(); i++) {
    let item = inv.get(i);
    if (item?.nbt?.TinkerData?.Modifiers) {
      let modifiers = item.nbt.TinkerData.Modifiers;
      let initialCount = modifiers.length;

      // Filtrer le modificateur défectueux
      modifiers = modifiers.filter(m => m?.name !== MODIFIER_ID);

      if (modifiers.length !== initialCount) {
        item.nbt.TinkerData.Modifiers = modifiers;
        inv.set(i, item);
        console.log(`[Nettoyage] Modificateur '${MODIFIER_ID}' supprimé de ${item.id}`);
      }
    }
  }
}
