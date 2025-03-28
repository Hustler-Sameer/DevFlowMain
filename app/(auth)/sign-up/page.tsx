"use client";
import AuthForm from "@/components/forms/AuthForm";
import { SignUpSchema } from "@/lib/validations";
import React from "react";

const signUp = () => {
  return (
    <AuthForm
      formType="SIGN_UP"
      schema={SignUpSchema}
      defaultValues={{ email: "", password: "", username: "" }}
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default signUp;
