

const express = require("express") ;
const router = express.Router() ;
const authMiddleware = require("../controllers/authMiddleware") ;
 
router.get("/profile",authMiddleware,(req,res)=>{
     return res.status(200).json({
    message: "Profile access granted",
    user: req.user,
  });
}) ;
module.exports = router ;