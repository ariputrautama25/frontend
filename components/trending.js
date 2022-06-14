import { Card, Col, Container, Row,Image } from 'react-bootstrap';
// import imageXmen from "../assets/images/x-men.jpeg"

const Trending = () => {
   return(
<Container>
   <Row>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="jujutsu.png" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Jujutsu Kaisen</Card.Text>
         <Card.Text>Bagus 7.9/10</Card.Text>
         </div>
       
      
       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/kimetsu.png" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Kimetsu No Yaiba</Card.Text>
         <Card.Text>Bagus 9.0/10</Card.Text>
         </div>
       
      

         </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/kkn.png" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>KKN Di Desa Penari</Card.Text>
         <Card.Text>Bagus 8.5/10</Card.Text>
         </div>
       
      
       </Card>
       </Col>
       <Col md={4} className='movieWrapper'>
       <Card className='bg-transparent text-white text-center movieImage'>
         <Image src="/strange.png" alt="card image"  height="auto"></Image>
         <div className='bg-dark p-2 m-1'>
         <Card.Text>Doctor Strange Multiverse Of Madiness</Card.Text>
         <Card.Text>Bagus 8.9/10</Card.Text>
         </div>
       
      
       </Card>
       </Col>
   </Row>
</Container>

   )
}
export default Trending
