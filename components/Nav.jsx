'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

export default function Nav() {
    const isUserLoggedIn = true;

    const [providers, setProviders] = useState(null);
    const [toggleDropdown, setToggleDropdown] = useState(false);

    useEffect(() => {
        const setProviders = (async () => {
            const response = await getProviders()

            setProviders(response);
        });
        
        setProviders();

    }, []);

  return (
    <nav className='flex-between w-full mb-16 pt-3'>
        <Link href='/' className='flex gap-2 flex-center'>
            <Image 
                src='/assets/images/logo.svg'
                width={30}
                height={30}
                alt='Promptland Logo'
                className='object-contain'
            />
            <p className='logo_text'>Promptland</p>
        </Link>

        {/* Desktop navigation */}
        <div className='sm:flex hidden'>
            {
                isUserLoggedIn ? (
                    <div className='flex gap-3 md:gap-5'>
                        <Link href='/create-prompt'className='black_btn'>
                            Create post
                        </Link>
                        
                        <button type='button' className='outline_btn'>
                            Sign out
                        </button>
                        
                        <Link href='/profile'>
                            <Image
                                src='/assets/images/logo.svg'
                                width={37}
                                height={37}
                                alt='profile'
                                className='rounded-full'
                            />
                        </Link>

                    </div>
                )
                : (
                    <>
                        {
                            providers && Object.values(providers).map((provider) => (
                                    <button
                                        type='button'
                                        className='outline_btn'
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                    >
                                        Sign in with {provider.name}
                                    </button>
                            ))
                        }
                    </>
                )
            }
        </div>

        {/* Mobile navigation */}
        <div className='sm:hidden flex relative'>
            {
                isUserLoggedIn ? (
                    <div className="flex">
                        <Image
                            src='/assets/images/logo.svg'
                            width={37}
                            height={37}
                            alt='profile'
                            className='rounded-full'
                            onClick={() => setToggleDropdown((prevState) => !prevState)}
                        />

                        {
                            toggleDropdown && ( 
                                <div className='dropdown'>
                                    <Link
                                        href='/profile'
                                        className='dropdown_link'
                                        onClick={() => setToggleDropdown(false)}
                                    >
                                        Profile
                                    </Link>
                                    <Link
                                        href='/create-prompt'
                                        className='dropdown_link'
                                        onClick={() => setToggleDropdown(false)}
                                    >
                                        Create propmt
                                    </Link>
                                    <button
                                        type='button'
                                        className='mt-5 w-full black_btn'
                                        onClick={() => {
                                            setToggleDropdown(false);
                                            signOut();
                                        }}
                                    >
                                        Sign out
                                    </button>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <>
                        {
                            providers && Object.values(providers).map((provider) => (
                                    <button
                                        type='button'
                                        className='outline_btn'
                                        key={provider.name}
                                        onClick={() => signIn(provider.id)}
                                    >
                                        Sign in with {provider.name}
                                    </button>
                            ))
                        }
                    </>
                )
            }
        </div>
    </nav>
  )
}
