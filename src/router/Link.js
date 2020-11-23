import React from 'react'
export default function Link({to, children}) {
  //Link组件实现hash路由的切换，故只需要通过a标签切换hash值
  return (
    <a href={'#'+to}>
      {children}
    </a>
  )
}
