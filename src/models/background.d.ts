import systemTemplate from "../../../pf2e-master/static/template.json";
import { merge } from "lodash-es";

const background = merge(
    systemTemplate.Item.templates.common,
    systemTemplate.Item.templates.traits,
    systemTemplate.Item.templates.rarity,
    systemTemplate.Item.background
);

export type Background = typeof background;