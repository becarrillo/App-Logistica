import React from 'react';
import Login from '../Login/Login';
import Navbar from './Navbar';
import './Home.css';


class Home extends React.Component {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <div id='home'>
                <Navbar />
                <main className='row-fluid'>
                    <div class="col-sm-12 card pe-3 me-2" id='card'>
                        <div class="card-body container me-5 pb-5">
                            <Login />
                        </div>
                    </div>
                </main>
            </div>
        )
    }
};

export default Home;