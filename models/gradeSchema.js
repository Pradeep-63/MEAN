const mongoose = require('mongoose');
const gradeSchema = new mongoose.Schema({
    studentId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    // classId:{ 
    //     type: mongoose.Schema.Types.ObjectId,
    //      ref: 'Class', 
    //      required: true 
    //     },
    subject: { 
        type: String,
         required: true 
        },
    grade: { 
        type: String, 
        required: true 
    }, // Could also use numbers
    createdAt: { 
        type: Date,
         default: Date.now 
        },
});

const Grade = mongoose.model('Grade', gradeSchema);
module.exports = Grade;
