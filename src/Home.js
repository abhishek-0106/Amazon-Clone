import React from "react"
import Product from "./Product"
import "./Home.css"


function Home() {
    return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
                



            {/*<img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Home Page" />*/}
            {/* product id, title, price, rating, image */}
            <div className="home__row">
                <Product id="12345"
                    title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                    price={11.96}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg" />
                <Product id="23451"
                    title="Tapestry 3D Printing Forest Tree Tapestry Sunset glow Tapestry Nature Landscape Tapestry Wall Hanging for Bedroom Living Room Dorm Home Décor (51.2 x 59.1inches)"
                    price={13.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/8151pTwLYHS._AC_UL320_.jpg" />

            </div>
            <div className="home__row">
                <Product id="57803"
                    title="HP 65 | Ink Cartridge | Black | Works with HP DeskJet 2600 Series, 3700 Series, HP ENVY 5000 Series, HP AMP 100, 120, 125, 130 | N9K02AN"
                    price={37.30}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/717HLlpdcIL._AC_UL320_.jpg" />
                <Product id="90134"
                    title="Tenmiro 65.6ft Led Strip Lights, Ultra Long RGB 5050 Color Changing LED Light Strips Kit with 44 Keys Ir Remote Led Lights for Bedroom, Kitchen, Home Decoration"
                    price={26.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/81ftrZT0kOL._AC_UL320_.jpg" />
                <Product id="12590"
                    title="SunStyle Home Quilt Set Green Lightweight Queen Bedspread Coverlet Set Cloud Pattern Olive Green"
                    price={37.99}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/71zhHHT+AES._AC_UL320_.jpg" />
            </div>
            <div className="home__row">
                <Product id="13462"
                    title="HP 24mh FHD Monitor - Computer Monitor with 23.8-Inch IPS Display (1080p) - Built-In Speakers and VESA Mounting - Height/Tilt Adjustment for Ergonomic Viewing - HDMI and DisplayPort - (1D0J9AA#ABA)"
                    price={199.90}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/51IIMW6-TbL.jpg" />

            </div>
        </div>
    </div>
    )
}

export default Home
