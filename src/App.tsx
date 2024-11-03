import { Box, Center, Heading, Icon, Image, Text } from "@chakra-ui/react"
import { BsInstagram } from "react-icons/bs"

function App() {

  
  return (
    <Box w='100vw' h='100vh' bgColor={'white'} color={'black'}>
      <Box w='100vw' h={16} display='flex' alignItems='center' justifyContent={'space-between'} padding={12}>
        <a href="#"><Image src={"logo.png"} w={16} cursor="pointer" /></a>
        <Box fontWeight={800} fontSize={20}>
          <Text cursor={'pointer'}>Catalog</Text>
        </Box>
      </Box>
      <Box w='100vw' h={16} bgColor='#B9A28C' fontSize={24} fontWeight={800} display='flex' alignItems={'center'} color='white'>
        <marquee>Pancake Boy is currently a work in progress</marquee>
      </Box>
      <Center>
        <Box marginTop={16} color="#B9A28C">
          <Heading size='lg' fontFamily={'Roboto Mono, monospace'}>Lead life with a smile.</Heading>
        </Box>
      </Center>
      <Center>
        <Image src={"design1.png"} w={'32vh'} marginTop={12}/>
      </Center>
      <Box pos='fixed' bottom='4' color='white' padding={6}>
        <Icon as={BsInstagram} w={5} h={5} />
      </Box>
    </Box>
  )
}

export default App
