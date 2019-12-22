import React from 'react';
import Add from './Add';
import News from './News';
import '../styles/bootstrap.css';


export default class extends React.Component {
    state = { news: [] }

    handleAddNews = (data) => {        
        const nextNews = [data, ...this.state.news];
        this.setState({ news: nextNews });
    }

    render () {
        return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                <h4 className="m-3">Добавить новость</h4>    
                <Add onAddNews={this.handleAddNews}/>
                <h4 className="m-3">Новости</h4>
                <News data={this.state.news}/>
                </div>
            </div>
        </div>
        );
    }
}  