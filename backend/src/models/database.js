
const {
    DB_URL
} = process.env;

const {MongoClient} = require("mongodb");

let conn = new MongoClient(DB_URL, {useUnifiedTopology: true});

async function listDatabases(client){
    databasesList = await client.db().admin().listDatabases();
 
    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`));
};

module.exports = {
    /**
     * Singleton-like Database Object that connects to the mongodb database
     */
    async getDbo(){
        if(!conn.isConnected())
            await conn.connect();
        await listDatabases(conn);
        return conn.db();
    }
}
