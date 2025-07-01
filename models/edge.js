import db from '../db.js'

export async function createEdge(start_node_id, finish_node_id, distance, is_shade, is_stairs, is_ramp){
    const [result] = await db.execute(
        'INSERT INTO edges (start_node_id, finish_node_id, distance, is_shade, is_stairs, is_ramp) VALUES (?, ?, ?, ?, ?, ?)',[start_node_id, finish_node_id, distance, is_shade, is_stairs, is_ramp]
    );
    return result.insertId
}

export async function getEdge() {
    const [edge] = await db.execute(
        'SELECT * FROM edges'
    )
    return edge;
}