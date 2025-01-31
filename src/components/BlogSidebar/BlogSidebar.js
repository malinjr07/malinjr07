import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.svg'



const ClickHandler = () => {
    window.scrollTo(10, 0);
}

const BlogSidebar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <div className="blog-sidebar">
            <div className="search-widget widget">
                <h2>Search Here</h2>
                <form className="search-fild" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        className="fild"
                        placeholder="Search.."
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <button type="submit">
                        <i className="ti-search"></i>
                    </button>
                </form>
            </div>
            <div className="category-widget widget">
                <h2>Post Category:</h2>
                <ul>
                    <li><Link onClick={ClickHandler} to={`/blog-single/1`}>Website Design</Link></li>
                    <li><Link onClick={ClickHandler} to={`/blog-single/1`}>Mobile App Design</Link></li>
                    <li><Link onClick={ClickHandler} to={`/blog-single/1`}>Web App Design</Link></li>
                    <li><Link onClick={ClickHandler} to={`/blog-single/1`}>Branding Design</Link></li>
                    <li><Link onClick={ClickHandler} to={`/blog-single/1`}>Family Law</Link></li>
                    <li><Link onClick={ClickHandler} to={`/blog-single/1`}>Personal Injury</Link></li>
                </ul>
            </div>
            <div className="contact-widget widget">
                <div className="logo">
                    <Link onClick={ClickHandler} to="/">
                        <img src={Logo} alt="" />
                    </Link>
                </div>
                <h2>Contact Us Now</h2>
                <Link onClick={ClickHandler} to="tel:+4733378901" className="call">(629) 555-0129</Link>
                <div className="contact-btn">
                    <Link onClick={ClickHandler} to="/contact" className="theme-btn">Get Started</Link>
                </div>
            </div>
            <div className="tag-widget widget">
                <h2>Popular Tags:</h2>
                <ul>
                    <li><Link onClick={ClickHandler} to={`/blog-single/1`}>corporate</Link></li>
                    <li><Link onClick={ClickHandler} to={`/blog-single/1`}>creative</Link></li>
                    <li><Link onClick={ClickHandler} to={`/blog-single/1`}>modern</Link></li>
                    <li><Link onClick={ClickHandler} to={`/blog-single/1`}>one page</Link></li>
                    <li><Link onClick={ClickHandler} to={`/blog-single/1`}>personal</Link></li>
                    <li><Link onClick={ClickHandler} to={`/blog-single/1`}>photography</Link></li>
                    <li><Link onClick={ClickHandler} to={`/blog-single/1`}>lawyer</Link></li>
                    <li><Link onClick={ClickHandler} to={`/blog-single/1`}>Consulter</Link></li>
                </ul>
            </div>
        </div>
    )

}

export default BlogSidebar;


