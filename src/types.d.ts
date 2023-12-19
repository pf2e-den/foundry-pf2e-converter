import systemTemplate from "../../pf2e-master/static/template.json";
import systemsConfig from "../../pf2e-master/static/system.json";

export type Actor = typeof systemTemplate.Actor;
export type Item = typeof systemTemplate.Item;
export type PackFolder = { name: string, packs: Array<string>, folders?: PackFolder[] };
export type Pack = typeof systemsConfig.packs[0];
export type PacksMap = {
    [K: string]: Pack;
}

export enum PackType {
    'Actor' = 'Actor',
    'Item' = 'Item'
}

// Actor Types
export type ActorTemplates = typeof systemTemplate.Actor.templates;
export type ArmyType = typeof systemTemplate.Actor.army;
export type CharacterType = typeof systemTemplate.Actor.character;
export type FamiliarType = typeof systemTemplate.Actor.familiar;
export type HazardType = typeof systemTemplate.Actor.hazard;
export type LootType = typeof systemTemplate.Actor.loot;
export type NPCType = typeof systemTemplate.Actor.npc;
export type PartyType = typeof systemTemplate.Actor.party;
export type VehicleType = typeof systemTemplate.Actor.vehicle;

// Item Types
export type Type = typeof systemTemplate.Item.templates.common & typeof systemTemplate.Actor.army;


"action",
    "affliction",
    "ancestry",
    "armor",
    "background",
    "backpack",
    "book",
    "campaignFeature",
    "class",
    "condition",
    "consumable",
    "deity",
    "effect",
    "equipment",
    "feat",
    "heritage",
    "kit",
    "lore",
    "melee",
    "shield",
    "spell",
    "spellcastingEntry",
    "treasure",
    "weapon"