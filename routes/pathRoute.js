import { pathFunction } from "../controllers/pathcontroller.js";
import { dijkstra, constructPath } from "../utils/dijkstra.js";

export async function pathRoute(req, res) {
  try {
    const { start, end } = req.query;

    if (!start || !end) {
      return res
        .status(400)
        .send(
          "Missing parameter... Both start and end destinations are required"
        );
    }
    const graph = await pathFunction();

    const { distances, previous } = dijkstra(graph, start);
    const pathNames = constructPath(previous, end);

    const [nodes] = await db.execute("SELECT * FROM nodes");

    //Constructs full path to ensure full details are retuned to frontend to aid map display
    const fullPath = pathNames.map((name) => {
      const node = nodes.find((n) => n.name === name);
      return {
        name: node.name,
        latitude: node.latitude,
        longitude: node.longitude,
      };
    });

    res.json({ path: fullPath, distance: distances[end] });
  } catch (error) {
    console.log("Error occured due to: ", error);
    res
      .status(500)
      .send("Eror Occured, try refreshing page or enter valid parameters");
  }
}
