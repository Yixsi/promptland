'use client'

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

import Profile from '@components/profile'

export default function MyProfile() {

    const { data: session } = useSession();

    const [posts, setPosts] = useState([]);

    const handleEdit = () => {
        console.log('edit')
    }

    const handleDelete = async () => {
        console.log('delete')
    }

    const fetchData = async () => {
      const res = await fetch(`/api/users/${user.id}/posts`);
      const data = await res.json();
      
      setPosts(data);
    }
    
  useEffect(() => {
    if(session?.user.id) {
        fetchData();
        }
    }, []);

  return (
    <Profile
        name='My'
        desc='Welcom to your profile page'
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
    />
  )
}
