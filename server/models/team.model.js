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
        
        gameOne:{
            type:String,
            default:"not deicded"

        },
        gameTwo:{
            type:String,
            default:"not deicded"

        },
        gameThree:{
            type:String,
            default:"not deicded"

        }
        
    },
    {
        timestamps:true,
    }
)

export const Player= mongoose.model("Player",PlayerSchema)