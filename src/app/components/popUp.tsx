"use client";
import { useEffect, useState } from "react";

export default function PeekPopup() {
  const [open, setOpen] = useState(true); // show immediately once

  // Optional: small delay so it shows after hydration
  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/50">
        <div className="bg-black p-6 rounded-2xl shadow-lg max-w-sm w-full">
        <h2 className="text-xl font-bold mb-2">PSA❗</h2>
        <p className="mb-4">This site only showcases the capabilities of the PeekMoto app, where it enables an alarm when detecting vehicles out the the driver's view (blindspot). There are limitations, mainly no working hardware prototype available; this only serves as a proof of concept.</p>
        <button
            onClick={() => {setOpen(false);}}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg"
        >
          Try it out!
        </button>
        </div>
    </div>
  );
}
