"use client"
import { isAuthenticated } from "@/lib/auth";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function AuthProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const authenticated = await isAuthenticated();
                if (!authenticated && pathname !== '/login' && pathname !== '/register') {
                    router.push('/login');
                }
            } catch (error) {
                console.error('Authentication check failed', error);
            }
        };

        checkAuth();
    }, [router, pathname]);

    return <>{children}</>;
}
