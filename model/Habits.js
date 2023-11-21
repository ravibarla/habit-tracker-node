import mongoose from 'mongoose';
const habitSchema=mongoose.Schema(
    [
        {
            name:String,
            id:Number,
            createdAt:String,
            entries:[
                {
                    id:Number,
                    date:String,
                    status:String
                }
            ]
        }
    ]
)

export const Habits=mongoose.model("Habits",habitSchema)