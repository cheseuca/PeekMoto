'use client';
//import { on } from "events";
import Link from "next/link";
import { useState, useEffect } from "react";
/*import { db } from "./firebase/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { getStorage, ref, getDownloadURL, listAll } from "firebase/storage";*/


export default function Home() {
  /*const [data, setData] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "DistancesData"), async (querySnapshot) => {
      const doc = querySnapshot.docs[0]?.data();
      console.log("Fetched data:", doc); // Log the fetched data
      if (doc) {
        setData([{ Left: doc.Left, Right: doc.Right }]);
      }
    }, (error) => {
      console.error("Error fetching data: ", error);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  
  const [latestPhotoUrl, setLatestPhotoUrl] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestPhoto = async () => {
      try {
        const storage = getStorage();
        const listRef = ref(storage, '/detected_vehicles');
        const res = await listAll(listRef);
        if (res.items.length > 0) {
          const latestItem = res.items[res.items.length - 1];
          const url = await getDownloadURL(latestItem);
          setLatestPhotoUrl(url);
        }
      } catch (error) {
        console.error("Error fetching latest photo: ", error);
      }
    };

    fetchLatestPhoto();
  }, []);*/

  const playNotificationSound = () => {
    const audio = new Audio("/alert.mp3");
    audio.play();
  };

  /*const [showPopup, setShowPopup] = useState(false);

  // Watch for data changes to play sound when left or right > 1
  useEffect(() => {
    if (data[0]?.Left > 1 || data[0]?.Right > 1) {
      playNotificationSound();
    }
  }, [data]);

  useEffect(() => {
    setShowPopup(true);
  }, []);*/

  const [leftDistance, setLeftDistance] = useState(0);
  const [rightDistance, setRightDistance] = useState(0);

  useEffect(() => {
    if (leftDistance > 1 || rightDistance > 1) {
      playNotificationSound();
    } 
  }, [leftDistance, rightDistance]);

  return (
    <div>
      {/* {showPopup && (
      <div className="fixed inset-0 flex items-center justify-center bg-white/50">
        <div className="bg-black p-6 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-2">PSA❗</h2>
        <p className="mb-4">This site only showcases the capabilities of the PeekMoto app, where it enables an alarm when detecting vehicles out the the driver's view (blindspot). There are limitations, mainly no working hardware prototype available; this only serves as a proof of concept.</p>
        <button
          onClick={() => {
          setShowPopup(false);
          }}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg"
        >
          Try it out!
        </button>
        </div>
      </div>
      )} */}
      <nav className="bg-black border-b border-white">
      <div className="flex flex-wrap items-center justify-between">
      <h1 className="text-4xl font-bold m-5">PeekMoto</h1>
      </div>
      </nav>
      <div className="flex justify-center gap-5 m-5">
      <div className="flex flex-col justify-center">
        <button
        onClick={() => setLeftDistance(2)}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
        <abbr className="no-underline" title="Push this button to set the distance on the left side to more than 1 and produce an alert sound">Click Me!</abbr>
        </button>
        <button
        onClick={() => setLeftDistance(0)}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
        <abbr className="no-underline" title="Push this button to reset">Stop</abbr>
        </button>
      </div>

      {/* Left Square */}
      <div
        className={`w-64 h-32 flex flex-col items-center justify-center border rounded-lg ${
        leftDistance < 1 ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <p className="text-white font-bold">{`Left: ${leftDistance}`}</p>
      </div>

      {/* Right Square */}
      <div
        className={`w-64 h-32 flex flex-col items-center justify-center border rounded-lg ${
        rightDistance < 1 ? "bg-green-500" : "bg-red-500"
        }`}
      >
        <p className="text-white font-bold">{`Right: ${rightDistance}`}</p>
      </div>
      <div className="flex flex-col justify-center">
        <button 
        onClick={() => setRightDistance(2)}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"><abbr className="no-underline" title="Push this button to set the distance on the right side to more than 1 and produce an alert sound">Click Me!</abbr></button>
        <button
        onClick={() => setRightDistance(0)}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
        <abbr className="no-underline" title="Push this button to reset">Stop</abbr>
        </button>
      </div>
      </div>
      <div className="flex justify-center bg-gray-800 rounded-lg my-5 mx-20 p-20">
        <h3 className="text-white">Live video from the ESP 32 Cam</h3>
      </div>
      <div className="flex justify-center">
      <button type="button" className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
        <Link href="/gallery">Check Past Snapshots</Link>
      </button>
      </div>
    </div>
  );
}