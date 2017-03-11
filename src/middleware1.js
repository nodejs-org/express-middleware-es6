let middleware1 = (req,res,next) => {
    console.log('middleweare 1');
    next();
}

export default middleware1;