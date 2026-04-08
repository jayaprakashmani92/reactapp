import '../../styles/footer.css'
export default function Footer(){
    return <>
     <footer className="footer-compact border-top bg-white px-3 py-1">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-12 d-flex align-items-center gap-3  justify-content-center">
                        {/* <span className="text-muted tiny">© 2026 | <strong className="text-dark">Straive</strong>. All rights
                            reserved.</span> */} 
                        <div className="footer-links d-flex gap-2">
                            <a href="#" className="text-muted text-decoration-none tiny-hover">Privacy Policy</a>
                            <a href="#" className="text-muted text-decoration-none tiny-hover">Terms of Service</a>
                        </div>
                    </div>
                     {/* <div className="col-md-6 text-md-end">
                       <span className="badge bg-light text-muted border fw-normal">
                            System Status: <span className="text-success">●</span> Operational
                        </span>
                        <span className="ms-3 text-muted tiny">Version 3.2.1</span> 
                    </div>*/}
                </div>
            </div>
        </footer>
    </>
}