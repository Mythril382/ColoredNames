Events.on(ClientLoadEvent, () => {
  Vars.content.items().each(c => c.localizedName = "[#" + c.color + "]" + c.localizedName);
  Vars.content.liquids().each(c => c.localizedName = "[#" + c.color + "]" + c.localizedName);
  Vars.content.statusEffects().each(c => c.localizedName = "[#" + c.color + "]" + c.localizedName);
  Vars.content.getBy(ContentType.weather).each(c => c.localizedName = "[#" + c.color + "]" + c.localizedName);
  Vars.content.planets().each(c => c.localizedName = "[#" + c.iconColor + "]" + c.localizedName);
  Vars.content.sectors().each(c => c.localizedName = "[#" + c.planet.iconColor + "]" + c.localizedName);
  Vars.content.blocks().each(c => c.hasColor, c => c.localizedName = "[#" + c.mapColor + "]" + c.localizedName);
});
