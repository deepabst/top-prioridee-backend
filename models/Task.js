// This is like a Rails app/models/tasks.rb model file
// EXCEPT it's also like the db/schema.rb or like a migration
// to create the correct columns in a mongodb database

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    // Define the 'columns' for this 'table'
    // OR
    // Define the 'properties' for this 'document'

    user: {
        // TODO: how might I refer to a user - Research Mongoose Reference
        user_id: Number
    },
    summary: {
        type: String,
        required: true
    }, // 'String' is the JS constructor for a string
    importance: {
        type: Number,
        default: 0
    },
    urgency: {
        type:Number,
        default: 0
    },
    active: {
        type:Boolean,
        default: true
    }
}); // end of Schema definition

TaskSchema.set('timestamps', true)

const model = mongoose.model('Task', TaskSchema );

// CommonJS export syntax enables 
// require('./models/Flight')
// from the seeds file or the server file
module.exports = model;