/*
const seedData = {
  tasks: [
    {
      id: 1,
      summary: 'learn React Hooks',
      importance: 0,
      urgency: 2,
      active: false,
    },
    {
      id: 2,
      summary: 'walk the dog',
      importance: 3,
      urgency: 0,
      active: false,
    },
    {
      id: 3,
      summary: 'feed the bird',
      importance: 2,
      urgency: 1,
      active: false,
    },
    {
      id: 4,
      summary: 'learn CSS',
      importance: 1,
      urgency: 3,
      active: false,
    },
  ],
  importance: [1, 4, 3, 2],
  urgency: [2, 3, 1, 4]
}
*/

let db; // stores database connection

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
    'mongodb://127.0.0.1:27017', // url to reach the server
    {}, // options object
    (err, client) => {
            //check for errors
            if (err) {
                console.log('Error connecting to the MongoDB server:', err);
                process.exit(1); // quit the program with a non-zero error code;
            }

            // if we got this far, connection successful
            db = client.db('tp'); // select a db by name

            // insertTasks();
    }
)