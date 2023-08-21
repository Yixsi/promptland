'use client'
import PromptCard from './PromptCard'
import { useState, useEffect } from 'react'

const PropmCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {
        data.map((post, index) => (
          <PromptCard
            key={index}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))
      }
    </div>
  )
}

export default function Feed() {
const [searchText, setSearchText] = useState('');
const [posts, setPosts] = useState([]);

const handleSearch = (e) => {
  e.preventDefault();
  setSearchText(e.target.value);
}

const fetchData = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();
      
      setPosts(data);
    }
    
  useEffect(() => {
    fetchData();
    }, []);

  return (
    <section className='feed'>
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or username..."
          value={searchText}
          onChange={handleSearch}
          className="search_input peer"
        />
      </form>
      <PropmCardList
        data={posts}
        handleTagClick={() => {}}
      />
    </section>
  )
}
