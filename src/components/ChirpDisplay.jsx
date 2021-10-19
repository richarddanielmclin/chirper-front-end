import React from 'react'

let ChirpDisplay = (props) => {
    return (
        <>
            <div id="chirp-card" className="card border-light mb-3">

                <h5 className="card-header">{props.chirp.username}</h5>
                <div className="card-body">
                    <p className="card-title">{props.chirp.message}</p>
                </div>

            </div>
        </>
    )
}

export default ChirpDisplay