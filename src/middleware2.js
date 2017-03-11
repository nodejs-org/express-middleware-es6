class middleware2{
    constructor(securityOption){
        console.log(securityOption);
        this.securityOpt = securityOption;
    }

    oauth(req,res,next){
        console.log('middleware:oauth2 - hit');
        console.log(this.securityOpt);
        next();
    }
}

export default middleware2;