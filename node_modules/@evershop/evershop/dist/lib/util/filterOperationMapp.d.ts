export declare enum SQLFilterOperation {
    eq = "=",
    neq = "<>",
    gt = ">",
    gteq = ">=",
    lt = "<",
    lteq = "<=",
    like = "ILIKE",
    nlike = "NOT ILIKE",
    in = "IN",
    nin = "NOT IN"
}
export declare const OPERATION_MAP: Record<string, SQLFilterOperation>;
