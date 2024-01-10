"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const searchParams = useSearchParams();
  const [music, setMusic] = useState({ resultCount: 0, results: [] });
  const [limit, setLimit] = useState(4);

  const fetchData = async () => {
    const params = new URLSearchParams({
      limit: limit.toString(),
      term: searchParams.get("artist") || "",
    });
    const ress = await fetch(
      `https://itunes.apple.com/search?${params.toString()}`
    );
    const data = await ress.json();
    if (data.resultCount > 0) {
      setMusic({ resultCount: data.resultCount, results: data.results });
    }
  };

  useEffect(() => {
    fetchData();
  }, [searchParams.get("artist"), limit]);

  return (
    <div className="flex flex-col items-center mt-10">
      <div className="flex">
        <h6 className="Search-result-for">Search result for :</h6>
        <h6 className="Search-result">{searchParams.get("artist") || ""}</h6>
      </div>
      <div className="flex flex-col">
        {music.resultCount > 0 ? (
          music.results.map((e: any, idx) => (
            <div key={idx} className="Card-music flex">
              <Image
                src={e.artworkUrl100}
                width={90}
                height={90}
                alt="musicsdsd"
              />
              <div className="flex flex-col">
                <h6 className="Artist-music">{e.collectionName}</h6>
                <h6 className="Title-music">{e.trackName}</h6>
                <div className="flex justify-between">
                  <div className="flex Chip">{e.kind}</div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>No Data</div>
        )}
      </div>
      <button
        className="Button-load-more"
        onClick={() => {
          setLimit((prev) => prev + 4);
        }}
      >
        Load More
      </button>
      <br />
    </div>
  );
}
