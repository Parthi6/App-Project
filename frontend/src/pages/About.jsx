import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={' US'} />
      </div>
      
      <div className='my-5 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="About us" />
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>We are a passionate team dedicated to delivering high-quality products and exceptional customer service. With a focus on innovation and sustainability, our goal is to provide solutions that enhance the lives of our customers and the communities we serve.</p>
            <p>Founded on the belief that technology can solve real-world problems, we strive to create products that not only meet the needs of today, but also anticipate the challenges of tomorrow. We’re committed to continuous improvement and offering services that exceed expectations.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>Our mission is simple: to deliver value through cutting-edge products and a customer-first approach. We aim to make a positive impact on society, improving lives and businesses while fostering trust and building lasting relationships with our customers.</p>
          </div>
      </div>
      
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={' CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-500'>We are committed to the highest standards of quality. Every product undergoes rigorous testing and quality control to ensure it meets the needs and expectations of our customers, providing long-lasting reliability and performance.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-500'>We believe in making things easier for you. Our products are designed with your convenience in mind, offering intuitive functionality, easy integration, and a seamless user experience that saves time and effort.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-500'>Our dedicated customer support team is always here to help. Whether you have questions or need assistance, we are just a call or click away, ready to offer solutions and ensure your complete satisfaction.</p>
        </div>
      </div>

      <NewsLetterBox />
    </div>
  )
}

export default About