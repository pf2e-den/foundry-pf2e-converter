import { Action, ActionType } from "../../models/action";
import { ActorType } from "../../types";
import { actionIcon } from "../../utils/action-icon";
import { transformHtml } from "../../utils/transform-html";

export function generateActionDoc(data: ActorType<Action>): string {
    return `---
aliases: ${data.name}
---
# ${data.name} ${actionIcon(data.system.actionType.value as ActionType, data.system.actions.value)}
*${data.system.publication.title}*

${transformHtml(data.system.description.value)}
    `;
}
