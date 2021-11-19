import './app.scss';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Header from './component/Header.js'
import MainNavigationBar from './component/MainNavigationBar.js'

export default function App(){

  return (
      <Container fluid>
        <Row sm = {1}>
          <Header />
        </Row>
        <Row sm = {1}>
          <MainNavigationBar />
        </Row>
      </Container>
    )
}
