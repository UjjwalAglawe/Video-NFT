// import { useEffect, useState } from 'react'
// // import { ethers } from "ethers"
// import { Row, Form, Button } from 'react-bootstrap'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// //use main conract from hooks


// interface FormInfo {
//     title: string;
//     description: string;
//     // owner: string;
//     price: number | null;
// }

// interface DataInfo {
//     name: string;
//     description: string;
//     image: string;
//     price: number | null;
//     // owner: string | null;
// }
// const Create = () => {

//     const [nftimage, setNFTImage] = useState<File | undefined>();
//     const [forminfo, setFormInfo] = useState<FormInfo>({
//         title: "",
//         description: "",
//         price: null
//     });

//     useEffect(() => {
//         document.title = "Create"
//     }, []);

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = event.target;
//         setFormInfo((prevState) => ({ ...prevState, [name]: value }));
//     };

//     const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files && event.target.files[0]) {
//             setNFTImage(event.target.files[0]);
//         }
//     };

//     const handleEvent = async (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.preventDefault();
//         console.log(nftimage)
//         console.log(forminfo);

//         const formData = new FormData();
//         const jsonformData = new FormData();

//         formData.append("file", nftimage);

//         const metadata = JSON.stringify({
//             name: forminfo.title,
//             description: forminfo.description
//         });
//         jsonformData.append('pinataMetadata', metadata);

//         const options = JSON.stringify({
//             cidVersion: 0,
//         })
//         jsonformData.append('pinataOptions', options);

//         try {

//             const resFile = await axios({
//                 method: "post",
//                 url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
//                 data: formData,
//                 headers: {
//                     pinata_api_key: `1a7cac69d0dac2bceaeb`,
//                     pinata_secret_api_key: `d70366959ea7a7fd5396abed2b11003168369c278987b9d6cb09d195d71cebc2`,
//                     "Content-Type": "multipart/form-data",
//                 },
//             });

//             console.log(resFile.data);

//             const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;

//             const info: DataInfo = {
//                 name: forminfo.title,
//                 description: forminfo.description,
//                 image: ImgHash,
//                 price: forminfo.price
//             }

//             async function pinJSONToPinata(info: DataInfo) {
//                 const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
//                 const headers = {
//                     'Content-Type': 'application/json',
//                     'pinata_api_key': `1a7cac69d0dac2bceaeb`,
//                     'pinata_secret_api_key': `d70366959ea7a7fd5396abed2b11003168369c278987b9d6cb09d195d71cebc2`
//                 };

//                 try {
//                     const res = await axios.post(url, info, { headers });
//                     const meta = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`
//                     console.log(meta);
//                 } catch (error) {
//                     console.error(error);
//                 }

//             }

//             pinJSONToPinata(info)


//         } catch (error) {
//             console.log(error);
//         }



//     };



//     return (
//         <div className='min-h-screen' >
//             <div className="flex ml-20 mt-20">
//                 <main role="main">
//                     <div className="content mx-auto text-xl ml-20 space-y-8 text-white shadow-2xl rounded-lg border-2 p-5 px-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
//                         <Row className="g-4">
//                             <Form.Control
//                                 type="file"
//                                 required
//                                 name="file"
//                                 onChange={changeHandler}
//                             />
//                             <Form.Control onChange={handleChange} name="title" id="title" size="lg" required type="text" placeholder="Name" />
//                             <Form.Control onChange={handleChange} name="description" id="description" size="lg" required as="textarea" placeholder="Description" />
//                             <Form.Control onChange={handleChange} name="price" id="price" size="lg" required type="number" placeholder="Price in BIT" />
//                             <div className="d-grid px-0">
//                                 <Button onClick={handleEvent} variant="primary" size="lg">
//                                     Create NFT!
//                                 </Button>
//                             </div>
//                         </Row>
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// }

// export default Create

// import { useEffect, useState } from 'react'
// // import { ethers } from "ethers"
// import { Row, Form, Button } from 'react-bootstrap'
// import axios from 'axios'
// import { toast } from 'react-toastify'
// //use main conract from hooks


// interface FormInfo {
//     title: string;
//     description: string;
//     // owner: string;
//     price: number | null;
// }

// interface DataInfo {
//     name: string;
//     description: string;
//     image: string;
//     price: number | null;
//     // owner: string | null;
// }
// const Create = () => {

//     const [nftimage, setNFTImage] = useState<File | undefined>();
//     const [forminfo, setFormInfo] = useState<FormInfo>({
//         title: "",
//         description: "",
//         price: null
//     });

//     useEffect(() => {
//         document.title = "Create"
//     }, []);

//     const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//         const { name, value } = event.target;
//         setFormInfo((prevState) => ({ ...prevState, [name]: value }));
//     };

//     const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files && event.target.files[0]) {
//             setNFTImage(event.target.files[0]);
//         }
//     };

//     const handleEvent = async (e: React.MouseEvent<HTMLButtonElement>) => {
//         e.preventDefault();
//         console.log(nftimage)
//         console.log(forminfo);

//         const formData = new FormData();
//         const jsonformData = new FormData();

//         formData.append("file", nftimage);

//         const metadata = JSON.stringify({
//             name: forminfo.title,
//             description: forminfo.description
//         });
//         jsonformData.append('pinataMetadata', metadata);

//         const options = JSON.stringify({
//             cidVersion: 0,
//         })
//         jsonformData.append('pinataOptions', options);

//         try {

//             const resFile = await axios({
//                 method: "post",
//                 url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
//                 data: formData,
//                 headers: {
//                     pinata_api_key: `1a7cac69d0dac2bceaeb`,
//                     pinata_secret_api_key: `d70366959ea7a7fd5396abed2b11003168369c278987b9d6cb09d195d71cebc2`,
//                     "Content-Type": "multipart/form-data",
//                 },
//             });

//             console.log(resFile.data);

//             const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;

//             const info: DataInfo = {
//                 name: forminfo.title,
//                 description: forminfo.description,
//                 image: ImgHash,
//                 price: forminfo.price
//             }

//             async function pinJSONToPinata(info: DataInfo) {
//                 const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
//                 const headers = {
//                     'Content-Type': 'application/json',
//                     'pinata_api_key': `1a7cac69d0dac2bceaeb`,
//                     'pinata_secret_api_key': `d70366959ea7a7fd5396abed2b11003168369c278987b9d6cb09d195d71cebc2`
//                 };

//                 try {
//                     const res = await axios.post(url, info, { headers });
//                     const meta = `https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`
//                     console.log(meta);
//                 } catch (error) {
//                     console.error(error);
//                 }

//             }

//             pinJSONToPinata(info)


//         } catch (error) {
//             console.log(error);
//         }



//     };



//     return (
//         <div className='min-h-screen' >
//             <div className="flex ml-20 mt-20">
//                 <main role="main">
//                     <div className="content mx-auto text-xl ml-20 space-y-8 text-white shadow-2xl rounded-lg border-2 p-5 px-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ...">
//                         <Row className="g-4">
//                             <Form.Control
//                                 type="file"
//                                 required
//                                 name="file"
//                                 onChange={changeHandler}
//                             />
//                             <Form.Control onChange={handleChange} name="title" id="title" size="lg" required type="text" placeholder="Name" />
//                             <Form.Control onChange={handleChange} name="description" id="description" size="lg" required as="textarea" placeholder="Description" />
//                             <Form.Control onChange={handleChange} name="price" id="price" size="lg" required type="number" placeholder="Price in BIT" />
//                             <div className="d-grid px-0">
//                                 <Button onClick={handleEvent} variant="primary" size="lg">
//                                     Create NFT!
//                                 </Button>
//                             </div>
//                         </Row>
//                     </div>
//                 </main>
//             </div>
//         </div>
//     );
// }

// export default Create
import React, { ChangeEvent, MouseEvent, useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useCounterContract } from '../hooks/useMainContract';

interface FormInfo {
    title: string;
    description: string;
    price: number | null;
}

interface DataInfo {
    name: string;
    description: string;
    image: string;
    video: string;
    price: number | null;
}

const Create: React.FC = () => {
    const [nftImage, setNFTImage] = useState<File | undefined>();
    const [videoFile, setVideoFile] = useState<File | undefined>();
    const [formInfo, setFormInfo] = useState<FormInfo>({
        title: "",
        description: "",
        price: null
    });

    useEffect(() => {
        document.title = "Create"
    }, []);
    const { Minting } = useCounterContract();
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        setFormInfo((prevState) => ({ ...prevState, [name]: value }));
    };

    const changeHandler = (event: ChangeEvent<HTMLInputElement>, type: string) => {
        if (event.target.files && event.target.files[0]) {
            if (type === 'image') {
                setNFTImage(event.target.files[0]);
            } else if (type === 'video') {
                setVideoFile(event.target.files[0]);
            }
        }
    };

    const handleEvent = async (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!nftImage || !videoFile) {
            console.error("Image or video not selected.");
            return;
        }
        Minting().then(()=>{
            toast.success("NFT Created Successfully!");
        }).catch((err) => {
            alert("Transaction fail" + err)
          });
        try {
            // Upload image
            const formDataImage = new FormData();
            formDataImage.append("file", nftImage);
            const resImage = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formDataImage, {
                headers: {
                    pinata_api_key: `18475aac732291be8c7c`,
                    pinata_secret_api_key: `4593b2a9ce8fd83a816bd16971d4454828f291374549874739250f5d95128009`,
                    "Content-Type": "multipart/form-data",
                },
            });
            const imgHash = `https://gateway.pinata.cloud/ipfs/${resImage.data.IpfsHash}`;

            // Upload video
            const formDataVideo = new FormData();
            formDataVideo.append("file", videoFile);
            const resVideo = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formDataVideo, {
                headers: {
                    pinata_api_key: `18475aac732291be8c7c`,
                    pinata_secret_api_key: `4593b2a9ce8fd83a816bd16971d4454828f291374549874739250f5d95128009`,
                    "Content-Type": "multipart/form-data",
                },
            });
            const videoHash = `https://gateway.pinata.cloud/ipfs/${resVideo.data.IpfsHash}`;

            // Create metadata
            const metadata: DataInfo = {
                name: formInfo.title,
                description: formInfo.description,
                image: imgHash,
                video: videoHash,
                price: formInfo.price
            };

            // Upload metadata
            const metadataRes = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", metadata, {
                headers: {
                    'Content-Type': 'application/json',
                    'pinata_api_key': `18475aac732291be8c7c`,
                    'pinata_secret_api_key': `4593b2a9ce8fd83a816bd16971d4454828f291374549874739250f5d95128009`
                },
            });

            const metaHash = `https://gateway.pinata.cloud/ipfs/${metadataRes.data.IpfsHash}`;
            console.log(metaHash);
            // toast.success("NFT Created Successfully!");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center">
            <main role="main" className="container mx-auto px-4">
                <div className="content shadow-lg rounded-lg p-5 flex flex-col items-center">
                    <div className="space-y-8 w-full max-w-[500px]">
                        <input
                            type="file"
                            required
                            name="file"
                            accept="image/*"
                            onChange={(e) => changeHandler(e, 'image')}
                            className="rounded-lg border-2 border-gray-200 p-2 w-full text-white"
                        />
                        <input
                            type="file"
                            required
                            name="video"
                            accept="video/*"
                            onChange={(e) => changeHandler(e, 'video')}
                            className="rounded-lg border-2 border-gray-200 p-2 w-full text-white"
                        />
                        <input
                            onChange={handleChange}
                            name="title"
                            id="title"
                            required
                            type="text"
                            placeholder="Name"
                            className="rounded-lg border-2 border-gray-200 p-2 w-full"
                        />
                        <textarea
                            onChange={handleChange}
                            name="description"
                            id="description"
                            required
                            placeholder="Description"
                            className="rounded-lg border-2 border-gray-200 p-2 w-full"
                        />
                        <input
                            onChange={handleChange}
                            name="price"
                            id="price"
                            required
                            type="number"
                            placeholder="Price in TON"
                            className="rounded-lg border-2 border-gray-200 p-2 w-full"
                        />
                        <div className="flex justify-center">
                            <button
                                onClick={handleEvent}
                                className="inline-block rounded-full border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-accent-300 hover:bg-primary-50/50 hover:text-primary-accent-300 focus:border-primary-600 focus:bg-primary-50/50 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 motion-reduce:transition-none dark:text-primary-500 dark:hover:bg-blue-950 dark:focus:bg-blue-950 text-white"
                            >
                                Create NFT!
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>


    );

}

export default Create;



{/* <div className="min-h-screen flex justify-center items-center">
            <main role="main" className="mt-20">
                <div className="content mx-auto text-xl space-y-8 shadow-2xl rounded-lg border-2 p-8 bg-white bg-opacity-90">
                    <div className="grid grid-cols-1 gap-4">
                        <input
                            type="file"
                            required
                            name="file"
                            onChange={(e) => changeHandler(e, 'image')}
                            className="rounded-lg border-2 border-gray-200 p-2 w-full"
                        />
                        <input
                            type="file"
                            required
                            name="video"
                            onChange={(e) => changeHandler(e, 'video')}
                            className="rounded-lg border-2 border-gray-200 p-2 w-full"
                        />
                        <input
                            onChange={handleChange}
                            name="title"
                            id="title"
                            required
                            type="text"
                            placeholder="Name"
                            className="rounded-lg border-2 border-gray-200 p-2 w-full"
                        />
                        <textarea
                            onChange={handleChange}
                            name="description"
                            id="description"
                            required
                            placeholder="Description"
                            className="rounded-lg border-2 border-gray-200 p-2 w-full"
                        />
                        <input
                            onChange={handleChange}
                            name="price"
                            id="price"
                            required
                            type="number"
                            placeholder="Price in BIT"
                            className="rounded-lg border-2 border-gray-200 p-2 w-full"
                        />
                        <div className="flex justify-center">
                            <button
                                onClick={handleEvent}
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                            >
                                Create NFT!
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div> */}