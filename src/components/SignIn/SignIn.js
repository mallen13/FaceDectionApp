import './SignIn.css';

const SignIn = ({onRouteChange}) => {
    return (
        <div className='formContainer'>
            <h1 className='signinHeader'>Celebrity Face Detector</h1>
            <div className='form'>
                <h2>Sign-In</h2>
                <label for='username' >Username:</label><br/>
                <input type='text' placeholder='Username' name='username' /><br/>
                <label for='password'>Password:</label><br/>
                <input type='password' placeholder='Password' name='password' /><br/>
                <button onClick={ () => onRouteChange('home') }>Sign in</button><br />
                <button className='registerEnter' onClick={ () => onRouteChange('register') }>Register</button>
            </div>
        </div>
    )
}

export default SignIn