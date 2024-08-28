const mongoose = require('mongoose');
const communicationSchema = new mongoose.Schema({
    teacherId: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'User', 
         required: true 
        },
    parentId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
         required: true },
    studentId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User' 
    },
    message: {
         type: String,
          required: true 
        },
    createdAt: {
         type: Date, 
         default: Date.now 
        },
});

const Communication = mongoose.model('Communication', communicationSchema);
module.exports = Communication;
