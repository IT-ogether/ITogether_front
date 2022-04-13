import HomeTitle from './HomeTitle';
import { FullPage, Slide } from 'react-full-page';
import Footer from './Footer';
import Popularity from './Popularity';
import Introduce from './Introduce';

const HomeScrolls = () => {
  return (
    <div>
      <FullPage control controlProps={{ className: 'slide-navigation' }}>
        <Slide>
          <div className="Section1">
            <HomeTitle />
          </div>
        </Slide>
        <Slide>
          <div className="Section2">
            <div>
              <img
                className="Section2_Img"
                src="../images/Section2_Img.png"
              ></img>
            </div>
            <div className="Section2_Text">
              인스타그램을 팔로우하시고
              <br />더 많은 정보를 얻어가세요!
              <br /> <br />
              인스타그램에 "it_ogether"
              <br />
              검색해보세요
            </div>
          </div>
        </Slide>
        <Slide>
          <div className="Section3">
            <p className="Section3_Title">이런 정보는 어떤가요?</p>
            <Popularity />
          </div>
        </Slide>
        <Slide>
          <div className="Section4">
            <div className="Section4_Text">
              <p>Mail : bogo1357@hanmail.net</p>
              <Footer className="Section4_Footer" />
            </div>
          </div>
        </Slide>
      </FullPage>
    </div>
  );
};

export default HomeScrolls;
