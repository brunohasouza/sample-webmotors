import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import useInfiniteScroll from 'react-infinite-scroll-hook'

import Loading from '../../components/ui-elements/Loading'
import VehicleList from './components/VehicleList'

import { FETCH_VEHICLES } from "../../service";

import './style.css'

const VehicleStorage = () => {
  const [empty, setEmpty] = useState(false)
  const [loading, setLoading] = useState(false)
  const [vehicles, setVehicles] = useState([])
  const [page, setPage] = useState(1)
  const [hasNextPage, setHasNextPage] = useState(true)

  const fecthDataScroll = async () => {
    setLoading(true)
  
    try {
      const { data } = await FETCH_VEHICLES({ page })
      if (page === 1 && data.length === 0) {
        setEmpty(true)
      } else {
        setVehicles([...vehicles, ...data])
  
        if (data.length < 10) {
          setHasNextPage(false)
        } else {
          setPage(page + 1)
        }
      }
    } catch (error) {
      toast.error('Erro ao listar veículos.')
    }
  
    setLoading(false)
  }

  const infiniteScroll = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: fecthDataScroll
  })

  return (
    <main className="vehicles">
      <div className="vehicles__container" ref={infiniteScroll}>
        {/* <header>
          <Link to="/">
            <img src={logo} alt="Webmotors"/>
          </Link>
        </header> */}
        <VehicleList
          vehicleList={vehicles}
        />
        {
          loading && <Loading text="Carregando veículos..." />
        }
        {
          empty &&
          <div className="vehicles__empty">
            <span>Nenhum veículo encontrado</span>
          </div>
        }
        {
          !hasNextPage &&
          <div className="vehicles__empty">
            <span>Todos os veículos foram listados</span>
          </div>
        }
      </div>
      <ToastContainer 
        position="bottom-right"
        hideProgressBar={true}
      />
    </main>
  )
}

export default VehicleStorage;
