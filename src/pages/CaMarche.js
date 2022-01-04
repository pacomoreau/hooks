import { useState } from "react"
import { Button, Flex, Text } from "@chakra-ui/react"
import { Log } from "components"

export const CaMarche = () => {
  let count = 0

  const inc = () => count++
  const dec = () => count--

  return (
    <Log name="ça marche ?" desc="(spoiler : non)">
      <Flex justifyContent="center" alignItems="center">
        <Button m={3} fontSize="4xl" onClick={dec}>
          -
        </Button>
        <Text minW="50px" m={2} fontSize="4xl">
          {count}
        </Text>
        <Button m={3} fontSize="4xl" onClick={inc}>
          +
        </Button>
      </Flex>
    </Log>
  )
}
