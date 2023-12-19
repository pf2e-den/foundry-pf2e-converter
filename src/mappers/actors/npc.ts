import { NPC } from "../../models/npc";
import { ActorType } from "../../types";
import { NodeHtmlMarkdown } from 'node-html-markdown'


export function generateNPCDoc(data: ActorType<NPC>): string {
    return `---
aliases: "${data.name}"
statblock: inline
name: "${data.name}"
level: ${data.system.details.level.value}
---

\`\`\`statblock
columns: 2
forcecolumns: true
layout: Basic Pathfinder 2e Layout
source: "${data.system.details.publication.title}"
name: "${data.name}"
level: "Creature ${data.system.details.level.value}"
size: "${data.system.traits.size.value}"
${data.system.traits.value.reduce((acc, item, index) => acc + 'trait_0' + (index + 1) + ': "' + item + '"\n', '')}
modifier: ${data.system.attributes.perception.value}
perception:
  - name: "Perception"
    desc: "+${data.system.attributes.perception.value}; __darkvision__, __imprecise scent 60__;"
languages: "${data.system.traits.languages.value.join(', ')};"
skills:
  - name: "Skills"
    desc: "__Acrobatics__: +22 (1d20+22); __Arcana__: +25 (1d20+25); __Deception__: +26 (1d20+26); __Diplomacy__: +26 (1d20+26); __Intimidation__: +24 (1d20+24); __Society__: +23 (1d20+23); __Stealth__: +20 (1d20+20); __Survival__: +22 (1d20+22); "
abilityMods: [${data.system.abilities.str.mod}, ${data.system.abilities.dex.mod}, ${data.system.abilities.con.mod}, ${data.system.abilities.int.mod}, ${data.system.abilities.wis.mod}, ${data.system.abilities.cha.mod}]

abilities_top:
  - name: "Sound Imitation"
    desc: "  The dragon can mimic any sound it has heard. It must succeed at a [[compendium/skills.md#Deception|Deception]] check with a +4 circumstance bonus to do so."
abilities_mid:
  - name: "Frightful Presence"
    desc: " ([[aura]], [[emotion]], [[fear]], [[mental]]);  90 feet, DC 32."
  - name: "Wing Deflection"
    desc: "⬲ __Trigger__ The dragon is targeted with an attack. __Effect__  The dragon raises its wing, gaining a +2 circumstance bonus to AC against the triggering attack. If the dragon is Flying, it descends 10 feet after the attack is complete."
abilities_bot:
  - name: "Breath Weapon"
    desc: "⬺ ([[arcane]], [[electricity]], [[evocation]]);  The dragon breathes lightning that deals 9d12 (9d12) electricity damage in a 100-foot line (DC 33 basic Reflex save). It can't use Breath Weapon again for 1d4 (1d4) rounds."
  - name: "Desert Thirst"
    desc: " ([[arcane]], [[transmutation]]);  When casting create water, the dragon can attempt to destroy liquid instead of creating it, turning an equal amount of liquid into sand. This destroys liquid magic or alchemical items if they're of a lower level than the dragon (a creature can attempt a DC 32 Will save to protect all liquids in its possession). This doesn't affect the liquids in a creature's body."
  - name: "Draconic Frenzy"
    desc: "⬺  The dragon makes two claw [[Strike|Strikes]] and one horns [[Strike]] in any order."
  - name: "Draconic Momentum"
    desc: "  The dragon recharges its Breath Weapon whenever it scores a critical hit with a [[Strike]]."

speed: 40 feet, burrow 20 feet, fly 150 feet

ac: ${data.system.attributes.ac.value}
armorclass:
  - name: AC
    desc: "${data.system.attributes.ac.value}; __Fort__: +${data.system.saves.fortitude.value} (1d20+${data.system.saves.fortitude.value}); __Ref__: +${data.system.saves.reflex.value} (1d20+${data.system.saves.reflex.value}); __Will__: +${data.system.saves.will.value} (1d20+${data.system.saves.will.value});"
hp: ${data.system.attributes.hp.max}
health:
  - name: HP
    desc: "${data.system.attributes.hp.max};  __Immunities__ electricity, paralyzed, sleep;"


attacks:
  - name: Melee
    desc: "⬻ jaws +27 ([[electricity]], [[magical]], [[reach|reach 15 feet]]); __Damage__ 3d8+12 (3d8+12) piercing plus 1d12 (1d12) electricity"
  - name: Melee
    desc: "⬻ claw +27 ([[magical]], [[agile]], [[reach|reach 10 feet]]); __Damage__ 3d8+12 (3d8+12) slashing"
  - name: Melee
    desc: "⬻ tail +25 ([[magical]], [[reach|reach 20 feet]]); __Damage__ 3d8+10 (3d8+10) bludgeoning"
  - name: Melee
    desc: "⬻ horns +25 ([[magical]], [[reach|reach 15 feet]]); __Damage__ 2d8+10 (2d8+10) piercing"

spellcasting:
  - name: "Arcane Innate Spells"
    desc: "DC 33; __Cantrips (6th)__ [[ghost-sound|ghost sound]]; __1st__ [[create-water|create water]] at will; see desert thirst; __6th__ [[illusory-creature|illusory creature]], [[illusory-object|illusory object]], [[ventriloquism]] (at will);"
sourcebook: "${data.system.details.publication.title}"
\`\`\`

${NodeHtmlMarkdown.translate(data.system.details.publicNotes)}

---

\`\`\`encounter - table
name: ${data.name}
creatures:
  - 1: ${data.name}
\`\`\`
`;
}