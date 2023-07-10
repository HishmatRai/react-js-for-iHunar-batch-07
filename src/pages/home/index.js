import React, { useState } from 'react';
import { Navbar, Card } from '../../components';
const Home = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [messageType, setMessageType] = useState("");
    const [isError, setIsError] = useState(true)
    // email
    const emaiAddress = (e) => {
        setEmail(e.target.value)
    }
    const addUserName = () => {
        if (username === "") {
            setMessage("user name required");
            setMessageType("error");
            setIsError(true)
        } else if (email === "") {
            setMessage("email address required");
            setMessageType("error")
            setIsError(true)
        } else {
            let user = {
                username: username,
                email: email
            }
            setMessageType("success")
            setIsError(false)
            setMessage("Success")
            console.log("user", user)
        }
    }


    const users = [
        {
            name: "user 1",
            email: "user1@email.com",
            mobile: ["1231321", "4554545"],
            status: "Pending",
            userNameShow: true
        },
        {
            name: "user 2",
            email: "user2@email.com",
            mobile: ["1231321"],
            status: "Approved",
            userNameShow: true
        },
        {
            name: "user 3",
            email: "user3@email.com",
            mobile: [],
            status: "Reject",
            userNameShow: false
        }
    ]
    return (
        <div>
            {/* <Navbar />
            <Card />
            <h1>Home</h1>
            <hr />
            {list.map((v, i) => {
                return (
                    <div key={i} style={{border:"1px solid red",margin:"5px"}}>
                        <h1 >{v}</h1>
                    </div>
                )
            })} */}
            {/* <hr /> */}
            {/* <h1 id='heading'>iSkillers</h1> */}
            {/* <button onClick={() => document.getElementById("heading").innerHTML = "iHunar"}>Update</button> */}
            {/* <hr /> */}
            {/* <h1>{heading}</h1> */}
            {/* <button onClick={() => heading = "iHunar"}>Update</button> */}
            {/* <button onClick={() => console.log(heading)}>Console</button> */}
            {/* <hr /> */}
            {/* <h1>{name}</h1> */}
            {/* <button onClick={() => setName("iHunar")}>Update</button> */}
            <p >{username}</p>
            <hr />
            <input type='text' placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type='email' placeholder='Email address' value={email} onChange={(e) => emaiAddress(e)} />
            <p style={{ color: messageType === 'error' ? 'red' : "green", backgroundColor: "gray" }}>{message}</p>
            <p style={{ color: isError ? "red" : "green" }}>{message}</p>
            <button onClick={addUserName}>add</button>

            <hr />
            {users.map((v, i) => {
                return (
                    <div key={i} style={{ border: "1px solid red", marginTop: "10px" }}>
                        {/* <h1 style={{ display: v.userNameShow ? "block" : "none" }}>{v.name}</h1> */}
                      
                      {v.userNameShow &&  <h1 >{v.name}</h1> }
                       
                        <p>{v.email}</p>
                        {v.mobile.map((value, index) => {
                            return (
                                <p key={index}>{value}</p>
                            )
                        })}
                        {/* reject red approve green pending yellow */}
                        <p style={{ backgroundColor: v.status === "Pending" ? "yellow" : v.status === "Reject" ? "red" : "green" }}>{v.status}</p>
                        <button>Show</button>
                    </div>
                )
            })}
        </div>
    )
}
export default Home