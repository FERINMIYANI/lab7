import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Home() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const season = params.get('season')
    const email = params.get('email')
    const fname = params.get('fname')
    const lname = params.get('lname')
    const password = params.get('password')

    const navigate = useNavigate()

    const pageHandler = () => {
        navigate('dashboard')
    }

    // console.log(email);
    return (
        <div className="home">
            <table>
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{fname}</td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td>{lname}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{email}</td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td>{password}</td>
                    </tr>
                    <tr>
                        <td>Season</td>
                        <td>{season}</td>
                    </tr>
                </tbody>
            </table>

            <button onClick={pageHandler}>Dashboard</button>
        </div>
    )
}

export default Home;