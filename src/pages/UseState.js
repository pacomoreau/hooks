import { useState } from "react"
import { Button, Flex, Text } from "@chakra-ui/react"
import { Log } from "components"

export const UseState = () => {
  // 0 est la valeur initiale de count
  const [count, setCount] = useState(0)

  // un state peut contenir n'importe quelle valeur : int, string, array, objet ...
  const [category, setCategory] = useState({ "@id": "/category/123", name: "Category 123", like: false })

  const inc = () => {
    // si on utilise une fonction dans le setCount, le premier paramètre correspond à la valeur courante (nommée prevCount ici)
    setCount((prevCount) => prevCount + 1)

    // quand on veut incrémenter count, il est préférable d'utiliser la version ci-dessus plutôt que celle-ci :
    // setCount(count + 1)
    // car dans certains cas cela pourrait avoir des effets inattendus (ex: faire 2x "setCount(count + 1)" n'augmentera la valeur que de 1)

    // par contre on peut tout à fait faire ça :
    // setCount(123)
  }

  const dec = () => {
    setCount((prevCount) => prevCount - 1)
  }

  const like = () => {
    setCategory((prevCategory) => ({ ...prevCategory, like: !prevCategory.like }))
  }

  // ne pas faire de set state dans le corps de la fonction
  // setCount(1)

  return (
    <Log name="UseState">
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
      <Flex justifyContent="center" alignItems="center">
        {category.name} ({category.like ? "cool" : "meh"})
        <Button m={3} onClick={like}>
          {category.like ? "J'aime pas" : "J'aime"}
        </Button>
      </Flex>
    </Log>
  )
}
