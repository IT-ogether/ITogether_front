const Review = ({ site, title, url }) => {
  const getSrc = (site) => {
    const idx = siteLogos.findIndex((siteLogo) => siteLogo.site === site);
    return siteLogos[idx].logo;
  };

  const siteLogos = [
    {
      site: 'naver',
      logo: '/images/logo_naver.png'
    },
    {
      site: 'tistory',
      logo: '/images/logo_tistory.png'
    },
    {
      site: 'velog',
      logo: '/images/logo_velog.jpeg'
    }
  ];
  return (
    <div className="Review">
      <div>
        <img className="Review__img" alt="ReviewSiteLogo" src={getSrc(site)} />
      </div>
      <div
        className="Review__title"
        onClick={() => {
          window.open(`${url}`, '_blank');
        }}
      >
        {title}
      </div>
    </div>
  );
};
export default Review;
