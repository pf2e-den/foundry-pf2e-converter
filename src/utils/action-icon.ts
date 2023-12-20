import { ActionType } from "../models/action"

export function actionIcon(type: ActionType, count: number | null): string {
    let actionIcon = '`pf2:';

    switch (type) {
        case 'action':
            actionIcon += (count + '`');
            break;
        case 'passive':
            actionIcon = '';
            break;
        case 'reaction':
            actionIcon += 'r`'
            break;
        case 'free':
            actionIcon += '0`'
            break;
    }

    return actionIcon;
}