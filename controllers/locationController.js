import db from "../db.js";

export async function getLocations(req, res) {
  try {
    const [nodes] = await db.execute("SELECT * FROM nodes");
    res.status(201).json(nodes);
  } catch (error) {
    console.log("Failed to get locations because: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
