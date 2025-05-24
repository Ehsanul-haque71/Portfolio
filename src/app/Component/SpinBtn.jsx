"use client";
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaArrowDownLong } from "react-icons/fa6";

export default function SpinBtn() {
    const router = useRouter();
  
  const handleClick = (e) => {
    e.preventDefault(); 
    router.push('/contact');
  };
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;
    const chars = text.innerText.split("");
    const charCount = chars.length;
    const anglePerChar = 360 / charCount;

    text.innerHTML = chars
      .map(
        (char, i) =>
          `<span style="transform: rotate(${i * anglePerChar}deg); display:inline-block; position:absolute; left:50%; transform-origin:0 70px;">${char}</span>`
      )
      .join("");

    gsap.to(text, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
      transformOrigin: "center center",
    });
  }, []);

  return (
    <div onClick={handleClick} className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="relative w-[170px] h-[170px] rounded-full border-[3px] border-[#FFB646] bg-black flex items-center justify-center cursor-pointer">
        {/* Yellow Center with Arrow */}
        <div className="w-[75px] h-[75px] rounded-full bg-[#FFB646] z-10 flex items-center justify-center text-black text-xl">
          <FaArrowDownLong />
        </div>

        {/* Rotating Text */}
        <div
          ref={textRef}
          className="absolute w-full h-[145px] text-white font-mono text-[14px] p-1 pointer-events-none"
        >
          CONTACT ME - CONTACT ME -
        </div>
      </div>
    </div>
  );
}
