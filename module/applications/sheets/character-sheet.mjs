const {api, sheets} = foundry.applications;

export default class CharacterActorSheet extends api.HandlebarsApplicationMixin(sheets.ActorSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: [],
    tag: "form",
    position: {
      width: 900,
      height: 760
    },
    actions: {

    },
    form: {
      submitOnChange: true
    },
    actor: {

    }
  };

  static PARTS = {
    main: {
      id: "main",
      template: "systems/reanima/templates/actors/actor-sheet.hbs",
      root: true
    }
  };

  static TABS = [
    { tab: "principal", label: "RE.Principal", icon: "" }
  ];
}