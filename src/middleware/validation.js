import Joi from "joi";

// format the output
const formatJoiError = (error) => {
    return error.details.map((detail) => detail.message.replace(/"/g, "")).join(",");
};

const CreateUserSchema=Joi.object({
    name:Joi.string().required().messages({
        "string.empty":"Name is required"
    }),
    email:Joi.string().email().required().messages({
        "string.email":"Email is invalid",
        "string.empty":"Email is required"
    }),
    age:Joi.number().integer().min(1).required().messages({
        "number.base":"Age must be a number",
        "number.min":"Age must be greater than 0",
        "number.empty":"Age is required",
    }),
});

// Validation for createUser function
const validateCreateUser=(req,res,next)=>{
    const {error}=CreateUserSchema.validate(req.body,{abortEarly:false});
    if(error){
        return res.status(400).json({
            error:formatJoiError(error)
        });
    }
    next();
};

const UpdateUserSchema=Joi.object({
    name:Joi.string(),
    email:Joi.string().email(),
    age:Joi.number().integer().min(1),
}).min(1).messages({
    "object.min":"At least one field is required"
});

// Validation for updateUser function
const validateUpdateUser=(req,res,next)=>{
    const {error}=UpdateUserSchema.validate(req.body,{abortEarly:false});
    if(error){
        return res.status(400).json({
            error:formatJoiError(error)
        })
    }
    next();
}

export {validateCreateUser,validateUpdateUser};