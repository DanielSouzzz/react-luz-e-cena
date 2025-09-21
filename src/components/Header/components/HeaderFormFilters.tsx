import React from 'react'
import SelectorGroup from '../../Selector/SelectorGroup'
import { FaLocationDot } from 'react-icons/fa6'
import SelectorOption from '../../Selector/SelectorOption'

const cidades = [
    { id: 1, nome: 'São Paulo' },
    { id: 2, nome: 'Rio de Janeiro' },
    { id: 3, nome: 'Belo Horizonte' },
    { id: 4, nome: 'Curitiba' },
    { id: 5, nome: 'Porto Alegre' },
    { id: 6, nome: 'Salvador' },
    { id: 7, nome: 'Fortaleza' },
]

const HeaderFormFilters = () => {
  return (
    <form>
        <SelectorGroup id='cidade' icon={<FaLocationDot/>}>
            <SelectorOption label='Escolha uma cidade' value=''/>
            {cidades.map((cidade) => {
                return <SelectorOption key={cidade.id} label={cidade.nome} value={cidade.nome}/>
            })}
        </SelectorGroup>
    </form>
  )
}

export default HeaderFormFilters
