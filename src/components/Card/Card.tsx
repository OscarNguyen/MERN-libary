import React from 'react'
import {
  Card as CardWrapper, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

type CardPropsType = {
  img: string
  title: string
  subtitle?: string
}
const Card: React.FC<CardPropsType> = ({ img, title, subtitle }) => {
  return (
    <CardWrapper>
      {/* <div className="img-container"> */}

      <CardImg src={img} alt="Picture of the book" />
      {/* </div> */}
      <CardBody>
        <CardTitle>{title}</CardTitle>
        {subtitle && <CardSubtitle>{subtitle}</CardSubtitle>}
      </CardBody>
      {/* <CardFooter>
        <Button>View More</Button>
      </CardFooter> */}
    </CardWrapper>
  )
}

export default Card
