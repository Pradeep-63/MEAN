const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
         type: String, 
         required: true 
        },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: {
         type: String, 
         required: true 
        },
    role: { 
         type: String,
         enum: ['ADMIN', 'TEACHER', 'STUDENT', 'PARENT'],
         required: true },
    classId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Class' 
    },//for teacher and student
    studentIds: [
        { type: mongoose.Schema.Types.ObjectId,
          ref: 'User' 
        }],//for parents
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
});

const User = mongoose.model('User', userSchema);
module.exports = User;
