
import React from 'react';
import { Form, Input, Button, notification } from 'antd';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { addPokemon } from '../../store/slice/auth/index.jsx';
import { useGetRandomPokemonQuery } from '../../store/slice/apiSlice.jsx';
import { addUser } from '../../store/slice/auth/index.jsx';

export default function SignUp() {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector(state => state.auth.users);
    const { data: randomPokemon, error } = useGetRandomPokemonQuery();



    const handleRegistration = async (values) => {
        



    // Обновлённый обработчик регистрации

    const { username, password } = values;
    const existingUser = users.find(user => user.username === username);
  
    if (existingUser) {
        notification.error({
            message: 'Ошибка',
            description: 'Пользователь уже существует!',
        });
        return;
    }
  
    if (error) {
        notification.error({
            message: 'Ошибка при загрузке покемона',
            description: error.message,
        });
        return;
    }
  
    const newUser = {
        username,
        password,
        pokemons:[],
        money: 0,
    };
  
   
    if (randomPokemon) {
        const newPokemon = {
            id: randomPokemon.id,
           // id: Math.floor(Math.random() * 1000),
            name: randomPokemon.name,
            sprite: randomPokemon.sprites.front_default,
            weight: randomPokemon.weight,
        };
  
        newUser.pokemons.push(newPokemon);
       
        
     }
  

    notification.success({
        message: 'Регистрация успешна!',
        description: 'Вы успешно зарегистрированы!',
    });
    dispatch(addUser(newUser));  
     //  dispatch(addPokemon(newUser));  
    form.resetFields();
    navigate('/home');
  };



    return (
        <Form form={form} layout="vertical" onFinish={handleRegistration}>
            <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Введите имя пользователя!' }]}>
                <Input />
            </Form.Item>
            <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Введите пароль!' }]}>
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 4, span: 10 }}>
                <Button type="primary" htmlType="submit">Sign Up</Button>
            </Form.Item>
        </Form>
    );
}


