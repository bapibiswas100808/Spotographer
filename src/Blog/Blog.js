import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import BlogSection from '../components/BlogSection/BlogSection';
import SectionHeading from '../components/SectionHeading/SectionHeading';
import Subheader from "../components/Subheader/Subheader"
import "./Blog.css"

const Blog = () => {
    return (
    <>
    <Subheader/>
    <Container>
    <section className='blog-area'>
    <SectionHeading heading="Questions Answer" />
    <BlogSection/>
    </section>
    </Container>
    </>
    )
};

export default Blog;