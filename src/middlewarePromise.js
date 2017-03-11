const promiseMiddleware = (req, res, next) => {
    asyncFunc().then(() => {
            console.log('after 10000 ms of middlewarePromise');//wont print as within 5 sec promise got rejected
            next();
        }).catch(() => {
            console.log('after 5000 ms of middlewarePromise');
            next();
        });
    return;
}
const asyncFunc = ()=>{
    return new Promise((resolve,reject) => {
        setTimeout(function() {
            console.log('I printed after 10000 ms and invoked from midPromise');
            resolve();
        }, 10000);
        setTimeout(function() {
            console.log('I rejected after 5000 ms and invoked from midPromise');
            reject();
        }, 5000);
    });
}
export default promiseMiddleware;