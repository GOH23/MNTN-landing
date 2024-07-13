"use client"
import { m, motion } from 'framer-motion'
import '../styles.css'
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, EffectCoverflow } from 'swiper/modules';
import { SwiperSlide, Swiper } from 'swiper/react';
import { Header } from './Header';
import { Col, Container, Row } from 'react-bootstrap';
import { ContentRow, AnimationVariants } from './ContentRow';
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { H1Component } from './H1Component';

export default function MainPage() {
    const RenderBullet = (index: number, className: string): string => {
        return `<span class="${className}">${index == 0 ? `Start` : index == 4 ? `End` : index}</span>`;
    }
    return (<>
        <Swiper
            direction={'vertical'}
            coverflowEffect={{
                slideShadows: true,

            }}
            pagination={{
                clickable: true,
                bulletClass: 'sw_bullet',
                bulletActiveClass: 'sw_bullet_active',
                renderBullet: (index: number, className: string) => RenderBullet(index, className)
            }}
            effect='fade'

            mousewheel
            modules={[Pagination, Mousewheel, EffectCoverflow]}
            className="mySwiper"
        >

            <SwiperSlide className='sw_slide'>
                <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 0.25 }} className='bg type-a' src='./HG.png' alt='' />
                <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 0.5}} className='bg type-b' src='./MG.png' alt='' />
                <motion.img initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1,delay: 0.75 }} className='bg type-c' src='./VG.png' alt='' />
                <Header />
                <Container className='d-flex fw-bold flex-column justify-content-center align-items-start  h-100' style={{zIndex: 99}}>
                    <motion.figcaption {...AnimationVariants(0.7, 'imageright')} className=" blockquote-footer blockquote-footer_updated text-uppercase color-1 ">
                        A Hiking guide
                    </motion.figcaption>
                    <H1Component className=' color-2 text-start'  {...AnimationVariants(1,  'imageright')}>
                        Be prepared for the Mountains and beyond!
                    </H1Component>
                </Container>
            </SwiperSlide>

            <SwiperSlide className='sw_slide'>
                <ContentRow NumberOfComponent='01' type={'imageright'} Title='What level of hiker are you?' imageSource={'/01.png'} Description={'Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?'} figcaption={'GEt Started'} />
            </SwiperSlide>

            <SwiperSlide className='sw_slide'>
                <ContentRow
                    NumberOfComponent='02'
                    type={'imageleft'}
                    GColConfig={{ ColRightNumber: 5, ColLeftNumber: 6 }}
                    Title='Picking the right Hiking Gear!'
                    imageSource={'/01 (1).png'}
                    Description={`
                    The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have.
                    Let’s start with clothing.
                    A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet.
                `} figcaption={'Hiking Essentials'} />
            </SwiperSlide>
            <SwiperSlide className='sw_slide'>
                <Container>
                    <ContentRow
                        NumberOfComponent='03'
                        type={'imageright'}
                        GColConfig={{ ColRightNumber: 6, ColLeftNumber: 5 }}
                        Title='Understand Your Map & Timing'
                        imageSource={'/01 (2).png'}
                        Description={`
                    To start, print out the hiking guide and map.
                    If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect.
                    I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction..
                `} figcaption={'where you go is the key'} />
                </Container>
            </SwiperSlide>
            <SwiperSlide style={{ height: '100%', padding: '' }}>
                <Container>

                    <Row>
                        <Col className='text-start color-2 fw-bold' >
                            <p>MNTN</p>
                            <p>Get out there & discover your next slope, mountain & destination!</p>
                            <p className='mt-auto'>Copyright 2023 MNTN, Inc. Terms & Privacy</p>
                        </Col>
                        <Col>
                            <Row md={2} sm={1}>
                                <Col md={6}>
                                    <p className='fw-bold color-1'>More on The Blog</p>
                                    <a href='' className='color-2 text-decoration-none d-block mb-2'>About MNTN</a>
                                    <a href='' className='color-2 text-decoration-none d-block mb-2'>Contributors & Writers</a>
                                    <a href='' className='color-2 text-decoration-none d-block mb-2'>Write For Us</a>
                                    <a href='' className='color-2 text-decoration-none d-block mb-2'>Contact Us</a>
                                    <a href='' className='color-2 text-decoration-none d-block mb-2'>Privacy Policy</a>
                                </Col>
                                <Col md={6}>
                                    <p className="fw-bold color-1">More on MNTN</p>
                                    <a href='' className='color-2 text-decoration-none d-block mb-2'>The Team</a>
                                    <a href='' className='color-2 text-decoration-none d-block mb-2'>Jobs</a>
                                    <a href='' className='color-2 text-decoration-none d-block mb-2'>Press</a>
                                </Col>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </SwiperSlide>
        </Swiper>
        <div className='socials-wrapper color-2'>
            <p className='h6 mb-0'>Follow us</p>
            <CiInstagram style={{ fontSize: '30px' }} />
            <CiTwitter style={{ fontSize: '30px' }} />
        </div>
    </>)
}