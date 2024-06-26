import { Link } from "react-router-dom";
import { TonConnectButton } from '@tonconnect/ui-react';
function Nav() {

  return (

    <nav className="border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-700 transition ease-in-out hover:bg-gray-950 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex cursor-pointer items-center space-x-3 rtl:space-x-reverse">
          <Link className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" to="/">NFT MarketPlace</Link>

        </div>

        <div className='w-1/2 flex justify-around px-6'>
          <Link className='no-underline text-gray-200 text-lg font-semibold hover:text-xl' to="/home">Home</Link>
          <Link className='no-underline text-gray-200 text-lg font-semibold hover:text-xl' to="/create">Create</Link>
          {/* <Link className='no-underline text-gray-200 text-lg font-semibold hover:text-xl' to="/my-listed-nfts">My Listed Items</Link>
          <Link className='no-underline text-gray-200 text-lg font-semibold hover:text-xl' to="/my-purchases">My Purchases</Link> */}
        </div>
        <TonConnectButton />

        <div className='flex justify-center items-center'>
          {/* This is address Button replace this with Ton connect button */}
          {/* <button type="button" className="inline-flex items-center justify-center border-1 p-2 w-22  h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-hamburger" aria-expanded="false">
    {account.slice(0, 5) + '...' + account.slice(38, 42)} */}
          {/* </button> */}

        </div>




      </div>
    </nav>

  )
}

export default Nav