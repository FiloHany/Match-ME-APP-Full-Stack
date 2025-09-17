"use client";

import {
  RegisterSchema,
  registerSchema,
} from "@/lib/schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
} from "@heroui/react";
import React from "react";
import { useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = (data: RegisterSchema) => {
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
                Register
              </h1>
            </div>
            <p className="text-gray-500">
              Welcome to NextMatch
            </p>
          </div>
        </CardHeader>
        <CardBody className="px-8 pb-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <Input
                {...register("name")}
                type="text"
                label="Name"
                variant="flat"
                isInvalid={!!errors.name}
                errorMessage={errors.name?.message}
                className="w-full"
              />
            </div>
            
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
                Register
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>
    </div>
  );
}