import { useState, useEffect } from 'react'
import Cards from './Cards';
import Info from './Info';
import { useCounterContract } from '../hooks/useMainContract';

interface Item {
  ipfs_pin_hash: string;
  size: number;
}

interface dataItem {
  count: number;
  rows: [];
}

const Home = () => {


  useEffect(() => {
    document.title = "Home"
  }, []);

  const { Minting, getOwner } = useCounterContract();
  console.log("This is owner", getOwner);
  const owner = getOwner;

  const openNFT = async (data: any) => {

    Minting().then(() => {
      if (owner === undefined) return alert('Please connect your wallet');
      else {
        alert("Transaction Done");
        setNftitem(data);
        setToggle(true);
      }

    }).catch((err) => {
      alert("Transaction fail" + err)
    })

    //   sendReq(data.price).then(()=>{
    //     alert("Transaction done");
    //     setNftitem(data);
    //     setToggle(true);
    //   }).catch((err)=>{
    //     alert("tranaction fail "+ err)
    // })

  }

  const Changestate = async () => {
    setToggle(!toggle);
  }

  // const [loading, setLoading] = useState(true)
  const [items, setItems] = useState<Item[]>([])
  const [toggle, setToggle] = useState<boolean>(false);
  const [nftitem, setNftitem] = useState<any>(null)


  const loadMarketplaceItems = async () => {


    const uri: string = "https://api.pinata.cloud/data/pinList";

    // Define headers
    // const header: HeadersInit = {
    //   "Content-Type": "application/json",
    //   pinata_api_key: `
    //   5fb01fb9514a10189d85`,
    //   pinata_secret_api_key: `
    //   ad527c3f406051f923b29fb93bc40086d3376ad6e6ff7abc47ec0d8e182d1e89`,
    // };
    const header: HeadersInit = {
      "Content-Type": "application/json",
      pinata_api_key: `
      18475aac732291be8c7c`,
      pinata_secret_api_key: `
      4593b2a9ce8fd83a816bd16971d4454828f291374549874739250f5d95128009`,
    };

    fetch(uri, {
      method: "GET",
      headers: header,
    })
      .then((response: Response) => {
        if (response.ok) {
          // Parse the JSON response
          console.log(response.json);

          return response.json();
        }
        throw new Error("Network response  not ok.");
      })
      .then((files: dataItem) => {
        setItems(files.rows);
        console.log(files.rows);
        // const jsonItems = files.rows.filter((item: Item) => item.ipfs_pin_hash.endsWith(".json"));
        // setItems(jsonItems);
      })
      .catch((error: Error) => {
        console.error("Error:", error);
      });
  };
  useEffect(() => {
    loadMarketplaceItems();
  }, [])

  return (
    <>
      {
        toggle ? <Info Changestate={Changestate} nftitem={nftitem} />
          :
          <div className="flex flex-wrap gradient-bg-welcome min-h-screen  gap-10 justify-center pt-24 pb-5 px-16">
            {items.filter(item => item.size < 400).map((item: any) => (
              <Cards item={item} openNFT={openNFT} />
            ))}

          </div>
      }

    </>
  );
}
export default Home

{/* {items.map((item: Item, index: number) => (
              // <Cards key={index} item={item} openNFT={openNFT} />
              <Cards item={item} openNFT={openNFT} />
            ))} */}