import { Button, Flex, Heading, Text } from "@chakra-ui/react"
import { useLogRender } from "hooks"

export const Log = ({ name = "Component", desc = null, clear = false, children }) => {
  useLogRender(`Render ${name}`)

  return (
    <Flex direction="column" border="1px" flexGrow="1">
      <Heading mb={4} p={2} fontSize="3xl" borderBottom="1px">
        {name}
        {desc && <Text fontSize="xl">{desc}</Text>}
        {clear && (
          <Button mx={5} onClick={() => console.clear()}>
            Clear
          </Button>
        )}
      </Heading>
      <Flex direction="column" justifyContent="center" flexGrow="1" px={5}>
        {children}
      </Flex>
    </Flex>
  )
}
