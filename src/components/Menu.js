import { Flex, HStack } from "@chakra-ui/react"
import { ColorModeSwitcher, Link } from "components"

export const Menu = () => (
  <Flex justifyContent="space-between" w="100%" mt={4}>
    <HStack spacing={8}>
      <Link to="/" fontSize="xl">
        Home
      </Link>
      <Link to="/class-component" fontSize="xl">
        Class
      </Link>
      <Link to="/function-component" fontSize="xl">
        Function
      </Link>
      <Link to="/use-state" fontSize="xl">
        useState
      </Link>
      <Link to="/use-ref" fontSize="xl">
        useRef
      </Link>
    </HStack>
    <ColorModeSwitcher justifySelf="flex-end" />
  </Flex>
)
