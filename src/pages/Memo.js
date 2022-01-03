import { memo } from "react"
import { Flex, Text, VStack } from "@chakra-ui/react"
import { Log } from "components"

// memo va mémoriser le composant cette fois, et va faire en sorte qu'il ne soit re-render que si ses props changent !
// attention, il faut aussi faire attention aux comparaisons par références ou par valeur
// ne pas utiliser memo de manière systèmatique
export const Memo = /*memo(*/ ({ sliderValue }) => {
  return (
    <Log name="Memo">
      <Flex justifyContent="center" alignItems="center">
        <VStack>
          <Text>React.memo (ce n'est pas un hook)</Text>
          <Text>sliderValue: {sliderValue}</Text>
        </VStack>
      </Flex>
    </Log>
  )
} //) // <= memo accepte aussi un autre paramètre qui permet de définir "comment" la comparaison des props se fait (ex: [maFonction(prevProps, nextProps)])
