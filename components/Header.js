import React, { useRef } from 'react'
import Image from 'next/dist/client/image'
import { useRouter } from 'next/dist/client/router';
import { MicrophoneIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Avatar from './Avatar';
import { HeaderOptions } from './HeaderOptions';
const Header = () => {
  const router=useRouter();
  const searchInputRef=useRef(null);
  const search=(e)=>{
    e.preventDefault();
    const term = searchInputRef.current.value;
    if(!term){
        return;
    }
    router.push(`/search?term:${term}`);
  }
    return (
    <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
        <Image src='https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png' alt="Google" 
        width={120} height={40} className='cursor-pointer' onClick={()=>router.push('/')}/>
        <form className='flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center'>
            <input type='text' className="flex-grow w-full focus:outline-none" ref={searchInputRef} defaultValue={router.query.term} />
            <XIcon className='h-7 sm:mr-3 text-gray-500 cursor-pointer 
            transition duration-100 tran sform hover:scale-125'
            onClick={()=>(searchInputRef.current.value ="")}/>
            <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 padding-l-4 border-gray-300'/>          
            <button type='submit' onClick={search}><SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex cursor-pointer'/></button>
        </form>
        <Avatar className="ml-auto" url="https://scontent.fccu4-2.fna.fbcdn.net/v/t39.30808-6/272888002_1366314150474469_4606553567727087936_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iMH0-AqVGU8AX8l7bbW&_nc_ht=scontent.fccu4-2.fna&oh=00_AT_W-6IoekoZB7vwNHA6mugHgOJag0E4FyWCU3vsQqLn8g&oe=62FC5E49"/>
        </div>
        {/* Header Options */}
        <HeaderOptions/>
    </header>
  )
}

export default Header