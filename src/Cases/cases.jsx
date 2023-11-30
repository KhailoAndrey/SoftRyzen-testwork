import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Linee } from 'utils/line.styled';
import {
  Arrow,
  CasesHeadBox,
  CasesTitle,
  LineVert,
  SwipeBtnLeft,
  SwipeBtnRight,
  SwiperButtons,
  SwiperImg,
  SwiperInfo,
  SwiperInfoBox,
  SwiperItem,
  SwiperItemBtnLink,
  SwiperItemDate,
  SwiperItemText,
  SwiperItemTitle,
  SwiperNumberSlide,
  SwiperTitleBox,
  Wrapper,
} from './cases.styled';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const Cases = () => {
  return (
    <>
      <Wrapper>
        <CasesHeadBox>
          <CasesTitle>Successful cases of our company</CasesTitle>
          <LineVert />
          <SwiperButtons>
            <SwiperNumberSlide>01/05</SwiperNumberSlide>
            <SwipeBtnLeft>
              <Arrow />
            </SwipeBtnLeft>
            <SwipeBtnRight>
              <Arrow rotateRight />
            </SwipeBtnRight>
          </SwiperButtons>
        </CasesHeadBox>

        <SwiperItem>
          <SwiperImg />
          <SwiperInfo>
            <SwiperTitleBox>
              <SwiperItemTitle>
                Lviv Region, Radekhiv town Private Enterprise “ZAKHIDNYI BUH”
              </SwiperItemTitle>
              <SwiperItemBtnLink>
                <Arrow rotateUpLeft scale={0.77} />
              </SwiperItemBtnLink>
            </SwiperTitleBox>
            <Linee />
            <SwiperInfoBox>
              <SwiperItemText>
                Wind Power for auto field irrigation
              </SwiperItemText>
              <SwiperItemDate>July 2023</SwiperItemDate>
            </SwiperInfoBox>
          </SwiperInfo>
        </SwiperItem>
      </Wrapper>
    </>
  );
};

export default Cases;
