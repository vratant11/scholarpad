import React, { useEffect,  useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios";
import "./Swiper.css";

// import required modules
import { Pagination, Autoplay, Navigation } from "swiper";

export default function App() {


    const[news, setNews] = useState([]);

    const url = "https://newsapi.org/v2/everything?q=scholarship&from=2022-10-20&sortBy=publishedAt&apiKey=e5b7e6eb46b44ad1b9a65f3ef77b9faf";
    const getNews = () =>{
        axios.get(url)
            .then((res) =>{
                console.log(res.data.articles);
                setNews(res.data.articles);
            })
            .catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        getNews();
    },[])

  return (
    <>
      <Swiper id="swiper1"
        slidesPerView={3}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}

        navigation={true}
        modules={[Autoplay , Navigation]}
        autoplay={{delay:2000}}
        className="mySwiper"
        
      >

{
    news? news.slice(40,50).map((e) => {
        return(
            <div>
            <SwiperSlide className="swiperslide1" style={{borderRadius:"20px", boxShadow:""}}>
            <h1 style={{fontSize:"1rem", height:"80px", marginTop:"8px"}}>{e.title}</h1>
            <img src={e.urlToImage} alt="error" style={{width:"20rem", height:"20rem"}} />
        </SwiperSlide>
            </div>
        )
    }):""
}
    
        


      </Swiper>
    </>
  );
}