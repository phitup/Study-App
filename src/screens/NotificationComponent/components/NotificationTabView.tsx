import * as React from 'react'
import {TabView} from 'react-native-tab-view'
import AllNotification from './AllNotification'
import IndividualNotification from './IndividualNotification'
import CommunityNotification from './CommunityNotification'
import {PaperTabBar} from '@/components'

type Route = {
  key: string
  title: string
}

enum TAB {
  all = 0,
  individual = 1,
  commnuity = 2,
}

const NotificationTabView: React.FC = () => {
  const [index, setIndex] = React.useState<number>(TAB.all)

  const [routes] = React.useState([
    {key: 'first', title: 'Tất Cả'},
    {key: 'second', title: 'Cá Nhân'},
    {key: 'third', title: 'Cộng Đồng'},
  ])

  const renderScene = ({route}: {route: Route}) => {
    switch (route.key) {
      case 'first':
        return <AllNotification />
      case 'second':
        return <IndividualNotification />
      case 'third':
        return <CommunityNotification />
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

export default NotificationTabView
