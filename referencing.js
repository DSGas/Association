const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/dataDemo2',{useNewUrlParser: true});

let Post = require('./models/post');
let User = require('./models/user');

// User.create({
//     username: 'dsgas',
//     name: 'Wittawin Susutti'
// }, function(err,user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });

// Post.create({
//     topic: 'Thor',
//     content: 'Son of Thunder'
// }, function(err,post){
//     User.findOne({username:'dsgas'},function(err, foundUser){
//         if(err){
//             console.log(err);
//         } else {
//             foundUser.posts.push(post);
//             foundUser.save(function(err, data){
//                 if(err){
//                     console.log(err);
//                 } else {
//                     console.log(data);
//                 }
//             });
//         }
//     });
// });

User.findOne({username:'dsgas'}).populate('posts').exec(function(err, user){
    if(err){
        console.log(err);
    } else {
        console.log(user);
    }
});