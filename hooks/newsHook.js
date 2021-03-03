import {useEffect, useState, useCallback} from 'react'
import newsApi from '../api/newsApi'
export  default HomeHook =()=>{
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('');
    const [homeViewData, setHomeViewData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    
    const news = async (url, params) => {
        try {
            let response = await newsApi.get(url, params);
             setHomeViewData(response.data.articles);
             console.log(response.data.articles)
        } catch (error) {
           setErrorMessage('something went wrong')
        }
    };

    useEffect(()=>{
        setIsLoading(true);
        console.log('loading start')
        news('/top-headlines', {
                params:{
                    country:'ng',
                    pageSize:40
                }
            }).then(() => setIsLoading(false))
        }, [])

   const onRefresh = useCallback(() => {
        setRefreshing(true);
        news('top-headlines', {
            params:{
                country:'ng',
                pageSize:40
            }
        }).then(() => setRefreshing(false));
        console.log('refreshed')
    }, [refreshing]);


    return [news, homeViewData, onRefresh, refreshing, errorMessage,isLoading] ;
}
