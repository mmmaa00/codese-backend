const db = require('../utils/db');
const category = require('../controllers/category');

const getAllCategory = async () => {
    const sql = 
        `SELECT categoryId, display, description, imageUrl
        FROM category;`;
    const data = await db.queryMulti(sql);
    return data;
    //trong những hàm sd await, buộc sd async
}

const getCategoryById = async (id) => {
    const sql = 
        `SELECT display, description, imageUrl
        FROM category
        WHERE categoryId = ? ;`;
    const data = await db.queryOne(sql,[id]);
    return data;
}

const createCategory = async ({display, description, imageUrl}) => {
    const sql = 
    `INSERT INTO category(categoryId, display, description, imageUrl)
    VALUES(uuid(),?,?,?)  ;`;
    await db.query(sql, [display, description, imageUrl]);
}
const updateCategoryById = async (id, {display, description, imageUrl}) => {
    const sql =
    `UPDATE category
    SET 
        display = ?
        description = ?
        imageUrl = ?
    WHERE categoryId = ? ;`;
    await db.query(sql, [display, description, imageUrl,id]);
 
}
const deleteCategoryById = async (id, {display, description, imageUrl}) => {
    const sql =
    `UPDATE category
    SET 
        status = 'HIDDEN'
    WHERE categoryId = ? ;`;
    await db.query(sql, [display, description, imageUrl,id]);
}
module.exports = {
    getAllCategory,
    getCategoryById,
    createCategory,
    updateCategoryById,
    deleteCategoryById
}
