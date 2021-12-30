import React from "react"
import { Route, Routes } from "react-router-dom"
import { ChakraProvider, Flex, HStack, theme } from "@chakra-ui/react"
import { ColorModeSwitcher, Link } from "components"
import { ClassComponent, FunctionComponent, Home, UseState } from "pages"

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" textAlign="center" fontSize="xl" minH="100vh" p={5}>
        <Flex justifyContent="space-between" w="100%">
          <HStack spacing={8}>
            <Link to="/" fontSize="xl">
              Home
            </Link>
            <Link to="/class-component" fontSize="xl">
              ClassComponent
            </Link>
            <Link to="/function-component" fontSize="xl">
              FunctionComponent
            </Link>
            <Link to="/use-state" fontSize="xl">
              useState
            </Link>
          </HStack>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
        <Flex direction="column" justifyContent="center" h="100%" p={5} flexGrow="1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="class-component" element={<ClassComponent />} />
            <Route path="function-component" element={<FunctionComponent />} />
            <Route path="use-state" element={<UseState />} />
          </Routes>
        </Flex>
      </Flex>
    </ChakraProvider>
  )
}

export default App
