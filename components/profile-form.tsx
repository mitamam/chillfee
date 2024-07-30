'use client'

import {useState, ChangeEvent} from 'react'
import Image from 'next/image'

import {PencilSquareIcon} from '@heroicons/react/24/outline'
import BackButton from '@/components/back-button'
import ChangePassword from '@/components/change-password'
import ChangeEmail from '@/components/change-password'
import DeleteAccountButton from '@/components/delete-account-button'

export default function ProfileForm({className = ''}) {
  const [username, setUsername] = useState('username')
  const [email, setEmail] = useState('example@example.com')
  const [image, setImage] = useState<string[]>([])

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []).map((file: File) => URL.createObjectURL(file))
    if (files.length > 0) setImage(files)
  }

  const handleSetUsername = (event: ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value)
  }

  const handleSetEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value)
  }

  return (
    <div className={`w-full md:border-l pb-8 sm:pb-14 lg:pb-20 md:px-16 border-accent2 ${className}`}>
      <BackButton className="my-6 absolute"></BackButton>
      <h1 className="my-5 text-lg font-bold md:hidden text-center">アカウント</h1>
      <form method="post" className="max-w-md mt-8 md:mt-12">
        {/* user icon */}
        <div className="relative w-fit mx-auto">
          {/* Profile image upload button */}
          <label
            htmlFor="profile-image"
            className="inline-block z-10 cursor-pointer absolute bottom-0 right-0 bg-white/20 p-1 rounded-full"
          >
            <PencilSquareIcon className="h-4 w-4 text-accent2"></PencilSquareIcon>
          </label>
          <input className="hidden" type="file" accept="image/*" onChange={handleImageUpload} id="profile-image" />
          {/* / Profile image upload button */}
          <div className="relative overflow-hidden w-20 pt-20 md:w-24 md:pt-24 rounded-full">
            <Image src={image[0]} alt="" layout="fill" objectFit="cover" />
          </div>
        </div>
        {/* / user icon */}
        <ul className="flex flex-col gap-y-6">
          <li className="w-full mt-10">
            <label className="block text-base font-bold" htmlFor="username">
              ユーザーネーム
            </label>
            <input
              className="text-sm mt-2 py-2 px-4 w-full block bg-transparent border border-accent2 rounded-md outline-none"
              value={username}
              onChange={handleSetUsername}
              type="text"
              name="username"
              id="username"
            />
          </li>
          <li className="w-full">
            <label className="block text-base font-bold" htmlFor="email">
              メールアドレス
            </label>
            <input
              className="text-sm mt-2 py-2 px-4 w-full block bg-transparent border border-accent2 rounded-md outline-none"
              value={email}
              onChange={handleSetEmail}
              type="text"
              name="email"
              id="email"
            />
            <ChangeEmail></ChangeEmail>
          </li>
          <li className="w-full">
            <p className="block text-base font-bold">パスワード</p>
            <p className="text-sm mt-2 py-2 px-4 w-full block bg-transparent border border-accent2 rounded-md outline-none">
              ••••••••••••
            </p>
            <ChangePassword></ChangePassword>
          </li>
          <li>
            <DeleteAccountButton></DeleteAccountButton>
          </li>
        </ul>
        <input
          type="submit"
          className="block mx-auto mt-12 py-2 px-6 text-base bg-accent text-white rounded-full"
          value="上記内容を保存"
        />
      </form>
    </div>
  )
}
