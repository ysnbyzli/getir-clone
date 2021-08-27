import Slider from 'react-slick';
import '../assets/css/hero-section.css'
import ReactFlagsSelect from 'react-flags-select';
import { useState } from 'react';

const HeroSection = () => {

  const [selected, setSelected] = useState('TR');

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
    arrows: false,
  };


  const flags = {
    US: '+1',
    GB: '+5',
    FR: '+70',
    DE: '+30',
    IT: '+11',
    TR: '+90',
  }

  return (
    <div className="bg-purple-500 relative hero-section" style={{ height: "500px" }}>
      <Slider className="h-full" {...settings}>

        <div>
          <div className="bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url(https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg)', height: "500px" }}></div>
        </div>
        <div>
          <div className="h-[500px] bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: 'url(https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg)', height: "500px" }}></div>
        </div>

      </Slider>

      <div className="absolute inset-0 z-40 px-8 flex items-center">
        <div className="container flex mx-auto justify-between items-center">
          <div className="flex gap-y-10 flex-col">
            <img height={180} width={180}
              src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
              alt="" />
            <h3 className="text-4xl font-semibold tracking-tighter	 text-white">
              Dakikalar içinde <br /> kapınızda
            </h3>
          </div>
          <div className="bg-white rounded-lg px-5 py-6 w-96">
            <h3 className="text-purple-500 font-semibold text-center mb-4">Giriş yap veya kayıt ol</h3>
            <div className="flex flex-col gap-y-3">
              <div className="flex gap-x-3">
                <ReactFlagsSelect

                  countries={Object.keys(flags)}
                  customLabels={flags}
                  selected={selected}
                  onSelect={(flag) => setSelected(flag)}
                />
                <d className="relative flex-1"> 
                  <input required className="h-full rounded px-4 pt-2 hover:border-purple-700 focus:border-purple-700 transition-colors outline-none text-sm w-full border-2 border-gray-200 peer" />
                  <span
                    className="absolute top-0 left-0 h-full flex items-center px-4 text-sm text-gray-500 transition-all group-focus-within:h-7 group-focus-within:text-xs group-focus-within:text-purple-600 peer-valid:h-7 peer-valid:text-xs peer-valid:text-purple-600">
                    Telefon Numarası
                  </span>
                </d>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HeroSection
