import { Flex, HStack } from "@chakra-ui/react"
import { ColorModeSwitcher, Link } from "components"

export const Menu = () => (
  <Flex justifyContent="space-between" w="100%" mt={4}>
    <HStack spacing={8}>
      <Link to="/" fontSize="xl">
        home
      </Link>
      <Link to="/class-component" fontSize="xl">
        class
      </Link>
      <Link to="/function-component" fontSize="xl">
        function
      </Link>
      <Link to="/use-state" fontSize="xl">
        useState
      </Link>
      <Link to="/use-ref" fontSize="xl">
        useRef
      </Link>
      <Link to="/use-effect" fontSize="xl">
        useEffect
      </Link>
      <Link to="/use-memo" fontSize="xl">
        useMemo
      </Link>
    </HStack>
    <ColorModeSwitcher justifySelf="flex-end" />
  </Flex>
)
