import HomeTitle from './HomeTitle';
import { FullPage, Slide } from 'react-full-page';
import Footer from './Footer';
const HomeScrolls = () => {
  return (
    <div>
      <FullPage control controlProps={{ className: 'slide-navigation' }}>
        <Slide>
          <div className="slide-common section1">
            <HomeTitle />
          </div>
        </Slide>
        <Slide>
          <div className="slide-common section2">section 2</div>
        </Slide>
        <Slide>
          <div className="slide-common section3">
            <Footer />
          </div>
        </Slide>
      </FullPage>
    </div>
  );
};

export default HomeScrolls;
