import {useEffect, useState, useCallback} from 'react'
import newsApi from '../api/newsApi'
export  default()=>{
    
    const [errorMessage, setErrorMessage] = useState('');
    
    const news = async (url, params) => {
        try {
            let response = await newsApi.get(url, params);
             setHomeViewData(response.data.articles);
             searchViewData(response.data.articles);
             (response.data.articles.length)
        } catch (error) {
           setErrorMessage('something went wrong')
        }
    };

   const [homeViewData, setHomeViewData] = useState([]);
    useEffect(()=>{
        news('/top-headlin e', {
            params:{
                 country:'ng',
                 pageSize:20
            }
        })
    }, [homeViewData])

   const [searchViewData, setSearchViewData] = useState([]);
   useEffect(()=>{
    news('/everything', {
        params:{
             q:'nigeria',
             pageSize:40
        }
    })
    }, [searchViewData])

   const [tvViewData, setTvViewData] = useState([]);

   const [refreshing, setRefreshing] = useState(false);
   const onRefresh = useCallback(() => {
        setRefreshing(true);
        news('top-headline', {
            params:{
                country:'ng',
                pageSize:40
            }
        }).then(() => setRefreshing(false));
        console.log('refreshed')
    }, [refreshing]);

    return [news, homeViewData,  onRefresh, errorMessage, refreshing];
}
