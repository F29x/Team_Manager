import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Game2 = () => {
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

    const handleStatusChange = async (playerId, status) => {
        try {
            await axios.patch(`http://localhost:8008/api/player/update/${playerId}`, { gameTwo: status });
            setPlayers(players.map(player =>
                player._id === playerId ? { ...player, gameTwo: status } : player
            ));
        } catch (error) {
            console.error('Error updating player status:', error);
        }
    };

    const getStatusButtonStyle = (gameTwoStatus, buttonStatus) => {
        if (gameTwoStatus === buttonStatus) {
            switch (buttonStatus) {
                case 'playing':
                    return { backgroundColor: 'green', color: 'white' };
                case 'not playing':
                    return { backgroundColor: 'red', color: 'white' };
                default:
                    return { backgroundColor: 'yellow', color: 'black' };
            }
        } else {
            return { backgroundColor: 'grey', color: 'white' };
        }
    };

    return (
        <div>
            <nav>
                <Link to="/game1">Game1</Link>
                <Link to="/game2" style={{ marginLeft: '25px' }}>Game2</Link>
                <Link to="/game3" style={{ marginLeft: '25px' }}>Game3</Link>
            </nav>
            <h1>Game 2</h1>
            <h2>Players List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <tr key={player._id}>
                            <td>{player.PlayerName}</td>
                            <td>
                                <button 
                                    style={{ marginRight: '5px', ...getStatusButtonStyle(player.gameTwo, 'playing') }}
                                    onClick={() => handleStatusChange(player._id, 'playing')}
                                >
                                    Playing
                                </button>
                                <button 
                                    style={{ marginRight: '5px', ...getStatusButtonStyle(player.gameTwo, 'not playing') }}
                                    onClick={() => handleStatusChange(player._id, 'not playing')}
                                >
                                    Not Playing
                                </button>
                                <button 
                                    style={getStatusButtonStyle(player.gameTwo, 'not decided')}
                                    onClick={() => handleStatusChange(player._id, 'not decided')}
                                >
                                    Undecided
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Game2;
