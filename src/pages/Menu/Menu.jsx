import React from 'react'
import Section3 from '../home/Section3'
import Banner from '../../component/layout/Banner'

const Menu = (props) => {
    return (
        <div>
              <Banner
                titletext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                title="This is Our Shop"
                subTitle="Welcome To Tasty Burger"
            ></Banner>
            <Section3 />
        </div>
    )
}

export default Menu
