import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CategoryCard from './CategoryCard';


const ShopByCategory = () => {
    const [category, setCategory] = useState('Sports Cars');
    const [categoryToy, setSategoryToy] = useState([]);
    console.log(categoryToy);

    useEffect(() => {
        fetch(`http://localhost:3000/toy?category=${category}`)
            .then(res => res.json())
            .then(data => setSategoryToy(data))
    }, [category])


    return (
        <div className='w-[90%] mx-auto my-14'>
            <div className='mb-7 md:mb-10'>
                <h1 className='font-bold text-xl md:text-4xl text-slate-800 text-center '>Shop by category</h1>
                <hr className='border-2	border-red-500 w-[100px] mx-auto rounded-full mt-2 md:mt-4' />
            </div>
            <Tabs className="">
                <TabList className="font-bold pt-3 mb-3 bg-slate-200 text-center space-x-3">
                    <Tab className="btn bg-white text-black hover:bg-white rounded-none" onClick={() => setCategory("Sports Cars")}>Sports Cars</Tab>
                    <Tab className="btn bg-white text-black hover:bg-white rounded-none" onClick={() => setCategory("Race Car Sets")}>Race Car Sets</Tab>
                    <Tab className="btn bg-white text-black hover:bg-white rounded-none" onClick={() => setCategory("Monster Trucks")}>Monster Trucks</Tab>
                </TabList>

                <div>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-4">
                            {
                                categoryToy.map(toy => <CategoryCard
                                    key={toy._id}
                                    toy={toy}
                                ></CategoryCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid grid-cols-3 gap-4">
                            {
                                categoryToy.map(toy => <CategoryCard
                                    key={toy._id}
                                    toy={toy}
                                ></CategoryCard>)
                            }
                        </div>
                    </TabPanel>
                    
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-4">
                            {
                                categoryToy.map(toy => <CategoryCard
                                    key={toy._id}
                                    toy={toy}
                                ></CategoryCard>)
                            }
                        </div>
                    </TabPanel>
                </div>
            </Tabs>
        </div>
    );
};

export default ShopByCategory;