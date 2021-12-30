import { Component } from "react"
import { Heading, Text, VStack } from "@chakra-ui/react"

export class ClassComponent extends Component {
  constructor(props) {
    super(props)

    this.state = { foo: "bar", count: 0 }
  }

  componentDidMount() {
    // appelé juste après que le composant soit monté
  }

  componentWillUnmount() {
    // appelé avant la destruction du composant
  }

  componentDidUpdate(revProps, prevState) {
    // appelé après une modification des props ou du state
  }

  // autres méthodes du cycle de vie :
  // shouldComponentUpdate
  // getDerivedStateFromProps
  // getSnapshotBeforeUpdate
  // componentDidCatch

  render() {
    // je peux recevoir des props du composant parent
    const { prop1, prop2 } = this.props

    return (
      <VStack>
        <Heading>Je suis un composant classe !</Heading>
        <Text>J'ai un constructeur, des méthodes de cycle de vie et la possibilité d'avoir un state.</Text>
        <Text textDecoration="underline">Je ne peux pas utiliser de hooks.</Text>
      </VStack>
    )
  }
}
