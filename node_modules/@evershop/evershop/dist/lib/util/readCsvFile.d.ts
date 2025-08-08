import { PathLike } from 'fs';
export declare function readCsvFile<T>(filePath: PathLike | string): Promise<Record<string, T>>;
