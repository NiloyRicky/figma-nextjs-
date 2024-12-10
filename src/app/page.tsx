import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Breadcrums from "@/components/Breadcrums/Breadcrums";
import Hero from "@/components/Hero/Hero";
import Heroine from "@/components/Heroine/Heroine";
import Products from "@/components/Products/Products";

import MainProduct from "@/components/MainProduct/MainProduct";
import Services from "@/components/Services/Services";
import Sofa from "@/components/Sofa/Sofa";
import Footer from "@/components/Footer/Footer";


export default function Home() {
  return (
    <div>
      
  <Navbar/>
  <Breadcrums/>
  <Hero/>
  <Heroine/>
  <Products/>
  <MainProduct/>
  <Services/>
<Sofa/>
<Footer/>
    </div>
  );
}
