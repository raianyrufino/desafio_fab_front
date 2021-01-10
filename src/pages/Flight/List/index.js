import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Table, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import {
  RequestFlights,
  AddDataFlight,
} from '../../../store/modules/flight/actions';
import {
  RequestLocations,
} from '../../../store/modules/location/actions';

const { Content } = Layout;

export default function List() {
  const dispatch = useDispatch();

  const { Column } = Table;

  const [page, setPage] = useState(1);

  const {
    flights,
    last_page,
    current_page,
    per_page,
    total
  } = useSelector(state => state.flight);

  const {
    locations,
  } = useSelector(state => state.location);

  let locale = {
    emptyText: flights
      ? 'Não há voos registrados no sistema.'
      : 'Buscando voos registrados no sistema.',
  };

  function sendDataToReducer(e) {
    if (locations) {
      let origin_location = locations.find(x => x.id == e.origin_id);
      let destiny_location = locations.find(x => x.id == e.destiny_id);
      
      var origin_location_formated = origin_location.city + ' - ' + origin_location.state + ", " + origin_location.country + ", " + origin_location.zip_code;
      var destiny_location_formated = destiny_location.city + ' - ' + destiny_location.state + ", " + destiny_location.country + ", " + destiny_location.zip_code;
    }
    dispatch(AddDataFlight(origin_location_formated, destiny_location_formated, e.date_hour))
  }

  useEffect(() => {
    dispatch(
      RequestFlights(page)
    );
  }, [page]);

  useEffect(() => {
    dispatch(RequestFlights(1));
    dispatch(RequestLocations());
  }, []);
  
  return (
    <Layout className="layout">
        <Content>
            <Table
                dataSource={flights}
                pagination={{
                  current: current_page,
                  onChange: setPage,
                  total: total,
                  defaultPageSize: 10,
                  showSizeChanger: false,
                }}
                locale={locale}
            >
                <Column title="Código de Voo" dataIndex="code" key="code" />
                <Column
                title="Origem"
                key="origin"
                render={i => {
                  if (locations) {
                    let origin_location = locations && locations.find(x => x.id == i.origin_id);

                    return origin_location.city + ' - ' + origin_location.state + ', ' + origin_location.country + ', ' + origin_location.zip_code;
                  }
                }}
                />
                <Column
                title="Destino"
                key="destiny"
                render={i => {
                  if (locations) {
                    let destiny_location = locations.find(x => x.id == i.destiny_id);

                    return destiny_location.city + ' - ' + destiny_location.state + ', ' + destiny_location.country + ', ' + destiny_location.zip_code;
                  }
                }}
                />
                <Column
                title="Data / Horário"
                dataIndex="date_hour"
                key="date_hour"
                render={value => {
                    let data = new Date(value);
                    let dia = data.getDate();
                    let mes = (data.getMonth() + 1).toString().padStart(2, '0');
                    let ano = data.getFullYear();
                    let hora = data.getHours();
                    let minutos = data
                    .getMinutes()
                    .toString()
                    .padStart(2, '0');
                    return `${dia}/${mes}/${ano} ${hora}:${minutos}`;
                }}
                
                />
                <Column 
                title="Situação" 
                dataIndex="date_hour" 
                key="situation" 
                render={value => {
                  if (value < new Date().toLocaleString()) {
                    return ('a');
                  }
                  return 'b';
                }}
                />
                <Column 
                title=""
                key="action" 
                render={(i) => {
                  return (
                    <Link to = { `/form-flight/${i.id}` }>
                    <Button onClick={() => sendDataToReducer(i)} type="primary" danger>
                      Editar <EditOutlined />
                    </Button>
                    </Link>
                  );
                }}
                />
                  {/* var now = new Date().toLocaleString(); */}
        
            </Table>
        </Content>
    </Layout>
  );
}
