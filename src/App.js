import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import { ChakraProvider, Flex, Input, theme } from "@chakra-ui/react"
import { Log, Menu } from "components"
import { ClassComponent, FunctionComponent, Home, UseState } from "pages"

const App = () => {
  const [value, setValue] = useState("")

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" textAlign="center" fontSize="xl" minH="100vh" p={5}>
        <Log name="App">
          <Flex px={5}>
            <Input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Input du composant App" />
          </Flex>
          <Flex direction="column" justifyContent="center" h="100%" p={5} flexGrow="1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="class-component" element={<ClassComponent />} />
              <Route path="function-component" element={<FunctionComponent />} />
              <Route path="use-state" element={<UseState />} />
            </Routes>

            <Menu />
          </Flex>
        </Log>
      </Flex>
    </ChakraProvider>
  )
}

export default App
