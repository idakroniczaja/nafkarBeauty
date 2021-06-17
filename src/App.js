import {Switch, Link, Route} from 'react-router-dom';
import {useState, useRef} from 'react'




import Header from './components/Header';
import Content from './components/Content'



function App() {

  const [active, setActive] = useState(false);

  const changeToHome = useRef(null);
  const changeToAbout = useRef(null);
  const changeToContact = useRef(null);
  const changeToServices = useRef(null);
  const changeToGallery = useRef(null);




const goToHome = () => window.scrollTo({top: changeToHome.current.offsetTop, behavior:'smooth'});
console.log(changeToContact)
const goToAbout = () => window.scrollTo({top: changeToAbout.current.offsetTop+270, behavior:'smooth'});
const goToServices = () => window.scrollTo({top: changeToServices.current.offsetTop+200, behavior:'smooth'})
const goToContact = () => window.scrollTo({top: changeToContact.current.offsetTop+300, behavior:'smooth'});
const goToGallery = async() => {
    if (!active){
      await setActive(!active);
        window.scrollTo({top: changeToGallery.current.offsetTop+200, behavior:'smooth'});
    } else{
      await setActive(!active);
    }
};



  return (
    <>
    <div className='App'>
    <Header active={active} setActive={setActive} goToHome={goToHome} goToAbout={goToAbout} goToServices={goToServices} goToContact={goToContact} goToGallery={goToGallery}/>
    <Content active={active} setActive={setActive} changeToHome={changeToHome} changeToAbout={changeToAbout} changeToServices={changeToServices} changeToContact={changeToContact} changeToGallery={changeToGallery}/> 
    </div>

    </>
  );
}

export default App;
