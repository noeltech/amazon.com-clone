import React from "react";
import styled from "styled-components";

import HeroWidget from "./component/HeroWidget";
import GamingAccessoriesCard from "./component/GamingAccessoriesCard";
import ShopByCategory from "./component/ShopByCategory";
import Dresses from "./component/Dresses";
import AdsCard from "./component/AdsCard";
import ElectronicCard from "./component/ElectronicCard";
import HealthAndPersonalCareCard from "./component/HealthAndPersonalCareCard";
import TopDealCard from "./component/TopDealCard";
import ComputerAccessoriesCard from "./component/ComputerAccessoriesCard";
import FrequentlyRepurchasedCard from "./component/FrequentlyRepurchasedCard";

function Home() {
  React.useEffect(() => {
    console.log("Your HOme");
  }, []);

  return (
    <HomePageContainer>
      <HeroWidget></HeroWidget>
      <GridCardsContainer>
        <ContentWrapper>
          <GamingAccessoriesCard />
          <ShopByCategory />
          <Dresses />
          <AdsCard />
          <ElectronicCard />
          <HealthAndPersonalCareCard />
          <TopDealCard />
          <ComputerAccessoriesCard />
        </ContentWrapper>
        <CarouselWrapper>
          <FrequentlyRepurchasedCard />
        </CarouselWrapper>
      </GridCardsContainer>
    </HomePageContainer>
  );
}

export default Home;

const HomePageContainer = styled.main`
  min-width: 1000px;
  width: 100%;
  flex: 1;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  background-color: #eaeded;
`;

const GridCardsContainer = styled.section`
  width: 100%;
  z-index: 10;
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1400px;
  min-width: 1000px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem 1rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  padding: 0 20px;
  margin-inline: auto;
`;

const CarouselWrapper = styled.div`
  //TEMP
  margin: 1rem 0;
  box-sizing: border-box;
  width: 100%;
  max-width: 1400px;
  min-width: 1000px;

  padding: 0 20px;
  margin-inline: auto;
`;
