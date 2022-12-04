import AppCheckbox from "@common/Checkbox";
import AppInput from "@common/Input";

export default function Registration() {
  return (
    <>
      <form action="" className="ml-[78px] mr-[78px]">
        <div className="space-y-4">
          <div className="flex justify-between">
            <div className="mr-4">
              <AppInput
                type="text"
                label="First Name"
                placeholder="Enter first name"
                prefixIconUrl="/images/svg/user.svg"
              />
            </div>
            <div>
              <AppInput
                type="text"
                label="Last Name"
                placeholder="Enter last name"
                prefixIconUrl="/images/svg/user.svg"
              />
            </div>
          </div>
          <AppInput
            type="text"
            label="Email Address"
            placeholder="Enter email address"
            prefixIconUrl="/images/svg/email.svg"
          />
          <div>
            <AppInput
              type="password"
              label="Password"
              placeholder="Enter password"
              prefixIconUrl="/images/svg/lock.svg"
            />
            <ul className="list-disc text-sm text-[#757F90] ml-4 text-[10px]">
              <li>Use 8 or more characters.</li>
              <li>
                One uppercase letter, one special character and one number.
              </li>
            </ul>
          </div>

          <AppInput
            type="password"
            label="Re-type password"
            placeholder="Enter password"
            prefixIconUrl="/images/svg/lock.svg"
          />

          <div className="text-[#757F90]">
            <div className="flex justify-between mb-2 text-[13px]">
              <div>
                <AppCheckbox />
                I agree to all the{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms of use
                </a>{" "}
                and{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 space-y-2">
          <div className="flex gap-x-2">
            <button
              type="button"
              className="inline-flex items-center justify-center w-full px-8 py-3 space-x-2  text-white transition bg-[#3D67B1] rounded-md cursor-pointer"
            >
              <span>Sign up</span>
              <svg
                className="w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2 5l7 7-7 7"
                ></path>
              </svg>
            </button>
          </div>
          <p className="px-6 text-sm text-center text-[#757F90]">
            Already have an account?
            <a href="#" className="text-blue-600 hover:underline">
              Login
            </a>
            .
          </p>
        </div>
      </form>
    </>
  );
}
