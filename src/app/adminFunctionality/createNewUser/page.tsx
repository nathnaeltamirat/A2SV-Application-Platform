'use client'
import React, { useState } from 'react'
import { createNewUserAPI  } from '../../../utils/adminFunctions/createNewUserAPI'

const CreateNewUser = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
                      await createNewUserAPI(e, name, password,email,role)
        }
  return (
    <div className='min-h-screen pl-[250px] pr-[40px] pt-[50px] pb-[60px]' style={{ background: 'rgb(243, 244, 246)' }}>
      <div className='text-black mb-8'>
        <h1 className='text-3xl font-bold mb-1'>Create New User</h1>
        <p className='text-gray-600'>Use this form to create a new user and assign them a role.</p>
      </div>

      <form onSubmit={handleSubmit} className='bg-white rounded-xl shadow-2xl p-8 max-w-5xl'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
          <div>
            <label className='block text-gray-700 font-medium mb-2'>Full Name</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Enter full name'
            />
          </div>
          <div>
            <label className='block text-gray-700 font-medium mb-2'>Email Address</label>
            <input
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Enter email'
            />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <div>
            <label className='block text-gray-700 font-medium mb-2'>Password</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500'
              placeholder='Set an initial password'
            />
          </div>
          <div>
            <label className='block text-gray-700 font-medium mb-2'>Role</label>
                <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className='w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-white'
                >
                    <option value='' disabled>Select a role</option>
                    <option value='applicant'>Applicant</option>
                    <option value='reviewer'>Reviewer</option>
                    <option value='manager'>Manager</option>
                </select>
          </div>
        </div>

        <div className='flex justify-end space-x-4'>
          <button
            type='button'
            className='px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100'
          >
            Cancel
          </button>
          <button
            type='submit'
            className='px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition'
          >
            Save User
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateNewUser
