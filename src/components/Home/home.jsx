import React, { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { deposit, logout, setBalance} from '../../store/slice/auth/index.jsx';
// import { logoutUser } from '../../store/slice/userSlice'; // Импортируем действие для выхода из системы
import { Card, Col, Row, Layout, Button, notification } from 'antd';
import pokemonWordImage from '../../assets/pokemon.png';
import secondWordPicture from '../../assets/clicker.png';
import moneyPic from '../../assets/money.png';
import './home.css';
import MyPokemons from './myPokemons/myPokemons';


const headerStyle = {
    textAlign: 'center',
    display: 'flex',
    height: 60,
    paddingInline: 48,
    lineHeight: '64px',
    backgroundColor: 'white',
};

const contentStyle = {
    textAlign: 'center',
    minHeight: 'calc(100vh - 60px)',
    padding: 0,
    color: '#fff',
};


export default function Home() {

    

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const balance = useSelector((state) => state.auth.currentUser?.balance);

    //const pokemons = useSelector((state) => state.users); // Получаем покемонов из состояния
    const pokemons = useSelector((state) => state.auth.currentUser?.pokemons);

    // const pokemons = useSelector((state) => state.auth.user.pokemons ); // Получаем покемонов из состояния


    useEffect(() => {

        const interval = setInterval(() => {
            
            const totalWeight = pokemons.reduce((total, pokemon) => total + pokemon.weight, 0);
           
            // Каждые 5 секунд добавляем к балансу вес всех покемонов
            if (totalWeight > 0) {
                dispatch(deposit(totalWeight));
            }
        }, 5000);

        // Очистка интервала при размонтировании компонента
        return () => clearInterval(interval);
    }, [dispatch, pokemons]);


    const handleDeposit = () => {
        console.log("Depositing 1");
        dispatch(deposit(1));
    };
    const handleLogout = () => {
       // localStorage.clear();
        dispatch(logout()); // Используем действие для выхода из системы
        notification.info({
            message: 'Вы вышли из системы',
        });
        navigate('/auth');
    };

    return (
        <>
            <Layout style={{ width: '100%', margin: 0 }}>
                <Layout.Header style={headerStyle}>
                    <div className="logo">
                        <img src={pokemonWordImage} alt="Pokemon Logo" />
                        <img src={secondWordPicture} alt="Clicker Logo" />
                    </div>
                    <img className='moneyPic' src={moneyPic} alt="Money" />
                    <p>{balance} денег</p>
                    <div>
                    <Button onClick={handleDeposit}>Пополнить на 1</Button>

                       {/* <Button onClick={() => dispatch(deposit(1))}>Пополнить на 1</Button>*/}
                    </div>
                    <Button onClick={handleLogout}>Logout</Button>
                </Layout.Header>
                <Layout.Content style={contentStyle}>
                    <Row gutter={16}>
                        <Col span={8}>
                            <Card>
                                <p>Inventory</p>
                                <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
                                    <Card></Card>
                                    <Card></Card>
                                    <Card></Card>
                                    <Card></Card>

                                </div>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card>
                                <MyPokemons />
                            </Card>
                        </Col>
                       
                    </Row>
                </Layout.Content>
            </Layout>
        </>
    );
}
