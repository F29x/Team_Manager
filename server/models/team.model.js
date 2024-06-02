import mongoose from "mongoose";

const PlayerSchema = mongoose.Schema(
    {
        PlayerName:{
            type:String,
            required:true
        },

        Position:{
            type:String,
            required:true
        },
        Status:{
            type:String,
            enum:['playing','notplaying','undecided'],
            
        }
        
    },
    {
        timestamps:true,
    }
)

export const Player= mongoose.model("Player",PlayerSchema)