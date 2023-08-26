import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
    AppstoreOutlined,
    CalendarOutlined,
    LinkOutlined,
    MailOutlined,
    SettingOutlined,
    HomeFilled
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';

function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}

const items = [
    getItem('Vaults', '1', null,),
    getItem('Navigation One', '2', <HomeFilled />, [getItem('Option 3', '3'),
    getItem('Option 4', '4'),]),
    getItem('Marketing', '3', <MailOutlined />),
    getItem('Sales', '2', <CalendarOutlined />),
    getItem('Manufacturing', 'sub1', <AppstoreOutlined />, [
        getItem('Option 3', '3'),
        getItem('Option 4', '4'),
        getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
    ]),
    getItem('Finance', 'sub2', <SettingOutlined />, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),
    getItem('Human Resource', 'sub2', <SettingOutlined />, [
        getItem('Option 7', '7'),
        getItem('Option 8', '8'),
        getItem('Option 9', '9'),
        getItem('Option 10', '10'),
    ]),
    getItem(
        React.createElement('a', { href: 'https://ant.design', target: '_blank', rel: 'noopener noreferrer' }, 'Ant Design'),
        'link',
        <LinkOutlined />
    ),
];

const Sidebar = () => {
    const [mode, setMode] = useState('inline');
    const [theme, setTheme] = useState('light');

    const changeMode = (value) => {
        setMode(value ? 'vertical' : 'inline');
    };

    const changeTheme = (value) => {
        setTheme(value ? 'dark' : 'light');
    };

    return (
        <div >


            <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={mode}
                theme={theme}
                items={items}
            />
            <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={mode}
                theme={theme}
                items={items}
            />

            <Menu
                style={{ width: 256 }}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode={mode}
                theme={theme}
                items={items}
            />


            <Row className="justify-content-md-left">
                <Col>
                    {/* col 1 */}
                </Col>
                <Col > <Switch onChange={changeMode} /> Change Mode</Col>

                <Col><Switch onChange={changeTheme} /> Change Style</Col>
            </Row>

        </div>

    );
};

export default Sidebar;
