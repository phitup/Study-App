import {Text, Touchable} from '@/components'
import {colors, fonts, getColorOpacity, metrics, responsiveFont, responsiveHeight} from '@/themes'
import React from 'react'
import {StyleSheet, View} from 'react-native'
import FastImage from 'react-native-fast-image'

interface Props {
  onPress?: () => void
}

const GroupItem: React.FC<Props> = ({onPress}) => (
  <Touchable style={styles.content} onPress={onPress}>
    <FastImage
      source={{uri: 'https://toanhocbactrungnam.vn/uploads/news/2022_10/10gk1.jpg'}}
      style={styles.image}
      resizeMode="cover"
    />
    <View style={styles.info}>
      <View style={styles.flex1}>
        <Text style={styles.title}>English Daily</Text>
        <Text style={styles.subTitle} numberOfLines={2}>
          Học tiếng Anh hàng ngày với chúng tôi
        </Text>
      </View>
      <View>
        <Text style={styles.footerText}>Thành viên: 30</Text>
        <Text style={styles.footerText}>Số bài đăng: 100+</Text>
      </View>
    </View>
  </Touchable>
)

const styles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    padding: responsiveHeight(10),
    borderWidth: 1,
    borderColor: getColorOpacity(colors.black, 0.25),
    borderRadius: responsiveHeight(6),
    marginTop: metrics.xs,
  },
  info: {
    flex: 1,
    marginLeft: metrics.xxs,
    justifyContent: 'space-between',
  },
  image: {
    width: responsiveHeight(108),
    height: responsiveHeight(74),
    borderRadius: responsiveHeight(8),
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: responsiveFont(14),
    color: colors.black,
  },
  subTitle: {
    fontFamily: fonts.regular,
    fontSize: responsiveFont(10),
    color: getColorOpacity(colors.black, 0.5),
    marginTop: responsiveHeight(4),
  },
  footerText: {
    fontFamily: fonts.bold,
    fontSize: responsiveFont(10),
    color: '#2874BA',
  },
})

export default GroupItem
