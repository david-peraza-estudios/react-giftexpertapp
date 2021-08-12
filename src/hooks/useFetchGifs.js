import { useState, useEffect } from "react"
import getGifs from '../helpers/getGifs'
import PropTypes from 'prop-types'

export const useFetchGifs = (category) => {
    const [state, setState] = useState(
        {
            data: [],
            loading: true
        });

    useEffect(() => {

        getGifs(category)
            .then(imgs => {
                setTimeout(() => {

                    setState({
                        data: imgs,
                        loading: false
                    })
                }, 3000);
                
            });

    }, [category]);


    return state; // --> data:[], loading: true };
}

// PropTypes no funciona con HOOKS
useFetchGifs.propTypes = {
    category: PropTypes.string.isRequired
}