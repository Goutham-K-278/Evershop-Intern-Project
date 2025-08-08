import { Application } from 'express';
import { Effect } from '../effect.js';
export type Processor = {
    [key in Effect]?: (app: Application, event: any) => void;
};
export declare const processors: Processor;
