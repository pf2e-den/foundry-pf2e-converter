import systemsConfig from "../../pf2e-master/static/system.json";
import systemTemplate from "../../pf2e-master/static/template.json";
import { existsSync, mkdirSync, readdirSync } from "node:fs";
import { ActorType, Pack, PackFolder, PackType, PacksMap } from "./types.d";
import { generateNPCDoc } from "./mappers/actors/npc";
import { NPC } from "./models/npc";
import { generateBackgroundDoc } from "./mappers/items/background";
import { Background } from "./models/background";
import { generateActionDoc } from "./mappers/items/action";
import { Action } from "./models/action";

const outputPath = './dist';
const pf2ePath = './../pf2e-master';

const packsObj: PacksMap = systemsConfig.packs.reduce((acc, item) => {
    return {
        ...acc,
        [item.name]: item
    }
}, {});

createFolders(outputPath, systemsConfig.packFolders);

function createFolders(basePath: string, items: PackFolder[]) {
    items.forEach(item => {
        try {
            const baseFolder = `${basePath}/${item.name}`;


            if (!existsSync(baseFolder)) {
                mkdirSync(baseFolder);
            }

            if (item.folders) {
                createFolders(baseFolder, item.folders);
            }

            item.packs.forEach(pack => {
                try {
                    const packObj = packsObj[pack];

                    if (packObj) {
                        const packFolder = `${baseFolder}/${packObj.label.replace('/', ' ')}`;

                        if (!existsSync(packFolder)) {
                            mkdirSync(packFolder);
                        }

                        if (packObj.type === PackType.Actor) {
                            generateActors(packFolder, packObj);
                        }

                        if (packObj.type === PackType.Item) {
                            generateItems(packFolder, packObj);
                        }
                    }
                } catch (err) {
                    console.error(err, pack);
                }
            })
        } catch (err) {
            console.error(err);
        }
    });
}

async function generateActors(baseFolder: string, pack: Pack) {
    const filesNames = readdir(pack.path);

    await Promise.all(filesNames.map(async name => {

        const data = await Bun.file(`${pf2ePath}/${pack.path}/${name}`).json() as { name: string; type: string };

        let formattedDoc: string = '';

        switch (data.type) {
            case 'character':

                break;
            case 'npc':
                formattedDoc = generateNPCDoc(data as ActorType<NPC>);
                break;
            case 'hazard':

                break;
            case 'loot':

                break;
            case 'familiar':

                break;
            case 'party':

                break;
            case 'vehicle':

                break;
            case 'army':

                break;
            default:
                break;
        }

        await Bun.write(`${baseFolder}/${data.name}.md`, formattedDoc);
    }));
}

async function generateItems(baseFolder: string, pack: Pack) {
    const filesNames = readdir(pack.path);

    await Promise.all(filesNames.map(async name => {
        const data = await Bun.file(`${pf2ePath}/${pack.path}/${name}`).json() as { name: string; type: string };

        let formattedDoc: string = '';

        switch (data.type) {
            case 'background':
                formattedDoc = generateBackgroundDoc(data as ActorType<Background>);
                break;
            case 'action':
                formattedDoc = generateActionDoc(data as ActorType<Action>);
                break;
            case 'hazard':

                break;
            case 'loot':

                break;
            case 'familiar':

                break;
            case 'party':

                break;
            case 'vehicle':

                break;
            case 'army':

                break;
            default:
                break;
        }
        await Bun.write(`${baseFolder}/${data.name}.md`, formattedDoc);
    }));
}

function readdir(path: string): string[] {
    try {
        const fileNames = readdirSync(`${pf2ePath}/${path}`, { recursive: true, withFileTypes: true });

        return fileNames.filter(item => !item.isDirectory()).map(item => item.name);
    }
    catch (err) {
        console.error(err);
    }

    return [];
}