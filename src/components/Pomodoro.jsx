
import { useState, useEffect } from 'react';
import { 
    Box, 
    Button, 
    Heading,
    Input,
    HStack, 
    Checkbox, 
    Text, 
    Card, 
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem,
    Progress,
    Image,
} from '@chakra-ui/react'
import Draggable from 'react-draggable';
import { FaChevronDown } from 'react-icons/fa';
import Other from './Other.css'
import tomato from '../images/tomato.svg'



const Pomodoro = ({close}) => {

    const [time, setTime] = useState(1500)
    const [isRunning, setIsRunning] = useState(false)
    const bellSound = "https://www.youtube.com/watch?v=nsw8H9V3D54&ab_channel=ProSounds"

    const startTimer = () => {
        setIsRunning(true)

    }


    useEffect(() => {
        let timeoutId;
    
        async function sleep(time) {
            return new Promise((resolve) => {
                timeoutId = setTimeout(resolve, time);
            });
        }
    
        if (time > 0 && isRunning) {
            sleep(1000).then(() => {
                setTime(time - 1);
            });
        } else if (time === 0) {
            new Audio(bellSound).play();
        }
    
        return () => {
            clearTimeout(timeoutId);
        };
    }, [time, isRunning]);


    return(
        <div>
            <Draggable>
                <Card className={"PomodoroCard"}>
                    <Button onClick={close} className={"CloseButton"} >X</Button>
                    <Heading colorScheme={"red"} > <u>Pomodoro Timer</u></Heading>
                    <Heading>{Math.floor(time / 60)}:{time % 60 < 10 ? "0" : ""}{time % 60}</Heading>
                    <Image src={tomato} width={"30%"} padding={"20px"} draggable={"false"}></Image>
                    <HStack>
                         <Menu>
                            <MenuButton as={Button} rightIcon={<FaChevronDown />}>
                                Select Time
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={()=>{ setTime(300)}}>5:00</MenuItem>
                                <MenuItem onClick={()=>{ setTime(600)}}>10:00</MenuItem>
                                <MenuItem onClick={()=>{ setTime(1500)}}>25:00</MenuItem>
                                <MenuItem onClick={()=>{ setTime(1800)}}>30:00</MenuItem>
                                <MenuItem onClick={()=>{ setTime(2700)}}>45:00</MenuItem>
                                <MenuItem onClick={()=>{ setTime(3600)}}>60:00</MenuItem>
                            </MenuList>
                        </Menu>

                        
                        <Button onClick={startTimer}>Start</Button>
                        <Button onClick={()=>{setIsRunning(!isRunning)}}> { isRunning ? "Pause" : "Resume"} </Button>
                        <Input  width={"30%"}placeholder="Custom Time" onChange={(e)=>{setTime(e.target.value)}}></Input>
                       
                    </HStack>
                    <Progress value={time} />
                </Card>
            </Draggable>
        </div>






    )
}
export default Pomodoro