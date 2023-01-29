import React from "react";


function SignUp () {

    return (
         
        <div className="hero">
        <div className="form-box left">
            <div class="info">
                <h2>Carbonified</h2>
                <div className="contact-info">
                    <p>box 300 - 00100,</p>
                    <p>Nairobi,</p>
                    <p>Kenya</p>
                </div>
                <div className="icons">
                    <div className="contact">
                        <i className="fas fa-phone"></i>
                        <p>Tel: +254 7200001001</p>
                    </div>
                    <div className="contact">
                        <i className="fas fa-envelope"></i>
                        <p>Email: support@Carbonified.com</p>
                    </div>
                </div>
                <div className="mouse">
                    <br></br>
                    <br></br>
                    <a href="./Home">Back to home</a>
                    <i className="fas fa-arrow-left"></i>
                </div>
                </div>
        </div>
        <div className="form-box right">
            <div className="button-box">
                <div className="btn0">
                <button type="button" class="toggle-btn" onclick="login()">Login</button>
                <button type="button" class="toggle-btn" onclick="register()">Register</button>
                </div>
            </div>
            </div>
        {SignUp}
    </div>
    
    );
}

export default SignUp;
