import AppButton from "@common/Button";
import AppInput from "@common/Input";
import Layout from "@components/layout";

export default function ForgotPassword() {
  return (
    <Layout>
      <div className="bg-white drop-shadow-md rounded-2xl  my-0 mx-auto w-[556px] h-[600px] py-8">
        <div className="flex flex-row mt-0">
          <div className="bg-[#FFFFFF] w-[216px] h-[110px] text-center ">
            Login
          </div>
          <div className="bg-[#F3F7FD] w-[350px] h-[110px] text-center rounded-lg ">
            Create Account
          </div>
        </div>
        <p className="text-[14px] font-normal text-[#757F90] ml-[78px] mt-[52px]">
        Go back to Login
        </p>
        <h1 className="text-[24px] font-medium text-[#757F90] ml-[78px] mt-[33px]  ">
        Forgot your password?
        </h1>
        <div className="text-[14px] font-normal text-[#757F91]  ml-[78px] mr-[78px] mt-[16px] w-[410px] h-[37px]">
        <p className="m-0 text-justify">
        Enter your email address below and we'll send you a password reset link. </p>
        </div>
       {/* <p className=" text-[14px] text-[#757F90] ml-[78px] mt-[30px]">Email Address</p>*/}
       <div className=" ml-[78px] mt-[10px] w-[410px] h-[52px]">
          <AppInput type="text" label="Email Address" prefixIconUrl="/images/svg/email.svg" />
          </div>
          <div className=" ml-[78px] mt-[50px] w-[410px] h-[52px]" >
          <AppButton type="button" onClick={() => {}} label="Send reset link" isLoading={false} />
        </div>
      </div>
    </Layout>
  );
}