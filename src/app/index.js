import React from 'react';
import { render } from 'react-dom';
import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
    render() {
        var user = {
            name: 'Roxy',
            hobbies: ['reading', 'music']
        };

        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header />
                    </div>
                </div>
                <p>Test Test</p>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={'suresh'} age={27} user={user}/>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App />, window.document.getElementById('appId'));