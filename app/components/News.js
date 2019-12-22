import React from 'react';
import Article from './Article';
import PropTypes from 'prop-types';


export default class extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired
    }

    renderNews = () => {
        const { data } = this.props;
        let newsTemplate = null;
        if (data.length) {
            newsTemplate = data.map ((item) => <Article key={item.id} data={item}/>);
        } else {
            newsTemplate = <p className="mt-3">К сожалению новостей нет</p>
        }
        return newsTemplate;
    }

    render() {
        const { data } = this.props;
        return (
            <>            
                {this.renderNews()}                
                {
                    data.length
                        ? <h5 className="mt-3">
                            Всего новостей: {data.length}
                        </h5>
                        : null
                }
            </>
        );
    }
}