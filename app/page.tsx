"use client"

// CHANGE TO USE CLIENT FOR SCROLL BUG NEXTJS RELOAD PAGE
import { useEffect, useState } from 'react';
import { Hero, SearchBar,CustomFilter, CarCard, ShowMore  } from '@/components'

import { fuels, yearsOfProduction } from '@/constans';
import { fetchCars } from '@/utils'
import Image from 'next/image'

// NEXTJS SCROLL POSITION ON SEARCHPARAMS IS RESET BUG!!!
export default function Home() {

  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  // search states
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  // filter states
  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  // pagination state
  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer || '',
        year: year || 2022,
        fuel: fuel || '',
        limit:limit || 10,
        model:model || '',
      });
  
      setAllCars(result);
  
    } catch (error) {
      console.log(error);
      
    } finally {
      setLoading(false)
    }
  }
  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  console.log(allCars);
  
  const isDataEmpty = !Array.isArray
 (allCars) || allCars.length <1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Catalogo</h1>
          <p>Esplora le auto che potrebbero piacerti</p>
        </div>

        <div className='home__filters'>
          <SearchBar setManufacturer={setManufacturer} setModel={setModel} />
          <div className='home__filter-container'>
            <CustomFilter setFilter ={setFuel} title="fuel" options={fuels} />
            <CustomFilter setFilter={setYear} title="year" options={yearsOfProduction}/>
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className='home__cars-wrapper'>
              {allCars?.map((car) => (<CarCard car={car} />))}
            </div>

            {loading && (
              <div className='mt-16 w-full flex-center'>
                <Image
                  src="/loader.svg"
                  alt='loader'
                  width={50}
                  height={50}
                  className='object-contain'
                 />
              </div>
            )}
            <ShowMore 
            pageNumber={limit / 10 }
            isNext={limit > allCars.length}
            setLimit={setLimit}
          />
          </section>
        ) : (
          <div className='home__error-container'>
            <h2 className='text-black text-xl font-bold'>Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}

      </div>
    </main>
  )
 }

