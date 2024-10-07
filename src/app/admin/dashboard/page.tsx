
'use client'
import React, { useEffect } from 'react'
import Sidebar from '../components_admin/Sidebar';
import AdminHeader from '../components_admin/AdminHeader';
import RootLayout from '../layout'
import { getSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function page() {
    const router = useRouter();
    useEffect(() => {
        const checkSession = async () => {
            const session = await getSession();

            if (!session) {
                router.push('/admin'); // Redirect to admin login if not authenticated
            }
        };
        checkSession();
    }, [router]);
    return (
        <>
            <RootLayout>
                <AdminHeader />
                <Sidebar />
            </RootLayout>
        </>
    )
}

export default page