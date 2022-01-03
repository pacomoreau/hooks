import { useState } from "react"
import { Button, Flex, Text } from "@chakra-ui/react"
import { Log } from "components"

export const UseState = () => {
  // 0 est la valeur initiale de count
  // il est possible d'utiliser une fonction pour set la valeur par défaut uniquement sur le render initial
  // on pourrait remplacer "0" par "() => 0" par exemple
  const [count, setCount] = useState(0) 

  // ne pas faire de set state dans le corps de la fonction
  // setCount(1)

  const inc = () => {
    setCount((prevCount) => prevCount + 1)
  }

  const dec = () => {
    setCount((prevCount) => prevCount - 1)
  }

  return (
    <Log name="UseState">
      <Flex justifyContent="center" alignContent="center">
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
