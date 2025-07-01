import { createEdge, getEdge } from "./models/edge.js";
import { getNode, createNode } from "./models/node.js";
import haversineFormular from "./utils/haversine.js";

const longitude1 = 6.86053
const latitude1 = 7.40515
const longitude2= 6.86260
const latitude2 = 7.40541

const distance = parseFloat(haversineFormular(longitude1, latitude1, longitude2, latitude2).toFixed(4))



async function testFunction() {
    try{
        const nodeid = await createNode('GS Building (School of General Studies)', 6.86260, 7.40541);
        console.log(`Node ${nodeid} has been created`);
        
        const nodedata = await getNode()
        console.log('These nodes are available: ',  nodedata);

        const edgeid = await createEdge(1, 2, distance, true, false, false);

        console.log(`Edge between first path and path${edgeid} have been created`);
        
        const edgedata = await getEdge()
        console.log('These Edges are available: ', edgedata);
        
        
    }
    catch(err){
        console.log("Error happened due to ", err);
        
    }
}

testFunction();
//('University Primary School', 6.86053, 7.40515);
//('Christ Church Chapel', 6.86157, 7.40415);