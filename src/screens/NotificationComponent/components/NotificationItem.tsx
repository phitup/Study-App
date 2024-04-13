import {Text} from '@/components'
import {fonts, metrics, responsiveFont, responsiveHeight} from '@/themes'
import React from 'react'
import {StyleSheet, View} from 'react-native'
import FastImage from 'react-native-fast-image'

const NotificationItem = () => (
  <View style={styles.container}>
    <View style={styles.row}>
      <FastImage
        source={{uri: 'https://www.meme-arsenal.com/memes/b9e965b5ea1530e5e48b6c2a4c5bd26c.jpg'}}
        style={styles.avatar}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.info}>
        <Text style={styles.title}>BÀI TẬP TOÁN</Text>
        <Text style={styles.subTitle}>Bài tập toán 27 còn 4 lần hoàn thành. Hoàn thành ngay</Text>
      </View>
    </View>
    <View style={styles.time}>
      <Text style={styles.timeText}>1 phút trước</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: metrics.medium,
    marginHorizontal: metrics.medium,
  },
  info: {
    flex: 1,
    marginLeft: responsiveHeight(10),
  },
  avatar: {
    width: responsiveHeight(46),
    height: responsiveHeight(46),
    borderRadius: responsiveHeight(23),
  },
  time: {
    marginLeft: responsiveHeight(5),
    width: responsiveHeight(50),
    alignItems: 'flex-end',
  },
  title: {
    fontSize: responsiveFont(14),
    fontFamily: fonts.bold,
    color: '#575757',
  },
  subTitle: {
    marginTop: responsiveHeight(5),
    fontSize: responsiveFont(12),
    fontFamily: fonts.regular,
    color: '#575757',
  },
  timeText: {
    fontSize: responsiveFont(12),
    fontFamily: fonts.regular,
    color: '#B4B9C1',
  },
})

export default NotificationItem
