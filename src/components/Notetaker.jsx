import Draggable from 'react-draggable'

import Other from './Other.css'
import {useState} from 'react'
import {Card,Text,Button,Box,Input,Checkbox, CheckboxGroup, HStack,Heading} from '@chakra-ui/react'
import {BsXCircleFill} from 'react-icons/bs'



const Notetaker = ({close}) => {

    
    const [note, setNote] = useState("")
    const [notes, setNotes] = useState([])

    const handleNote = (e) => {
        setNote(e.target.value)
    }

    const handleAddNote = () => {
        setNotes([...notes, note])
        setNote("")
    }

    const handleDeleteNote = (index) => {
        const newNotes = [...notes]
        newNotes.splice(index, 1)
        setNotes(newNotes)
    }

    const handleEnter = (e) => {
        if (e.key === "Enter") {
            handleAddNote()
        }
    }

    return(
        <div>
            <Draggable>
                
                <Card className={"Card"} padding={"50px"}>
                    <Button onClick={close} className={"CloseButton"}>X</Button>

                    <Heading my={"25px"}>Notetaker</Heading>
                    <Input value={note} onChange={handleNote} placeholder="Add a note" onKeyDown={handleEnter}/>
                    <HStack>
                        <Button onClick={handleAddNote} my={"10px"}>Add Note</Button>
                        <Button onClick={() => setNotes([])}>Clear All Notes</Button>
                    </HStack>
                    <Box margin={"30px"}>
                        {notes.map((note, index) => (
                            <Box key={index} className={"Notes"}>
                                <HStack >
                                    <Checkbox size='lg' colorScheme='green' backgroundColor={'blackAlpha.300'} padding={"10px"} className={"CheckBox"}>
                                        <Text color="black" display={'flex'} justifyContent={"flex-start"}> 
                                            {note}
                                        </Text>
                                    </Checkbox>
                                    <Button onClick={() => handleDeleteNote(index)} backgroundColor={"blackAlpha.600"}> 
                                        <BsXCircleFill />
                                    </Button>
                                </HStack>
                            </Box>
                        ))}
                    </Box>
                </Card>
            </Draggable>
        </div>

    )
}

export default Notetaker




