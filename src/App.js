import './app.scss';
import Container from 'react-bootstrap/Container'
import Header from './component/Header.js'
import MainNavigationBar from './component/MainNavigationBar.js'

export default function App(){

  return (
      <Container fluid>
        <Header />
        <MainNavigationBar />
      </Container>

    )
}
