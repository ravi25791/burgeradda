import React from 'react'
import Banner from '../../component/layout/Banner'
import Section5 from '../home/Section5'

const Shop = (props) => {
    return (
        <div>
              <Banner
                titletext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                title="This is About Us"
                subTitle="Welcome To Tasty Burger"
            ></Banner>
            <Section5 />

        </div>
    )
}

export default Shop
