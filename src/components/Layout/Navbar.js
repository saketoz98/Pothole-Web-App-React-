import React, { Component } from 'react'
import { Layout, Menu, Icon ,Button} from 'antd';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/auth';


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
                <Icon type="home" />
                <span className="nav-text"><NavLink to="/complaints" className="selected">Home</NavLink></span>
                </Menu.Item>
                
                <Menu.Item key="2">
                <Icon type="user" />
                <span className="nav-text"><NavLink to="/register" className="selected">Register</NavLink></span>
                </Menu.Item>

                {!this.props.isAuthenticated ? 

                <Menu.Item key="3">
                <Icon type="user" />
                <span className="nav-text">
                <NavLink to="/" className="selected">Login</NavLink>
                </span>
                </Menu.Item>
                : null}
                
                <Menu.Item key="4">
                <Icon type="user" />
                <span className="nav-text">
                <NavLink to="/" className="selected" onClick={this.props.startLogout}>Logout</NavLink>
                </span>
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

const mapStateToProps = (state)=>({
    isAuthenticated : !!state.auth.uid
});


const mapDispatchToProps=dispatch=>({
    startLogout : ()=>dispatch(actions.startLogout())
});



export default connect(mapStateToProps,mapDispatchToProps)(Navbar);
