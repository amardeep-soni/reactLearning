import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import "../App.css";
import Card from './Card';

export default function Body() {
    const [user, setUser] = useState(null);
    const [username, setUsername] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        setUser('')
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        console.log(data);
        const data2 = {
            "login": "amardeep-soni",
            "id": 105788041,
            "node_id": "U_kgDOBk4yiQ",
            "avatar_url": "https://avatars.githubusercontent.com/u/105788041?v=4",
            "gravatar_id": "",
            "url": "https://api.github.com/users/amardeep-soni",
            "html_url": "https://github.com/amardeep-soni",
            "followers_url": "https://api.github.com/users/amardeep-soni/followers",
            "following_url": "https://api.github.com/users/amardeep-soni/following{/other_user}",
            "gists_url": "https://api.github.com/users/amardeep-soni/gists{/gist_id}",
            "starred_url": "https://api.github.com/users/amardeep-soni/starred{/owner}{/repo}",
            "subscriptions_url": "https://api.github.com/users/amardeep-soni/subscriptions",
            "organizations_url": "https://api.github.com/users/amardeep-soni/orgs",
            "repos_url": "https://api.github.com/users/amardeep-soni/repos",
            "events_url": "https://api.github.com/users/amardeep-soni/events{/privacy}",
            "received_events_url": "https://api.github.com/users/amardeep-soni/received_events",
            "type": "User",
            "user_view_type": "public",
            "site_admin": false,
            "name": "Amardeep Kumar Soni",
            "company": "Super G Consultancy",
            "blog": "https://amardeepdev.com/",
            "location": "USA",
            "email": null,
            "hireable": true,
            "bio": "Experienced full stack developer adept in Angular, .NET, and SQL Server, with additional expertise in PHP, JavaScript, TypeScript, and WordPress.",
            "twitter_username": "amardeep_soni1",
            "public_repos": 13,
            "public_gists": 0,
            "followers": 2,
            "following": 4,
            "created_at": "2022-05-18T10:54:28Z",
            "updated_at": "2024-11-03T05:07:07Z"
        }
        setUser(data);
    }
    return (
        <div className='w-[550px]'>
            <p className='mb-3 text-2xl'>devFinder</p>
            <form className='mb-3' onSubmit={handleSearch}>
                <div className='flex w-full bg-slate-700 rounded-lg items-center'>
                    <IoSearch className='text-2xl m-4' />
                    <input type="text" placeholder='Search GitHub username' className='bg-transparent py-3 focus-visible:outline-none grow' name='username' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <button className='mx-3 bg-blue-600 py-2 w-[80px] rounded-lg'>
                        {user == '' ? (
                            <div role="status" className='flex justify-center'>
                                <svg aria-hidden="true" class="w-6 h-6 text-white animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        ) : 'Search'}
                    </button>
                </div>
            </form>
            {user && <Card user={user} />}
        </div>
    )
}
