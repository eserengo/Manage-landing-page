import Link from './Link.js';
import Button from "./Button";
import List from "./List";

const NavWithModal = () => {
  const [modal, setModal] = React.useState(false);
  const routes = [
    <Link href='/Frontendmentor.io/Manage-landing-page/' className='link' children='Home' />,
    <Link href='/Frontendmentor.io/Manage-landing-page/products' className='link' children='Products' />,
    <Link href='/Frontendmentor.io/Manage-landing-page/about' className='link' children='About Us' />,
    <Link href='/Frontendmentor.io/Manage-landing-page/careers' className='link' children='Careers' />,
    <Link href='/Frontendmentor.io/Manage-landing-page/community' className='link' children='Community' />,
  ];
  
  const toggleModal = () => {
    setModal((prevState) => !prevState);
    document.querySelector('.main').classList.toggle('blur');
    document.querySelector('.footer').classList.toggle('blur');
  }

  const Logo = () => (
    <ReactBootstrap.Navbar.Brand><ReactBootstrap.Image className='logo mt-sm-2' alt='logo' src='./src/images/logo.svg' /></ReactBootstrap.Navbar.Brand>
  );

  return (
    <header className='header'>
      <ReactBootstrap.Nav className='d-block d-sm-none'>
        {
          !modal ? 
            <ReactBootstrap.Nav.Item className='d-flex flex-row justify-content-between align-items-center px-3 py-5'>
              <Logo />
              <ReactBootstrap.Image className='icon mb-1' alt='menu icon' src='./src/images/icon-hamburger.svg' onClick={toggleModal} />
            </ReactBootstrap.Nav.Item>
          :
            <ReactBootstrap.Modal.Dialog className='p-3'>
              <ReactBootstrap.Modal.Header className='d-flex flex-row justify-content-between align-items-center py-4'>
                <ReactBootstrap.Modal.Title><Logo /></ReactBootstrap.Modal.Title>
                <ReactBootstrap.Image className='icon mb-1' alt='close icon' src='./src/images/icon-close.svg' onClick={toggleModal} />
              </ReactBootstrap.Modal.Header>
              <ReactBootstrap.Modal.Body className='py-5'>
                <ReactBootstrap.Nav.Item as='ul' className='d-flex flex-column justify-content-center align-items-center p-2 m-0'>
                  <List target={routes} hash='routes__1' BS__options='p-2' />
                </ReactBootstrap.Nav.Item>
              </ReactBootstrap.Modal.Body>
            </ReactBootstrap.Modal.Dialog>
        }
      </ReactBootstrap.Nav>
      <ReactBootstrap.Nav className='d-none d-sm-flex justify-content-between align-items-center p-5'>
        <Logo />
        <ReactBootstrap.Nav.Item as='ul' className='d-inline-flex fle-row m-0 p-0'>
          <List target={routes} hash='routes__2' BS__options='p-2' />
        </ReactBootstrap.Nav.Item>
        <Button />
      </ReactBootstrap.Nav>
    </header>
  )
}

export default NavWithModal;