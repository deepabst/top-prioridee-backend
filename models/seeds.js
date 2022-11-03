const mongoose = require('mongoose');

// Load the Tasks model
// this returns the value of 'module.exprots'
// as set at the endof that file
// e.g: const model = mongoose.model('Task', TaskSchema );
// module.exports = model;
// from the seeds file or the server file
const Task = require('./Task');

// Mongoose uses event handlers to minimise the options
// and mess of the vanilla MongoDB connect method
// Note the database selection at the end of the URL (i.e. 'tp')
mongoose.connect('mongodb://127.0.0.1/tp');

const db = mongoose.connection;

db.on('error', err => {
    console.log('DB connection error', err);
    process.exit(1); // quit the program
});

// once means run this even handler only once
// also '"once" we have a connection.. do something'
db.once('open', async () => {
    console.log('Success! DB connected, model loaded.');

    // 1. ActiveRecord: Flight.destroy_all
    await Task.deleteMany();

    // 2. ActiveRecord: Flight.create!([])
    const createdTasks = await Task.create([
        {
            summary: 'learn React Hooks',
            importance: 0,
            urgency: 2,
            created: new Date('2022-10-14T04:20:00Z'),
            active: false,
        },
        {
            summary: 'walk the dog',
            importance: 3,
            urgency: 0,
            created: new Date('2022-11-03T04:20:00Z'),
            active: false,
        },
        {
            summary: 'feed the bird',
            importance: 2,
            urgency: 1,
            created: new Date('2022-11-03T04:20:00Z'),
            active: false,
        },
        {
            summary: 'learn CSS',
            importance: 1,
            urgency: 3,
            created: new Date('2022-10-07T04:20:00Z'),
            active: false,
          }
    ])

    console.log('created seed tasks:', createdTasks);

    // // like ActiveRecord: Flight.all
    // const tasks = await Task.find(); // await means we wait for the promise to resolve
    // console.log('tasks', tasks);
    
    process.exit(0);
});