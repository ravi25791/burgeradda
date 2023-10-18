import React from 'react'
import Section4 from '../home/Section4'
import Banner from '../../component/layout/Banner'

const Blog = () => {
    return (
        <div>
              <Banner
                titletext="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                title="Welcome to Blog"
                subTitle="Welcome To Tasty Burger"
            ></Banner>
            <Section4 />
        </div>
    )
}

export default Blog
