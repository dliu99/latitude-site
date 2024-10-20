import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

export default function Account() {
  return (
    <div className="max-w-4xl mx-auto p-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-2">Your Account</h1>
      <p className="text-lg mb-8">Hi (Name)!</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <Button className="flex items-center justify-center bg-sky-600 hover:bg-[#3490ce] text-white p-4 rounded-md size-full text-xl">
          <LockIcon className="w-6 h-6 mr-2" />
          Login and Security
        </Button>
        <Link to="/membership">
          <Button className="flex items-center justify-center bg-sky-600 hover:bg-[#3490ce] text-white p-4 rounded-md size-full text-xl">
            <CrownIcon className="w-6 h-6 mr-2" />
            Latitude Pro
          </Button>
        </Link>
        <Button className="flex items-center justify-center bg-sky-600 hover:bg-[#3490ce] text-white p-4 rounded-md size-full text-xl">
          <MapPinIcon className="w-6 h-6 mr-2" />
          Address
        </Button>
        <Link to="/subscriptions">
          <Button className="flex items-center justify-center bg-sky-600 hover:bg-[#3490ce] text-white p-4 rounded-md size-full text-xl">
            <RepeatIcon className="w-6 h-6 mr-2" />
            Product Subscriptions
          </Button>
        </Link>
        <Link to="/orders">
          <Button className="flex items-center justify-center bg-sky-600 hover:bg-[#3490ce] text-white p-4 rounded-md size-full text-xl">
            <PackageIcon className="w-6 h-6 mr-2" />
            Order History
          </Button>
        </Link>
        <Button className="flex items-center justify-center bg-sky-600 hover:bg-[#3490ce] text-white p-4 rounded-md size-full text-xl">
          <BookmarkIcon className="w-6 h-6 mr-2" />
          Saved Items
        </Button>
        <Button className="flex items-center justify-center bg-sky-600 hover:bg-[#3490ce] text-white p-4 rounded-md size-full text-xl">
          <PiggyBankIcon className="w-6 h-6 mr-2" />
          Payment Info
        </Button>
      </div>
    </div>
  )
}

function BookmarkIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}


function CrownIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
      <path d="M5 21h14" />
    </svg>
  )
}


function LockIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}


function MapPinIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}


function PackageIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m7.5 4.27 9 5.15" />
      <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="M12 22V12" />
    </svg>
  )
}


function PiggyBankIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z" />
      <path d="M2 9v1c0 1.1.9 2 2 2h1" />
      <path d="M16 11h0" />
    </svg>
  )
}


function RepeatIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m17 2 4 4-4 4" />
      <path d="M3 11v-1a4 4 0 0 1 4-4h14" />
      <path d="m7 22-4-4 4-4" />
      <path d="M21 13v1a4 4 0 0 1-4 4H3" />
    </svg>
  )
}
