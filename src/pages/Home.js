import { Text, VStack } from "@chakra-ui/react"
import { Log } from "components"

export const Home = () => {
  return (
    <Log name="Home">
      <VStack>
        <Text fontSize="2xl">React Hooks !</Text>
        <Text>App : composant parent de toutes les pages, il contient 1 input et 1 slider</Text>
        <Text>Dans App comme dans toutes les pages, un composant "Log" va faire un console.log pour chaque render</Text>
      </VStack>
    </Log>
  )
}
