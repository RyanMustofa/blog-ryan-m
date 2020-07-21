import React from 'react';
import Header from './component/header/header';
import { Route,Switch,BrowserRouter } from 'react-router-dom';
import Technology from './component/article/technology';
import Dashboard from './component/dashboard/dashboard';
import DetailTechnology from './component/article/detail-technology';
import Sekolah from './component/article/sekolah';
import DetailSekolah from './component/article/detail-sekolah';

function App() {
  return (
        <BrowserRouter>
            <Switch>
                <Header>
                    <Route path="/sekolah/:title/" exact component={DetailSekolah}/>
                    <Route path="/sekolah/" exact component={Sekolah}/>
                    <Route path="/article/:title/" exact component={DetailTechnology}/>
                    <Route path="/article/" exact component={Technology} />
                    <Route path="/" exact component={Dashboard} />
                </Header>
                <Route path="/" exact component={Header}/>
            </Switch>
        </BrowserRouter>
  )
}

export default App;
