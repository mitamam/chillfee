import {useState} from 'react'
import Link from 'next/link'

import {Menu, MenuButton, MenuItem, MenuItems, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/16/solid'

export default function SortBy({id = '', options = ['新着順']}) {
  const [selectedOption, setSelectedOption] = useState(options[0])

  return (
    /* sort pulldown */
    <div className="text-end mt-4 lg:m-0">
      <Menu>
        {({open}) => (
          <>
            <MenuButton className="border border-accent2 py-1 px-2 cursor-default text-base sm:text-sm focus:outline-none">
              <span className="flex gap-1 items-center pointer-events-none">
                <span className="block truncate">{selectedOption}</span>
                <ChevronDownIcon className="h-4 w-4" aria-hidden="true"></ChevronDownIcon>
              </span>
            </MenuButton>

            <Transition
              show={open}
              enter="transition ease-out duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <MenuItems anchor="bottom end" className="border border-accent2 bg-bg mt-1">
                {options.map((option, index) => (
                  <MenuItem key={index}>
                    <button onClick={() => setSelectedOption(option)} className="flex items-center w-full px-3 ">
                      <span className="block text-sm py-2">{option}</span>
                      {selectedOption === option && (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className='ml-2 h-3 w-3'>
                          {`!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.`}
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      )}
                    </button>
                  </MenuItem>
                ))}
              </MenuItems>
            </Transition>
          </>
        )}
      </Menu>
    </div>
    /* / sort pulldown */
  )
}
