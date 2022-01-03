import { useEffect, useState } from "react"
import { Button, Flex, Text } from "@chakra-ui/react"
import { Log } from "components"

// Cette fois-ci on récupère une props "parentValue" du composant parent
export const UseEffect = ({ parentValue = "" }) => {
  const [count, setCount] = useState(0)

  const inc = () => setCount((prevCount) => prevCount + 1)
  const dec = () => setCount((prevCount) => prevCount - 1)

  useEffect(() => {
    console.log("Dépendances vides : je vais m'exécute qu'une seule fois")
  }, [])

  useEffect(() => {
    console.log("Dépendances absentes : je vais m'exécuter à chaque render")
  })

  useEffect(() => {
    // on rentrera toujours au moins une fois dans le useEffect
    console.log("Dépendance sur parentValue : je vais m'exécuter à chaque fois que parentValue change")
  }, [parentValue])

  useEffect(() => {
    // useEffect peut dépendre de plusieurs variables (venant des props, du state ou d'ailleurs)
    // dans la plupart des cas on va retrouver en dépendances les variables/fonctions utilisées à l'intérieur du useEffect
    if (count > 10 || count < -10) {
      setCount(0)
    }
  }, [count, setCount])

  useEffect(() => {
    const alertMe = () => alert("Clic du bouton droit")

    document.addEventListener("contextmenu", alertMe)

    // on peut retourner une fonction de "nettoyage" dans un useEffect
    // la fonction ne sera executée qu'une fois, au dismount du composant
    // cela peut être utile pour supprimer une souscription ou stopper l'exécution d'une requête par exemple
    return () => {
      document.removeEventListener("contextmenu", alertMe)
    }
  }, []) // liste de dépendances vides = le addEventListener n'aura lieu qu'une seule fois

  return (
    <Log name="UseEffect">
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
    </Log>
  )
}
