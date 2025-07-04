import { Cross, X } from 'lucide-react'
import React from 'react'

export default function CartComp(props) {
  return (
    <div className={`fixed overflow-y-scroll top-0 right-0 h-full w-[400px] bg-gray-100 shadow-lg 
    p-4 transform z-50 ${props.isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}>
      <h2 className="text-xl px-4 font-bold mb-4 flex justify-between">
        My Cart

      </h2>
      <div className="flex justify-between p-3">
        <div>Hey Uour Cart is Empty</div>
        <div>
          <button onClick={props.onClose} className='text-red-500 cursor-pointer'>
            <X />
          </button>
        </div>
      </div>
    </div>
  )
}
