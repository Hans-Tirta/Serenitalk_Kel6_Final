import { therapists } from '../../assets/data/therapist'
import TherapistCard from '../../components/Therapists/TherapistCard'

import { BASE_URL } from '../../config';
import useFetchData from '../../hooks/useFetchData'
import Loader from '../../components/Loader/Loading'
import Error from '../../components/Error/Error'
import { useEffect, useState } from 'react';

const Therapists = () => {
  const [query, setQuery] = useState('')
  const [debounceQuery, setDebounceQuery] = useState("")

  const handleSearch = () => {
    setQuery(query.trim())

    console.log('handle search')
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceQuery(query)
    }, 700)

    return () => clearTimeout(timeout)
  }, [query])

  const { data: doctors, loading, error } = useFetchData(`${BASE_URL}/doctors?query=${debounceQuery}`)
  return <>
    <section className=''>
      <div className='container text-center'>
        <h2 className='heading text-textColor'>Find a Therapist</h2>
        <div className='max-w-[570px] mt-[20px] mx-auto bg-[#EDFFDC] rounded-md flex item-center justify-between'>

          <input type="search" className='py-4 pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor' placeholder='Search Therapist' value={query} onChange={e => setQuery(e.target.value)} />
          <button className='btn mt-0 rounded-[0px] rounded-r-md' onClick={handleSearch}>Search </button>
        </div>
      </div>
    </section>

    <section>
      <div className="container">

        {loading && <Loader />}
        {error && <Error />}
        {!loading && !error && (
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {doctors.map(therapist => (<TherapistCard key={therapist.id} therapist={therapist} />))}
          </div>
        )}
      </div>
    </section>
  </>
}

export default Therapists