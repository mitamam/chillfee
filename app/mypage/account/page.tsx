import UserMenu from '@/components/user-menu'
import ProfileForm from '@/components/profile-form'

export default function Page() {
  return (
    <div className='mx-auto max-w-7xl px-5 lg:px-8 pt-24'>
      <div className="flex flex-col justify-center md:justify-between md:flex-row">
        {/* right menu */}
        <UserMenu className="md:w-1/4 hidden md:block"></UserMenu>
        {/* left contents */}
        <ProfileForm className="md:w-3/4 pb-8 sm:pb-14 lg:pb-20"></ProfileForm>
      </div>
    </div>
  )
}