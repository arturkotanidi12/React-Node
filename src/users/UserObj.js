import {useState, useEffect} from "react";
import {v4 as uuidv4} from 'uuid';
import axios from "axios";
import Table from 'react-bootstrap/Table';
import "./style.css"

function UserObj() {

    const [clientAnalytics, setClientAnalytics] = useState([]);

    const createClient = async () => {
        const res = await axios.get("https://api.ipify.org/?format=json")
        const ip_address = res.data.ip

        const user = {
            session_id: uuidv4(),
            ip_address,
            url: window.location.href,
            timestamp: new Date().toLocaleDateString('en-GB')
        }

        await storeUser(user)
    };

    const storeUser = async (user) => {
        try {
            await axios.post('http://localhost:3000/api/clients/analytics', user);
        } catch (e) {
            console.log(e)
        }
    }

    const getAnalytics = async () => {
        const data = await axios.get('http://localhost:3000/api/clients/analytics');
        setClientAnalytics([...data.data.data])
    }

    useEffect(() => {
        getAnalytics()
        createClient();
    }, []);


    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Session ID</th>
                <th>IP Address</th>
                <th>Url</th>
                <th>Timestamp</th>
            </tr>
            </thead>
            <tbody>
            {
                clientAnalytics.map((users) => {
                    return (
                        <tr key={users.session_id}>
                            <td>{users.session_id}</td>
                            <td>{users.ip_address}</td>
                            <td>{users.url}</td>
                            <td>{users.timestamp}</td>
                        </tr>
                    )
                })
            }
            </tbody>
        </Table>
    )
}

export default UserObj