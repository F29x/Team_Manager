import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Game1 = () => {
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8008/api')
            .then(response => {
                const playersWithStatus = response.data.data.map(player => ({
                    ...player,
                    status: 'Undecided'
                }));
                setPlayers(playersWithStatus);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const handleStatusChange = (playerId, status) => {
        setPlayers(players.map(player => 
            player._id === playerId ? { ...player, status } : player
        ));
    };

    const getStatusButtonStyle = (playerStatus, buttonStatus) => {
        if (playerStatus === buttonStatus) {
            if (playerStatus === 'Playing') {
                return { backgroundColor: 'green', color: 'white' };
            } else if (playerStatus === 'NotPlaying') {
                return { backgroundColor: 'red', color: 'white' };
            } else {
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
            <h1>Game 1</h1>
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
                                    style={{ marginRight: '5px', ...getStatusButtonStyle(player.status, 'Playing') }}
                                    onClick={() => handleStatusChange(player._id, 'Playing')}
                                >
                                    Playing
                                </button>
                                <button 
                                    style={{ marginRight: '5px', ...getStatusButtonStyle(player.status, 'NotPlaying') }}
                                    onClick={() => handleStatusChange(player._id, 'NotPlaying')}
                                >
                                    NotPlaying
                                </button>
                                <button 
                                    style={getStatusButtonStyle(player.status, 'Undecided')}
                                    onClick={() => handleStatusChange(player._id, 'Undecided')}
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

export default Game1;
