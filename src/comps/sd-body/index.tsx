import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './index.less'

type SDBodyProps = {
  loading?: boolean,
  tips?: string
}

export default class SDBody extends Component<SDBodyProps, {}> {

  static defaultProps = {
    loading: true,
    tips: '正在加载中...'
  }

  render () {
    const { loading, tips } = this.props;
    const innerElement: Element = loading ? (
      <View className='section-loading'>
        <View className='weui-loading'></View>
        <View>{ tips }</View>
      </View>
    ) : this.props.children
    return (
      <View className='main-container'>
        { innerElement }
      </View>
    )
  }
}
