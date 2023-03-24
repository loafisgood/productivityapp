import React, { useEffect } from 'react';
import { Input, Heading, Card, Stack, Button,} from '@chakra-ui/react';
import Other from './Other.css';
import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    useEffect(() => {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password)
    }, [username], [password])
    const navigate = useNavigate();

    const directToMain = (e) => {
        e.preventDefault();
        { username!="" && password!="" ? navigate("/") : alert("Please enter a username and password")}

    }


    return(

        <div style={{backgroundColor:  "#1A202C", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}
        >
           
            <Card className="login">
                <Stack className={"logincontents"}>
                    <Heading my={"50px"} >Productivity App</Heading>
                    <Input placeholder="Username" type="username" onChange={(e)=>{setUsername(e.target.value)}}/>
                    <Input placeholder="Password" type="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                    <Button className={"loginbutton"} onClick={directToMain}>Login</Button>
                </Stack>
            </Card>
    
        </div>
    )

}

export default Login