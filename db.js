import {createPool} from "mysql2/promise.js";

export const pool = createPool({
    host: "127.0.0.1",
    user: "root",
    password: "",
    database: "apiblog",
    port: 3306
});