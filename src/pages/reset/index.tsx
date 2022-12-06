
import AppButton from "@common/Button";
import Layout from "@components/layout";

export default function Reset() {
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
        <h1 className="text-2xl font-medium text-[#3D67B1] text-center mt-[55px]">
          Password reset request sent
        </h1>
        <p className="test-sm font-normal text-[#757F91] text-center mt-[14px]">
          We sent your password reset link to
        </p>
        <h2 className="test-sm font-medium text-[ #35363A] text-center mt-[4px]  ">
          email@email.com
        </h2>
        <div className="px-[64px] mt-[20px]">
          <p className="test-sm font-normal text-center text-[#757F91]">
            Just click on the link in that email to reset your password. The
            email may take a few minutes to arrive to your inbox. If you don’t
            see it, try checking your spam folder. This link will expire in 15
            minutes.
          </p>
        </div>
        <p className="test-sm font-normal text-[#757F91] text-center mt-[30px]">
          Still can’t find the email?
        </p>
        <div className="px-[193px] mt-[6px]">
          {/* <button className="w-full px-4 py-2 rounded-lg font-semibold text-[#FFFFFF] bg-[#3D67B1]  focus:outline-none">
            Resend email
          </button> */}
          <AppButton type="button" onClick={() => {}} label="Resend email" isLoading={false} />
        </div>
        <div className="flex flex-row mt-[30px]">
          <input type="checkbox" className="ml-[208px]" />
          <p className="text-sm ml-[12px] ">Go back to</p>
          <a
            href="#"
            className="text-sm ml-[5px] font-medium decoration-[#757F91] underline hover:underline-offset-4 hover:cursor"
          >
            Login
          </a>
        </div>
      </div>
    </Layout>
  );
}
