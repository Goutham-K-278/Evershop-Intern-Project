import { PoolClient } from '@evershop/postgres-query-builder';
import { Pool } from 'pg';
declare const pool: Pool;
declare function getConnection(): Promise<PoolClient>;
export { pool, getConnection };
