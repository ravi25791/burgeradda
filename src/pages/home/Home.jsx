import React from 'react';
import Layout from '../../component/layout/Layout'
import Section1 from './Section1';
import  '../../assets/style/homeStyle.css'
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Banner from '../../component/layout/Banner';



const Home = () => {
  return (
    <>
      <Layout>
      {/* ----------------------------- hero component ----------------------------- */}
        <Section1 />
       

        {/* -----------------------------home about component ---------------------------- */}
        <Section2 />

       { /* ---------------------------- home section menu --------------------------- */}
        <Section3 />

        { /* ---------------------------- home section4 promotion --------------------------- */}
        <Section4 />

        { /* ---------------------------- home section5 shop --------------------------- */}
        <Section5 />

        { /* ---------------------------- Review section6  --------------------------- */}
        <Section6 />

        { /* ---------------------------- contact section7  --------------------------- */}
        <Section7 />

      </Layout>
    </>
  )
}

export default Home;