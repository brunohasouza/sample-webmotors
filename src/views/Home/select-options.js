export const yearOptions = [
  { value: 'all', label: 'Todos' },
  { value: 2009, label: 2009 },
  { value: 2010, label: 2010 },
  { value: 2011, label: 2011 },
  { value: 2012, label: 2012 },
  { value: 2013, label: 2013 },
  { value: 2014, label: 2014 },
  { value: 2015, label: 2015 },
  { value: 2016, label: 2016 },
  { value: 2017, label: 2017 },
  { value: 2018, label: 2018 },
  { value: 2019, label: 2019 },
  { value: 2020, label: 2020 },
]

export const budgetOptions = [
  { value: 'all', label: 'Todas' },
  { value: '15', label: 'Menos de 15.000' },
  { value: '15_25', label: 'Entre 15.000 e 25.000' },
  { value: '25_35', label: 'Entre 25.000 e 35.000' },
  { value: '35_50', label: 'Entre 35.000 e 50.000' },
  { value: '50', label: 'Acima de 50.000' }
]

export const rangeOptions = [
  { value: 0, label: '0km' },
  { value: 50, label: '50km' },
  { value: 100, label: '100km' },
  { value: 150, label: '150km' },
  { value: 200, label: '200km' }
]

export const placeOptions = [
  { value: 'all', label: 'Todos' },
  {
    label: 'Estados',
    options: [
      { value: 'ba', label: 'Bahia' },
      { value: 'pe', label: 'Pernambuco' },
      { value: 'sp',  label: 'São Paulo'},
      { value: 'rj', label: 'Rio de Janeiro' },
    ]
  },
  {
    label: 'Cidades',
    options: [
      { value: 'ba_salvador', label: 'Salvador - BA' },
      { value: 'ba_juazeiro', label: 'Juazeiro - BA' },
      { value: 'pe_recife', label: 'Recife - PE' },
      { value: 'pe_olinda', label: 'Olinda - PE' },
      { value: 'sp_sp',  label: 'São Paulo - SP'},
      { value: 'sp_santos',  label: 'Santos - SP'},
      { value: 'rj_rj', label: 'Rio de Janeiro - RJ' },
      { value: 'rj_niteroi', label: 'Niterói - RJ' },
    ]
  },
]