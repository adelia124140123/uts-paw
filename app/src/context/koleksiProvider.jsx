import { useEffect, useState } from 'react';
import { KoleksiContext, koleksiContext } from './koleksiContext.js'
import useLocalStorage from '../hooks/useLocalStorage';

export function KoleksiProvider({children}) {
    return (
        <KoleksiContext.Provider value={{}}>
            {children}
        </KoleksiContext.Provider>   
    )
}