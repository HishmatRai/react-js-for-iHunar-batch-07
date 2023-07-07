import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home ,About,NotFound,Contact} from "../../pages";
const RouterNavigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    )
}
export default RouterNavigation