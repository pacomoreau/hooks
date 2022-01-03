import { useRef } from "react"
import { Button, Flex, Input, Text } from "@chakra-ui/react"
import { Log } from "components"

export const UseRef = () => {
  const count = useRef(0)
  const input = useRef(null)

  const inc = () => {
    // attention, pour accéder à la valeur issue d'un useRef il faut utiliser [nomVariable].current
    // contrairement à useState, la modification de count ne va PAS provoquer de re-render de la fonction
    count.current++
    // pourtant la valeur de count est bien modifée
    console.log(`count: ${count.current}`)
  }

  const dec = () => {
    count.current--
    console.log(`count: ${count.current}`)
  }

  const focus = () => {
    // useRef peut être utilisé pour contenir la référence à un élément HTML (div, table, img, input ...)
    // l'intérêt ici est de ne pas provoquer de re-render inutiles
    // on ne veut pas de re-render dès que l'input est hover, focus, blur, click (...)
    input.current?.focus()
  }

  return (
    <Log name="UseRef">
      <Flex justifyContent="center" alignItems="center">
        <Button m={3} fontSize="4xl" onClick={dec}>
          -
        </Button>
        <Text minW="50px" m={2} fontSize="4xl">
          {count.current}
        </Text>
        <Button m={3} fontSize="4xl" onClick={inc}>
          +
        </Button>
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        <Input ref={input} maxW="300px" onChange={f => f} />
        <Button m={3} onClick={focus}>
          Focus input
        </Button>
      </Flex>
    </Log>
  )
}
