import { NodeHtmlMarkdown } from 'node-html-markdown'

export function transformHtml(body: string): string {
    return NodeHtmlMarkdown.translate(replaceUUID(body), { globalEscape: [/[\\`*_~]/gm, '\\$&'] })
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