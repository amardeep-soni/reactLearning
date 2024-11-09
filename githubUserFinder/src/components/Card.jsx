import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { CiLink } from "react-icons/ci";
import { GoOrganization } from "react-icons/go";

export default function Card(props) {
    const profile = props.user;

    const formattedDate = (date) => new Date(date).toLocaleDateString('en-US', {
        month: 'long',  // "May"
        day: 'numeric', // "18"
        year: 'numeric' // "2022"
    });

    return (
        <div className='bg-slate-700 p-6 rounded-lg'>
            {profile.status == 404 || profile.status == 401 ? (
                <p className='text-center text-xl text-white'>{profile.message}</p>
            ) : (
                <div className='flex items-start'>
                    <img className='rounded-full w-[100px] mr-3' src={profile.avatar_url} alt="" />
                    <div className='leftBox'>
                        <div className='flex justify-between items-center'>
                            <p className='text-2xl'>{profile.name ? profile.name : profile.login}</p>
                            <p className='text-sm'>Joined {formattedDate(profile.created_at)}</p>
                        </div>
                        <a href={profile.html_url} target='_blank' className='text-blue-500 hover:underline'>{profile.login}</a>

                        <p className='my-5'>{profile.bio ? profile.bio : 'This profile has no Bio'}</p>

                        <div className='bg-slate-900 p-3 flex justify-between mb-5'>
                            <div>
                                <p>Repos</p>
                                <p>{profile.public_repos}</p>
                            </div>
                            <div>
                                <p>Followers</p>
                                <p>{profile.followers}</p>
                            </div>
                            <div>
                                <p>Following</p>
                                <p>{profile.following}</p>
                            </div>
                        </div>

                        <div className='flex flex-wrap w-full'>
                            <div className='w-1/2 flex items-center mb-3'>
                                <FaLocationDot className='text-lg mr-2' />
                                <small>
                                    {profile.location ? profile.location : 'Not Available'}
                                </small>
                            </div>
                            <div className='w-1/2 flex items-center mb-3'>
                                <FaTwitter className='text-lg mr-2' />
                                <small>
                                    {profile.twitter_username ? (
                                        <a href={'https://twitter.com/' + profile.twitter_username} target='_blank'>@{profile.twitter_username}</a>
                                    ) : ('Not Available')}
                                </small>
                            </div>
                            <div className='w-1/2 flex items-center mb-3'>
                                <CiLink className='text-lg mr-2' />
                                <small>
                                    {profile.blog ? (
                                        <a href={`mailto:${profile.blog}`}>{profile.blog}</a>
                                    ) : ('Not Available')}
                                </small>
                            </div>
                            <div className='w-1/2 flex items-center mb-3'>
                                <GoOrganization className='text-lg mr-2' />
                                <small>{profile.company ? profile.company : 'Not Available'}</small>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
