import { DynamoDBClient, ScanCommand, PutItemCommand } from "@aws-sdk/client-dynamodb";
const client = new DynamoDBClient({ region: "us-east-1" });

export async function newAdd() {
    const table = "NewTriviaQs";
    const input = {TableName: table};
    var numItems = String((await client.send(new ScanCommand(input))).Items.length + 1);
    console.log(numItems);
    
    const params = {
        TableName: table,
        
        Item: {
            "qNum": {'N': numItems},
			"qText": {'S': "Test question"},
			"ans1": {'S': "Test ans1"},
			"ans2": {'S': "Test ans2"},
			"ans3": {'S': "Test ans3"},
			"correct": {'S': '0'} // Index starting at 0 please!
        }
      
    };

	const data = await client.send(new PutItemCommand(params));

}

newAdd()
