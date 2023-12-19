import { Background } from "../../models/background";
import { ActorType } from "../../types";
import { NodeHtmlMarkdown } from 'node-html-markdown'


export function generateBackgroundDoc(data: ActorType<Background>): string {
    return `---
aliases: ${data.name}
---

# ${data.name}
*${data.system.publication.title}*

${NodeHtmlMarkdown.translate(replaceUUID(data.system.description.value), { globalEscape: [/[\\`*_~]/gm, '\\$&'] })}
    `;
}

function replaceUUID(text: string): string {
    const regexp = new RegExp(/@UUID\[(.*?)\]/gm);
    const matches = text.match(regexp);

    matches?.forEach(item => {
        const splitted = item.split('.').pop()?.replace(']', '');

        text = text.replaceAll(item, `[[${splitted}]]`);
    });

    return text;
}