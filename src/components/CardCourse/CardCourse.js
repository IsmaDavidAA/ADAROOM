import React from 'react'
//import Imagen from '../../images/java.jpg'
import { StyledCard, CardContainer, ImageC, Course, Institution, Inscribed } from './StyleList'

export default function CardCourse({ codigo, nombreCurso, institucion, imagen, cantInscritos }) {

    return (
        <StyledCard className='d-flex'>
            <ImageC className='p-15px' src={imagen} alt="" srcset="" width="300" />
            <CardContainer className='p-15px'>
                <Course className='text-bold space'>{nombreCurso}</Course>
                <Institution className='text-gray space'>{institucion}</Institution>
                <Inscribed className='text-bold'>{cantInscritos} Participantes</Inscribed>
            </CardContainer>
        </StyledCard>
    )
}
