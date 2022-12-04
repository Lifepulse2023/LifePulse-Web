import React from "react";

export default function ResetPassword() {
  return ( <div className="flex flex-col w-full p-20 m-8 bg-white rounded-md lg:m-0 lg:w-1/3 sm:p-10">
  <div className="mb-8 text-center text-[32px] font-semibold leading-[50px] text-[#35363A]">
    Pick a new password
  </div>
  <form action="" className="">
    <div className="space-y-4">
      <div>
        <label className="text-sm text-[#757F90]">New password</label>
        <input type="password" name="retypepassword" placeholder="Enter password"
        className="w-full px-3 py-2 mb-2 text-blue-800 border border-[#E9EEF6] rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#E9EEF6]"/>
        <ul className="list-disc text-sm text-[#757F90] ml-4 text-[10px]">
          <li>Use 8 or more characters.</li>
          <li>One uppercase letter, one special character and one number.</li>
        </ul>
      </div>

      <div>
        <label className="text-sm text-[#757F90]">Re-type new password</label>
        <input type="password" name="password" placeholder="Enter password"
        className="w-full px-3 py-2 text-blue-800 border border-[#E9EEF6] rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-[#E9EEF6]"/>
      </div>

    </div>
    <div className="mt-6 space-y-2">
      <div className="flex gap-x-2">
        <button type="button" 
          className="inline-flex items-center justify-center w-full px-8 py-3 space-x-2  text-white transition bg-[#3D67B1] rounded-md cursor-pointer">
          <span>Update password</span>
          <svg className="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 5l7 7-7 7"></path></svg>
        </button>
      </div>
    </div>
  </form>

</div>
    
  );
}