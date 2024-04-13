import {Text, Touchable} from '@/components'
import {Images, colors, fonts, getColorOpacity, metrics, responsiveFont, responsiveHeight} from '@/themes'
import React from 'react'
import {Image, StyleSheet, View} from 'react-native'
import FastImage from 'react-native-fast-image'

interface Props {
  onPress?: () => void
}

const PostItem: React.FC<Props> = ({onPress}) => (
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
        <Text style={styles.footerText}>Người đăng: Nguyễn Như Hải</Text>
        <Text style={[styles.footerText, styles.textAlignRight]}>Thứ 3, 29/03/2023</Text>
      </View>
    </View>
    <View style={styles.bgBook}>
      <Image source={Images.IC_BOOK_LIGHT} style={styles.iconBook} resizeMode="contain" />
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
    marginHorizontal: metrics.medium,
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
  textAlignRight: {
    textAlign: 'right',
    marginTop: responsiveHeight(1),
  },
  bgBook: {
    position: 'absolute',
    top: responsiveHeight(2),
    right: responsiveHeight(5),
    backgroundColor: '#73488D',
    width: responsiveHeight(25),
    height: responsiveHeight(25),
    borderRadius: responsiveHeight(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconBook: {
    width: responsiveHeight(15),
    height: responsiveHeight(15),
  },
})

export default PostItem
