import { Divider,Container, Box } from '@chakra-ui/react'

export default function Hero() {
  return (
    <main >
     <Container  height={"570px"} maxWidth={2000} bg='gray.300' centerContent>
        <Box padding='4' bg='white.400' color='black' maxW='md' >
          There are many benefits to a joint design and development system. Not only
          does it bring benefits to the design team, but it also brings benefits to
          engineering teams. It makes sure that our experiences have a consistent look
          and feel, not just in our design specs, but in production.
        </Box>
      </Container>
      <Divider orientation='horizontal' />
    </main>
  )
}