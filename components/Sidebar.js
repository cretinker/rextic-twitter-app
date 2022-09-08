import Image from 'next/image'
import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'
import {HomeIcon} from '@heroicons/react/solid'
import {BellIcon, BookmarkIcon, ClipboardIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, InboxIcon, UserIcon } from '@heroicons/react/outline'

const Sidebar = () => {
  return (
    <div className='hidden sm:flex flex-col p-2 xl:items-start fixed h-full'>
        {/* Twitter Logo */}
        <div className='hoverEffect'>
            <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png"></Image>
        </div>

        {/* Menu */}

        <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
        <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
        <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
        <SidebarMenuItem text="Messages" Icon={InboxIcon}/>
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon}/>
        <SidebarMenuItem text="Profile" Icon={UserIcon}/>
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>

        {/* Button */}

        <button className='bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow hover:brightness-95 text-lg hidden xl:inline'>Tweet</button>

        {/* Mini-Profile */}

        <div className='hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto'>
            <img 
            src='https://api.acadium.com/u/4rd4ljxl5/100002456113' alt='user-image' 
            className='h-10 w-10 rounded-full xl:mr-2'
            />
            <div className=''>
                <h4 className='font-bold'>Elijah Adah</h4>
                <p className='text-gray-500'>@rextic_dev</p>
            </div>
            <DotsHorizontalIcon className='h-5 xl:ml-8'/>
        </div>
    </div>
  )
}

export default Sidebar