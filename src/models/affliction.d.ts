import systemTemplate from "../../../pf2e-master/static/template.json";
import { merge } from "lodash-es";

const affliction = merge(
    systemTemplate.Item.templates.common,
    systemTemplate.Item.templates.itemLevel,
    systemTemplate.Item.templates.traits,
    systemTemplate.Item.affliction
);

export type Affliction = typeof affliction;