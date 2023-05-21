import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import CategoryCard from './CategoryCard';


const ShopByCategory = () => {
    const [category, setCategory] = useState('Sports Cars');
    const [categoryToy, setSategoryToy] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/toy?category=${category}`)
            .then(res => res.json())
            .then(data => setSategoryToy(data))
    }, [category])


    return (
        <div className='w-[90%] mx-auto my-16'>
            <div className='mb-5 md:mb-7'>
                <h1 className='font-bold text-xl md:text-4xl text-slate-800 text-center '>Shop by category</h1>
                <hr className='border-2	border-red-500 w-[100px] mx-auto rounded-full mt-2 md:mt-4' />
            </div>
            <Tabs>
                <TabList className="md:font-bold pt-3 mb-3 md:bg-[#C1DFE9] md:text-center md:space-x-3 flex justify-center">
                    <Tab className="btn w-[118px] md:w-auto bg-white text-black hover:bg-white rounded-none" onClick={() => setCategory("Sports Cars")}>Sports Cars</Tab>
                    <Tab className="btn w-[118px] md:w-auto bg-white text-black hover:bg-white rounded-none" onClick={() => setCategory("Race Car Sets")}>Race Car Sets</Tab>
                    <Tab className="btn w-[118px] md:w-auto bg-white text-black hover:bg-white rounded-none" onClick={() => setCategory("Monster Trucks")}>Monster Trucks</Tab>
                </TabList>

                <div>
                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-4">
                            {
                                categoryToy.map(toy => <CategoryCard
                                    key={toy._id}
                                    toy={toy}
                                ></CategoryCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-4">
                            {
                                categoryToy.map(toy => <CategoryCard
                                    key={toy._id}
                                    toy={toy}
                                ></CategoryCard>)
                            }
                        </div>
                    </TabPanel>

                    <TabPanel>
                        <div className="grid md:grid-cols-3 gap-4">
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