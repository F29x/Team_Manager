import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

const PlayersList = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8008/api')
            .then(response => {
                setPlayers(response.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const deletePlayer = (id) => {
        axios.delete(`http://localhost:8008/api/player/delete/${id}`)
            .then(() => {
                
                setPlayers(players.filter(player => player._id !== id));
                alert('Player Deleted !');
            })
            .catch(err => {
                console.log(err);
                alert('Failed to delete player');
            });
    };

    return (
        <div>
            <nav>
                <Link to={'/'}>List</Link>
                <Link to={'/add-player'} style={{marginLeft:'15px'}}>Add Player</Link>
            </nav>
            <h2>Players List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <tr key={player._id}>
                            <td>{player.PlayerName}</td>
                            <td><strong>{player.Position}</strong></td>
                            <td>
                                <button onClick={() => deletePlayer(player._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PlayersList;
