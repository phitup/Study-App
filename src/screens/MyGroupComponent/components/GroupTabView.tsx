import * as React from 'react'
import {TabView} from 'react-native-tab-view'
import {PaperTabBar} from '@/components'
import Members from './Members'
import Posts from './Posts'

type Route = {
  key: string
  title: string
}

enum TAB {
  members = 0,
  posts = 1,
}

const GroupTabView: React.FC = () => {
  const [index, setIndex] = React.useState<number>(TAB.members)

  const [routes] = React.useState([
    {key: 'first', title: 'Thành viên'},
    {key: 'second', title: 'Bài đăng'},
  ])

  const renderScene = ({route}: {route: Route}) => {
    switch (route.key) {
      case 'first':
        return <Members />
      case 'second':
        return <Posts />
      default:
        return null
    }
  }

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      swipeEnabled={false}
      lazy
      renderTabBar={sceneProps => <PaperTabBar {...sceneProps} />}
    />
  )
}

export default GroupTabView
