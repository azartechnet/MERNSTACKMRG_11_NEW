const {MongoClient}=require('mongodb')
var url="mongodb+srv://admin:admin@cluster0.j8tqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0;";
var client=new MongoClient(url);

async function run()
{
    try
    {
        const db=client.db('mervindb');
        const collection=db.collection('mervincollection');
        var obj={name:"azar",age:36,email:"azar@gmail.com"}
        await collection.insertOne(obj);
        console.log("DataInserted...")
    }
    finally
    {
        await client.close();
    }
}
run().catch(console.error)