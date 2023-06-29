import React from 'react'

export default function ReportComp(props) {
    var total = 0;
    const values = props.details;
  return (
    <div>
        <div className="mb-10 flex flex-row">
        <button className="m-auto flex h-8 w-28 items-center gap-2 rounded-full px-6 py-4 font-medium text-white dark:bg-gray-800">Monthly</button>
        <button className="m-auto flex h-8 w-28 items-center gap-2 rounded-full px-8 py-4 font-medium text-white dark:bg-gray-800">Weekly</button>
        <button className="m-auto flex h-8 w-28 items-center gap-2 rounded-full px-10 py-4 font-medium text-white dark:bg-gray-800">Daily</button>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">Transaction ID</th>
                <th scope="col" className="px-6 py-3">User ID</th>
                <th scope="col" className="px-6 py-3">Date and Time</th>
                <th scope="col" className="px-6 py-3">Amount</th>
            </tr>
            </thead>
            <tbody>
            {values.map((item, ids) =>{ total = total + parseFloat(item.payment); return(
            <tr className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600">
                <td className="px-6 py-4">{item.transactinId}</td>
                <td className="px-6 py-4">{item.userId}</td>
                <td className="px-6 py-4">{item.date}</td>
                <td className="px-6 py-4">${item.payment}</td>
            </tr>
            ) })}
            </tbody>
        </table>
        </div>
        <div className="float-right rounded-md border-t flex h-12 w-fit flex-row items-center bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-600">
        <div>
            <span className="whitespace-nowrap py-4 pl-6 pr-3 font-medium text-gray-900 dark:text-white">Total Assert : </span>
            <span className="whitespace-nowrap py-4 pr-5 font-medium text-gray-900 dark:text-white">{total}</span>
        </div>
        </div>
        <div className="mt-20 flex w-full">
        <button className="m-auto flex h-14 w-fit items-center gap-2 rounded-full px-4 py-4 font-medium text-white dark:bg-gray-800">
            <span className="h-8 w-8 text-blue-500">
            <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
            </span>
            <span>Generate Report</span>
        </button>
        </div>
  </div>
  
  
  )
}
