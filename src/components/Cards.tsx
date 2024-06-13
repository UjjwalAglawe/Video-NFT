import{ useEffect, useState } from 'react';

interface Item {
  ipfs_pin_hash: string;
}

// interface Stru{
//   image: string,
//   name: string,
//   description: string
// }

// interface Props {
//   item: Item;
// }

interface Props {
  item: Item;
  openNFT:(data: any) => void
}

interface Dataval {
  image: string;
  video: string;
  price: number;
  name: string;
}

function Cards({ item  ,openNFT}: Props) {
  const [data, setData] = useState<Dataval | null>(null);

  useEffect(() => {
    async function loadnft() {
      try {
        const uri = `https://gateway.pinata.cloud/ipfs/${item.ipfs_pin_hash}`;
        const response = await fetch(uri);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const metadata = await response.json();
        setData(metadata);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    loadnft();
  }, [item]);

  return (
    <div className="min-h-screen flex justify-center items-center px-5 py-1">
  <div className="p-6 bg-slate-800 rounded-xl shadow-lg transition-transform transform hover:scale-105">
    {data ? (
      <>
        <img
          src={data.image}
          className="object-cover w-[230px] h-[230px] rounded-lg overflow-hidden"
          alt="NFT Image"
        />
        <div className="flex flex-col justify-center items-center mt-4">
          <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400">{data.name}</h3>
          {/* <div className="flex text-white justify-between items-center mb-3 gap-4 mt-3"> */}
            {/* <div className="mt-2 text-sm text-gray-600 dark:text-gray-400"> */}
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">Price {data.price}</p>
            {/* </div> */}
            {/* <button
              onClick={() => openNFT(data)}
              id="ton-connect-btn"
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded text-sm px-5 py-1.5 text-center me-2 transition-colors duration-300"
            >
              Open
            </button> */}
            <button onClick={() => openNFT(data)} id='ton-connect-btn' type="button" className="mt-4 w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-transform transform duration-300 bg-gradient-to-r from-blue-500 to-purple-600 border border-transparent rounded-lg shadow-lg hover:scale-105 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                        Play
                        <svg
                          className="rtl:rotate-180 w-4 h-4 inline-block ml-2 -mt-px"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14 10"
                          fill="none"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                          />
                        </svg>
                      </button>
          </div>
        {/* </div> */}
      </>
    ) : (
      <p className="text-white">Loading...</p>
    )}
  </div>
</div>


  );
}

export default Cards;