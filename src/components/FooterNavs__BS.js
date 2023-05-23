import Link from "./Link";
import List from "./List";

const FooterNavs = () => {
  const routes__left = [
    <Link href='/Frontendmentor.io/Manage-landing-page/' className='link' children='Home' />,
    <Link href='/Frontendmentor.io/Manage-landing-page/products' className='link' children='Products' />,
    <Link href='/Frontendmentor.io/Manage-landing-page/about' className='link' children='About Us' />,
  ];

  const routes__right = [
    <Link href='/Frontendmentor.io/Manage-landing-page/careers' className='link' children='Careers' />,
    <Link href='/Frontendmentor.io/Manage-landing-page/community' className='link' children='Community' />,
    <Link href='/Frontendmentor.io/Manage-landing-page/privacy_policy' className='link' children='Privacy Policy' />,
  ];

  const social = [
    <ReactBootstrap.Image className='icon' alt='facebook icon' src='./src/images/icon-facebook.svg' />,
    <ReactBootstrap.Image className='icon' alt='youtube icon' src='./src/images/icon-youtube.svg' />,
    <ReactBootstrap.Image className='icon' alt='twitter icon' src='./src/images/icon-twitter.svg' />,
    <ReactBootstrap.Image className='icon' alt='pinterest icon' src='./src/images/icon-pinterest.svg' />,
    <ReactBootstrap.Image className='icon' alt='instagram icon' src='./src/images/icon-instagram.svg' />,
  ];
  
  const Logo = () => (
    <ReactBootstrap.Navbar.Brand className='order-3 order-sm-0 text-center my-3'><ReactBootstrap.Image className='logo' alt='logo' src='./src/images/footer-logo.svg' /></ReactBootstrap.Navbar.Brand>
  );

  const Input = () => {
    const [isValidated, setIsValidated] = React.useState();
    const emailRef = React.useRef(null);
    const emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    const handleSubmit = (event) => {

      const validated = () => {
        setIsValidated(true);
        emailRef.current.classList.contains('not__validated') && emailRef.current.classList.remove('not__validated');
        emailRef.current.classList.add('validated');
      }

      const notValidated = () => {
        setIsValidated(false);
        emailRef.current.classList.contains('validated') && emailRef.current.classList.remove('validated');
        emailRef.current.classList.add('not__validated');
      }

      event.preventDefault();
      emailRef.current.value.match(emailRegEx) ? validated() : notValidated();
    };

    return (
      <ReactBootstrap.Nav.Item className='order-0 order-sm-2 mb-4 my-sm-2'>
        <input ref={emailRef} type='email' className='input rounded-pill p-1 me-2' placeholder='Updates in your inbox...' autoComplete='off' />
        <ReactBootstrap.Button type='submit' className='rounded-pill px-3 py-2' onClick={(event) => handleSubmit(event)}>Go</ReactBootstrap.Button>
        {isValidated && <em className='message success d-block ms-1 mt-1'>Accepted</em>}
        {(!isValidated && emailRef.current != null) && <em className='message error d-block ms-1 mt-1'>Please enter a valid email</em>}
      </ReactBootstrap.Nav.Item>
    )
  };

  return (
    <footer className='footer px-2 py-4 px-sm-5'>
      <ReactBootstrap.Nav className='d-flex flex-column flex-sm-row align-items-center align-items-sm-start justify-content-sm-between'>
        <Logo />
        <ReactBootstrap.Nav.Item as='ul' className='order-2 order-sm-3 d-flex justify-content-evenly mt-2 p-0 start-0 bottom-0'>
          <List target={social} hash='social' BS__options='p-2' />
        </ReactBootstrap.Nav.Item>
        <Input />
        <ReactBootstrap.Nav.Item className='order-1 d-flex flex-column flex-sm-row'>
          <ReactBootstrap.Nav.Item as='ul' className='d-flex flex-column align-items-center align-items-sm-start p-0'>
            <List target={routes__left} hash='routes__left' BS__options='p-2' />
          </ReactBootstrap.Nav.Item>
          <ReactBootstrap.Nav.Item as='ul' className='d-flex flex-column align-items-center align-items-sm-start ms-sm-5 p-0'>
            <List target={routes__right} hash='routes__right' BS__options='p-2' />
          </ReactBootstrap.Nav.Item>
        </ReactBootstrap.Nav.Item>
        <ReactBootstrap.Nav.Item className='order-4'>
          <p className='copyright mt-4'>Copyright 2020. All Rights Reserved.</p>
        </ReactBootstrap.Nav.Item>
      </ReactBootstrap.Nav>
    </footer>
  );
}

export default FooterNavs;