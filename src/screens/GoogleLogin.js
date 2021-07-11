import React from 'react'
import google from '../assets/google.svg'

const googleClientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function GoogleLogin() {
    return (
        <div class="icon-btn-google">
            <div className="icon-most">
                <img src={google} />
                <button
                    color="none"
                    id="loginButton"
                    className="icon-fast"
                >
                </button>
            </div>
        </div>
    )
}

export default GoogleLogin
