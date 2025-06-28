import { links } from '../assets/data/data';

const Footer = () => {
  const newYour = new Date().getFullYear();

  return (
    <div className='container py-10 border-b border-gray-300 dark:border-slate-800 flex items-center justify-between gap-7 flex-col lg:flex-row'>
      <div className='flex items-center gap-5'>
        {links.map((link, i) => (
          <p key={i} className='text-gray-500 text-sm hover:text-black dark:hover:text-white cursor-pointer transition-all'>{link.name}</p>
        ))}
      </div>
      <p className='text-gray-500 text-sm'>© {newYour} Serajs-net | All rights reserved.</p>
    </div>
  )
}

export default Footer