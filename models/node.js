import db from "../db";

export async function createNode(name, longitude, latitude) {
    const [result] = await db.execute(
        'INSERT INTO nodes (name, longitude, latitude) VALUES (? ? ?)',[name, longitude, latitude]
    );
    return result.insertId
}

export async function getNode(){
    const [node] = await db.execute(
        'SELECT * FROM nodes'
    );
    return node;
}