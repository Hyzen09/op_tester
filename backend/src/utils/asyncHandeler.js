const asynchandeler = (requsetHandeler)=>{
    return (req,res,next)=>{
        Promise.resolve(requsetHandeler(req,res,next)).catch((err)=>next(err))
    }
}


export {asynchandeler}

