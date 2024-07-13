import styled from "styled-components";
import {motion} from 'framer-motion'
const H1Component = styled(motion.h1)`
    text-align: start;
    font-size: 80px;
    @media screen and  (max-width: 768px){
        font-size: 50px;
    }
`
export {H1Component,}