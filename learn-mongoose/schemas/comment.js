const mongoose = require('mongoose');

const {Schema} = mongoose;
const {Types : {ObjectId} } = Schema;
const commentSchema = new Schema({
    commenter: {  //나중에 몽구스가 join과 비슷한 기능할 때 사용합니다.
        type : ObjectId,
        require : true,
        ref: 'User',
    },
    comment : {
        type : String,
        required : true,
    },
    createdAt: {
        type : Date,
        default : Date.now,
    }, 
});

module.exports = mongoose.model('Comment', commentSchema);
