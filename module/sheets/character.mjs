const {api, sheets} = foundry.applications;

export default class characterSheet extends api.HandlebarsApplicationMixin(sheets.ActorSheetV2) {
  static DEFAULT_OPTIONS = {
    classes: [],
    tag: "form",
    position: {
      width: 900,
      height: 760
    },
    actions: {

    }
  }
}