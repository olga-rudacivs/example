import React from "react";
import { Form, Input, Button, notification } from "antd";
import { useNavigate } from "react-router-dom";
import { login } from "../../store/slice/auth/index.jsx";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useGetRandomPokemonQuery } from "../../store/slice/apiSlice.jsx";

export default function SignIn() {
  const users = useSelector((state) => state.auth.users);
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: randomPokemon, error } = useGetRandomPokemonQuery();

  const handleLogin = async (values) => {
    const { username, password } = values;

    // Проверяем существование пользователя
    const existingUser = users.find((user) => user.username === username);

    // Если пользователь не найден
    if (!existingUser) {
      notification.error({
        message: "Ошибка входа",
        description: "Пользователь не существует!",
      });
      return;
    }

    // Если пароль не совпадает
    if (existingUser.password !== password) {
      notification.error({
        message: "Ошибка входа",
        description: "Неверный пароль!",
      });
      return;
    }

    // Успешный вход

    if (existingUser.pokemons.length === 0) {
      const newPokemon = {
        id: randomPokemon.id,

        name: randomPokemon.name,
        sprite: randomPokemon.sprites.front_default,
        weight: randomPokemon.weight,
      };

      existingUser.pokemons.push(newPokemon);
    }

    console.log(existingUser);

    notification.success({
      message: "Успешный вход",
      description: "Вы успешно вошли в систему!",
    });
    dispatch(login({ username, password }));
    form.resetFields();
    navigate("/home");
  };

  return (
    <Form form={form} layout="vertical" onFinish={handleLogin}>
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Введите имя пользователя!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Введите пароль!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 4, span: 10 }}>
        <Button type="primary" htmlType="submit">
          sign in
        </Button>
      </Form.Item>
    </Form>
  );
}
