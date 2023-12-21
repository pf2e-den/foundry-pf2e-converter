import { Affliction } from "../../models/affliction";
import { ActorType } from "../../types";
import { actionIcon } from "../../utils/action-icon";
import { transformHtml } from "../../utils/transform-html";

export function generateAfflictionDoc(data: ActorType<Affliction>): string {
    return `---
aliases: ${data.name}
---
# ${data.name}
*${data.system.publication.title}*

${transformHtml(data.system.description.value)}`;
}
