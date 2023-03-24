import ReactPlayer from 'react-player';
import { 
    Button, 
    Box,  
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark, 
    HStack,
    Heading,
    Menu, 
    MenuButton, 
    MenuList, 
    MenuItem, 
    MenuGroup,
    VStack,
    Text,
    Input,
    

} from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import jazzcafe from '../images/jazzcafe.gif';
import VHSstore from '../images/VHSstore.png';
import Music from './Music.css'
import {FaPlayCircle, FaPauseCircle} from 'react-icons/fa';
import NoteTaker from './Notetaker.jsx';
import { FaChevronDown } from 'react-icons/fa';
import Pomodoro from './Pomodoro.jsx';
import animalcrossingramen from '../images/animalcrossingramen.png'
import animalcrossingdinner from '../images/animalcrossingdinner.png'
import lofigirlbed from '../images/lofigirlbed.jpg'
import loficoffeeshop from '../images/loficoffeeshop.jpg'
import lofigirltent from '../images/lofigirltent.jpg'
import minecraftfireflies from '../images/minecraftfireflies.gif'
import minecraftshaders from '../images/minecraftshaders.png'


const Playmusic = () => {


    //create a function that will change the scale of the background image depending on the size of the screen

//Backgrounds and Radio Arrays for the DropDown Menus
    const Backgrounds = [
        {
            name: "Jazz",
            image: jazzcafe,
        },
        {
            name: "VHSstore",
            image: VHSstore,
        },
        {
            name: "Lofi Coffee Shop",
            image: loficoffeeshop,

        },
        {
            name: "Animal Crossing Ramen Shop",
            image: animalcrossingramen,
        },
        {
            name: "Animal Crossing Dinner",
            image: animalcrossingdinner,
        },
        {
            name: "Lofi Girl Room",
            image: lofigirlbed,
        },
        {
            name:"Lofi Girl Tent",
            image: lofigirltent,
        },
        {
            name: "Minecraft Night Time",
            image: minecraftshaders,
        },




    ]

    const Radios = [
        {
            name: "Jazz",
            url: "https://www.youtube.com/watch?v=Dx5qFachd3A&ab_channel=CafeMusicBGMchannel"
        },
        {
            name: "Lofi Study Beats",
            url: "https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl"
        },
        {
            name: "Coffee Shop Radio",
            url: "https://www.youtube.com/watch?v=e3L1PIY1pN8&ab_channel=STEEZYASFUCK"
        },
        {
            name: "Animal Crossing Radio",
            url: "https://www.youtube.com/watch?v=0637dd6uevo&ab_channel=Unpunk"
        },
        {
            name: "Minecraft Chill",
            url: "https://www.youtube.com/watch?v=ENgujtcYrk8&ab_channel=SleepyGalaxy"
        },

    ]


    //States for the Backgrounds and Radio Arrays
    const [currentFont, setFont] = useState(false)
    const [currentDateTime, setCurrentDateTime] = useState("")
    const [currentBackground, setCurrentBackground] = useState(Backgrounds[0].image)
    const [currentRadio, setCurrentRadio] = useState(Radios[0].url)
    const [backgroundName, setBackgroundName] = useState(Backgrounds[0].name)
    const [radioName, setRadioName] = useState(Radios[0].name)
    const [showNoteTaker, setShowNoteTaker] = useState(false)
    const [showPomodoro, setShowPomodoro] = useState(false)
    const [play, setPlay] = useState(false)
    const [volume, setVolume] = useState(0.5)
    const username = localStorage.getItem('username')



    //State for the Date and Time
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let currentMonth = (new Date().getMonth());
    let currentDay = (new Date().getDay());
    let currentYear = (new Date().getFullYear());
    let currentDate = (new Date().getDate());



    //Time Function 
    const currentTime = () => { 
        var hours = new Date().getHours();
        var amOrPM = new Date().getHours() >= 12 ? 'PM' : 'AM';
        var hours = new Date().getHours() > 12 ? new Date().getHours() - 12 : new Date().getHours();
        var minutes = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
        return hours + ':' + minutes + ' ' + amOrPM;
    }

    const handleNoteTaker = () => {
        setShowNoteTaker(!showNoteTaker)
    }

    const handlePomdoro = () => {
        setShowPomodoro(!showPomodoro)
    }

    const Playsong = () => {
        setPlay(!play)
    }


    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDateTime( 
            dayNames[currentDay] + ", " + monthNames[currentMonth] + " " + currentDate + ", " + currentYear + ", "
            + currentTime() )
        }, 10)
        return () => {
            clearInterval(interval)
        }
    }, [])




    return(
        <Box style={{
            backgroundPosition: 'center',   
            backgroundImage: `url(${currentBackground})`,
        }} 
        className="background"
        >

    
            <ReactPlayer
                url={currentRadio}
                playing={play}
                controls={true}
                volume={volume}
                width="0px"
                height="0px"
                />

                <Heading className="heading" backgroundColor={"rgba(0, 0, 0, 0.5)"} padding={"30px"}>
                    <Text className='Center'> Hello {username}! It is </Text>
                    <Text className="Center"> {currentDateTime}</Text>
                </Heading>
                <Heading  className={"displayCurrent"}>
                    <Text color="white" fontSize={"1.9rem"} fontWeight={"300"}>Current Radio: {radioName} </Text>
                    <Text color="white" fontSize={"1.9rem"} fontWeight={"300"}>Current Background:  {backgroundName}</Text>
                </Heading>
            <VStack className="Contents">
                <Box>
                    {play ? <FaPauseCircle onClick={Playsong}  className={"PlayPause"} color="white" display={"flex"} justifyContent={"center"} /> : 
                    <FaPlayCircle onClick={Playsong}  className={"PlayPause"} color="white" />}     
                </Box>
                <div className='slider'>
                    <Slider min={0} max={100} defaultValue={0.5} onChange={(e)=>{setVolume(e/100)}} >
                        <SliderMark value={0}>
                        </SliderMark>
                        <SliderMark value={25}>
                        </SliderMark>
                        <SliderMark value={50}>
                        </SliderMark>
                        <SliderMark value={75}>
                        </SliderMark>
                        <SliderMark value={100}>
                        </SliderMark>
                        <SliderTrack>
                            <SliderFilledTrack bg="tomato"/>
                        </SliderTrack>
                        <SliderThumb boxSize={5}/>
                    </Slider>   
                </div>
                <HStack>
                    <Menu>
                        <MenuButton rightIcon={<FaChevronDown/>} as={Button}  transition='all 0.2s' _hover={{ bg: 'gray.400' }} className={"Buttons"}>
                            Backgrounds
                        </MenuButton>
                        <MenuList> 
                            <MenuGroup title="Backgrounds">
                                <MenuItem onClick={()=>{setCurrentBackground(Backgrounds[0].image); setBackgroundName(Backgrounds[0].name)}}>Jazz</MenuItem>
                                <MenuItem onClick={()=>{setCurrentBackground(Backgrounds[1].image); setBackgroundName(Backgrounds[1].name)}}>VHS Store</MenuItem>
                                <MenuItem onClick={()=>{setCurrentBackground(Backgrounds[2].image); setBackgroundName(Backgrounds[2].name)}}>Lofi Coffee Shop</MenuItem>
                                <MenuItem onClick={()=>{setCurrentBackground(Backgrounds[3].image); setBackgroundName(Backgrounds[3].name)}}>Animal Crossing Ramen Shop</MenuItem>
                                <MenuItem onClick={()=>{setCurrentBackground(Backgrounds[4].image); setBackgroundName(Backgrounds[4].name)}}>Animal Crossing Dinner</MenuItem>
                                <MenuItem onClick={()=>{setCurrentBackground(Backgrounds[5].image); setBackgroundName(Backgrounds[5].name)}}>Lofi Girl Room</MenuItem>
                                <MenuItem onClick={()=>{setCurrentBackground(Backgrounds[6].image); setBackgroundName(Backgrounds[5].name)}}>Lofi Girl Tent</MenuItem>
                                <MenuItem onClick={()=>{setCurrentBackground(Backgrounds[7].image); setBackgroundName(Backgrounds[5].name)}}>Minecraft Night Time</MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button}  transition='all 0.2s' _hover={{ bg: 'gray.400' }} className={"Buttons"} rightIcon={<FaChevronDown/>}>
                            Radio Station
                        </MenuButton>                 
                        <MenuList>
                            <MenuGroup title="Stations">
                                <MenuItem onClick={()=>{setCurrentRadio(Radios[0].url); setRadioName(Radios[0].name)}}>Chill Jazz</MenuItem>
                                <MenuItem onClick={()=>{setCurrentRadio(Radios[1].url); setRadioName(Radios[1].name)}}>Lofi Study Beats</MenuItem>
                                <MenuItem onClick={()=>{setCurrentRadio(Radios[2].url); setRadioName(Radios[2].name)}}>Coffee Shop Radio</MenuItem>
                                <MenuItem onClick={()=>{setCurrentRadio(Radios[3].url); setRadioName(Radios[3].name)}}>Animal Crossing Music</MenuItem>
                                <MenuItem onClick={()=>{setCurrentRadio(Radios[4].url); setRadioName(Radios[4].name)}}>Minecraft Chill</MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                </HStack>
                <Box alignItems={'center'} >
                    <Button onClick={()=>{setShowNoteTaker(true)}} transition='all 0.2s' _hover={{ bg: 'gray.400' }}padding={"20px"} margin={"5px"} >
                        <Heading fontSize={"1.25rem"} > 
                            NoteTaker
                        </Heading>
                    </Button>
                    <Button onClick={()=>{setShowPomodoro(true)}}transition='all 0.2s' _hover={{ bg: 'gray.400' }}padding={"20px"}>
                        <Heading fontSize={"1.25rem"} color={"red.500"}>
                            Pomodoro Timer
                        </Heading>
                    </Button>
                </Box>
            </VStack>
            {showNoteTaker ? <NoteTaker close={handleNoteTaker}/> : null}
            {showPomodoro ? <Pomodoro close={handlePomdoro}/> : null}
        </Box>
    )
}
export default Playmusic;





