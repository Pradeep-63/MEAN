const mongoose = require('mongoose');
const classSchema = new mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    teacherId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
        }, // Teacher assigned to the class
    studentIds:[
        { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'User'
         }
        ], // Students enrolled in the class
    createdAt: {
         type: Date,
          default: Date.now 
        },
});

const Class = mongoose.model('Class', classSchema);
module.exports = Class;
