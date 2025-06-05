import Link from "next/link";
import React from "react";
import SignUpForm from "./signupForm";

const SignUpPage = () => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg w-96 flex flex-col items-center justify-center">
      <h1 className="text-center text-2xl font-bold mb-4">Sign Up Page</h1>
      <SignUpForm />
      <div className="flex text-sm justify-between">
        <p>Already have an account?</p>
        <Link href="/auth/signin" className="underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
