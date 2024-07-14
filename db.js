import {createPool} from "mysql2/promise.js";

export const pool = createPool({
    host: "viaduct.proxy.rlwy.net",
    user: "root",
    password: "EDmRQxmtUDpaeYSYzGWQdbMcaazZmmZL",
    database: "railway",
    port: 41405
});