import db from "../db.js";

export async function getPaths(req, res) {
  try {
    const [edges] = db.execute("SELECT * FROM edges");
    res.status(201).json(edges);
  } catch (error) {
    console.log("Edges could not be fetched due to: ", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
