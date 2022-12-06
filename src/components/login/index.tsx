import AppButton from "@common/Button";
import AppInput from "@common/Input";
import AppCheckbox from "@common/Checkbox";
import React, { useState } from "react";
import AppToggleButton from "@common/ToggleButton";
import Tabs from "@common/Tabs";

export default function Login() {
  const [isLoading, setLoading] = useState(false);
  const [isChecked, setChecked] = useState(false);
  return (
    <form action="" className=" ml-[78px] mr-[78px]">
      <div className="space-y-4">
        <AppInput
          type="text"
          label="Email Address"
          placeholder="Enter email address"
          prefixIconUrl="/images/svg/email.svg"
        />
        <AppInput
          type="password"
          label="Password"
          placeholder="Enter password"
          prefixIconUrl="/images/svg/lock.svg"
          errors={['The email ID or password you entered is not correct.']}
        />

        <div className="text-[#757F90]">
          <div className="flex justify-between mb-2 text-sm">
            <div>
              <AppCheckbox checked={isChecked} onChange={() => {
                setChecked(!isChecked);
              }}/>
              Remember me
            </div>

            <a href="#" className="hover:underline">
              Forgot password?
            </a>
          </div>
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <div className="flex gap-x-2 bg-[#F3F7FD]">
          <AppButton
            type="button"
            suffixIconUrl="/images/svg/arrow-right.svg"
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 5000);
            }}
            label="Login"
            isLoading={isLoading}
            disabled={false}
          />
        </div>
        <p className="px-6 text-sm text-center ">
          Don't have an account?
          <a href="#" className="text-blue-600 hover:underline">
            Create Account
          </a>
        </p>
      </div>
    </form>
  );
}
