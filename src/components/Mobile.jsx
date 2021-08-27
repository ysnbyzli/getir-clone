import React from 'react'

const Mobile = () => {
    return (
        <div className="bg-purple-700 flex flex-col sm:flex-row sm:pl-12 items-center justify-between md:rounded-lg md:container md:mx-auto mb-4" style={{ backgroundImage: `url(https://getir.com/_next/static/images/doodle-d659f9f1fd505c811c2331fe3ffddd5f.png)` }}>
            <div className="text-white p-5 text-center">
                <h3 className="font-semibold text-xs mt-3">Getir'i indirin!</h3>
                <p className="font-semibold text-xs mt-3">İstediğiniz ürünleri dakikalar içinde kapınıza <br /> getirelim.</p>
                <div className="grid grid-cols-2 mt-4 gap-2">
                    <a href="#">
                        <img
                            src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
                    </a>
                    <a href="#">
                        <img
                            src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
                    </a>
                    <a href="#">
                        <img
                            src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
                    </a>
                </div>
            </div>
            <div className="self-end mt-4">
                <img src="https://getir.com/_next/static/images/phoneLanding-88c033545710c4808054072689e187d7.png" />
            </div>
        </div>
    )
}

export default Mobile
