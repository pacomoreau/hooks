import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import {
  ChakraProvider,
  Flex,
  Input,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  theme,
} from "@chakra-ui/react"
import { Log, Menu } from "components"
import {
  CaMarche,
  ClassComponent,
  FunctionComponent,
  Home,
  Memo,
  UseCallback,
  UseEffect,
  UseMemo,
  UseRef,
  UseState,
} from "pages"

const App = () => {
  const [value, setValue] = useState("")
  const [otherValue, setOtherValue] = useState(50)

  return (
    <ChakraProvider theme={theme}>
      <Flex direction="column" textAlign="center" fontSize="xl" minH="100vh" p={5}>
        <Log name="App" clear>
          <Flex justifyContent="space-around" px={5}>
            <Input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Input du composant App"
              w="40%"
            />
            <Slider defaultValue={otherValue} onChange={(val) => setOtherValue(val)} min={0} max={100} w="40%">
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
          </Flex>
          <Flex direction="column" justifyContent="center" h="100%" p={5} flexGrow="1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="class-component" element={<ClassComponent />} />
              <Route path="function-component" element={<FunctionComponent />} />
              <Route path="ca-marche" element={<CaMarche />} />
              <Route path="use-state" element={<UseState />} />
              <Route path="use-ref" element={<UseRef />} />
              <Route path="use-effect" element={<UseEffect parentValue={value} />} />
              <Route path="use-memo" element={<UseMemo />} />
              <Route path="memo" element={<Memo sliderValue={otherValue} />} />
              <Route path="use-callback" element={<UseCallback />} />
            </Routes>
            <Menu />
          </Flex>
        </Log>
      </Flex>
    </ChakraProvider>
  )
}

export default App
