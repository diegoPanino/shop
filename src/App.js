import './app.scss';
import Header from './component/Header.js'
import MainNavigationBar from './component/MainNavigationBar.js'

export default function App(){

  return (
    <>
      <Header className = 'container-fluid' />        
      <MainNavigationBar />
    </>
  )
}
