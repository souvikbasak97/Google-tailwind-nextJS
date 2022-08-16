import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Header from '../components/Header'
import { API_KEY, CONTEXT_KEY } from '../keys'
import Response from '../Response'
import { useRouter } from 'next/dist/client/router'
import SearchResults from '../components/SearchResults'
const Search = ({results}) => {
  const router=useRouter(); 
  console.log(results);
  return (
    <div>
        <title>{router.query.term} - Google Search</title>
        <link rel="icon" href='/favicon.ico'/>
        {/* Header */}
        <Header/>
        {/* Search Results */}
        <SearchResults results={results}/>
    </div>
  )
}

export default Search
export async function getServerSideProps(context){
  const useDummyData=false;
  const startIndex=context.query.start||"0";
  const data=useDummyData?Response:await 
  fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`)
  .then(res => res.json());

  //after server side rendering
  return{
    props:{
      results:data
    }
  }
    
}