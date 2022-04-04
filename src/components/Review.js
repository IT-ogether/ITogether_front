const Review = ({ site, title, url }) => {
  const siteLogos = [
    {
      site: 'naver',
      logo: '../images/logo_naver'
    },
    {
      site: 'tistory',
      logo: '../images/logo_naver'
    }
  ];
  return (
    <div className="Review">
      <div>
        <img
          className="Review__img"
          alt="ReviewSiteLogo"
          src="/images/logo_naver.png"
        />
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
