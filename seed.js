require('dotenv').config({path: './.env.development.local'})
const { Seeder } = require('mongo-seeding')
const path = require('path')
const config = {
    database: process.env.MONGO_DATABASE_URI,
    inputPath: path.resolve(__dirname, './data'),
    dropDatabase: true,
    databaseReconnectTimeout: 100000
}
const seeder = new Seeder(config)
const collections = seeder.readCollectionsFromPath(path.resolve('./data'))  

const main = async () => {
    try {
        await seeder.import(collections)
        console.log('Seed complete!')
        process.exit(0)
    } catch (err) {
        console.log(err)
        process.exit(0)
    }
}

main()