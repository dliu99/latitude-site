

export default function Footer() {
    return(
        <footer className="footer bg-latitude-blue text-base-content p-10">
            <aside>
                <img src='../src/assets/latitude.webp' alt="Latitude Packaging LLC" className="w-20 h-20"/>
                <p>
                Latitude Packaging LLC
                <br />
                Est. 2024
                </p>
            </aside>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About Us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Feedback</a>
                <a className="link link-hover">Team</a>
            </nav>
            <nav>
                <h6 className="footer-title">Account</h6>
                <a className="link link-hover">Subscription</a>
                <a className="link link-hover">Membership</a>
                <a className="link link-hover">My Market Page</a>
                <a className="link link-hover">My Market Products</a>
            </nav>
            <nav>
                <h6 className="footer-title">Explore</h6>
                <a className="link link-hover">Top Markets</a>
                <a className="link link-hover">Sell with Latitude</a>
                <a className="link link-hover">Help Center</a>
            </nav>
        </footer>
    );
}