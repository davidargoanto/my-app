import { Divider, Box ,Center, Flex, Image} from "@chakra-ui/react"
import Link from "next/link"

export default function Navbar (){
    return (
         
        <Flex paddingBottom={4} color='white'>
        
        <Box  bg='green.500' w='100%'  p={1} color='white'>
        <Image height={90}  src='https://i.pinimg.com/originals/39/59/61/395961c293f72019a811a97153655044.png' alt='Logo' />
        </Box>

        
        
          
        
        <Center p={"4"} w='70px' bg='green.500' >
       
          <Link  href={"./"}>Home</Link>

          
        </Center>
        

        <Center p={"4"} w='70px' bg='green.500'>
          <Link href={"./service"}>Service</Link>
        </Center>
        <Center p={"4"} w='70px' bg='green.500'>
          <Link href={"./about"}>About</Link>
        </Center>
        <Center p={"4"} w='70px' bg='green.500' >
          <Link href={"./teams"}>Teams</Link>
        </Center>
      </Flex>
    )
}