import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Login() {
    const [season, setSeason] = useState("Select");
    const [fname, setFname] = useState("");
    const [email, setEmail] = useState("");
    const [lname, setLname] = useState("");
    const [password, setPassword] = useState("")
    const history = useNavigate()

    const submitandler = (e) => {
        e.preventDefault();
        const nameRegex = /^[a-zA-Z]+$/;
        const emailRegex = /\S+@\S+\.\S+/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!fname || !email || !lname || !password || season === 'Select') {
            alert('All the Fields are Required')
        }
        else if (!nameRegex.test(fname) || !nameRegex.test(lname)) {
            alert('Name conatains only alphabet')
        }
        else if (!emailRegex.test(email)) {
            alert('Invalid email Adrress')
        }
        else if (!passwordRegex.test(password)) {
            alert('Password Must contain at least 1 Alphabet, 1 Number, 1 Special Character and 1 Upper case letter')
        }
        else {
            history(`/home?season=${season}&fname=${fname}&lname=${lname}&email=${email}&password=${password}`);
            alert('Submit Success')
        }

    }
    return (
        <div className="Login">
            <div className='form'>
                <form onSubmit={submitandler}>
                    <label>First Name</label>
                    <input type='text' name='Fname' placeholder='First Name' onChange={(e) => setFname(e.target.value.trim())} value={fname} />
                    <label>Last Name</label>
                    <input type='text' name='Lname' placeholder='Last Name' onChange={(e) => setLname(e.target.value.trim())} value={lname} />
                    <label>Email</label>
                    <input name='email' placeholder='Email' onChange={(e) => setEmail(e.target.value.trim())} value={email} />
                    <label>Password</label>
                    <input type='password' name='password' placeholder='Password' onChange={(e) => setPassword(e.target.value.trim())} value={password}></input>
                    <label>Season</label>
                    <select value={season} onChange={(e) => { setSeason(e.target.value) }}>
                        <option>Select</option>
                        <option>Fall</option>
                        <option>Winter</option>
                        <option>Summer</option>
                    </select>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}


export default Login;