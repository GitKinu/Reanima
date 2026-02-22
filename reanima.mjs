import * as applications from "./module/applications/_module.mjs";
import * as models from "./module/models/_module.mjs";

/* -------------------------------------------- */
/*  Foundry VTT Initialization                  */
/* -------------------------------------------- */

Hooks.once("init", function() {
  const reanima = globalThis.reanima = game.system;
  console.log("Iniciando Re:Anima");

  const DocumentSheetConfig = foundry.applications.apps.DocumentSheetConfig;

  DocumentSheetConfig.unregisterSheet(Actor, "core", foundry.appv1.sheets.ActorSheet);
  DocumentSheetConfig.registerSheet(Actor, "reanima", applications.CharacterActorSheet, {
    types: ["character"],
    label: "RA.SheetClass.Character",
    makeDefault: true
  });
})