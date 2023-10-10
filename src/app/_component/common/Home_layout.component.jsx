'use client';
import React from 'react'
import { HeaderNav } from './HeaderNav.component';

export default function HomeLayout({ children }) {
    return (
        <div className='bg-gradient-to-r from-[#7F7FD5] via-[#86A8E7] to-[#91EAE4] '>
            <HeaderNav></HeaderNav>
            {children}
        </div>


    );
}