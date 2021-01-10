import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button, Form, Select, DatePicker } from 'antd';
import {
  RequestLocations,
} from '../../../store/modules/location/actions';
import {
  CreateFlight,
  UpdateFlight
} from '../../../store/modules/flight/actions';

const Register = () => {
    const dispatch = useDispatch();

    const { Option } = Select;

    const { id } = useParams();

    const {
      locations,
    } = useSelector(state => state.location);

    const {
      origin_location,
      destiny_location,
      date_hour,
    } = useSelector(state => state.flight);

    const [form] = Form.useForm();

    useEffect(() => {
      if (!id) {
        form.resetFields();
      }
    }, [id]);

    useEffect(() => {
      dispatch(RequestLocations());
    }, []);
    
    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };
    
    const validateMessages = {
        required: 'O campo ${label} é obrigatório!',
    };
    
    const config = {
      rules: [{ type: 'object', required: true, message: 'Por favor, selecione a data/horário!' }],
    };

    const onFinish = (values) => {
      var d = values.date_hour._d;
      
      if (id) {
        dispatch(UpdateFlight(id, values.origin, values.destiny, d.toLocaleString()));
      } else {
        dispatch(CreateFlight(values.origin, values.destiny, d.toLocaleString()));
      }
    };

    return (
        <div style={{textAlign: 'center'}}>
        <h2 style={{textAlign: 'center', marginTop: '10px'}}> { id ? 'Atualizar' : 'Registrar' } Voo</h2>

        <Form 
          {...layout} 
          form={form}
          name="nest-messages"  
          onFinish={onFinish} 
          validateMessages={validateMessages}
          initialValues={{
            origin: id ? parseInt(origin_location.id) : '',
            destiny: id ? parseInt(destiny_location.id) : ''
          }}
        >
        <Form.Item name="origin" label="Origem" rules={[{ required: true }]}>
          <Select
            showSearch
            style={{width: '500px'}}
            placeholder="Selecione a Origem"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            allowClear
          >
            {locations &&
              locations.map(item => {
              return (
                <Option value={item.id} key={item.id}>
                  {item.city + ' - ' + item.state + ', ' + item.country + ', ' + item.zip_code}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item name="destiny" label="Destino" rules={[{ required: true }]}>
          <Select
            showSearch
            style={{width: '500px'}}
            placeholder="Selecione o Destino"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            allowClear
          >
            {locations &&
              locations.map(item => {
              return (
                <Option value={item.id} key={item.id}>
                  {item.city + ' - ' + item.state + ', ' + item.country + ', ' + item.zip_code}
                </Option>
              );
            })}
          </Select>
        </Form.Item>
        <Form.Item name="date_hour" label="Data / Horário" {...config}>
          <DatePicker style={{width: '500px'}} showTime format="DD-MM-YYYY HH:mm:ss" />
        </Form.Item>
        { id ? 
          ( <Form.Item name="old_date" label="Data/Horário Registrados">
              { new Date(date_hour).toLocaleString() }
            </Form.Item> 
          ) : ' '
        }  
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
            Submeter
            </Button>
        </Form.Item>
        </Form>
        </div>
    );
};

export default Register;