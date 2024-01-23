import React, { Component } from 'react'

export class NewsItem extends Component {
    
    render() {
        let {title, description, imageUrl, newsUrl, author, date, source} = this.props;
        return (
        <div className='my-3'>
                <div className="card">
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0'}}>
                    <span className='badge rounded-pill bg-dark'>{source}</span>
                    </div>
                    <img src={imageUrl?imageUrl:"https://static.bandainamcoent.eu/high/dark-souls/dark-souls-3/00-page-setup/ds3_game-thumbnail.jpg"} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}  </h5>
                            <p className="card-text">{description}</p>
                            <p className='card-text'><small className='text-muted'>By {author} on {new Date(date).toGMTString()}</small></p>
                            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-success">Read More</a>
                        </div>
                </div>
        </div>
        )
    }
}

export default NewsItem