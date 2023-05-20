const Slideshow = () => {
  const [slide, setSlide] = React.useState(1);

  React.useEffect(() => {
    document.querySelectorAll('.dot').forEach(item => {
      if (item.classList.contains('active')) item.classList.remove('active');
      if (item.id == slide) item.classList.add('active');
    })
  }, );

  const users = [
    {
      id: 1,
      src: './src/images/avatar-anisha.png',
      name: 'Anisha Li',
      content: '“Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”',
    },
    {
      id: 2,
      src: './src/images/avatar-ali.png',
      name: 'Ali Bravo',
      content: '“We have been able to cancel so many other subscriptions since using Manage.There is no more cross- channel confusion and everyone is much more focused.”',
    },
    {
      id: 3,
      src: './src/images/avatar-richard.png',
      name: 'Richard Watts',
      content: '“Manage allows us to provide structure and process. It keeps us organized and focused.I can’t stop recommending them to everyone I talk to!”',
    },
    {
      id: 4,
      src: './src/images/avatar-shanai.png',
      name: 'Shanai Gough',
      content: '“Their software allows us to track, manage and collaborate on our projects from anywhere.It keeps the whole team in-sync without being intrusive.”',
    },
  ];

  const Testimonials = () => {
    const Testimony = (props) => {
      return (
        <div className={`testimony ${props.BS__options}`}>
          <ReactBootstrap.Image className='avatar' alt='avatar' src={props.target.src} />
          <br />
          <strong className='strong'>{props.target.name}</strong>
          <p className='secondary para'>{props.target.content}</p>
        </div>)
    };

    return (
      users.map(item => {
        if (item.id == slide) {
          return (
            <Testimony key={`testimony__${item.id}`} target={item} BS__options='text-center' />
          )
        }
      })
    )
  };

  const Dots = () => (
    <div className='d-flex flex-row justify-content-center align-items-center'>
      {users.map(item => {
        return (
          <span key={`dot__${item.id}`} className='dot mx-1' id={item.id} onClick={() => setSlide(item.id)}></span>
        )
      })}
    </div>
  );

  const prevSlide = () => {
    slide > 1 ? setSlide((prevState) => prevState - 1) : setSlide(4);
  }

  const nextSlide = () => {
    slide < 4 ? setSlide((prevState) => prevState + 1) : setSlide(1);
  }

  return (
    <div className='slideshow position-relative'>
      <i className='fa fa-chevron-left position-absolute top-50 start-0' onClick={prevSlide}></i>
      <Testimonials />
      <i className='fa fa-chevron-right position-absolute top-50 end-0' onClick={nextSlide}></i>
      <Dots />
    </div>
  );
}

export default Slideshow;