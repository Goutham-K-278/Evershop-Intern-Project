import { PoolClient } from '@evershop/postgres-query-builder';
export declare const updateShipmentStatus: (orderId: number, status: string, conn: PoolClient) => Promise<void>;
