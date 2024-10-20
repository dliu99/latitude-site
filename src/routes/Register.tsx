import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-background">
            <div className="card card-normal card-bordered bg-latitude-blue w-96 h-128 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">Sign up with Latitude</h2>
                    <p className="text-md text-slate-800 mb-4">Create an account with us and access 9999+ products</p>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" className="h-4 w-4 opacity-70">
                        <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" />
                        <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" />
                    </svg>
                        <input type="text" className="grow" placeholder="Name" />
                    </label>
                    
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                            <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                            <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                        </svg>
                        <input type="text" className="grow" placeholder="Email" />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 22" fill="currentColor" className="h-4 w-4 opacity-70">
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                        <input type="number" className="grow" placeholder="Phone Number" />
                    </label>
                    
                    <label className="input input-bordered flex items-center gap-2 mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 opacity-70">
                            <path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" />
                        </svg>
                        <input type="password" className="grow" placeholder="Password" />
                    </label>
                    
                    <button className="btn btn-primary  mb-2">Register</button>                    
                    <div className="divider"></div>
                    <p className="text-center text-sm">
                        Already have an account? <Link to="/login" className="link link-primary">Login here</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}