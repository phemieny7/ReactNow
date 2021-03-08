import {useEffect, useState, useCallback} from 'react'
import newsApi from '../api/newsApi'
export  default HomeHook = () =>{
    const [isLoading, setIsLoading] = useState(true)
    const [errorMessage, setErrorMessage] = useState('');
    const [homeViewData, setHomeViewData] = useState([]); 
    const [refreshing, setRefreshing] = useState(false);
    
    //A general function to call newApi 
    const news = async (url, params) => {
        try {
            let response = await newsApi.get(url, params);
             setHomeViewData(response.data.articles);
        } catch (error) {
           setErrorMessage('something went wrong')
        }
    };

    //component will mount
    useEffect(()=>{
        setIsLoading(true);
        news('/top-headlines', {
                params:{
                    country:'ng',
                    pageSize:100
                }
            }).then(() => setIsLoading(false))
        }, [])

    // when component refresh
   const onRefresh = useCallback(() => {
        setRefreshing(true);
        news('top-headlines', {
            params:{
                country:'ng',
                pageSize:40
            }
        }).then(() => setRefreshing(false));
    }, [refreshing]);

    // make them available to use.
    return [news, homeViewData, onRefresh, refreshing, errorMessage,isLoading] ;
}
