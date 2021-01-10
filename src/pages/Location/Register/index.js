import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Form, Input } from 'antd';
import {
    CreateLocation,
} from '../../../store/modules/location/actions';

const Register = () => {
    const dispatch = useDispatch();

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 8 },
    };
    
    const validateMessages = {
        required: 'O campo ${label} é obrigatório!',
    };

    const onFinish = (values) => {
        dispatch(CreateLocation(
            values.item.zip_code.replace(/[^\d]+/g, ''), 
            values.item.country, 
            values.item.city, 
            values.item.state)
        );
    };

    return (
        <div style={{textAlign: 'center'}}>
        <h2 style={{textAlign: 'center', marginTop: '10px'}}>Registrar Localização</h2>

        <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
        <Form.Item name={['item', 'city']} label="Cidade" rules={[{ required: true }]}>
            <Input style={{width: '500px'}} />
        </Form.Item>
        <Form.Item name={['item', 'state']} label="Estado" rules={[{ required: true }]}>
            <Input style={{width: '500px'}} />
        </Form.Item>
        <Form.Item name={['item', 'country']} label="País" rules={[{ required: true}]}>
            <Input style={{width: '500px'}} />
        </Form.Item>
        <Form.Item name={['item', 'zip_code']} label="Código Postal" rules={[{ required: true}]}>
            <Input style={{width: '500px'}} />
        </Form.Item>
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