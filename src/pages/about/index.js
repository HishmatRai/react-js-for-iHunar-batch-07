import React, { useState } from 'react';
import { Navbar, Card, Button, Input } from '../../components';
const About = () => {
    const [fullName, setFullName] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("")
    const AddData = () => {
        let user = {
            fullName:fullName,
            mobileNumber:mobileNumber,
            password:password
        }
        console.log("user",user)
    }
    return (
        <div>
            <Navbar isProfileShow={false} />
            {/* <Card /> */}
            <hr />
            <Input type="text" title="Full Name" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            <Input type="number" title="Mobile Number" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
            <Input type="password" title="Password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button title="Add" onClick={AddData} />
            <h1>About</h1>
        </div>
    )
}
export default About