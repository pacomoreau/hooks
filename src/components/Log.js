import { Flex, Heading } from "@chakra-ui/react"
import { useLogRender } from "hooks"

export const Log = ({ name = "Component", children }) => {
  useLogRender(`Render ${name}`)

  return (
    <Flex direction="column" border="1px" flexGrow="1">
      <Heading mb={4} p={2} fontSize="3xl" borderBottom="1px">
        {name}
      </Heading>
      <Flex direction="column" justifyContent="center" flexGrow="1">
        {children}
      </Flex>
    </Flex>
  )
}
