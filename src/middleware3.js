const asyncMiddleware3 = (req, res, next)=>{
    console.log("triggered async function middleware3");
    asyncFunc();
    return next();
}

const asyncFunc = ()=>{
    setTimeout(function() {
        console.log('I printed after 5000 ms and invoked from mid3');
    }, 5000);
}
export default asyncMiddleware3;