//Import the library
const express = require('express')
//Create a new router
const router = express.Router()

const Post = require('../models/Post')
const verifyToken = require('../verifyToken')

// 1 task:
// POST (Create data)
router.post('/', async (req, res) =>{

  const postData = new Post({
    user: req.body.user,
    title: req.body.title,
    topic: req.body.topic,
    message: req.body.message,
    status: req.body.status,
    //likes: req.body.likes,
    //dislikes: req.body.dislikes,
    comments: req.body.comments,
    location: req.body.location
    })
    //Try to insert
    try {
        const postToSave = await postData.save();
        res.send(postToSave);
    }catch(err){
        res.send({message:err});
    }
})


// 2 task:
// GET 1 (Read all data)
router.get('/', verifyToken,async (req, res) =>{      
    try {
        const getPosts = await Post.find().limit(20)    
        res.send(getPosts)    
    }catch(err){
        res.status(400).send({message:err});
    }
})

// GET 2 (Read (query) what the user needs. In this case reads by Id)
router.get('/:postId', async (req, res) =>{       
    try {
        const getPostById = await Post.findById(req.params.postId)
        res.send(getPostById)    
    }catch(err){
        res.send({message:err});
    }
})

// 3 Task:
//PATCH (Update data)
router.patch('/:postId', async (req, res) =>{

    try{

        const updatePostById = await Post.updateOne(
            {_id:req.params.postId},    
            {$set:{
                user: req.body.user,
                title: req.body.title,
                topic: req.body.topic,
                message: req.body.message,
                status: req.body.status,
                //likes: req.body.likes,
                //dislikes: req.body.dislike
                comments: req.body.comments,
                location: req.body.location  
                }
            })
        res.send(updatePostById)    
    }catch(err){
        res.send({message:err});
    }
})

// 4 Task: 
//DELETE (Delete data)
router.delete('/:postId', async (req, res) =>{
    try{
        const deletePostById = await Post.deleteOne({_id:req.params.postId})
        res.send(deletePostById)
    }catch(err){
        res.send({message:err})
    } 
})

module.exports = router
