import Image from 'next/image'


export default function MainPage() {
  return (
    <div className='w-auto h-auto '>
        <div className='w-96 shadow-lg text-center  rounded-full h-96  bg-gray-100  p-10 space-y-4 hover:bg-blue-400 hover:text-white' >
        <h2 className='mt-10 font-bold'>Hello</h2>
        <p className=''>After completing these steps, your code should be successfully pushed to your GitHub repository. You can now view the changes on the GitHub website or continue working on your project and push further updates using the git add, git commit, and git push commands as needed.</p>
        </div>
   
    </div>
  )
}
