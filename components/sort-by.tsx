import {useState} from 'react'
import Link from 'next/link'

import {Menu, MenuButton, MenuItem, MenuItems, Transition} from '@headlessui/react'
import {ChevronDownIcon} from '@heroicons/react/16/solid'
import { CheckIcon } from '@heroicons/react/24/outline'

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
              <MenuItems anchor="bottom end" className="border border-accent2 mt-1">
                {options.map((option, index) => (
                  <MenuItem key={index}>
                    <button onClick={() => setSelectedOption(option)} className="flex items-center w-full px-3 ">
                      <span className="block text-base py-2">
                        {option}
                      </span>
                      {selectedOption === option && (
                        <CheckIcon className='ml-2 h-4 w-4'></CheckIcon>
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