import React from 'react';
import { Navbar, Card } from '../../components';
const Home = () => {
    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let heading = "iSkillers";
    const [name, setName] = React.useState("iSkillers")
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
            <hr />
            <h1 id='heading'>iSkillers</h1>
            <button onClick={() => document.getElementById("heading").innerHTML = "iHunar"}>Update</button>
            <hr />
            <h1>{heading}</h1>
            <button onClick={() => heading = "iHunar"}>Update</button>
            <button onClick={() => console.log(heading)}>Console</button>
            <hr />
            <h1>{name}</h1>
            <button onClick={() => setName("iHunar")}>Update</button>
        </div>
    )
}
export default Home