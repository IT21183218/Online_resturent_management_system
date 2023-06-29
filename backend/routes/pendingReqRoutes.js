const express = require('express');
const Posts = require('../models/pendingReq');


const router = express.Router();

router.route("/").get((req,res) => {
    Posts.find().then((posts) => {
        res.json(posts);
        console.log(posts);
    }).catch((err) => {
        console.log(err);
    })
})



module.exports = router;




// const router = express.Router();

// // router.post('/', (req, res)=>{
// //     main();
// // })

// // const main = ()=>{
// //     console.log('funcmain');
// // }


// router.get('/posts', (req,res) =>{
//     Posts.find().exec((err,posts) =>{
//         if(err){
//             return res.status(400).json({
//                 error:"cannot"
//             });
//         }
//         return res.status(200).json({
//             success:true,
//             existingPosts:pendingReqRoutes
//         });
//     });
// });







// // // create post

// // router.post('/PendingRequest/create', (req,res)=>{
// //     let newRequest = new Posts(req.body);
    
// //     newRequest.save((err)=>{
// //         if(err){
// //             return res.status(400).json({
// //                 error:err
// //             });
// //         }else{
// //             return res.status(200).json({
// //                 success:"Post saved successfully"
// //             });
// //         }
        
// //     });
// // });

// // //get post
// // router.get('/PendingRequest', (req,res) => {
// //     Posts.find().exec((err,posts) => {
// //         if(err){
// //             return res.status(400).json({
// //                 error:err
// //             });
// //         }else{
// //             return res.status(200).json({
// //                 success:true,
// //                 existiingPost:posts
// //             });
// //         }
// //     });
// // });


// // router.post('/', (req,res)=>{
// //     let newRequest = new Posts(req.body);
    
// //     newRequest.save((err)=>{
        
// //             return res.status(200).json({
// //                 success:"Post saved successfully"
// //             });
        
        
// //     });
// // });

// module.exports = router;



