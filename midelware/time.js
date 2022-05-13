const { home } = require("nodemon/lib/utils");

const nowork = __dirname+'/nowork.html'
const addTime = (req,res, next)=>{
    const date = new Date()
    req.date = date ;
    const h = date.getHours()
    if (h>9 && h<13){
        res.home
    }else{
        res.sendFile(nowork)
    }
    next()
}
module.exports = {addTime}