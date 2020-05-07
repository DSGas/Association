const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dataDemo',{useNewUrlParser: true});

const postSchema = new mongoose.Schema({
    topic: String,
    content: String
});

let Post = mongoose.model('Post',postSchema);

const userSchema = new mongoose.Schema({
    username: String,
    name: String,
    posts: [postSchema]
});

let User = mongoose.model('User', userSchema);

// let newUser = new User({
//     username: 'dsgas',
//     name: 'Wittawin Susutti'
// });

// newUser.save(function(err,user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// let newPost = new Post({
//     topic: 'Iron man',
//     content: 'I am Iron man'
// });

// newPost.save(function(err,post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

// newUser.posts.push({
//     topic: 'Iron man',
//     content: 'I am Iron man'
// });
User.findOne({username:'dsgas'}, function(err,user){
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            topic: 'Thanos',
            content: "I'm inevitable."
        });
        User.create(user,function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        });
    }
});