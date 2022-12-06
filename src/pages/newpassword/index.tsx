import AppButton from "@common/Button";
import AppInput from "@common/Input";
import React from "react";

export default function NewPassword() {
  return (
    <div className="flex flex-col w-full p-20 m-8 bg-white rounded-md lg:m-0 lg:w-1/3 sm:p-10">
      <div className="mb-8 text-center text-[32px] font-semibold leading-[50px] text-[#35363A]">
        Pick a new password
      </div>
      <form action="" className="">
        <div className="space-y-4">
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

          <div>
          <AppInput
          type="password"
          label="Password"
          placeholder="Enter password"
          prefixIconUrl="/images/svg/lock.svg"
        />
          </div>
        </div>
        <div className="mt-6 space-y-2">
        <AppButton
            type="button"
            label="Update password"
          />
        </div>
      </form>
    </div>
  );
}
