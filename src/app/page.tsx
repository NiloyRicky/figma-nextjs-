import React from "react";

import Navbar from "@/components/Navbar/Navbar";
import Breadcrums from "@/components/Breadcrums/Breadcrums";
import Hero from "@/components/Hero/Hero";
import Heroine from "@/components/Heroine/Heroine";
import Products from "@/components/Products/Products";
import Main from "@/components/MainProduct/Main";
import MainProduct from "@/components/MainProduct/MainProduct";


export default function Home() {
  return (
    <div>
      
  <Navbar/>
  <Breadcrums/>
  <Hero/>
  <Heroine/>
  <Products/>
  <MainProduct/>

     
    </div>
  );
}
