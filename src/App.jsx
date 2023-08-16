import { useEffect, useState } from 'react'
import frame1 from "./assets/frame1.png"
import frame2 from "./assets/frame2.png"
import frame3 from "./assets/frame3.png"
import github from "./assets/github.png"
import logo from "./assets/logo.png"


function App() {
  const [images, setImages] = useState([frame3, frame1, frame2, frame3, frame1, frame2])
  const [animate, setAnimate] = useState(false)

  function handleClick() {
      setImages(prevPositions => [...prevPositions.slice(1), prevPositions[0]]);
  }

  useEffect(() => {
    setAnimate(true);
  
    const timeout = setTimeout(() => {
      setAnimate(false);
    }, 500); // Adjust the delay time as needed
  
    return () => {
      clearTimeout(timeout); // Cancel the timeout if the component unmounts
    };
  }, [images[0]]);


  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='px-7 bg-[#F5F5F7] flex justify-evenly w-full min-h-screen border-2 text-red-800'>
        <div className='block w-1/2 h-screen overflow-hidden relative'>
          <div className={`flex flex-col animate translate-y-[-141vh] fixed h-[465%] overflow-visible ease-in-out duration-300  ${animate ? 'animate-scrolling' : ''}`}
          style={{animationFillMode: "forwards"}}
          >
            <div className='flex flex-col ease-in-out duration-300' onClick={handleClick}>
              {images.map((img, idx) => (
                <img src={img} className="h-[75vh] mb-[2.5%]" key={idx}/>
              ))}
            </div>
          </div>
        </div>
        <div className=' flex items-center justify-center'>
          <form
            action=""
            className='w-[464px] p-5 flex flex-col justify-center align-center gap-5 text-black bg-white rounded-lg border-[1px] border-[#F0F0F0] font-[Inter]'
          >
            <h2 className='text-[28px] leading-[44px] p-2 font-medium tracking-tight text-center'>
              Create Account
            </h2>
            <button
              type='button'
              className="h-12 p-[12px 125px 12px 153px] rounded-md border-[1px] gap-2 flex justify-center items-center text-base font-semibold leading-[22px] bg-[#D3DEFD]"
            >
              <img src={github} alt="github" className='w-[21px] h-[21px]' />Connect to Neucorn
            </button>
            <div className='flex justify-center items-center gap-3 w-full'>
              <span className='w-full h-[1px] border-b-2 border-[#EAEBF0]'>
              </span>
              <p className="text-base leading-6 -tracking-[0.1] font-normal font-[IBM Plex Sans]">
                OR
              </p>
              <span className='w-full h-[1px] border-b-2 border-[#EAEBF0]'>
              </span>
            </div>
            <button
              type='button'
              className="h-12 p-[12px 125px 12px 153px] rounded-md border-[1px] gap-2 flex justify-center items-center text-base font-semibold leading-[22px] bg-[#D3DEFD]"
            >
              <img src={logo} alt="Neucorn" className='w-[21px] h-[21px]' />Sign up with Github
            </button>
            <div className='flex flex-col gap-2'>
              <label htmlFor='email' className='text-sm font-medium leading-5 -tracking-[0.1]'>
                Email Address
              </label>
              <input
                type="text"
                placeholder='Insert your email'
                id='email'
                className='px-4 py-3 rounded-lg border-[1px] gap-2 text-[#DAE0E6]'
              />
            </div>
            <div className='flex flex-col gap-2'>
              <label htmlFor='password' className='text-sm font-medium leading-5 -tracking-[0.1]'>
                Password
              </label>
              <input
                type="text"
                placeholder='Insert your password'
                id='password'
                className='px-4 py-3 rounded-lg border-[1px] gap-2 text-[#DAE0E6]'
              />
            </div>
            <div className='flex gap-3 items-center'>
              <input type="checkbox" name="keepLoggedIn" id="keepLoggedIn" />
              <label
                htmlFor="keepLoggedIn"
                className='text-base font-medium leading-6 -tracking-[0.1] font-[IBM Plex Sans]'
              >
                Keep me logged in
              </label>
            </div>
            <button
              type="submit"
              className='py-3 px-[18px] rounded-lg gap-[6px] bg-[#243E86] text-base tracking-normal leading-[22px] text-white font-[IBM Plex Sans]'
            >
              Sign Up
            </button>
            <p
              className='flex gap-4 text-base font-normal leading-6 -tracking-[0.1] text-[#5F6D7E] font-[IBM Plex Sans]'
            >
              Already have an account? <a className='text-[15px] text-[#243E86]'>Log In</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
