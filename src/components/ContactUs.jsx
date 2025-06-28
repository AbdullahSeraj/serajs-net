import { useForm, ValidationError } from '@formspree/react';

import { MdEmail } from "react-icons/md";

import Lottie from "lottie-react";
import doneAni from "../../public/animations/AnimationDone.json"
import contactUsAni from "../../public/animations/AnimationContactUs.json"

const ContentUs = () => {
  const [state, handleSubmit] = useForm("mzbnogey");

  return (
    <div id='contact' className="container py-10 border-b border-gray-300 dark:border-slate-800 flex gap-10 items-center justify-between flex-col-reverse lg:flex-row">
      <div>
        <div className="flex items-center gap-3">
          <MdEmail size={'40px'} />
          <h1 className="text-3xl font-bold">Contact Us</h1>
        </div>
        <p className="text-sm text-gray-500 mt-3 mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, expedita.</p>
        <form action="" onSubmit={handleSubmit} className="grid gap-4">
          <div className="flex gap-1 md:gap-4 items-start flex-col md:flex-row md:items-center">
            <label htmlFor="email">Email Address: </label>
            <input type="text" id="email" name='email' required className="bg-gray-200 dark:bg-gray-800 outline-none border border-gray-300 dark:border-slate-700 rounded-md py-1 px-3 w-[300px] focus:border-blue-600" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex items-start gap-1 md:gap-4 flex-col md:flex-row">
            <label htmlFor="message">Your message: </label>
            <textarea name="message" id="message" rows="10" required className="bg-gray-200 dark:bg-gray-800 outline-none border border-gray-300 dark:border-slate-700 rounded-md py-1 px-3 w-[300px] focus:border-blue-600"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button type='submit' disabled={state.submitting} className="bg-gray-200 dark:bg-gray-800 py-1 px-8 rounded-md w-fit border border-gray-300 dark:border-slate-700">
            {state.submitting ? 'Submitting...' : 'Submit'}
          </button>
          {state.succeeded &&
            <div className='flex items-center gap-5'>
              <Lottie animationData={doneAni} className='w-20' loop={false} />
              <p className='text-center text-2xl font-semibold py-4 text-green-700'>Your message has been sent successfully!</p>
            </div>
          }
        </form>
      </div>

      <div>
        <Lottie animationData={contactUsAni} className='w-[350px]' loop={true} />
      </div>
    </div>
  )
}

export default ContentUs