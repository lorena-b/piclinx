const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const requireLogin = require('../middleware/requireLogin')
const Post = mongoose.model('Post')

router.get('/allpost', requireLogin, (req, res)=>{
    Post.find()
    .populate("postedBy", "_id name")
    .populate("comments.postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })

})

router.get('/getfeed', requireLogin, (req, res)=>{
    Post.find({postedBy:{$in:req.user.following}})
    .populate("postedBy", "_id name")
    .populate("comments.postedBy","_id name")
    .then(posts=>{
        res.json({posts})
    })
    .catch(err=>{
        console.log(err)
    })

})


router.post('/createpost', requireLogin, (req, res) => {

    const { title, body, img } = req.body

    if (!title || !body || !img) {
        return res.status(422).json({ error: "Please add all the required fields." })

    }
    req.user.password = undefined
    const post = new Post({
        title,
        body,
        photo:img, 
        postedBy: req.user

    })
    post.save().then(result=>{
        res.json({post:result})
    })
    .catch(err=>{
        console.log(err)
    })

})

router.get('/mypost', requireLogin, (req,res)=>{

    Post.find({postedBy:req.user._id})
    .populate("postedBy", "_id name")
    .then(mypost=>{
        res.json({mypost})
    })
    .catch(err=>{
        console.log(err)
    })


})

router.put('/like', requireLogin, (req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{likes:req.user._id}
    }, {
        new:true
    }).exec((err,result)=>{
        if (err) {
            return res.status(422).json({error:err})
        } else {
            res.json(result)
        }
    })
})

router.put('/unlike', requireLogin, (req,res)=>{
    Post.findByIdAndUpdate(req.body.postId,{
        $pull:{likes:req.user._id}
    }, {
        new:true
    }).exec((err,result)=>{
        if (err) {
            return res.status(422).json({error:err})
        } else {
            res.json(result)
        }
    })
})


router.put('/comment', requireLogin, (req,res)=>{
    const comment = {
        text:req.body.text,
        postedBy:req.user._id
    }
    Post.findByIdAndUpdate(req.body.postId,{
        $push:{comments:comment}
    }, {
        new:true
    })
    .populate("comments.postedBy","_id name")
    .populate("postedBy", "_id name")
    
    .exec((err,result)=>{
        if (err) {
            return res.status(422).json({error:err})
        } else {
            res.json(result)
        }
    })
})

router.delete('/deletepost/:postId', requireLogin, (req,res)=>{
    Post.findOne({_id:req.params.postId})
    .populate("postedBy", "_id")
    .exec((err,post)=>{
        if(err || !post) {
            return res.status(422).json({error:err})
        }
        if (post.postedBy._id.toString() === req.user._id.toString()) {
            post.remove()
            .then(result=>{
                res.json(result)
            }).catch(err=>{
                console.log(err)
            })
        } 
    })
})

// router.delete("/deletecomment/:postId/:commentId", auth, async (req, res) => {
//     try {
//         // console.log(req.params.postId);
//         // console.log(req.params.commentId);
//         let post = await Post.findOne({ _id: req.params.postId })
//             .populate("comments.commentedBy", "_id name")
//             .populate("postedBy", "_id name")
//         if (!post) {
//             return res.status(404).json({ error: "Post not found" })
//         }
//         post.comments = await post.comments.filter(comment => {
//             return comment._id != req.params.commentId
//         })
 
//         const result = await post.save()
//         return res.json(result)
 
//     } catch (err) {
//         console.error("Error", err);
 
//     }
 
// })

module.exports = router 