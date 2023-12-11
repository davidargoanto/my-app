
import { Stack,Container, Heading, Box ,Center, Flex, Image, color, } from "@chakra-ui/react"
// import  fetcher from "./../../until/swrfetcher" 

export default function Service() {
    return(
        
     <Container  height={"600px"} maxW='2xl' bg='gray.300' centerContent>
        <Box padding='4' bg='white.400' color='black' maxW='md' >
        <Center>
      <Stack direction={['column', 'row']} spacing='24px'>
       
          <Box>
          <Container  height={"0"} maxW='2xl' bg='gray.300' >
            
          

              <Box padding={0} bg='white.400' color='black' maxW='md' >
                <Heading>Our Product</Heading>
                <hr></hr>
                <br></br>
                
                  <Stack>
                   <Box>
                    <Heading as='h4' size='md'>Solar Panel </Heading>
                  </Box>

                  <Box>
                    <Heading as='h4' size='md'>Green Batteries</Heading> 
                  </Box>

                  <Box>
                    <Heading as='h4' size='md'>Echo Fuel</Heading>
                  </Box>
                  </Stack>
                
              </Box>
            
            </Container>
      </Box>
      </Stack>
      </Center>
        </Box>
      </Container>
      
    )

}