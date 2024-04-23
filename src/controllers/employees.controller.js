import { pool } from "../db.js"

export const getEmployees = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM employees')
        res.json(rows)
        // console.log("rows:::", rows);
    } catch (error) {
        return res.status(500).json({
            message: "Errors"
        })
    }
}
export const getEmployeeById = async (req, res) => {
    console.log(req.params.id);

    try {
        const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [req.params.id])
        // console.log(rows);
        if (rows.length <= 0) {
            return res.status(404).json({ message: 'Employees not found' })
        }
        res.json(rows)
    } catch (error) {
        return res.status(500).json({ message: "Errors" })
    }

}


export const createEmployees = async (req, res) => {
    const { name, salary } = req.body
    console.log("name:::", name);

    try {
        const [rows] = await pool.query('INSERT INTO employees(name , salary) VALUES (? , ?)', [name, salary])
        res.send({
            id: rows.insertId,
            name,
            salary
        })
    } catch (error) {
        return res.status(500).json({ message: "Errors" })
    }

}
export const updateEmployees = async (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;
    // console.log(id, name, salary);
    try {
        const [result] = await pool.query(" UPDATE employees set name = IFNULL(? , name), salary = IFNULL(? , salary) WHERE id = ?", [name, salary, id])
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: "Employees not found" })
        }
        console.log(result);
        const [rows] = await pool.query('SELECT * FROM employees WHERE id = ?', [id])
        res.send(rows[0])
    } catch (error) {
        return res.status(500).json({
            message: 'Errors'
        })
    }
}
export const deleteEmployees = async (req, res) => {
    try {
        // throw new Error('My error')
        const [result] = await pool.query('DELETE FROM employees WHERE id = ?', [req.params.id])

        if (result.affectedRows <= 0) {
            return res.status(404).json({ message: 'Employees not found' })
        }
        console.log(result);
        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: 'Errors'
        })
    }

}