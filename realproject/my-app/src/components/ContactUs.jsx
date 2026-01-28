import React from 'react'
import Title from './title'
import assets from '../assets/assets'
import toast from 'react-hot-toast';

const ContactUs = () => {
  const onSubmit = async (event) => {
    event.preventDefault();

    // جمع بيانات الفورم
    const formData = new FormData(event.target);
    formData.append("access_key", "e8ad122a-3c9b-4d22-897e-da0681fada7e");

    try {
      // إرسال البيانات
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      // قراءة البيانات المستلمة
      const data = await response.json();

      // التعامل مع الرد
      if (data.success) {
        toast.success("Thanks for submission!");
        event.target.reset(); // تفريغ الفورم
      } else {
        console.log("Error", data);
        toast.error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
   <div id='contact-us' className='flex flex-col gap-7 justify-center items-center py-7 sm:px-12 lg:px-24 xl:px-40 pt-30 px-4'>
<Title title='Reach Out to us' desc='From stratagy to execution , we craft digital solution that move your business forward ' />

<form onSubmit={onSubmit} className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-2xl w-full'>
    <div className=''>
        <p className='mb-2 text-sm font-medium'>your name</p>
        <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img className='mr-2' src={assets.person_icon} alt="" />
            <input name='name' type="text" placeholder='Enter your name' className='w-full p-2 text-sm  outline-none' required />
        </div>
    </div>
     <div className=''>
        <p className='mb-2 text-sm font-medium'>your email</p>
        <div className='flex pl-3 rounded-lg border border-gray-300 dark:border-gray-600'>
            <img className='mr-2' src={assets.email_icon} alt="" />
            <input name='email' type="email" placeholder='Enter your email' className='w-full p-2 text-sm  outline-none' required />
        </div>
    </div>
    <div className='sm:col-span-2'>
        <p className='mb-2 text-sm font-medium'>message </p>
        <textarea name='message' rows={8} placeholder='Enter your message ' className='w-full border border-gray-300 p-3 text-sm outline-none rounded-lg'/>
    </div>
    <button className='bg-primary flex gap-2 w-max text-white text-sm px-10 py-3 rounded-full cursor-pointer hover:scale-103 tranistion-all' type='submit'> submit <img className='w-4' src={assets.arrow_icon} alt="" /></button>
</form>

   </div>
  )
}

export default ContactUs