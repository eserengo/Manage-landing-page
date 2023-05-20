import Button from "./Button";
import NavWithModal from "./NavWithModal__BS";
import Slideshow from "./Slideshow__BS";
import FooterNavs from "./FooterNavs__BS";
import Attribution from "./Attribution__BS.js";

const Home = () => {

  const Heading = () => (
    <section className='heading row text-center text-sm-start m-0 p-0'>
      <div className='col-12 col-sm-5'>
        <h1 className='primary title'>Bring everyone together to build better products.</h1>
      </div>
      <div className='w-100 d-none d-sm-block'></div>
      <div className='col-12 col-sm-5'>
        <p className='primary para'>Manage makes it simple for software teams to plan day-to-day
          tasks while keeping the larger team goals in view.</p>
      </div>
      <div className='w-100 d-none d-sm-block'></div>
      <div className='col-sm-5'>
        <Button />
      </div>
    </section>
  );

  const Information = () => (
    <section className='info row m-0 p-0'>
      <div className='col-12 col-sm-6'>
        <h2 className='secondary title text-center text-sm-start'>What’s different about Manage?</h2>
        <p className='secondary para text-center text-sm-start'>Manage provides all the functionality your team needs, without
          the complexity. Our software is tailor-made for modern digital
          product teams.</p>
      </div>
      <div className='col-12 col-sm-6'>
        <div>
          <span className='badge rounded-pill py-1'>01</span>
          <strong className='strong'>Track company-wide progress</strong>
          <p className='secondary para'>See how your day-to-day tasks fit into the wider vision. Go from
            tracking progress at the milestone level all the way done to the
            smallest of details. Never lose sight of the bigger picture again.</p>
        </div>
        <div>
          <span className='badge rounded-pill px-2 py-1'>02</span>
          <strong className='strong'>Advanced built-in reports</strong>
          <p className='secondary para'>Set internal delivery estimates and track progress toward company
            goals. Our customisable dashboard helps you build out the reports
            you need to keep key stakeholders informed.</p>
        </div>
        <div>
          <span className='badge rounded-pill px-2 py-1'>03</span>
          <strong className='strong'>Everything you need in one place</strong>
          <p className='secondary para'>Stop jumping from one service to another to communicate, store files,
            track tasks and share documents. Manage offers an all-in-one team
            productivity solution.</p>
        </div>
      </div>
    </section>
  );

  const Testimonials = () => (
    <section className='testimonials row m-0 p-0'>
      <div className='col text-center'>
        <h2 className='secondary title'>What they’ve said</h2>
      </div>
      <div className='w-100 dblock'></div>
      <div className='col'>
        <Slideshow />
      </div>
      <div className='w-100 d-block'></div>
      <div className='col text-center'>
        <Button />
      </div>
    </section>
  );

  const Footing = () => (
    <section className='footing row m-0 p-0'>
      <div className='col-12 text-center'>
        <h2 className='secondary title'>Simplify how your team works today.</h2>
      </div>
      <div className='col-12 text-center'>
        <Button />
      </div>
    </section>
  );

  return (
    <div className='home'>
      <NavWithModal />
      <main className='main container-fluid m-0 p-0'>
        <Heading />
        <Information />
        <Testimonials />
        <Footing />
      </main>
      <FooterNavs />
      <br />
      <Attribution />
    </div>
  )
};

export default Home;