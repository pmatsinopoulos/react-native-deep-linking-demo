import React from "react"
import { Text } from "react-native"

const Article = props => {
  const { id } = props.navigation.state.params
  return <Text>Hello from Article {id}</Text>
}

Article.navigationOptions = {
  title: "Article"
}

export default Article
