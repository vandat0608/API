import { pool } from '../db.js';

export const getPing = async (req, res) => {
    const [result] = await pool.query('SELECT 1 + 1 AS result')
    res.json(result[0])
    // res.json(result)
}