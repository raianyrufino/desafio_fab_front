import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

const NavBar = () => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState('');

  let location = useLocation();

  const rota = location.pathname;

  useEffect(() => {
    if (rota === '/') {
      setSelected('1');
    } else if (rota === '/locations') {
      setSelected('2');
    } else if (rota === '/form-flight') {
      setSelected('3');
    } else if (rota === '/form-location') {
      setSelected('4');
    } 
  });

  return (
    <Header>
      <Menu theme="dark" mode="horizontal" selectedKeys={selected}>
        <Menu.Item key="1">
          {' '}
          <Link to="/" /> Visualizar Voos
        </Menu.Item>
        <Menu.Item key="2">
          {' '}
          <Link to="/locations" /> Visualizar Localizações
        </Menu.Item>
        <Menu.Item key="3">
          {' '}
          <Link to="/form-flight" /> Registrar Voos
        </Menu.Item>
        <Menu.Item key="4">
          {' '}
          <Link to="/form-location" /> Registrar Localizações
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default NavBar;
