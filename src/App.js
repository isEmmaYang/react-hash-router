import React from 'react'
import Home from './pages/home'
import Setting from './pages/setting'
import {Router, Route, Link} from './router'
export default function App() {
  return (
    <Router>
      <Route path="/home" component={Home}/>
      <Route path="/setting" component={Setting}/>
      <Link to="/home">首页</Link>
      <Link to="/setting">设置</Link>
    </Router>
  )
}
