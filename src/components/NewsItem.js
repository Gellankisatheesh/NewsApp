import React from 'react'

const NewsItem =(props)=> {

    let { title, description, imageUrl, url, author, date, source } = props;
    return (
      <div className='my-3'>
        <div className="card" >
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: '0'
          }
          }>
            <span className='badge rounded-pill bg-danger'>{source} </span>
          </div>
          <img src={!imageUrl ? "https://www.livemint.com/lm-img/img/2023/09/12/600x338/ANI-20230911283-0_1694499623476_1694499637982.jpg" : imageUrl} className="card-img-top" alt="..." />
          <div className='card-body'>
            <h5 className='card-title'>{title} </h5>
          </div>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel='noreferrer' href={url} target=" blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>    
      </div>  
    )
  
}

export default NewsItem
