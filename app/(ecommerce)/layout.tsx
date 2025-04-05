import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react'

const layout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div>
            <Navbar />
            <div className='pt-12'>{children}</div>
            <Footer />
        </div>
    )
}

export default layout