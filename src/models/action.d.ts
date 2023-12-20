import systemTemplate from "../../../pf2e-master/static/template.json";
import { merge } from "lodash-es";

const action = merge(
    systemTemplate.Item.templates.common,
    systemTemplate.Item.templates.traits,
    systemTemplate.Item.action
);

export type Action = typeof action;
export type ActionType = 'action' | 'reaction' | 'passive' | 'free';