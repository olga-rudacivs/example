import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Outlet, useLocation } from 'react-router-dom';
import { Tabs, Card } from 'antd';
import pokemonWordImage from '../../assets/pokemon.png';
import secondWordPicture from '../../assets/clicker.png';
import SignIn from '../signIn/signIn';
import SignUp from '../signUp/signUp';


const { TabPane } = Tabs; // Получаем доступ к TabPane!!!!! ВОПРОС(зачем это делать? я скопировала код в ант дизайн)

const CardR = () => {
  const currentUrl = useLocation().pathname; 
  const [activeTabKey1, setActiveTabKey1] = useState(currentUrl);//сделать
  

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  return (
  
      <>
        <img src={pokemonWordImage} alt="pokemon" />
        <img src={secondWordPicture} alt="clicker" />
        <Card style={{ width: '100%' }}>
          <Tabs activeKey={activeTabKey1} onChange={onTab1Change}>
            <TabPane tab={<Link to="/auth/signIn">sign in</Link>} key="/auth/signIn">
              {/* Содержимое для Tab 1 */}
              <div>
                <Outlet />
              </div>
            </TabPane>
            <TabPane tab={<Link to="/auth/signUp">sign up</Link>} key="/auth/signUp">
              {/* Содержимое для Tab 2 */}
              <div>
                <Outlet />
                
              </div>
            </TabPane>
          </Tabs>
        </Card>
    
        
        
      </>
 
  );
};

export default CardR;


