const mongoose = require('mongoose');
const config = require('../config');
const url = config.mongoUrl;

const Equipment = require('../models/equipment');

const equipData = require('./data')

const seedDB = async () => {
   try {

        // establish database connection
        let connect = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        // delete all existing data in collection
        console.log(`...deleting existing data`);
        let items  = await Equipment.deleteMany({});
        console.log(`${items.deletedCount} item(s) have been deleted`);

        // seed collection with data
        let insertedEquipments  = await Equipment.insertMany(equipData);
        console.log(insertedEquipments);
        console.log(`data insertion successful`);


        // close database connection
        console.log(`closing db connection`);
        mongoose.connection.close();
        console.log(`connection closed`);
        
   } catch (error) {
       console.log('Failed to connect to MongoDB', err);
   } 

}


seedDB();