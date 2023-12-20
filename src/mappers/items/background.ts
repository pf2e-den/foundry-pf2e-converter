import { Background } from "../../models/background";
import { ActorType } from "../../types";
import { transformHtml } from "../../utils/transform-html";

export function generateBackgroundDoc(data: ActorType<Background>): string {
    return `---
aliases: ${data.name}
---
# ${data.name}
*${data.system.publication.title}*

${transformHtml(data.system.description.value)}
    `;
}
