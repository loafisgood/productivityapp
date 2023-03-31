import React, { useEffect } from 'react';
import { Input, Heading, Card, Stack, Button, Box,Slider, SliderTrack, SliderThumb, SliderFilledTrack, SliderMark} from '@chakra-ui/react';
import Other from './Other.css';
import { useState } from 'react';
import login from '../images/login.gif';
import lofiroom1 from '../images/lofiroom1.jpg';
import lofiroom2 from '../images/lofiroom2.jpg';
import lofiroom3 from '../images/lofiroom3.jpg';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [background, setBackground] = useState(lofiroom1)
    const [prevBackgroundName, setPrevBackgroundName] = useState("Lofi Room 1")

    const loginBackgrounds =[
        {
            name: "Lofi Room 1",
            background: lofiroom1,
        },
        {
            name: "Lofi Room 2",
            background: lofiroom2,
        },
        {
            name: "Lofi Room 3",
            background: lofiroom3,
        },
        {
            name: "Lofi Gif",
            background: login,
        },
    ]



    useEffect(() => {
        localStorage.setItem("username", username);
        localStorage.setItem("prevBackground", background);
        localStorage.setItem("prevBackgroundName", prevBackgroundName);
    }, [username], [background], [prevBackgroundName])

    const navigate = useNavigate();

    const directToMain = (e) => {
        e.preventDefault();
        { username!="" && password!="" ? navigate("/App") : alert("Please enter a username and password")}

    }



    return(

        <div style={{ backgroundPosition: "center", backgroundImage: `url(${background})`, backgroundRepeat: "no-repeat", backgroundSize: "cover", height: "100vh", width: "100vw", display: "flex", justifyContent: "center", alignItems: "center"}}
        >
            <Box className={"login"} >
                <Stack className={"logincontents"} >
                    <Heading my={"50px"} className={"rgb"}>Productivity App</Heading>
                    <Input placeholder="Username" type="username" variant={"flushed"} width={"75%"} onChange={(e)=>{setUsername(e.target.value)}}/>
                    <Input placeholder="Password" type="password" variant={"flushed"} width={"75%"}onChange={(e)=>{setPassword(e.target.value)}}/>
                    
                </Stack>  
                <Button className={"loginbutton"} color={"black"} onClick={directToMain}>Login</Button>

                <Button className={"loginbutton"} color={"black"} 
                    onClick={() => {setBackground(loginBackgrounds[Math.floor(Math.random() * 
                    loginBackgrounds.length)].background)}}>Change Background
                </Button>
   
            </Box>
            

        </div>
    )

}

export default Login