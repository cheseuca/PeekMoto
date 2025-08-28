'use client'
import React from 'react'
//import { useState, useEffect } from "react";
import Link from 'next/link'
//import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";

export default function page() {
    
    /*const [photos, setPhotos] = useState<string[]>([]);

    useEffect(() => {
        const fetchPhotos = async () => {
            const storage = getStorage();
            const listRef = ref(storage, '/detected_vehicles');
            try {
                const res = await listAll(listRef);
                const urls = await Promise.all(res.items.map(itemRef => getDownloadURL(itemRef)));
                setPhotos(urls);
            } catch (error) {
                console.error("Error fetching photos: ", error);
            }
        };

        fetchPhotos();
    }, []);*/

  return (
    <div className='flex-0'>
        <nav className="bg-black border-b border-white">
          <h1 className="text-4xl font-bold m-5">PeekMoto</h1>
        </nav>
        <div className='grow'>
            <div className="m-5 flex-wrap">
                <div className='bg-gray-800 rounded-lg border border-white p-20 m-5'><h3 className="text-center text-white">Image</h3></div>
                <div className='bg-gray-800 rounded-lg border border-white p-20 m-5'><h3 className="text-center text-white">Image</h3></div>
                <div className='bg-gray-800 rounded-lg border border-white p-20 m-5'><h3 className="text-center text-white">Image</h3></div>
            </div>
        </div>
        <footer className='flex-0'>
          <Link href='/'>
            <p className='text-xl p-5'>Return</p>
          </Link>
        </footer>
    </div>
  )
}
