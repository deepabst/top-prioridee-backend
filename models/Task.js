// This is like a Rails app/models/tasks.rb model file
// EXCEPT it's also like athe db/schema.rb or like a migration
// to create the correct columns

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    // Define the 'columns' for this 'table'
    // OR
    // Define the 'properties' for this 'document'

    // id: 1,
    // summary: 'learn React Hooks',
    // importance: 0,
    // urgency: 2,
    // active: false

    user: {
        // TODO: how might I refer to a user - Research Mongoose Reference
        user_id: Number
    },
    summary: String, // String is the JS constructor for a string
    importance: Number,
    urgency: Number,
    created: Date,
    active: Boolean
}): // end of Schema definition

const model = mongoose.model('Task', TaskSchema );

// CommonJS export syntax enables 
// require('./models/Flight')
// from the seeds file or the server file
module.exports = model;