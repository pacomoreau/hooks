import { useState } from "react"
import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { useLogRender } from "hooks"

export const UseState = () => {
  useLogRender("Render UseState")
  const [count, setCount] = useState(0)

  const inc = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const dec = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <>
      <Heading>useState</Heading>
      <Flex justifyContent="center" alignContent="center">
        <Button m={3} fontSize="4xl" onClick={dec}>
          -
        </Button>
        <Text m={3} fontSize="4xl">
          {count}
        </Text>
        <Button m={3} fontSize="4xl" onClick={inc}>
          +
        </Button>
      </Flex>
    </>
  )
}
