// Import Modules
import { CyberpunkRedActor } from "./actor/actor.js";
import { CyberpunkRedActorSheet } from "./actor/actor-sheet.js";
import { CyberpunkRedItem } from "./item/item.js";
import { CyberpunkRedItemSheet } from "./item/item-sheet.js";

Hooks.once("init", async function () {
  game.cyberpunkred = {
    CyberpunkRedActor,
    CyberpunkRedItem,
  };

  /**
   * Set an initiative formula for the system
   * @type {String}
   */
  CONFIG.Combat.initiative = {
    formula: "1d10!",
    decimals: 2,
  };

  // Define custom Entity classes
  CONFIG.Actor.entityClass = CyberpunkRedActor;
  CONFIG.Item.entityClass = CyberpunkRedItem;

  // Register sheet application classes
  Actors.unregisterSheet("core", ActorSheet);
  Actors.registerSheet("cyberpunkred", CyberpunkRedActorSheet, {
    makeDefault: true,
  });
  Items.unregisterSheet("core", ItemSheet);
  Items.registerSheet("cyberpunkred", CyberpunkRedItemSheet, {
    makeDefault: true,
  });

  // If you need to add Handlebars helpers, here are a few useful examples:
  Handlebars.registerHelper("concat", function () {
    var outStr = "";
    for (var arg in arguments) {
      if (typeof arguments[arg] != "object") {
        outStr += arguments[arg];
      }
    }
    return outStr;
  });

  Handlebars.registerHelper("toLowerCase", function (str) {
    return str.toLowerCase();
  });
});

Handlebars.registerHelper("image", function (name) {
  const URL = "/systems/cyberpunkred/images/";
  return `${URL}${name}`;
});
