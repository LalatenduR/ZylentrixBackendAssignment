class apiError extends Error{
    constructor(
        statusCode,
        message="Something went wrong",
        error=[],
        data=null,
        stack=""
    ){
        super(message);
        this.statusCode = statusCode;
        this.error = error || null;
        this.data=data;
        this.success=false;
        this.message=message;
        if(stack){
            this.stack=stack;
        }
        else{
            Error.captureStackTrace(this,this.constructor);
        }
    }
}

export{apiError}