import Image from 'next/image'


export default function Sidebar() {
  return (
    <div className='w-auto h-auto '>
        <div className='w-1/2 shadow-lg bg-gray-100 text-center mx-auto h-auto p-10 space-y-4 hover:bg-blue-400 hover:text-white' >
        <h2 className='mt-10 font-bold'>Hello</h2>
        <p>After completing these steps, your code should be successfully pushed to your GitHub repository. You can now view the changes on the GitHub website or continue working on your project and push further updates using the git add.</p>
        </div>
   
    </div>
  )
}
