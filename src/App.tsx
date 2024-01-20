import * as React from "react"
import {
  ChakraProvider,
  Box,
  VStack,
  Container,
  Grid,
  Divider,
  IconButton,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/700.css'
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" p="2rem">
      <Grid minH="90vh">
        <VStack spacing={8}>
          <Container>Jenny Hui</Container>
          <Container w='100%' h='100%'>Body</Container>
          <Divider colorScheme="blue" />
          <Container centerContent>
            <VStack>
            <Text>Get in touch</Text>
            <Flex w="100%">
              <IconButton
                aria-label="github"
                colorScheme="blue"
                fontSize='2rem'
                onClick={() => window.open("https://github.com/jennyhuii", "_blank")}
                icon={<FaGithub />}
              />
              <Spacer />
              <IconButton
                aria-label="linkedin"
                colorScheme="blue"
                fontSize='2rem'
                onClick={() => window.open("https://www.linkedin.com/in/jennyhui108/", "_blank")}
                icon={<FaLinkedinIn />}
              />
            </Flex>
            </VStack>
          </Container>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
)
