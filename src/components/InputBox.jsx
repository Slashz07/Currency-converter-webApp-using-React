/* eslint-disable react/prop-types */
import {useId} from 'react'

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  amountDisabled=false,
  currencyDisabled=false,
  className="",
}) {
const amountInputId=useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='w-1/2'>
        <label htmlFor={amountInputId} className='text-black/60 inline-block mb-2'>
          {label}
        </label>
        <input
          type="number"
          placeholder='Amount'
          id={amountInputId}
          disabled={amountDisabled}
          value={amount}
          onChange={(e)=>onAmountChange&&onAmountChange(Number(e.target.value))}
          className='outline-none 
         p-1.5 bg-transparent w-full'
        />
      </div>
      <div className='w-1/2 flex flex-wrap justify-end text-right'>
        <p className='text-black/60 inline-block mb-2 w-full'>
          Currency Type
        </p>
        <select
          disabled={currencyDisabled}
          value={selectCurrency}
          onChange={(e)=>onCurrencyChange&&onCurrencyChange(e.target.value)}
          
          className='bg-gray-100 w-15 pl-3  rounded-lg px-1 py-1 outline-none cursor-pointer'>
          {currencyOptions.map((currency) => (
             <option key={currency} value={currency}>
               {currency}
             </option>
          ))}
      
        </select>
      </div>
    </div>
  )
}

export default InputBox;