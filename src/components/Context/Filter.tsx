"use client"
import { createContext, useContext,  useState } from 'react';

export const INITIAL_FILTER_DATA = {
    categoryFilter : [],
    setCategoryFilter : () => {},
}

interface IContextType {
    categoryFilter : string[],
    setCategoryFilter : React.Dispatch<React.SetStateAction<string[]>>
}

export const FilterContext = createContext<IContextType>(INITIAL_FILTER_DATA)

export const FilterProvider = ({children}:{children:React.ReactNode}) => {
    const [categoryFilter, setCategoryFilter] = useState<string[]>([])
    return (
        <FilterContext.Provider value={{categoryFilter, setCategoryFilter}}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)