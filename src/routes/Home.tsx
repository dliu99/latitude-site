import { Link } from 'react-router-dom';
import Carousel from '../components/ProdCards.tsx'


function pauseVideo() {
  let iframe = document.getElementsByTagName("iframe")[0];
  let url: string = ""+iframe.getAttribute("src");
  iframe.setAttribute("src", "");
  iframe.setAttribute("src", url);
}

export default function Home() {
    return (
        <>

            {/* hero */}
            <div className="hero bg-base-100 min-h-96">
                <div className="hero-content text-center">
                    <div className="max-w-4xl">
                    <h1 className="text-5xl font-bold">Shop and choose from competent brands</h1>
                    <p className="text-lg py-6">
                    Latitude Packaging has everything you need for your business, <i className="underline decoration-sky-500">and more.</i>
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
                        <Link to="/products">
                        <button className="btn px-4 py-2 bg-sky-300 hover:bg-sky-400 transition duration-200 rounded-lg text-black shadow-[0px_2px_0px_0px_#FFFFFF40_inset]">
                        Get Started
                        </button></Link>
                        
                        <button onClick={()=>((document.getElementById('trailer')) as HTMLDialogElement).showModal()} className="btn bg-slate-200 rounded-lg px-4 py-2  text-black ">Watch trailer</button>
                        
                        <dialog id="trailer" className="modal">
                        <div className="modal-box items-center">
                            <iframe id="vid1" src="https://drive.google.com/file/d/1ff3m1QUePod2GasRa_Lkugp6mX0_iagK/preview" title="Latitude Trailer" width="460" height="240" allow="autoplay" allowFullScreen></iframe>
                            <div className="modal-action">
                            <form method="dialog">
                                <button onClick={pauseVideo} className="btn">Close</button>
                            </form>
                            </div>
                        </div>
                        </dialog>
                    </div>
                    </div>
                </div>
            </div>      
            <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  tems-start justify-start  text-black">
                <Carousel/>
            </div>
            
        </>
    )
}
