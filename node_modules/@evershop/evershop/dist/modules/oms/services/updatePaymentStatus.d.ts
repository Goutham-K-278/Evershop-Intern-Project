import { PoolClient } from '@evershop/postgres-query-builder';
export declare const updatePaymentStatus: (orderId: number, status: string, conn: PoolClient) => Promise<void>;
