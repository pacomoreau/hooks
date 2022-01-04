import { Component } from "react"
import { Heading, Text, VStack } from "@chakra-ui/react"
import { Log } from "components"

export class ClassComponent extends Component {
  constructor(props) {
    super(props)

    console.log("constructor")

    this.state = { foo: "bar", count: 0 }
  }

  componentDidMount() {
    // appelé juste après que le composant soit monté
    console.log("componentDidMount")
  }

  componentWillUnmount() {
    // appelé avant la destruction du composant
    console.log("componentWillUnmount")
  }

  componentDidUpdate(prevProps, prevState) {
    // appelé après une modification des props ou du state
  }

  // autres méthodes du cycle de vie :
  // shouldComponentUpdate
  // getDerivedStateFromProps
  // getSnapshotBeforeUpdate
  // componentDidCatch

  render() {
    // je peux recevoir des   props du composant parent
    const { prop1, prop2 } = this.props

    return (
      <Log name="ClassComponent">
        <VStack>
          <Heading>Je suis un composant classe !</Heading>
          <Text>J'ai un constructeur, des méthodes de cycle de vie et la possibilité d'avoir un state.</Text>
          <Text>"render" = exécution de la méthode render()</Text>
          <Text textDecoration="underline">Je ne peux pas utiliser de hooks.</Text>
        </VStack>
      </Log>
    )
  }
}
