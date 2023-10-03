
import './bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from 'react-router-dom'
import MainRoutes from './MainRoutes';
import Layout from './layout/Layout';
function App() {
    return (
        <div className='container'>
                <MainRoutes/>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    //@ts-ignore
    const Index = ReactDOM.createRoot(document.getElementById("app"));

    Index.render(<App/>)
}

