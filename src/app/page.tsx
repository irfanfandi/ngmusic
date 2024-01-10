"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

export default function Home() {
  const router = useRouter();
  const _refSearch = useRef<any>();

  const handleSubmit = async () => {
    router.push(`main?artist=${_refSearch.current?.value}`);
  };

  return (
    <div className="flex flex-col" style={{ marginTop: "50%" }}>
      <div className="flex flex-col items-center justify-items-center">
        <div>
          <Image
            src={"/logo@3x.png"}
            width={124}
            height={246}
            alt="logo-ngmusic"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-items-end">
        <input
          ref={_refSearch}
          type="text"
          className="Rectangle"
          placeholder="Artist / Album / Title"
        ></input>
        <button className="Rectangle-button" onClick={handleSubmit}>
          Search
        </button>
      </div>
    </div>
  );
}
