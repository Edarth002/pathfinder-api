export function dijkstra(graph, start){
    const distances = {}
    const visited = new Set()
    const previous = {}

    for(const node in graph){
        distances[node] = Infinity
    }
    distances[start] = 0;

    while (visited.size < Object.keys(graph).length ) {
        let currentNode = null;
        let minDistance = Infinity;

        for(let node in distances){

        if(!visited.has(node) && distances[node] < minDistance){
            minDistance = distances[node]
            currentNode = node
        }}

        if (currentNode === null)  break;

        visited.add(currentNode);

        //Update paths
        for(const neighbourNodes in graph[currentNode]){
            const edge = graph[currentNode][neighbourNodes]
            const totalDistance = distances[currentNode] + edge

            if (totalDistance < distances[neighbourNodes]) {
                 distances[neighbourNodes] = totalDistance
                 previous[neighbourNodes] = currentNode

            }
        }
    }
    return {distances, previous}
}
export function constructPath(previous, end) {
  const path = [];
  let current = end;

  while (current) {
    path.unshift(current);
    current = previous[current];
  }

  return path;
}

//Test case
const graph = {
  HostelA: { CEC: 5, Admin: 2 },
  Admin: { Library: 1 },
  CEC: { Library: 3 },
  Library: {}
};

const { distances, previous } = dijkstra(graph, 'HostelA');
const shortestPathToLibrary = constructPath(previous, 'Library');

console.log("Shortest distance to Library:", distances['Library']);
console.log("Path to Library:", shortestPathToLibrary);
