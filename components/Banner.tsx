import React from 'react';
import Logo from '../src/assets/banner-main.png'
import BannerBg from '../src/assets/bg-shadow.png'
const Banner = () => {
    return (
        <div className='banner-bg text-center container mx-auto flex flex-col min-h-[400px] my-15] bg-cover  bg-blend-darken' >
            <img className=' mx-auto' src={Logo}/>
            <div>
            <h1 className='text-4xl'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <p className='text-2xl'>Beyond Boundaries Beyond Limits</p>
            <button>Claim Free Credit</button>
            </div>
        </div>
    );
};

export default Banner;