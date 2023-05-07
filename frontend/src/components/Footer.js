import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase">BIB Store</h5>
                <p>Here you can use rows and columns to organize your footer content.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Support Switchboard</h5>
                <ul className="list-unstyled">
                    <li>Nghia: 0867469413</li>
                    <li>Thuan: 0704797165</li>
                    
                    {/* <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li> */}
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <ul className="list-unstyled">
                    <li className="py-1">
                        <a href="https://www.youtube.com/@sangtaodientu" className="align-items-center p-0 text-dark">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/youtube.svg" width="30px"/>
                        </a>
                    </li>
                    <li className="py-3">
                        <a href="https://www.facebook.com/caonhuthuan1" className="align-items-center p-0 text-dark">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/facebook.svg" width="30px"/>
                        </a>
                    </li>
                    {/* <li>
                        <a href="https://www.youtube.com/S%C3%A1ngT%E1%BA%A1o%C4%90i%E1%BB%87nT%E1%BB%AD1" className="align-items-center p-0 text-dark">
                            <img src="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/youtube.svg" width="30px"/>
                        </a>
                    </li> */}
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3">© 2023 Copyright: Thanh Nghia</div>

</footer>

export default Footer