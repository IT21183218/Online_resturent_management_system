const express = require('express');
// const Posts = require('../models/pendingReq');
const Student = require('../models/Student');

const router = express.Router();

//rusiru theory - create
router.route("/add").post((req,res) => {
    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(() => {
        //success
        res.json("Student Added");
    }).catch((err) => {
        //faliers
        console.log(err);
    })
})
//adding router test is pass


//get method
router.route("/").get((req,res) => {
    Student.find().then((student) => {
        res.json(student);
        console.log(student);
    }).catch((err) => {
        console.log(err);
    })
})

//get testing is pass



//updaee rusiru
router.route("/update/:id").put(async (req, res) => {
    //updaye/:id => cause params.id
    let userId = req.params.id;
    //destructure
    const {name, age, gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    } 
    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(() => {
        res.status(200).send({status : "user updated"})
    }).catch((err) => {
        console.log(err)
        res.status(500).send({status: "Error with updating data", error: err.message});
    })  
})
//udating test is pass


//delete
router.route("/delete/:id").delete(async (req, res) => {
    let userID = req.params.id;

    await Student.findByIdAndDelete(userID).then(() => {
        res.status(200).send({status: "User Deleted"});     
    }).catch((err) => {
        console.log(err.message);
        res.status(500).sed({status: "Error with delete user", error: err.message})
    })

})

//delete test is passed



router.route("/get/:id").get(async (req, res) =>{
    let userId = req.params.id;
  const user =  await Student.findById(userId).then((student)=>{
        res.status(200).send({status: "user fetched", student})
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "error with get user", error: err.message})
    })
})

//one user get is also pass


module.exports = router;





// router.post('/post/save',(req,res)=>{
    
//     let newPost = new Posts(req.body);

//     newPost.save((err) =>{
//         if(err){
//             return res.status(400).json({
//                 error:err
//             });
//         }
//         return res.status(200).json({
//             success:"Posts saved successfully"
//         });
//     });
// });


// // get post
// router.get('/posts', (req,res) =>{
//     Posts.find().then((pos)=>{
//         res.send(pos)
//     }).catch((err)=>{
//         res.status(500).send(error)
//     })
  
// });


// //Update
// router.put('/post/update/:id',(req,res)=>{
//     Posts.findByIdAndUpdate(
//         req.params.id,
//         {
//             $set:req.body
//         },
//         (err,post)=>{
//             if(err){
//                 return res.status(400).json({error:err});
//             }
//             return res.status(200).json({
//                 success:"Update Succesfully"
//             });
//         }
//     );
// }) ;

//delete post
// router.delete('/post/delete/:id',(req,res) =>{
//     Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
//         if(err) return res.status(400).json({
//             message: "Delete unsuccessful",err
//         });
//         return res.status(200).json({
//             message: "Delete Successfull",deletedPost
//         });        
//     });
// });

//get a specific post

// router.get("/post/:id",(req,res) =>{
//     let postId = req.params.id;
//     Posts.findById(postId,(err,post) =>{
//         if(err){
//             return res.status(400).json({success:false,err});
//         }
//         return res.status(200).json({
//             sucess:true,
//             post
//         });
//     });
// });

// module.exports = router;