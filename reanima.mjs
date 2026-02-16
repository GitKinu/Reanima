import character from "./module/models/actor/character.mjs";
import characterSheet from "./module/sheets/character.mjs";

Hooks.once("init", function() {
  console.log("Hello World");

  CONFIG.Actor.dataModels.character = character;
  
  Actors.unregisterSheet("core", characterSheet);
  Actors.registerSheet("reanima", characterSheet, { types: ["character"], makeDefault: true });
})