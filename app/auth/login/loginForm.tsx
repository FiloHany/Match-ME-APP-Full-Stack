"use client";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Input,
} from "@heroui/react";
import React from "react";
import { GiPadlock } from "react-icons/gi";
import { useForm } from "react-hook-form";
import {
  loginSchema,
  LoginSchema,
} from "@/lib/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });
  
  const onSubmit = (data: LoginSchema) => {
    console.log(data);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center justify-center pb-6 pt-8">
          <div className="flex flex-col gap-2 items-center">
            <div className="flex flex-row items-center gap-3">
              <GiPadlock size={30} className="text-gray-700" />
              <h1 className="text-3xl font-semibold text-gray-800">
                Login
              </h1>
            </div>
            <p className="text-gray-500">
              Welcome back to MatchMe!
            </p>
          </div>
        </CardHeader>
        <CardBody className="px-8 pb-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                {...register("email")}
                type="email"
                label="Email"
                variant="flat"
                isInvalid={!!errors.email}
                errorMessage={errors.email?.message}
                className="w-full"
              />
            </div>
            
            <div>
              <Input
                {...register("password")}
                type="password"
                label="Password"
                variant="flat"
                isInvalid={!!errors.password}
                errorMessage={errors.password?.message}
                className="w-full"
              />
            </div>
            
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-slate-800 text-white"
                isDisabled={!isValid}
                isLoading={isSubmitting}
              >
                Login
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}