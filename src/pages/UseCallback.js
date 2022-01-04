import { useCallback, useEffect, useState } from "react"
import { Button, Flex, Text } from "@chakra-ui/react"
import { Log } from "components"

export const UseCallback = () => {
  const [count, setCount] = useState(0)
  const [category, setCategory] = useState({ "@id": "/category/123", name: "Category 123", like: false })

  const inc = () => setCount((prevCount) => prevCount + 1)
  const dec = () => setCount((prevCount) => prevCount - 1)
  const like = () => setCategory((prevCategory) => ({ ...prevCategory, like: !prevCategory.like }))

  const foo = (min) => Math.floor(Math.random() * (min + count))

  // en déclarant foo via un useCallback, la fonction ne sera pas redéfinie à chaque render mais seulement si count change
  // useCallback ressemble à useMemo, la différence étant que useMemo retourne une valeur, useCallback retourne toute la fonction 
  // avec ses éventuels paramètres (ici : min)
  //const foo = useCallback((min) => Math.floor(Math.random() * (min + count)), [count])

  useEffect(() => {
    // pour éviter l'utilisation de useCallback et au vu de l'exemple simpliste de la fonction foo
    // on pourrait définir la fonction foo ici ou alors la sortir du composant (dans un helper par exemple) en ajoutant le paramètre count
    console.log("Résultat : " + foo(10))
  }, [foo])

  return (
    <Log name="UseCallback">
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
