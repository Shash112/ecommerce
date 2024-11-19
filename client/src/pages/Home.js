import React from 'react'
import CategoryList from '../components/CategoryList'
import BannerProduct from '../components/BannerProduct'
import HorizontalCardProduct from '../components/HorizontalCardProduct'
import VerticalCardProduct from '../components/VerticalCardProduct'

const Home = () => {
  return (
    <div>
      <CategoryList />
      <BannerProduct />

      <HorizontalCardProduct category={"airpodes"} heading={"Top Airpodes"}/>
      <VerticalCardProduct category={"mobiles"} heading={"Mobiles"}/>
      <HorizontalCardProduct category={"watches"} heading={"Popular Watches"}/>
      <VerticalCardProduct category={"mouse"} heading={"Mouse"}/>
      <VerticalCardProduct category={"televisions"} heading={"Televisions"}/>
      <VerticalCardProduct category={"camera"} heading={"Camera"}/>
      <VerticalCardProduct category={"earphones"} heading={"Earphones"}/>
      <VerticalCardProduct category={"speakers"} heading={"Speakers"}/>
      <VerticalCardProduct category={"refrigerator"} heading={"Refrigerator"}/>
      <VerticalCardProduct category={"trimmers"} heading={"Trimmers"}/>
    </div>
  )
}

export default Home