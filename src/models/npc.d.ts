import systemTemplate from "../../../pf2e-master/static/template.json";

const npc = {
    ...systemTemplate.Actor.templates.common,
    ...systemTemplate.Actor.npc,
    details: {
        ...systemTemplate.Actor.templates.common.details,
        ...systemTemplate.Actor.npc.details,
        level: {
            value: 0
        }
    },
    traits: {
        ...systemTemplate.Actor.templates.common.traits,
        ...systemTemplate.Actor.npc.traits,
        value: ["a"]
    }
};

export type NPC = typeof npc;