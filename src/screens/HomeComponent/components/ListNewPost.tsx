import {Text} from '@/components'
import {colors, fonts, getColorOpacity, metrics, responsiveFont, responsiveHeight} from '@/themes'
import React from 'react'
import {StyleSheet, View} from 'react-native'
import FastImage from 'react-native-fast-image'

const ListNewPost: React.FC = () => (
  <View style={styles.container}>
    <View style={styles.top}>
      <Text style={styles.title}>Bài Mới Đăng</Text>
      <Text style={styles.subTitle}>Xem thêm</Text>
    </View>
    <View style={styles.contentItem}>
      <View style={styles.row}>
        <FastImage
          source={{uri: 'https://toanhocbactrungnam.vn/uploads/news/2022_10/10gk1.jpg'}}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.itemInfo}>
          <Text style={styles.name}>Kiểm tra giữa kì Toán 10</Text>
          <Text style={styles.description} numberOfLines={3}>
            Bài kiểm tra giữa kì toán 10 biên soạn bở Bài kiểm tra giữa kì toán 10 biên soạn bở Bài kiểm tra
            giữa kì toán 10 biên soạn bở
          </Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Thứ 3, 29/03/2023</Text>
        <Text style={[styles.footerText, styles.blueText]}>Lượt xem: 9999+</Text>
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: {
    marginTop: metrics.medium,
  },
  row: {
    flexDirection: 'row',
  },
  top: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: fonts.bold,
    fontSize: responsiveFont(20),
    color: colors.black,
  },
  subTitle: {
    fontFamily: fonts.bold,
    fontSize: responsiveFont(12),
    color: '#038C00',
    marginLeft: metrics.tiny,
  },
  contentItem: {
    paddingHorizontal: responsiveHeight(10),
    paddingTop: responsiveHeight(10),
    paddingBottom: responsiveHeight(5),
    borderWidth: 1,
    marginTop: responsiveHeight(5),
    borderColor: getColorOpacity(colors.black, 0.25),
    borderRadius: responsiveHeight(6),
  },
  itemInfo: {
    marginLeft: responsiveHeight(10),
    flex: 1,
  },
  image: {
    width: responsiveHeight(108),
    height: responsiveHeight(74),
    borderRadius: responsiveHeight(8),
  },
  name: {
    fontFamily: fonts.bold,
    fontSize: responsiveFont(14),
    color: colors.black,
  },
  description: {
    fontFamily: fonts.regular,
    fontSize: responsiveFont(12),
    marginTop: responsiveHeight(5),
    color: getColorOpacity(colors.black, 0.5),
  },
  footer: {
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  footerText: {
    fontFamily: fonts.bold,
    fontSize: responsiveFont(10),
    color: colors.black,
  },
  blueText: {
    color: '#2B5BA6',
    marginLeft: metrics.xs,
  },
})

export default ListNewPost
