import React, { useState } from 'react';
import { Navbar, Card, Button ,Input} from '../../components';
import './index.css'
const Home = () => {
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isError, setError] = useState(true);
    // edit 
    const [userNameEdit, setUserNameEdit] = useState("");
    const [emailEdit, setEmailEdit] = useState("");

    const [users, setUsers] = useState([
        {
            userName: "User 1",
            email: "email@gmail.com",
            edit: false
        },
        {
            userName: "User 2",
            email: "email@gmail.com",
            edit: false
        },
        {
            userName: "User 3",
            email: "email@gmail.com",
            edit: false
        }
    ]);
    const addEmailAddress = (e) => {
        setEmail(e.target.value)
    }
    const AddData = () => {
        if (userName === "") {
            setMessage("Username required !");
            setError(true)
        } else if (email === "") {
            setMessage("Email required !");
            setError(true)
        } else {
            const user = {
                userName: userName,
                email: email,
                edit: false
            }
            let newUser = [];
            newUser.push(user)
            setUsers([...users, ...newUser])
            setError(false)
            setMessage("Success")
            setUserName("");
            setEmail("")
            setTimeout(() => {
                setMessage("")
            }, 2000);
        }
    }
    // edit handler 
    const EdidtHandler = (i) => {
        for (let index = 0; index < users.length; index++) {
            if (i === index) {
                users[index].edit = true
                console.log("true")
            } else {
                users[index].edit = false
                console.log("false")
            }
        }

        setUserNameEdit(users[i].userName)
        setEmailEdit(users[i].email)
        setUsers([...users])


    }
    // Update
    const UpdateHandler = (index) => {
        users[index].edit = false;
        users[index].userName = userNameEdit;
        users[index].email = emailEdit;
        setUsers([...users])
    }
    const deleteHandler = (i) => {
        users.splice(i, 1);
        setUsers([...users])
    }
    return (
        <div>
            <Navbar isProfileShow={true} />
            {/* <Card /> */}
            <hr />
            {/* <Button title="Sign Up" bgColor="red" message="Sign Up" />
            <Button title="Sign In" bgColor="green" message="Sign Up" />
            <Button title="Log Out" bgColor="blue" message="Log Out" />
            <Button title="Update" bgColor="yellow" message="Update" />
            <Button title="Edit" bgColor="gray" message="Edit" /> */}
            <h1>Home</h1>
            <Input />
            <hr />
            {/* {list.map((v, i) => {
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
            {/* <p >{username}</p>
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
                      
                      {v.userNameShow &&  <h1 >{v.name}</h1> }
                       
                        <p>{v.email}</p>
                        {v.mobile.map((value, index) => {
                            return (
                                <p key={index}>{value}</p>
                            )
                        })}
                        <p style={{ backgroundColor: v.status === "Pending" ? "yellow" : v.status === "Reject" ? "red" : "green" }}>{v.status}</p>
                        <button>Show</button>
                    </div>
                )
            })} */}
            {/* <input type='text' placeholder='Username' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type='email' name='email' placeholder='Email Address' value={email} onChange={(e) => addEmailAddress(e)} />
            {message !== "" && <p style={{ color: isError ? "red" : "green" }}>{message}</p>}

            <button onClick={AddData}>add</button>
            <hr />
            {users.length === 0 ?

                <p>No data found</p> :
                <div>
                    {users.map((v, i) => {
                        return (
                            <div key={i} className='card'>
                                {v.edit ?
                                    <div>
                                        <input type='text' placeholder='Username' value={userNameEdit} onChange={(e) => setUserNameEdit(e.target.value)} />
                                        <input type='email' name='email' placeholder='Email Address' value={emailEdit} onChange={(e) => setEmailEdit(e.target.value)} />
                                        <button onClick={() => UpdateHandler(i)}>Update</button>
                                    </div> :
                                    <div>
                                        <p>Username :- {v.userName}</p>
                                        <p>Email :- {v.email}</p>
                                        <button onClick={() => EdidtHandler(i)}>Edit</button>
                                        <button onClick={() => deleteHandler(i)}>Delete</button>
                                    </div>
                                }

                            </div>
                        )
                    })}
                </div>
            } */}
        </div>
    )
}
export default Home