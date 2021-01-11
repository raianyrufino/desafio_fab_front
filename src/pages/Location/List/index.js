import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Layout, Table} from 'antd';

import {
  RequestLocations,
} from '../../../store/modules/location/actions';

const { Content } = Layout;

export default function List() {
  const dispatch = useDispatch();

  const { Column } = Table;

  const {
    locations,
  } = useSelector(state => state.location);

  let locale = {
    emptyText: locations
      ? 'Não há localizações registradas no sistema.'
      : 'Buscando localizações registradas no sistema.',
  };

  useEffect(() => {
    dispatch(
      RequestLocations()
    );
  }, []);

  useEffect(() => {
    dispatch(RequestLocations());
  }, []);

  return (
    <Layout className="layout">
        <Content>
            <Table
                locale={locale}
                dataSource={locations}  
                pagination={{
                  defaultPageSize: 10,
                  showSizeChanger: false,
                }}  
            >
                <Column 
                  title="Código Postal" 
                  key="zip_code" 
                  render={(i) => {
                    return i.zip_code.substr(0,5)+"-"+i.zip_code.substr(5);
                  }}
                />
                <Column title="País" dataIndex="country" key="country" />
                <Column title="Cidade" dataIndex="city" key="city" />
                <Column title="Estado" dataIndex="state" key="state" />
            </Table>
        </Content>
    </Layout>
  );
}
