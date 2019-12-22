import React from 'react';
import PropTypes from 'prop-types';


export default class extends React.Component {
    state = {
        visible: false,
        like: false
    }
    static propTypes = {
        data: PropTypes.shape({
            author: PropTypes.string.isRequired,
            minText: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired
        })
    }

    handleReadMoreClick = (e) => {
        e.preventDefault();
        this.setState ({ visible: !this.state.visible})
    }

    handlePutLike = (e) => {
        e.preventDefault();
        this.setState ({ like: !this.state.like})
    }
    
    render() {
        const { author, minText, text} = this.props.data;
        const { visible, like } = this.state;
        return (     
            <div className = "card mt-4">
                <div class="card-body">
                    <h5 className="card-title">{author}:</h5>                
                    {
                        !visible && <>
                            <p className="card-text">{minText}</p>
                            <a  className='card-link text-dark bg-light border p-1'
                                onClick = {this.handleReadMoreClick}
                                href="#"                            
                            >
                                Подробнее
                            </a>
                        </>
                    }
                    {
                        visible && <>
                            <p className='card-text'>{text}</p>
                            <a className='card-link text-dark bg-light border p-1'
                            onClick = {this.handleReadMoreClick}
                            href="#"                        
                            >
                            Скрыть
                            </a>
                        </>
                    } 
                    <div className='mt-3' style={{color: "#dc4a4a", fontSize: "20px"}}>
                        {
                            !like && <i onClick={this.handlePutLike} className="fa fa-heart-o"></i>
                        }
                                            {
                            like && <i onClick={this.handlePutLike} className="fa fa-heart"></i>
                        }
                    </div>
                </div>
            </div>    
        );
    }
}    