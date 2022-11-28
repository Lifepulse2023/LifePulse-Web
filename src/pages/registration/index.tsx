export default function Registration() {
  return (<div className="flex"> 
    <div className="bg-indigo-200 w-1/2 py-12">
        img
    </div>
    <div className="bg-white drop-shadow-md rounded-2xl  my-0 mx-auto w-1/2 py-8">
      <div className="bg-[#F3F7FD] flex flex-row">
        <div className="bg-white mr-8 ml-8 border-transparent border-r-[16px] py-5">Login</div>
        <div className="py-5">Create Account</div>
      </div>
      <form className="mt-6">
          <div className="mb-2 mr-8 ml-8">
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-gray-400"
            >
              Email
            </label>
            <input
              type="email"
              required
              className="block w-full px-4 py-2 mt-2 text-gray-400 bg-white border rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2 mr-8 ml-8" >
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2  text-purple-700 bg-white border border-[#E9EEF7] rounded-md focus:border-gray-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="flex flex-row">
          <input type="checkbox" className="ml-8"/>
          <label
              className="block text-sm mx-1 text-gray-400"
            >
            Remember me
            </label>
          <a href="#" className="text-sm  ml-40 text-gray-400 hover:cursor">
            Forget Password?
          </a>
          </div>
          <div className="  mr-8 ml-8">
            <button className="w-full px-4 py-2  tracking-wide text-white transition-colors duration-200 transform bg-[#afb2b7] rounded-md hover:[#b0caf0] focus:outline-none focus:bg-purple-600">
              Login
            </button>
          </div>
        </form>
        <p className="mt-4 text-xs font-light text-center text-gray-700">
          
          Dont have an account?
          <a href="#" className="font-medium text-purple-600 hover:underline">
            Create Account
          </a>
        </p>
    </div>
    </div>

  );
}
