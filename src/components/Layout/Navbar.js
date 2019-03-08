import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
const {
    Header, Content, Footer, Sider,
  } = Layout;

export class Navbar extends Component {
  render() {
    return (
    <Layout style={{height:"100vh"}}>
        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => { console.log(broken); }}
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
            <Menu.Item key="1">
            <Icon type="user" />
            <span className="nav-text">nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
            <Icon type="video-camera" />
            <span className="nav-text">nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
            <Icon type="upload" />
            <span className="nav-text">nav 3</span>
            </Menu.Item>
            <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">nav 4</span>
            </Menu.Item>
        </Menu>
        </Sider>
        <Layout>
        <Header style={{ background: '#fff', padding: 0 ,textAlign:"center",fontWeight:'bolder'}}>BMC Portal</Header>
        <Content style={{ margin: '24px 16px 0' }}>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {this.props.children}
            </div>
        </Content>
        
        </Layout>
    </Layout>
  
    )
  }
}

export default Navbar
