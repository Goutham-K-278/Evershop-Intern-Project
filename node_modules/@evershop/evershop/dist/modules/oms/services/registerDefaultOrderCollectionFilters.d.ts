export default function registerDefaultOrderCollectionFilters(): Promise<{
    key: string;
    operation: string[];
    callback: (query: any, operation: any, value: any, currentFilters: any) => void;
}[]>;
