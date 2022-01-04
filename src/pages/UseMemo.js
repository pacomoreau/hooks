import { useEffect, useMemo, useState } from "react"
import { Button, Flex, Text } from "@chakra-ui/react"
import { Log } from "components"

const heavyCompute = (count, milliseconds = 600) => {
  console.log(`heavyCompute (${count})`)
  const date = Date.now()
  let currentDate = null
  do {
    currentDate = Date.now()
  } while (currentDate - date < milliseconds)

  return count * count
}

export const UseMemo = () => {
  const [count, setCount] = useState(0)
  const square = heavyCompute(count)

  // pour des calculs un peu long (retravailler des gros objets/collections par exemple)
  // on peut utiliser useMemo qui va "mémoriser" un résultat
  // le calcul ne se refera PAS à chaque render, mais seulement si les variables des dépendances changent
  //const square = useMemo(() => heavyCompute(count), [count])

  // attention : il est recommandé d'utiliser useMemo avec précaution,
  // il ne faut pas s'en servir dans le seul but de stocker le résultat d'une addition ou de la concaténation de 2/3 chaînes de texte

  const category = { "@id": "/category/123", name: "Category 123", like: false }
  // pour éviter le problème de comparaison par référence du useEffect, on peut utiliser useMemo (pour éviter que la référence ne change)
  //const category = useMemo(() => ({ "@id": "/category/123", name: "Category 123", like: false }), [])

  useEffect(() => {
    console.log("category a changé !")
    // quand category est comparée, la comparaison se fait par référence ! car category est un objet
    // si category était un Number, String ou Boolean la comparaison se ferait par valeur
    // category est redéfinie à chaque render, donc le useEffect va s'exécuter à chaque render (car la référence de category a changé)
  }, [category])

  // exemple de warning si category n'est pas dans un useMemo :
  // The 'category' object makes the dependencies of useEffect Hook (at line 37) change on every render.
  // Move it inside the useEffect callback. Alternatively, wrap the initialization of 'category' in its own useMemo() Hook

  const inc = () => setCount((prevCount) => prevCount + 1)
  const dec = () => setCount((prevCount) => prevCount - 1)

  return (
    <Log name="UseMemo" desc="Plus subtil :)">
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
        <Text>Calcul "très" compliqué = {square}</Text>
      </Flex>
    </Log>
  )
}
