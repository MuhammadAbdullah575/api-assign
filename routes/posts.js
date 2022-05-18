const express=require('express');
//routers
const router= express.Router();
//scheme import
const Post=require('../models/Post');
//get all the post
router.get('/',async(req,res)=>{
    try{
        const posts= await Post.find();
        res.json(posts);
    }
    catch(err ){
        res.json({message:err});
    }
});
// submit the post
router.post('/',async(req,res)=>{
    const post=new Post({
        title:req.body.title,
        description:req.body.description
    });
    try{
   const savedPost=await post.save()
           res.json(savedPost);
    }
    catch(err ){
        res.json({message:err});
    }
});
//delete the specific id
router.delete('/:postId',async(req,res)=>{
    try{
        const removedPost= await Post.remove({_id: req.params.postId})
        res.json(removedPost);
    }catch(err){
        res.json({message:err});
      }
    });
//update the specific id
router.patch('/:postId',async(req,res)=>{
        try{
            const update= await Post.updateOne({_id: req.params.postId},
                {
                    $set :{title:req.body.title},
                    $set :{description:req.body.description}
            });
            res.json(update);
        }catch(err){
          res.json({message:err});
        }
        });
//get the specific post
 router.get('/:postId',async(req,res)=>{
            try{
                const getone= await Post.findById({_id: req.params.postId})
                res.json(getone);
            }catch(err){
                res.json({message:err});
              }
            });
module.exports= router;