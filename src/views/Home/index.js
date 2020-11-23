import React, { useState, useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useHistory } from 'react-router-dom'

import Card from './../../components/ui-elements/Card'
import Button from './../../components/ui-elements/Button'
import FormSelect from './../../components/ui-elements/FormSelect'
import FormCheckbox from './../../components/ui-elements/FormCheckbox'

import * as SERVICE from './../../service'

import { 
  yearOptions, 
  placeOptions, 
  budgetOptions, 
  rangeOptions 
} from './select-options'

import 'react-toastify/dist/ReactToastify.css';
import './style.css'

const firstOption = { value: 0, label: 'Todos' }

const Home = () => {
  const history = useHistory()

  const [loadingMakes, setLoadingMakes] = useState(false)
  const [makes, setMakes] = useState([{...firstOption}])
  const [make, setMake] = useState(makes[0])
  const [makeKey, setMakeKey] = useState(0)
  
  const [loadingModels, setLoadingModels] = useState(false)
  const [models, setModels] = useState([{...firstOption}])
  const [model, setModel] = useState(models[0])
  const [modelKey, setModelKey] = useState(0)

  const [loadingVersion, setLoadingVersion] = useState(false)
  const [versions, setVersions] = useState([{...firstOption}])
  const [version, setVersion] = useState(versions[0])
  const [versionKey, setVersionKey] = useState(0)

  const [place, setPlace] = useState(placeOptions[0])
  const [range, setRange] = useState(rangeOptions[0])
  const [budget, setBudget] = useState(budgetOptions[0])
  const [year, setYear] = useState(yearOptions[0])

  const [tab, setTab] = useState('CAR')
  const [defaultKey, setDefaultKey] = useState(0)

  const [statusNew, setStatusNew] = useState(true)
  const [statusUsed, setStatusUsed] = useState(true)

  // carrega lista de marcas ao entrar na tela
  useEffect(() => {
    const fetchMakes = async () => {
      setLoadingMakes(true)

      try {
        const { data } = await SERVICE.FETCH_MAKES()
        const makeList = data.map(item => {
          return {
            value: item.ID,
            label: item.Name
          }
        })

        setMakes([makes[0], ...makeList])
      } catch (error) {
        toast.error('Não foi possível listar as marcas.')
      }
      
      setLoadingMakes(false)
    }

    fetchMakes()
  }, [])

  // reseta e carrega lista de modelos de acordo com a marca
  useEffect(() => {
    setModel(models[0])
    setModels([models[0]])
    setModelKey(modelKey + 1)    

    if (!make.value) {
      return
    }

    const fetchModels = async () => {
      setLoadingModels(true)

      try {
        const { data } = await SERVICE.FETCH_MODELS({ makeId: make.value }) 
        const modelList = data.map(item => {
          return {
            value: item.ID,
            label: item.Name
          }
        })

        setModels([models[0], ...modelList])
      } catch (error) {
        toast.error('Nao foi possível listar os modelos')
      }

      setLoadingModels(false)
    }

    fetchModels()
  }, [make])

  // reseta e carrega lista de versões ao mudar o modelo ou marca
  useEffect(() => {
    setVersion(versions[0])
    setVersions([versions[0]])
    setVersionKey(versionKey + 1)

    if (!model.value) {
      return
    }

    const fetchVersions = async () => {
      setLoadingVersion(true)

      try {
        const { data } = await SERVICE.FETCH_VERSIONS({ modelId: model.value })
        const versionList = data.map(item => {
          return {
            value: item.ID,
            label: item.Name
          }
        })

        setVersions([versions[0], ...versionList])
      } catch (error) {
        toast.error('Não foi possível listar as versões')
      }

      setLoadingVersion(false)
    }

    fetchVersions()
  }, [model])


  const resetForm = (ev) => {
    ev.preventDefault()

    setTab('CAR')
    
    setMakeKey(makeKey + 1)
    setModelKey(modelKey + 1)
    setVersion(versionKey + 1)
    setDefaultKey(defaultKey + 1)

    setMake({ ...firstOption })
    setModel({ ...firstOption })
    setVersion({ ...firstOption })

    setModels([{ ...firstOption }])
    setVersion([{ ...firstOption }])

    setPlace(placeOptions[0])
    setRange(rangeOptions[0])
    setBudget(budgetOptions[0])
    setYear(yearOptions[0])
  }

  const onChangeNew = (ev) => {
    const checked = ev.currentTarget.checked

    setStatusNew(checked)

    if (!checked) {
      setStatusUsed(true)
    }
  }

  const onChangeUsed = (ev) => {
    const checked = ev.currentTarget.checked

    setStatusUsed(checked)

    if (!checked) {
      setStatusNew(true)
    }
  }

  const submitForm = (ev) => {
    ev.preventDefault()

    const type = tab === 'CAR' ? 'carros' : 'motos'
    const queryString = []

    if (statusNew && !statusUsed) {
      queryString.push('condicao=novos')
    }

    if (!statusNew && statusUsed) {
      queryString.push('condicao=usados')
    }

    if (place.value !== placeOptions[0].value) {
      queryString.push(`local=${place.value}`)
    }

    if (range.value) {
      queryString.push(`distancia=${range.value}`)
    }

    if (year.value !== 'all') {
      queryString.push(`ano=${year.value}`)
    }

    if (budget.value !== 'all') {
      queryString.push(`preco=${budget.value}`)
    }

    if (make.value) {
      queryString.push(`marca=${make.value}`)
    }

    if (model.value) {
      queryString.push(`modelo=${model.value}`)
    }

    if (version.value) {
      queryString.push(`versao=${version.value}`)
    }
  
    history.push(`/${type}/estoque${queryString.length > 0 ? '?' : ''}${queryString.join('&')}`)
  }

  return (
    <main className="home">
      <div className="home__container">
        <div className="home__form">
          <div className="home__form--header">
            <a 
              className="btn btn-outline-yellow btn-sell"
              target="_blank"
              href="https://www.webmotors.com.br/vender/"
            >
              Vender meu carro
            </a>
            <button 
              className={`btn-home-tab ${tab === 'CAR' ? 'active' : ''}`}
              onClick={() => setTab('CAR')}
            >
              <i className="material-icons">directions_car</i>
              <p>
                <span>Comprar</span>
                <span>Carros</span>
              </p>
            </button>
            <button  
              className={`btn-home-tab ${tab === 'MOTORCYLE' ? 'active' : ''}`}
              onClick={() => setTab('MOTORCYLE')}
            >
              <i className="material-icons">two_wheeler</i>
              <p>
                <span>Comprar</span>
                <span>Motos</span>
              </p>
            </button>
          </div>          
          <Card>
            <form className="home__form--fields" onSubmit={submitForm}>
              <div className="home_form--check">
                <FormCheckbox 
                  label="Novo"
                  onChange={onChangeNew}
                  labelFor="status-new"
                  checked={statusNew}
                />
                <FormCheckbox 
                  label="Usado"
                  onChange={onChangeUsed}
                  labelFor="status-used"
                  checked={statusUsed}
                />
              </div>
              <div className="home_form--field colspan place">
                <FormSelect 
                  onChange={(data) => setPlace(data)}
                  placeholder="Onde?"
                  loading={false}
                  defaultValue={place}
                  prefix="Onde"
                  className="placeSelect"
                  options={placeOptions}
                  key={`placeKey-${defaultKey}`}
                />
                <FormSelect 
                  onChange={(data) => setRange(data)}
                  placeholder="Raio"
                  loading={false}
                  defaultValue={range}
                  className="rangeSelect"
                  prefix="Raio"
                  options={rangeOptions}
                  key={`rangeKey-${defaultKey}`}
                />
                <i className="material-icons">place</i>
              </div>
              <div className="home_form--field">
                <FormSelect 
                  key={`makeSelect-${makeKey}`}
                  onChange={(data) => setMake(data)}
                  placeholder={loadingMakes ? 'Carregando marcas...' : 'Selecione uma marca'}
                  loading={loadingMakes}
                  defaultValue={make}
                  prefix="Marca"
                  options={makes}
                />
              </div>
              <div className="home_form--field">
                <FormSelect 
                  key={`modelSelect-${modelKey}`}
                  onChange={(data) => setModel(data)}
                  placeholder={loadingModels ? 'Carregando modelos...' : 'Selecione um modelo'}
                  loading={loadingModels}
                  defaultValue={model}
                  prefix="Modelo"
                  options={models}
                />
              </div>
              <div className="home_form--field">
                <FormSelect 
                  onChange={(data) => setYear(data)}
                  placeholder="Ano Desejado"
                  loading={false}
                  value={year}
                  prefix="Ano"
                  options={yearOptions}
                  key={`yearKey-${defaultKey}`}
                />
              </div>
              <div className="home_form--field">
                <FormSelect 
                  onChange={(data) => setBudget(data)}
                  placeholder="Faixa de Preço"
                  loading={false}
                  defaultValue={budget}
                  prefix="Preço"
                  options={budgetOptions}
                  key={`budgetKey-${defaultKey}`}
                />
              </div>
              <div className="home_form--field colspan">
                <FormSelect 
                  key={`versionSelect-${versionKey}`}
                  onChange={(data) => setVersion(data)}
                  placeholder={loadingVersion ? 'Carregando versões...' : 'Selecione uma versão'}
                  loading={loadingVersion}
                  defaultValue={version}
                  prefix="Versão"
                  options={versions}
                />
              </div>
              <div className="home_form--submit">
                <a className="btn btn-flat-red" href="#">
                  Busca avançada
                </a>
                <Button 
                  text="Limpar Filtros"
                  className="btn-flat-grey"
                  onClick={resetForm}
                />
                <Button 
                  type="submit"
                  text="Ver Ofertas"
                  className="btn-large"
                />
              </div>
            </form>
          </Card>
        </div>
      </div>
      <ToastContainer 
        position="bottom-right"
        hideProgressBar={true}
      />
    </main>
  )
}

export default Home;
