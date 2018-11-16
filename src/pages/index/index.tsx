import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'

import SDBody from '../../comps/sd-body'

import './index.less'

export default class Index extends Component {

  config: Config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <SDBody loading>
        <View>内容部分</View>
      </SDBody>
    )
  }
}

