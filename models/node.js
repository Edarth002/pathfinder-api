import db from "../db";

async function createNode(name, longitude, latitude) {
    const [result] = await db.execute(
        'INSERT INTO nodes (name, longitude, latitude) VALUES (? ? ?)',[name, longitude, latitude]
    );
    return result.insertId
}

export default createNode;