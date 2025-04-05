"use client";
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { AlertTriangle, XCircle } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

export default function OrderCanceled() {
    return (
        <div className='min-h-[90vh] bg-gray-900 text-gray-100 flex items-center justify-center p-4'>
            <motion.div className='max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}>
                <motion.div className='text-center mb-8'
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                    <XCircle className='h-20 w-20 text-red-500 mx-auto mb-4' />
                    <h1 className='text-3xl font-bold text-red-500 mb-2'>
                        Order Canceled
                    </h1>
                    <p className='text-gray-400'>
                        Your order has been canceled successfully.
                    </p>
                </motion.div>
                <motion.div
                    className='bg-gray-700 p-4 rounded-lg mb-8'
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <div className='flex items-center space-x-4 text-yellow-400 mb-2'>
                        <AlertTriangle className='h-6 w-6' />
                        <h2 className='text-lg font-semibold'>What happens next?</h2>
                    </div>
                    <ul className='list-disc list-inside text-gray-300 space-y-2'>
                        <li>Any charges will be refunded within 3-5 business days</li>
                        <li>
                            You'll receive an email confirmation of the cancellation
                        </li>
                        <li>Feel free to place a new order if you change your mind.</li>
                    </ul>
                </motion.div>
                <motion.div className='text-center space-y-4'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                >
                    <p className='text-gray-400'>
                        We're sorry to see you go. If you have any questions, please contact our support team.
                    </p>
                    <div className='space-x-4'>
                        <Link
                            href='/' passHref>
                            <Button className='bg-[#00FFFF] hover:bg-[#00CCCC] text-gray-900 font-semibold '>
                                Continue Shopping
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </motion.div>
        </div>
    )
}