import { cybernetics } from "../json/cybernetics.js";

const importItem = (item, collection) => {
  console.log(`Imported Item ${i.name} into Compendium pack ${collection}`);
  pack.importEntity(items);
};

const migrateItems = (data) => {
  const pack = game.packs.find(
    (p) => p.collection === `cyberpunkred.cybernetics`
  );

  Item.createMany(data, { temporary: true }).then((items) => {
    if (!Array.isArray(items)) {
      importItem(items, pack.collection);
      return ``;
    }
    // Save each temporary Actor into the Compendium pack
    for (let i of items) {
      importItem(i, pack.collection);
    }
  });
};

export const migrate = () => {
  migrateItems(cybernetics);
};
