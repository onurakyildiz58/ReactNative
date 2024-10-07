/* eslint-disable prettier/prettier */
import { useContext } from 'react';
import { AuthContext } from './store/contextAuth';

function fetchContext() {
    return useContext(AuthContext);
}

export default fetchContext;
