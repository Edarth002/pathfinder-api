import { getNode, createNode } from "./models/node.js";

async function testFunction() {
    try{
        const id = await createNode('University Primary School', 6.86053, 7.40515);
        console.log(`Node ${id} has been created`);
        
        const data = await getNode()
        console.log('These nodes are available: ',  data);
        
    }
    catch(err){
        console.log("Error happened due to ", err);
        
    }
}

testFunction();
//('GS Building (School of General Studies)', 6.86260, 7.40541),
//('Christ Church Chapel', 6.86157, 7.40415);