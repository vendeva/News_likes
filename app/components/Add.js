import React from 'react';
import PropTypes from 'prop-types';

export default class extends React.Component {
    static propTypes = {
        onAddNews: PropTypes.func.isRequired,
    }    

    state = { author: '', text: '', minText: '', id: 0 }
      
    handleChange =(e) => {
        const { id, value } = e.currentTarget;
        this.setState({ [id]: value });
    }

    onBtnClickHandler = (e) => {
        e.preventDefault();
        let { id, text } = this.state;
        this.setState({ id: ++id });          
        const minText = text.substr(0, 5);        
        this.setState({ minText: minText}, () => {
            this.props.onAddNews(this.state);
        }); 
    }

    render () {      
        const { author, text} = this.state;
        return (
            <form>
                <div className="form-group">                   
                    <input 
                        type="text"
                        id = 'author'
                        onChange={this.handleChange}
                        className='form-control'
                        placeholder='Имя автора'
                        value={author}                 
                    />
                </div>
                <div className="form-group">
                    <textarea
                        rows="4"
                        id='text'
                        onChange={this.handleChange}
                        className='form-control'
                        placeholder='Текст новости не менее 5 симоволов'
                        value={text}
                    ></textarea> 
                </div>  

              <button onClick={this.onBtnClickHandler}>Добавить</button>
            </form>
        )

    }

    
} 