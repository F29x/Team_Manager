import { Player } from "../models/team.model.js";

export const createPlayer = (req, res) => {
    console.log(req.body); 
    Player.create(req.body)
        .then(player => res.json(player))
        .catch(err => res.json(err)); 
};

export const getAllPlayers = async (req,res)=>{
    try {
        const player = await Player.find({})
         res.status(200).json({
            
            data: player
         })
    } catch (error) {
        console.error(error.message);
        res.status(500).send({ message: "Server Error" });
    }
};

export const getSinglePlayer = async(req,res)=>
    {
        try {
           const {id} = req.params;
           const player = await Player.findById(id)
           console.log(player)
           res.status(201).json(player)
        } catch (error) {
            console.error(error.message);
            res.status(500).send({ message: "Server Error" });
        }

}


export const updatePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const player = await Player.findByIdAndUpdate(id, req.body, { new: true });
        if (!player) {
            return res.status(404).json({ message: "Player not found!" });
        }
        res.status(200).json(player);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server Error" });
    }
};




export const deletePlayer = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await Player.findByIdAndDelete(id);
        console.log(result);
        if (!result) {
            return res.status(404).json({ message: "Player not found!" }); 
        }
        res.status(200).json({ message: "Player deleted!" }); 
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: "Server Error" }); 
    }
};


// export const updateGame = async (req, res) => {
//     const { playerId } = req.params;
//     const { gameField, status } = req.body;

//     // Ensure that the gameField is one of the allowed fields
//     const validFields = ['gameOne', 'gameTwo', 'gameThree'];
//     if (!validFields.includes(gameField)) {
//         return res.status(400).send({ message: 'Invalid game field' });
//     }

//     // Ensure that the status is one of the allowed values
//     const validStatuses = ['not decided', 'playing', 'not playing'];
//     if (!validStatuses.includes(status)) {
//         return res.status(400).send({ message: 'Invalid status value' });
//     }

//     try {
//         // Find player by ID and update the specified game field
//         const player = await Player.findById(playerId);
//         if (!player) {
//             return res.status(404).send({ message: 'Player not found' });
//         }

//         player[gameField] = status;
//         await player.save();

//         res.status(200).send({ message: 'Player game status updated', player });
//     } catch (error) {
//         console.error('Error updating player game status:', error);
//         res.status(500).send({ message: 'Failed to update player game status' });
//     }
// }
