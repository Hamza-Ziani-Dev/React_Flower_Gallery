import { useState } from "react";

const loginUser = async (credentials) => {
    const data = await fetch("http://localhost:8000/generate-api-token", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    });
    return await data.json();
};

const LoginPage = props => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const handleLogin = async e => {
        e.preventDefault();
        const response = await loginUser({
            username,
            password
        });
        props.setToken(response.token);
        props.setLoggedIn(true);
    };

    return (
        <section>
            <div className="row gtr-200">
                <div className="col-6 col-12-medium">
                    {/* <h3>Register</h3>
                    <form method="post" action="#">
                        <div className="row gtr-uniform box">
                            <div className="col-12 col-12-xsmall">
                                <input type="text" name="username" id="username" value="" placeholder="Username" />
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <input type="password" name="password" id="password" value="" placeholder="Password" />
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <input type="password" name="password1" id="password1" value="" placeholder="Repeat Password" />
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <a href="#" className="button primary">Register</a>
                            </div>
                        </div>
                    </form> */}
                </div>
                { !props.loggedIn && 
                <div className="col-6 col-12-medium">
                    <h3>Login</h3>
                    <form method="post" onSubmit={handleLogin}>
                        <div className="row gtr-uniform box">
                            <div className="col-12 col-12-xsmall">
                                <input 
                                  type="text" 
                                  name="username" 
                                  id="username"  
                                  placeholder="Username"
                                  onChange={e => setUsername(e.target.value)}
                                />
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <input 
                                  type="password"
                                  name="password"
                                  id="password" 
                                  placeholder="Password" 
                                  onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="col-12 col-12-xsmall">
                                <button type="submit" className="button primary">Login</button>
                            </div>                                    
                        </div>
                    </form>
                </div>
            }
            </div>
        </section>
    );
}


export default LoginPage;