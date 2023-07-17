import React from 'react';
import { Navbar, Card, Button } from '../../components';
class Contact extends React.Component {
    constructor() {
        super();
        this.state = {
            fullName: "iHunar",
            email: "info@gmail.com",
            mobile: "0323232323"
        }
    }
    render() {
        let { fullName } = this.state
        // console.log("fullName", this.state.fullName)
        console.log("fullName", fullName)
        return (
            <div>
                <Navbar isProfileShow={false} />
                {/* <Card fullName={this.state.fullName} /> */}
                <Card fullName={fullName} />
                <Card fullName={fullName} >
                    <div>
                        <p>hifsdf</p>
                        <h1>hifsdf</h1>
                        <table border={1}>
                            <tr>
                                <td>fd</td>
                                <td>fd</td>
                                <td>fd</td>
                            </tr>
                        </table>
                    </div>
                </Card>
                <Card fullName={fullName} >
                    <div>
                        <p>hifsdf</p>
                        <h1>hifsdf</h1>
                        <ul>
                            <li>fsd</li>
                            <li>fsd</li>
                            <li>fsd</li>
                            <li>fsd</li>
                            <li>fsd</li>
                        </ul>
                    </div>
                </Card>
                <Button title="Update" onClick={() => this.setState({ fullName: "iSkillers" })} />
                <hr />
                <h1>Contact</h1>
            </div>
        )
    }
}
export default Contact