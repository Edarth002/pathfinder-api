import { pathFunction } from "../controllers/pathcontroller.js";
import { dijkstra, constructPath } from "../utils/dijkstra.js";

export async function pathRoute(req, res){
    
    try {
        const {start, end} = req.query;

    if (!start || !end) {
        return res.status(400).send("Missing parameter... Both start and end destinations are required")
    }
         const graph = await pathFunction()

    const {distances, previous} = dijkstra(graph, start)

    const path = constructPath(previous, end)

    res.json({path, distance:distances[end]})
    } catch (error) {
        console.log("Error occured due to: ", error);
        res.status(500).send("Eror Occured, try refreshing page or enter valid parameters")
    }

}