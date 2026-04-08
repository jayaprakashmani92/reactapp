import React from "react";
import './../../styles/header.css'
import { Star, Bell, Expand, Cog, Menu    } from 'lucide-react';  
export default function Header() {
  return (
   <nav className="navbar navbar-expand-lg bg-white header-main py-0 fixed-top">
        <div className="container-fluid px-2">
            <div className="d-flex align-items-center gap-1">
             <Menu strokeWidth={1}/>
                <span className="fst-italic fw-bold text-dark d-block ms-2">
                   Google
                </span>
            </div>

            <div className="search-container mx-auto d-none d-md-flex">
                <i className="bi bi-search text-muted" ></i>
                <input type="text" placeholder="Search across all projects..." className="form-control border-0 bg-transparent shadow-none"/>
            </div>

            <div className="d-flex align-items-center gap-3">
                {/* <button className="btn btn-primary-custom btn-sm px-3 rounded-1">Track your paper</button> */}
                <div className="d-flex gap-3 text-muted border-end pe-3 h-menu-icon">
                    <Star/>
                    <Bell/> 
                    <Expand />
                   <Cog />
                </div>
                <div className="user-pill d-flex align-items-center gap-2">
                    <div className="avatar-blue">JP</div>
                    <div className="lh-1 userDetails">
                        <p className="mb-0 fw-bold small">Jayaprakash</p>
                        <small className="text-muted tiny">Developer</small>
                    </div>
                    <i className="bi bi-box-arrow-right ms-2"></i>
                </div>
            </div>
        </div>
    </nav>
  );
}
