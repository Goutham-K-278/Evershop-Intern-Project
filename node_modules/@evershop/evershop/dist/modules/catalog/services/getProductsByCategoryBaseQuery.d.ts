import { SelectQuery } from '@evershop/postgres-query-builder';
export declare const getProductsByCategoryBaseQuery: (categoryId: number, fromSubCategories?: boolean) => Promise<SelectQuery>;
