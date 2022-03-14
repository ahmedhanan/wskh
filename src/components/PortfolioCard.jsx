import React from 'react';
function PortfolioCard({ data }) {
  const { rendered: title } = data.title;
  const { Link: siteAddress, Image: picture } = data.acf;
  const about = data.acf['About Project'];
  return (
    <div className='card'>
      <div className='card__image'>
        <img src={picture} alt={`${title} Thumbnail`} />
      </div>
      <div className='card__content'>
        <div className='card__btn'>
          <a
            target='_blank'
            href={siteAddress}
            rel='noreferrer'
            className='link'
          >
            Site Link
          </a>
        </div>
        <h4 className='card__title'>{title}</h4>
        <div className='card__text'>
          <p>{about}</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioCard;
