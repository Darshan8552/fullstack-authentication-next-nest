"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SubmitButton from "@/components/ui/submit-button";
import { signIn } from "@/lib/auth";
import Link from "next/link";
import React from "react";
import { useFormState } from "react-dom";

const SignInForm = () => {
  const [state, SignInAction] = useFormState(signIn, undefined);
  return (
    <form action={SignInAction}>
      <div className="flex flex-col gap-2 w-64">
        {state?.message && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="example@gmail.com"
          />
        </div>
        {state?.error?.email && (
          <p className="text-sm text-red-500">{state?.error?.email}</p>
        )}
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="*********"
          />
        </div>
        {state?.error?.password && (
          <p className="text-sm text-red-500">{state?.error?.password}</p>
        )}
        <Link href="/auth/login" className="underline text-sm">
          Forgot your password?
        </Link>
        <SubmitButton>Sign In</SubmitButton>
        <div className="flex text-sm justify-between">
          <p>Don&apos;t have an account?</p>
          <Link href="/auth/signup" className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default SignInForm;
