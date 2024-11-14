import React from 'react'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Card from './card';

export default function Home() {
    const [restaurantData, setRestaurantData] = useState([]);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const getRestaurantDetail = async () => {
        const data = await fetch(
            "https://foodmandu.com/webapi/api/Vendor/GetVendors1?Cuisine=&DeliveryZoneId=1&IsFavorite=false&IsRecent=false&Keyword=&LocationLat=27.7026754&LocationLng=85.3191018&PageNo=1&PageSize=8&SortBy=4&VendorName=&VendorTags=%7B%22FEATURED%22:true%7D&VendorTagsCSV=FEATURED,&filtertags=FEATURED&search_by=restaurant"
        );
        const jsonData = await data.json();
        setRestaurantData(jsonData);
    };

    useEffect(() => {
        getRestaurantDetail();
    }, []);

    return (
        <div>
            <div className='relative'>
                <img src="https://www.pngmagic.com/product_images/White-brick-wall-background-image.jpg" className='h-[600px] w-full' />

                <div className='text-lg absolute top-0 left-0 bottom-0 right-0 flex items-center justify-center flex-col'>
                    <p className='text-2xl text-center font-bold'>Order food from the widest range of <br /> Restaurant</p>
                    <div className='flex mt-4 bg-white rounded-lg px-4 py-2'>
                        <input type="text" className='rounded-lg focus-visible:outline-none pr-4' placeholder='Restaurants or cuisine' onChange={(e) => setQuery(e.target.value)} value={query} onKeyDown={(e) => e.key == 'Enter' && navigate("/restaurants?query=" + query)} />
                        <Link to={"/restaurants?query=" + query}>
                            <button className='bg-[#FFd000] p-4 rounded-lg'>Find Restaurants</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className=" mx-8 flex justify-between py-4">
                <p className="font-bold text-xl">FEATURED RESTAURANTS</p>
                <Link to='restaurants' className="flex items-center font-bold text-xl">
                    View All
                    <FaArrowRight className="ml-4" />
                </Link>
            </div>
            <div className="flex flex-wrap gap-8 items-center justify-center my-4">
                {restaurantData.map((data) => (
                    <Card key={data.Id} propData={data} />
                ))}
            </div>
        </div>
    )
}
