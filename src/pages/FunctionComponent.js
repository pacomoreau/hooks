import { Heading, ListItem, Text, UnorderedList, VStack } from "@chakra-ui/react"

export const FunctionComponent = ({ prop1, prop2 }) => {
  // possibilité de recevoir des props du composant parent
  return (
    <>
      <VStack mb={10}>
        <Heading>Je suis un composant fonction !</Heading>
        <Text>Je n'ai pas de constructeur ou de méthodes de cycle de vie.</Text>
        <Text textDecoration="underline">Je peux utiliser les hooks.</Text>
      </VStack>
      <VStack maxW="700" marginX="auto">
        <Text fontSize="2xl">Hooks ?</Text>
        <UnorderedList textAlign="left">
          <ListItem>ce sont des fonctions</ListItem>
          <ListItem>ils peuvent être utilisés dans un composant fonction ou dans un hook</ListItem>
          <ListItem>
            ils doivent commencer par "use" : useState, useEffect, useFooBar ... (c'est une convention mais certains
            linter le vérifie)
          </ListItem>
          <ListItem>l'ordre des hooks dans une fonction doit toujours être le même</ListItem>
          <ListItem>cela implique : pas d'appel à un hook dans une condition ou dans une boucle</ListItem>
        </UnorderedList>
      </VStack>
    </>
  )
}
