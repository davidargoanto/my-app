import { Highlight,Container, Box ,Heading, Stack, Image, Center}  from '@chakra-ui/react'


export default function Hero() {
  return (
    <main >
      <Center>
      <Stack direction={['column', 'row']} spacing='24px'>
        <Box padding={8}>
       <Image
          padding='0px'
          boxSize='300px'
          objectFit='cover'
          src= 'https://i.pinimg.com/564x/40/3f/e2/403fe2b99e059c3cc401a614635e3689.jpg'
          alt='pict'
          
          />
          </Box>
          <Box>
          <Container  height={"0"} maxW='2xl' bg='gray.300' >
            
          

              <Box padding={6} bg='white.400' color='black' maxW='md' >
                <Heading>Green Tech: Innovating for a Sustainable Future</Heading>
                <br></br>
                EcoPower is a green tech company that provides clean and affordable energy solutions. We offer solar panels and batteries that reduce carbon emissions and energy costs. We are committed to innovation and sustainability and we work with customers and communities to improve their access to reliable and renewable energy.
              
              </Box>
            
            </Container>
      </Box>
      </Stack>
      </Center>
      <hr></hr>
      <Center>
      <Stack direction={['column', 'row']} spacing='24px'>
        
          <Box padding={8}>
            <Container  height={"0"} maxW='2xl' bg='gray.300' >
              <Box  bg='white.400' color='black' maxW='md' >
                <Heading> Our Mission </Heading>
                <br></br>
                EcoPower: To provide clean and affordable energy solutions that reduce carbon emissions and energy costs, and improve access to reliable and renewable energy for customers and communities. We are committed to innovation and sustainability, and we believe that green tech is the key to creating a greener and brighter future.
                
                
              </Box>       

            </Container>
         </Box>
          
         <Box padding={8}>
           <Image
              padding='10px'
              boxSize='210px'
              objectFit='cover'
              src= 'https://clipground.com/images/mission-logo-9.jpg'
              alt='Our Mission'
              />
          </Box>

          
      </Stack>
      </Center>
      <hr></hr>
      
      <Center>
      <Stack direction={['column', 'row']} spacing='24px'>
        <Box padding={8}>
       <Image
          padding='0px'
          boxSize='300px'
          objectFit='cover'
          src= 'https://thumbs.dreamstime.com/z/time-natural-11172698.jpg'
          alt='pict'
          
          />
          </Box>
          <Box>
          <Container  height={"0"} maxW='2xl' bg='gray.300' >
            
          

              <Box padding={6} bg='white.400' color='black' maxW='md' >
                <Heading>Our History</Heading>
                <br></br>
                <Box>
          <Container  height={"0"} maxW='2xl' bg='gray.300' >
            
          <br></br>

                <Box padding={6} bg='white.400' color='black' maxW='md' >
                  
                  <br></br>
                  <ul>
                    <li> <Heading as='h4' size='md'>
                      <Highlight
                        query='spotlight'
                        
                      >
                        2016
                      </Highlight>
                    </Heading>

                    </li>
                    Make first prototype
                    <br></br>
                    <li>
                    <Heading as='h4' size='md'>
                      <Highlight
                        query='spotlight'
                        styles={{ px: '1', py: '1', rounded: 'full', bg: 'red.100' }}
                      >
                        2018
                      </Highlight>
                    </Heading>
                    </li>
                    Launch First Product
                    <br></br>
                    <li>
                    <Heading as='h4' size='md'>
                      <Highlight
                        query='spotlight'
                        styles={{ px: '1', py: '1', rounded: 'full', bg: 'red.100' }}
                      >
                        2020
                      </Highlight>
                    </Heading>
                    </li>
                    Launch new technology
                    
                  </ul>
                
                </Box>
              
              </Container>
        </Box>
              
              </Box>
            
            </Container>
      </Box>
      </Stack>
      </Center>

      <hr></hr>
      <Center>
      <Stack direction={['column', 'row']} spacing='24px'>
        
          <Box padding={8}>
            <Container  height={"0"} maxW='2xl' bg='gray.300' >
              <Box  bg='white.400' color='black' maxW='md' >
                <Heading> Teams </Heading>
                <br></br>
                EcoPower: To provide clean and affordable energy solutions that reduce carbon emissions and energy costs, and improve access to reliable and renewable energy for customers and communities. We are committed to innovation and sustainability, and we believe that green tech is the key to creating a greener and brighter future.
                
                
              </Box>       

            </Container>
         </Box>
          
         <Box padding={8}>
           <Image
              padding='10px'
              boxSize='210px'
              objectFit='cover'
              src= 'https://static.vecteezy.com/system/resources/previews/000/596/028/original/community-people-logo-vector.jpg'
              alt='pict'
              />
          </Box>

          
      </Stack>
      </Center>
      <hr></hr>
    </main>
  )
}