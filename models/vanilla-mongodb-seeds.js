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

    // destroy all tasks before seeding the db
    db.collection('tp').deleteMany({}, (err, result) => {
      if (!err) {
        insertTasks();
      }
    });
  }
)

const insertTasks = () => {
  db.collection('tasks').insertMany([{
    summary: 'learn React Hooks',
    importance: 0,
    urgency: 2,
    active: false,
  },
  {
    summary: 'walk the dog',
    importance: 3,
    urgency: 0,
    active: false,
  },
  {
    summary: 'feed the bird',
    importance: 2,
    urgency: 1,
    active: false,
  },
  {
    summary: 'learn CSS',
    importance: 1,
    urgency: 3,
    active: false,
  }], // end off array of tasks to insert


    (err, result) => {
      if (err) {
        console.log('Error inserting Tasks:', err);
        return;
      }
      console.log(`Success! Added ${result.insertedCount} tasks.`);
      printTasks();
    }
  )
}

const printTasks = async () => {
  // Use the promise based find function below

  // 1. chaining .then() .catch() on to the promise
  // promiseFindTasks()
  //   .then(data => {
  //     console.log('tasks:', data);
  //     process.exit(0);
  //   })
  //   .catch(e => {
  //     console.error('problem!', e);
  //     process.exit(1);
  //   }
  //   );

  // 2. async awwait syntax with try/catch block
  // try {
  //   const data = await promiseFindTasks();
  //   console.log('flights:', data);
  //   process.exit(0);
  // } catch (e) {
  //   console.error('problem!', e);
  //   process.exit(1);
  // }


  try {
    const answer = await timerPromise( 500 );
    console.log('answer:', answer);
    process.exit(0);
  } catch (error) {
    console.log('error!', error);
    process.exit(1);
  }


}; // printTasks()

const promiseFindTasks = () => {

  return new Promise((resolve, reject) => {

    db.collection('tasks').find().toArray((err, tasks) => {

      // Fail! promise should reject with 'err'
      if (err) {
        // like throwing an error - leaves the function
        // triggers a .catch( error => {}), providing 'err' as the catch callback's argument
        // OR for async/await, using a try/catch, this will trigger the catch block and provie the 
        // 'err' as the catch blocks error argument
        reject(err);
        return;
      }

      // Success! Promise should resolve with 'tasks'
      // this triggers a .then( data => {} ), providing 'tasks' as the resolved data
      // OR if using async/await, it will cause the blocking await to return the flights
      resolve(tasks);

    }); // .toArray();

  }); // return new Promise()

}; // promiseFindFlights()


const timerPromise = ( delay ) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("RESOLVED!");
      } else {
        reject("REJECTED!");
      }
    }, delay);

  });

}