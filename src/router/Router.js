import React, { Component, createContext } from "react";

// 用于共享路由当前hash地址
export const RouterContext = createContext();

export default class Router extends Component {
  state = {
    path: "/",//路由当前hash地址
  };

  // 解析hash地址
  getPath() {
    let path = window.location.hash;
    if (path) {
      path = path.replace("#", "");
    } else {
      path = "/";
    }
    this.setState({ path });
  }

  componentDidMount() {
    // 先解析第一次的hash值
    this.getPath();

    // 监听之后hash值的变化
    window.onhashchange = (ev) => {
      console.log('change....');
      this.getPath();
    };
  }

  render() {
    // 使用context共享路由当前hash地址
    return (
      <RouterContext.Provider
        value={{
          path: this.state.path,
        }}
      >
        {this.props.children}
      </RouterContext.Provider>
    );
  }
}
