import React, { useState } from 'react'; // حذفنا Component لأنه غير مستخدم
import assets from '../assets/assets';
import ThemeToggleBtn from './ThemeToggleBtn';

const Navbar = ({ theme, setTheme }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* الحاوية الرئيسية */}
            <div className=' flex justify-between items-center px-10 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white dark:bg-gray-900'>
                
                {/* اللوجو */}
                <img src={theme === 'dark' ? assets.logo_dark : assets.logo} alt="Logo" className='w-28 cursor-pointer' />

                {/* روابط التنقل (الـ Sidebar في الموبايل) */}
                <div className={`flex items-center gap-5 transition-all duration-300
                    ${sidebarOpen ? 'max-sm:right-0' : 'max-sm:-right-64'} 
                    max-sm:fixed max-sm:top-0 max-sm:bottom-0 max-sm:w-64 max-sm:min-h-screen 
                    max-sm:flex-col max-sm:bg-primary max-sm:pt-20 max-sm:text-white
                    text-gray-700 dark:text-white sm:text-sm`}>
                    
                    {/* زر الإغلاق داخل القائمة الجانبية */}
                    <img 
                        src={assets.close_icon} 
                        alt="Close" 
                        onClick={() => setSidebarOpen(false)} // تم التصحيح هنا
                        className='w-4 absolute right-2 top-4 cursor-pointer sm:hidden' 
                    />
                    
                    <a onClick={()=>setSidebarOpen(false)} href="#" className='sm:hover:border-b border-primary'>Home</a>
                    <a onClick={()=>setSidebarOpen(false)} href="#services" className='sm:hover:border-b border-primary'>Services</a>
                    <a onClick={()=>setSidebarOpen(false)} href="#our-work" className='sm:hover:border-b border-primary'>Our Work</a>
                    <a onClick={()=>setSidebarOpen(false)} href="#contact-us" className='sm:hover:border-b border-primary'>Contact Us</a>
                </div>

                {/* الأزرار اليمنى (أيقونة المنيو + زر الاتصال) */}
                <div className='flex items-center gap-4 sm:gap-4'>
                    
<ThemeToggleBtn theme={theme} setTheme={setTheme}/>
                    <img 
                        src={theme === 'dark' ? assets.menu_icon_dark : assets.menu_icon} 
                        alt="Menu" 
                        onClick={() => setSidebarOpen(true)} 
                        className='w-8 cursor-pointer sm:hidden' 
                    />

                    {/* زر Connect للشاشات الكبيرة */}
                    <a href="#contact-us" className='text-sm hidden sm:flex items-center gap-2 bg-primary text-white px-8 py-2.5 rounded-full cursor-pointer hover:scale-105 transition-all'>
                        Connect <img src={assets.arrow_icon} className='w-3' alt="" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Navbar;