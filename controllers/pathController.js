import db from '../db.js'

export async function pathFunction(){

    let [nodes] = await db.execute("SELECT * FROM nodes")
    let [edges] = await db.execute("SELECT * FROM edges")

    let graph = {}

    nodes.forEach(node => {
        graph[node.name] = {}
    })

    edges.forEach(edge => {
        let startNode = nodes.find(n => n.id === edge.start_node_id)
        let finishNode = nodes.find(n => n.id === edge.finish_node_id )

        if (startNode && finishNode) {
            graph[startNode.name][finishNode.name] = edge.distance
            graph[finishNode.name][startNode.name] = edge.distance

        }
    })

    return graph

}