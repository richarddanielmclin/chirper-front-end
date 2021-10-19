import React, { useState } from "react";
import ChirpDisplay from "./components/ChirpDisplay"
import "./style.css"

const App = () => {


    const [chirps, setChirps] = useState([{ username: 'thomas', message: 'as;ldkfjs' }, { username: 'Jake', message: 'what the heck is up' }, { username: 'aposidjf', message: 'yoooe' }])
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')

    let handleSubmit = () => {
        let newChirp = { username: username, message: message }
        setChirps([...chirps, newChirp])
    }

    // class Chirp {
    //     constructor() {
    //         if (username === '' || message === '') {
    //             alert('You must enter both a username and a chirp!')
    //         } else {
    //             const chirpContainer = document.getElementById('chirpContainer');
    //             chirpContainer.style.display = 'flex'
    //             const chirpBox = document.createElement('div');
    //             chirpBox.classList.add('card')
    //             chirpBox.classList.add('border-info')
    //             chirpBox.id = 'chirpBox'

    //             const chirpUsername = document.createElement('div')
    //             chirpUsername.classList.add('border-info')
    //             chirpUsername.id = 'chirpUsername'

    //             const chirpText = document.createElement('div');
    //             chirpText.classList.add('card-text')
    //             chirpText.id = 'chirpText'

    //             chirpUsername.textContent = "@" + username
    //             chirpText.textContent = message

    //             chirpContainer.appendChild(chirpBox);
    //             chirpBox.appendChild(chirpUsername);
    //             chirpBox.appendChild(chirpText);
    //         }
    //     }


    // }

    return (
        <>
            <div id="container">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">@</span>
                    </div>
                    <input value={username} onChange={e => setUsername(e.target.value)} type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"></input>
                </div>
                <div className="input-group mb-3">
                    <textarea value={message} onChange={e => setMessage(e.target.value)} className="form-control" aria-label="With textarea" placeholder="What do you want to say?"></textarea>
                </div>
                {/* <div><button className="btn btn-info" onClick={() => new Chirp()}>Chirp Away!</button></div> */}
                <div><button className="btn btn-info" onClick={handleSubmit}>Chirp Away!</button></div>
            </div>
            <div id="chirpContainer">
                {chirps.map((oneChirp, id) => <ChirpDisplay key={id} chirp={oneChirp} />
                )}
            </div>
        </>
    )
}

export default App