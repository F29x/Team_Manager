import { useState } from 'react';
import axios from 'axios';
import { Link,useNavigate } from 'react-router-dom';

const AddPlayer = () => {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const dataSender = async () => {
        if (!name || !position ) {
            setErrorMessage('All fields must be filled');
            return;
        }else if(name.length<2 || position.length<2){
            setErrorMessage('Min 2 characters long for each is required !')
            return
        }

        try {
            await axios.post('http://localhost:8008/api/player/', {
                PlayerName:name,
                Position:position
               
            });
            alert('Player Posted');
            setName('');
            setPosition('');
            setErrorMessage(''); 
            navigate('/')
        } catch (error) {
            console.error('Error posting player:', error.response ? error.response.data : error.message);
        }
    };
    const isButtonEnabled = name !== '' && position !== '';


    return (
        <div className='add'>
            <nav>
                 <Link to={'/'}>List</Link>
                 
            </nav>
            <h2>Add a New Player</h2>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <div className="field">
                <input
                    type="text"
                    placeholder="player name"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setErrorMessage(''); 
                    }}
                />
                <input
                    type="text"
                    placeholder="position"
                    value={position}
                    onChange={(e) => {
                        setPosition(e.target.value);
                        setErrorMessage(''); 
                    }}
                />
               
                <button onClick={dataSender}
                disabled={!isButtonEnabled}
                style={{
                    backgroundColor: isButtonEnabled ? 'blue' : 'grey',
                    color: 'white',
                    cursor: isButtonEnabled ? 'pointer' : 'not-allowed'
                }}>Send Data</button>
            </div>
        </div>
    );
};

export default AddPlayer;

