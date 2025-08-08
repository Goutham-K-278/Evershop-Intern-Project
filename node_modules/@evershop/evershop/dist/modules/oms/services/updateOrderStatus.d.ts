/**
 * This function will be executed automatically after either shipment status or payment status is updated.
 */
import { PoolClient } from '@evershop/postgres-query-builder';
export declare function resolveOrderStatus(paymentStatus: string, shipmentStatus: string): string;
export declare function changeOrderStatus(orderId: number, status: string, conn: PoolClient): Promise<void>;
