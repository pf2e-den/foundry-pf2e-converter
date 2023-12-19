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

export type ActorType<T> = {
    _id: string;
    img: string;
    system: T;
    name: string;
    type: string
}