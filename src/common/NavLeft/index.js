import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Menu } from 'antd';

import { NavLeftWrapper, Logo } from '../style';

const SubMenu = Menu.SubMenu;

class NavLeft extends PureComponent {
    componentDidMount() {
        this.props.showNavlist();
    }

    paintNavList(list){
        return list.map((item) => {
            if(item.children){
                return (
                    <SubMenu key={item.key} title={item.title}>
                        {this.paintNavList(item.children)}
                    </SubMenu>
                )
            }else {
                return (
                    <Menu.Item key={item.key}>{item.title}</Menu.Item>
                )
            }
        });
    }

    render(){
        const list = this.props.navList.toJS();
        return(
            <NavLeftWrapper>
                <Logo>
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Imooc MS</h1>
                </Logo>

                <Menu theme='dark'>
                    { this.paintNavList(list) }
                </Menu>
            </NavLeftWrapper>
        )
    }
}
const mapState = (state) => ({
    navList: state.getIn(['navLeft', 'navList'])
});
const mapDispatch = (dispatch) => ({
    showNavlist(){

    }
});
export default connect(mapState, mapDispatch)(NavLeft);