import { Button, Col, Image, Row } from "react-bootstrap"
import { MdOutlineArrowRightAlt } from "react-icons/md";
import styled from 'styled-components'
import { motion } from 'framer-motion'

class ColConfig{
    public static ColDefaultLeftNumber: number = 4;
    constructor(public ColLeftNumber?: number,public ColRightNumber?: number){}
}
type ImageOrientation =  'imageleft' | 'imageright'
type RowConfigType = { type: ImageOrientation, imageSource: string, Title: string, Description: string, figcaption: string,NumberOfComponent: string,GColConfig?: ColConfig};
const NumberComponent = styled(motion.p)`
position: absolute;
font-size: 200px;
top: -150px;
color: white;
opacity: 0.1;
font-weight: bold;
height: 100%;
left: -110px;
z-index: -1;
margin-bottom: 0px;
@media (max-width: 768px) {
    z-index: 99;
    opacity: 0.5;
    left: 0px;
}
`
const AnimationVariants = (Delay: number = 0.5,type: ImageOrientation) => {
    return {
        initial: { x: type == 'imageright' ? -100 : 100, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        transition: { duration: 1, type: 'spring', delay: Delay }
    }
}
const ImageAnimationVariants = (Delay: number = 0.5,type: ImageOrientation) => {
    return {
        initial: { x: type == 'imageright' ? 100 : -100, opacity: 0 },
        whileInView: { x: 0, opacity: 1 },
        transition: { duration: 1, type: 'spring', delay: Delay }
    }
}
const ContentRow = ({type,imageSource,NumberOfComponent,figcaption,GColConfig,...RowConfig}: RowConfigType) => {



    return (<Row className={`justify-content-center position-relative align-items-center ${type == 'imageright' && "flex-row-reverse"}`} style={{ height: '100vh' }}>

        <Col className="mobile-absolute" md={GColConfig?.ColLeftNumber ? GColConfig?.ColLeftNumber : ColConfig.ColDefaultLeftNumber}>

            <motion.img {...ImageAnimationVariants(1,type)} src={imageSource} className="img-fluid" alt="" />
        </Col>
        <Col md={GColConfig?.ColLeftNumber ? GColConfig?.ColLeftNumber : ColConfig.ColDefaultLeftNumber} className="text-start position-relative ">
            <NumberComponent>{NumberOfComponent}</NumberComponent>
            <motion.figcaption {...AnimationVariants(0.7,type)} className=" blockquote-footer blockquote-footer_updated text-uppercase color-1">
                {figcaption}
            </motion.figcaption>
            <motion.h1 {...AnimationVariants(1,type)} className="display-6 fw-bold color-2">{RowConfig.Title}</motion.h1>
            <motion.p {...AnimationVariants(1.25,type)} style={{lineHeight: '32px'}} className="h6 color-2">{RowConfig.Description}</motion.p>
            <motion.a {...AnimationVariants(1.5,type)} style={{ cursor: 'pointer' }} className="button-show-more text-decoration-none color-1 h6 ">read more <MdOutlineArrowRightAlt /></motion.a>
        </Col>
    </Row>)
}
export { ContentRow,AnimationVariants,ImageAnimationVariants }
export type { RowConfigType,ImageOrientation }