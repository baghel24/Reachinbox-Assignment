import React from 'react'
// import Onebox from './Onebox'
import { Link } from 'react-router-dom'

const Inbox = () => {
  return (
    <section id='/' className='bg-black min-h-screen'>
    <div className='flex items-center bg-[#343A40] h-12 w-full border-2 border-gray-50/10'>
<div className='bg-black w-14 h-12 text-center py-2 text-xl font-bold text-white'>
  M
</div>
<h1 className='text-gray-100 py-3 ml-10'>Onebox</h1>
<div className='flex items-center ml-auto space-x-4 pr-4'>
  <div className='flex items-center'>
    <svg width="51" height="24" viewBox="0 0 51 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0.5" y="0.5" width="50" height="23" rx="11.5" fill="#222426" />
      <rect x="0.5" y="0.5" width="50" height="23" rx="11.5" stroke="#343A40" />
      <circle cx="13" cy="12" r="8" fill="#888686" />
      <path d="M37 9.81818C38.2 9.81818 39.1818 10.8 39.1818 12C39.1818 13.2 38.2 14.1818 37 14.1818C35.8 14.1818 34.8182 13.2 34.8182 12C34.8182 10.8 35.8 9.81818 37 9.81818ZM37 8.36364C34.9927 8.36364 33.3636 9.99273 33.3636 12C33.3636 14.0073 34.9927 15.6364 37 15.6364C39.0073 15.6364 40.6364 14.0073 40.6364 12C40.6364 9.99273 39.0073 8.36364 37 8.36364ZM29.7273 12.7273H31.1818C31.5818 12.7273 31.9091 12.4 31.9091 12C31.9091 11.6 31.5818 11.2727 31.1818 11.2727H29.7273C29.3273 11.2727 29 11.6 29 12C29 12.4 29.3273 12.7273 29.7273 12.7273ZM42.8182 12.7273H44.2727C44.6727 12.7273 45 12.4 45 12C45 11.6 44.6727 11.2727 44.2727 11.2727H42.8182C42.4182 11.2727 42.0909 11.6 42.0909 12C42.0909 12.4 42.4182 12.7273 42.8182 12.7273ZM36.2727 4.72727V6.18182C36.2727 6.58182 36.6 6.90909 37 6.90909C37.4 6.90909 37.7273 6.58182 37.7273 6.18182V4.72727C37.7273 4.32727 37.4 4 37 4C36.6 4 36.2727 4.32727 36.2727 4.72727ZM36.2727 17.8182V19.2727C36.2727 19.6727 36.6 20 37 20C37.4 20 37.7273 19.6727 37.7273 19.2727V17.8182C37.7273 17.4182 37.4 17.0909 37 17.0909C36.6 17.0909 36.2727 17.4182 36.2727 17.8182ZM32.6291 6.60364C32.3455 6.32 31.88 6.32 31.6036 6.60364C31.32 6.88727 31.32 7.35273 31.6036 7.62909L32.3745 8.4C32.6582 8.68364 33.1236 8.68364 33.4 8.4C33.6764 8.11636 33.6836 7.65091 33.4 7.37455L32.6291 6.60364ZM41.6255 15.6C41.3418 15.3164 40.8764 15.3164 40.6 15.6C40.3164 15.8836 40.3164 16.3491 40.6 16.6255L41.3709 17.3964C41.6545 17.68 42.12 17.68 42.3964 17.3964C42.68 17.1127 42.68 16.6473 42.3964 16.3709L41.6255 15.6ZM42.3964 7.62909C42.68 7.34545 42.68 6.88 42.3964 6.60364C42.1127 6.32 41.6473 6.32 41.3709 6.60364L40.6 7.37455C40.3164 7.65818 40.3164 8.12364 40.6 8.4C40.8836 8.67636 41.3491 8.68364 41.6255 8.4L42.3964 7.62909ZM33.4 16.6255C33.6836 16.3418 33.6836 15.8764 33.4 15.6C33.1164 15.3164 32.6509 15.3164 32.3745 15.6L31.6036 16.3709C31.32 16.6545 31.32 17.12 31.6036 17.3964C31.8873 17.6727 32.3527 17.68 32.6291 17.3964L33.4 16.6255Z" fill="#E8C364" />
    </svg>
  </div>
  <div className='flex items-center'>
    <button type="button" className="inline-flex justify-center gap-x-1.5 rounded-md bg-white px-3 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
      Workspace
      <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
</div>
</div>

    
   <div className='flex '>
   <div
      class="flex flex-col justify-center items-center relative transition-all duration-[450ms] ease-in-out w-14 "
    >


      <article
        class="border border-solid border-gray-700 w-full ease-in-out duration-500  bg-[#2F3030] min-h-screen"
      >
        <button
          for="dashboard"
          class="has-[:checked]:shadow-lg relative w-full h-16 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
        >
          
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.30783 6.75731C4 7.4266 4 8.18802 4 9.71085V14.4668C4 16.5817 4 17.6391 4.65701 18.2961C5.26684 18.906 6.22167 18.9497 8.04689 18.9529C8.04688 18.9513 8.04688 18.9498 8.04688 18.9482V13.3403C8.04688 12.1686 8.99674 11.2188 10.1685 11.2188H13.5332C14.7049 11.2188 15.6548 12.1686 15.6548 13.3403V18.9482C15.6548 18.9498 15.6548 18.9513 15.6548 18.9529C17.4803 18.9497 18.4352 18.906 19.0451 18.2961C19.7021 17.6391 19.7021 16.5817 19.7021 14.4668V9.71085C19.7021 8.18802 19.7021 7.4266 19.3943 6.75731C19.0865 6.08802 18.5084 5.59249 17.3521 4.60145L16.2306 3.64009C14.1407 1.84878 13.0958 0.953125 11.8511 0.953125C10.6064 0.953125 9.56144 1.84878 7.47158 3.64009L7.47158 3.64009L6.35 4.60145C5.19377 5.59249 4.61566 6.08802 4.30783 6.75731ZM13.6548 18.9531C13.6548 18.9515 13.6548 18.9499 13.6548 18.9482V13.3403C13.6548 13.2732 13.6003 13.2188 13.5332 13.2188H10.1685C10.1013 13.2188 10.0469 13.2732 10.0469 13.3403V18.9482C10.0469 18.9499 10.0469 18.9515 10.0469 18.9531H13.6548Z" fill="#AEAEAE" />
          </svg>

        </button>
        <button
          for="profile"
          class="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
        >
          <input class="hidden peer/expand" type="radio" name="path" id="profile" />
          <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z" fill="#AEAEAE" />
            <path d="M8.35 10.01C5.62 9.91 0 11.27 0 14V16H9.54C7.07 13.24 8.31 10.11 8.35 10.01Z" fill="#AEAEAE" />
            <path d="M17.43 14.02C17.79 13.43 18 12.74 18 12C18 9.79 16.21 8 14 8C11.79 8 10 9.79 10 12C10 14.21 11.79 16 14 16C14.74 16 15.43 15.78 16.02 15.43L18.59 18L20 16.59L17.43 14.02ZM14 14C12.9 14 12 13.1 12 12C12 10.9 12.9 10 14 10C15.1 10 16 10.9 16 12C16 13.1 15.1 14 14 14Z" fill="#AEAEAE" />
          </svg>

        </button>
        <Link to={"/inbox"}>
        <button
          for="messages"
          class="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
        >
          
          <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.2 0.5H1.8C0.81 0.5 0.00899999 1.31 0.00899999 2.3L0 13.1C0 14.09 0.81 14.9 1.8 14.9H16.2C17.19 14.9 18 14.09 18 13.1V2.3C18 1.31 17.19 0.5 16.2 0.5ZM16.2 4.1L9 8.6L1.8 4.1V2.3L9 6.8L16.2 2.3V4.1Z" fill="#AEAEAE" />
          </svg>

        </button> </Link>
        <button
          for="help"
          class="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
        >
          <input class="hidden peer/expand" type="radio" name="path" id="help" />
          <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.7381 18.5C11.0667 18.5 11.3472 18.3754 11.5795 18.1261C11.8118 17.8824 12.0072 17.5567 12.1659 17.1487L17.7664 2.48867C17.8401 2.29603 17.8967 2.11756 17.9364 1.95326C17.9761 1.78895 17.9959 1.63314 17.9959 1.48584C17.9959 1.18555 17.9081 0.947592 17.7324 0.771955C17.5568 0.590652 17.3188 0.5 17.0186 0.5C16.8769 0.5 16.7211 0.522663 16.5511 0.567989C16.3812 0.607649 16.1999 0.661473 16.0072 0.729462L1.29618 6.36402C0.927907 6.50567 0.619125 6.69263 0.369834 6.92493C0.126208 7.15722 0.00439453 7.43768 0.00439453 7.76629C0.00439453 8.16856 0.140372 8.46601 0.412326 8.65864C0.684281 8.84561 1.02706 9.00142 1.44065 9.12606L5.85142 10.4773C6.14604 10.568 6.3925 10.6048 6.5908 10.5878C6.7891 10.5652 6.99306 10.4575 7.20269 10.2649L16.6616 1.49433C16.7183 1.44334 16.7778 1.41785 16.8401 1.41785C16.9081 1.41785 16.9676 1.44051 17.0186 1.48584C17.0639 1.53116 17.0865 1.58782 17.0865 1.65581C17.0865 1.71813 17.0582 1.77762 17.0016 1.83428L8.26502 11.3187C8.08371 11.5113 7.9789 11.7096 7.95057 11.9136C7.92791 12.1176 7.95907 12.3697 8.04405 12.67L9.35283 16.9873C9.48315 17.4235 9.64462 17.7833 9.83725 18.0666C10.0299 18.3555 10.3302 18.5 10.7381 18.5Z" fill="#AEAEAE" />
          </svg>

        </button>
        <button
          for="settings"
          class="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
        >
          
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 14H7V10H3V14ZM3 19H7V15H3V19ZM3 9H7V5H3V9ZM8 14H21V10H8V14ZM8 19H21V15H8V19ZM8 5V9H21V5H8Z" fill="#AEAEAE" />
          </svg>

        </button>
        
        <button  
          for="settings"
          class="has-[:checked]:shadow-lg relative w-full h-16 p-4 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
        >
        
          <svg width="34" height="36" viewBox="0 0 34 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="7.5" width="28" height="28.2857" rx="4" fill="#2F3030" />
            <path d="M6.7691 28.7857H21.2225C22.1399 28.7857 22.8321 28.5619 23.2993 28.1144C23.7664 27.6669 24 27.0038 24 26.1251V21.5487C24 21.2485 23.9803 20.9947 23.9409 20.7874C23.9071 20.58 23.848 20.3944 23.7636 20.2307C23.6848 20.0669 23.5751 19.8923 23.4344 19.7067L20.6568 16.1128C20.3304 15.6871 20.0349 15.3596 19.7704 15.1304C19.5058 14.8957 19.2104 14.732 18.8839 14.6392C18.5575 14.5464 18.141 14.5 17.6344 14.5H10.3656C9.85338 14.5 9.43408 14.5464 9.10764 14.6392C8.78683 14.732 8.49416 14.8957 8.22963 15.1304C7.9651 15.3596 7.66962 15.6871 7.34318 16.1128L4.56564 19.7067C4.42493 19.8923 4.31237 20.0669 4.22794 20.2307C4.14352 20.3944 4.08442 20.58 4.05065 20.7874C4.01688 20.9947 4 21.2485 4 21.5487V26.1251C4 27.0038 4.23357 27.6669 4.70072 28.1144C5.16786 28.5619 5.85732 28.7857 6.7691 28.7857ZM13.9958 23.7755C13.5737 23.7755 13.205 23.68 12.8898 23.4889C12.5803 23.2925 12.3411 23.0414 12.1722 22.7358C12.0034 22.4247 11.919 22.0972 11.919 21.7534V21.6961C11.919 21.5105 11.8599 21.344 11.7417 21.1967C11.6235 21.0439 11.4434 20.9675 11.2014 20.9675H6.09371C5.94175 20.9675 5.84888 20.9183 5.81511 20.8201C5.78134 20.7219 5.80386 20.6209 5.88265 20.5172L8.95568 16.5057C9.14141 16.2656 9.34684 16.0964 9.57197 15.9982C9.80273 15.8945 10.0588 15.8426 10.3402 15.8426H17.6513C17.944 15.8426 18.2029 15.8945 18.428 15.9982C18.6532 16.0964 18.8558 16.2656 19.0359 16.5057L22.1173 20.5172C22.1849 20.6209 22.2018 20.7219 22.168 20.8201C22.1399 20.9183 22.0498 20.9675 21.8978 20.9675H16.7986C16.5566 20.9675 16.3765 21.0439 16.2583 21.1967C16.1458 21.344 16.0895 21.5105 16.0895 21.6961V21.7534C16.0895 22.0972 16.0023 22.4247 15.8278 22.7358C15.6589 23.0414 15.4169 23.2925 15.1017 23.4889C14.7922 23.68 14.4235 23.7755 13.9958 23.7755Z" fill="white" />
            <circle cx="26" cy="8.78516" r="8" fill="#FA5252" />
            <path d="M22.3047 11.7852H21.0977V8.48047C21.0977 8.38932 21.099 8.27734 21.1016 8.14453C21.1042 8.00911 21.1081 7.87109 21.1133 7.73047C21.1185 7.58724 21.1237 7.45833 21.1289 7.34375C21.1003 7.3776 21.0417 7.4362 20.9531 7.51953C20.8672 7.60026 20.7865 7.67318 20.7109 7.73828L20.0547 8.26562L19.4727 7.53906L21.3125 6.07422H22.3047V11.7852ZM27.8906 11.7852H23.8984V10.9453L25.332 9.49609C25.6211 9.19922 25.8529 8.95182 26.0273 8.75391C26.2044 8.55339 26.332 8.37109 26.4102 8.20703C26.4909 8.04297 26.5312 7.86719 26.5312 7.67969C26.5312 7.45312 26.4674 7.28385 26.3398 7.17188C26.2148 7.05729 26.0469 7 25.8359 7C25.6146 7 25.3997 7.05078 25.1914 7.15234C24.9831 7.25391 24.7656 7.39844 24.5391 7.58594L23.8828 6.80859C24.0469 6.66797 24.2201 6.53516 24.4023 6.41016C24.5872 6.28516 24.8008 6.1849 25.043 6.10938C25.2878 6.03125 25.5807 5.99219 25.9219 5.99219C26.2969 5.99219 26.6185 6.0599 26.8867 6.19531C27.1576 6.33073 27.3659 6.51562 27.5117 6.75C27.6576 6.98177 27.7305 7.24479 27.7305 7.53906C27.7305 7.85417 27.668 8.14193 27.543 8.40234C27.418 8.66276 27.2357 8.92057 26.9961 9.17578C26.7591 9.43099 26.4727 9.71354 26.1367 10.0234L25.4023 10.7148V10.7695H27.8906V11.7852ZM30.8672 8.53906H32.3789V9.39453H30.8672V10.8984H30.0117V9.39453H28.5V8.53906H30.0117V7.01562H30.8672V8.53906Z" fill="white" />
          </svg>

        </button>
        <button 
          for="dashboard"
          class="has-[:checked]:shadow-lg relative w-full h-16 ease-in-out duration-300 border-solid border-black/10 has-[:checked]:border group flex flex-row gap-3 items-center justify-center text-black rounded-xl"
        >
          
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.33317 6.28573H0.666504V19.1191H5.33317V6.28573Z" fill="#AEAEAE" />
            <path d="M19.3332 10.9524H14.6665V19.1191H19.3332V10.9524Z" fill="#AEAEAE" />
            <path d="M12.3332 0.452393H7.6665V19.1191H12.3332V0.452393Z" fill="#AEAEAE" />
          </svg>

        </button>
      </article>

    </div>
    {/* messages */}
    <div className='flex text-white w-full mx-5'>
        <div className='w-[23%] border-r-2 border-gray-400/30'>
        <div className='flex items-center py-3 '>
    <button type="button" className="inline-flex justify-center gap-x-1.5  text-lg font-semibold text-blue-500 " id="menu-button" aria-expanded="true" aria-haspopup="true">
      All Inbox(s)
      <svg className="-mr-1 h-7 w-6 text-blue-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
        <span className='text-md '>25/25 Inboxes selected</span>
        <div class="relative mt-3">
  <input
    placeholder="Search..."
    class="input shadow-lg focus:border-2 border-gray-300 px-4 py-2 rounded-xl w-[20rem] transition-all focus:w-64 outline-none"
    name="search"
    type="search"
  />
  <svg
    class="size-6 absolute top-2 right-5 text-gray-500"
    stroke="currentColor"
    stroke-width="1.5"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
  </svg>
</div>

<div className='border-b-2 border-gray-400/30 mt-6'></div>

<div className='mx-4 mt-4'>
    <sapn > Example@gmail.com</sapn>
    <p className='text-sm text-gray-100/50'>I have tired a lot</p>
    <div className='mt-2 flex gap-4'>
    <span className='bg-gray-500/40 rounded-2xl py-1 px-2 mt-2'>Intersted</span>
    <span className='bg-gray-500/40 rounded-2xl py-1 px-2 mt-2'>Campaign Name</span>
    </div>
</div>
<div className='border-b-2 border-gray-400/30 mt-6'></div>


        </div>
        <div className='w-[54%] border-r-2 border-gray-400/30'>B</div>
        <div>C</div>
    </div>

   </div>


    </section>
  )
}

export default Inbox
