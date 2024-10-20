import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <div className="navbar bg-[#EEF9FB] h-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            className="inline-block h-5 w-5 stroke-current">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-md dropdown-content bg-latitude-blue border-2 border-sky-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><a>Products</a></li>
                        <li><a>Restaurant Essentials</a></li>
                        <li><a>About</a></li>
                    </ul>
                </div>
            </div>
        <div className="navbar-center">
            <div className="flex-1 size-12">
                <Link to="/">
                    <img src="../src/assets/latitude.webp" className="btn btn-ghost btn-circle avatar rounded"></img>
                </Link>
            </div>
        </div>
        <div className="navbar-end">
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="badge badge-sm indicator-item">8</span>
                        </div>
                    </div>
                <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                    <div className="card-body">
                    <span className="text-lg font-bold">x items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <Link to="/cart"><button className="btn btn-primary btn-block">View cart</button></Link>
                    </div>
                    </div>
                </div>
                </div>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="display: block margin: auto">
                    <svg xmlns="http://www.w3.org/2000/svg"  width="22"  height="22" viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-user"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" /><path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" /></svg>
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li>
                        <Link to="/login">{/**change later, should go to profile page if logged in*/}
                            <b className="text-lg text-black hover:shadow-xl hover:bg-gradient-to-r from-cyan-500 to-blue-500 inline-block bg-clip-text">
                                Hi, User
                            </b>
                        </Link>
                    </li>

                    <li>
                        <Link to="/orders" className="justify-between">{/**replace to <Link> object once routing done */}
                            Orders
                            <span className="badge">New</span>
                        </Link>
                    </li>
                    <li><Link to="/membership">LP Membership</Link></li>
                    <li><Link to="/subscriptions">Subscriptions</Link></li>
                    <li><a>For You</a></li>
                    <li><a>Support</a></li>
                    <br></br>
                    <li><a>Sign Out</a></li>
                </ul>
                </div>
            </div>
        </div>
        </div>
    );
}