import { PathLike } from 'fs';
import { Application } from 'express';
import { Effect } from './effect.js';
export type Event = {
    path: PathLike;
    type: 'create' | 'update' | 'delete';
    jsPath?: PathLike;
    effect?: Effect;
};
export declare function watchHandler(events: Event[], app: Application): Promise<void>;
