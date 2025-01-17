"use client";
import React, { FC } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";

import { Input } from "@/components/headlessui";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface ViewProps {}
export const View: FC<ViewProps> = ({}) => {
  const FormSchema = z.object({
    access: z
      .string()
      .min(1, "帳號不可為空")
      .email("帳號格式不正確，請輸入有效的電子郵件地址"),
    password: z
      .string()
      .min(7, "密碼長度必須大於 6 碼") // 密碼長度必須大於 6
      .refine((val) => /[A-Z]/.test(val) && /[a-z]/.test(val), {
        message: "密碼必須包含至少一個大寫字母和一個小寫字母",
      }),
  });
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      access: "",
    },
    mode: "onChange",
  });
  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    const {} = data;
  };
  return (
    <>
      <div className="w-full flex items-center justify-center min-h-screen">
        <div className="w-80 border rounded-md p-5">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full">
              <div className="my-5 text-center">Login</div>
              <div>
                <Input
                  type="text"
                  label="Account"
                  error={{
                    isInvalid: errors["access"]?.message !== "undefined",
                    errorMessage: errors["access"]?.message ?? "",
                  }}
                  {...register("access")}
                />
              </div>
              <div className="mt-3">
                <Input
                  type="password"
                  label="Password"
                  error={{
                    isInvalid: errors["password"]?.message !== "undefined",
                    errorMessage: errors["password"]?.message ?? "",
                  }}
                  {...register("password")}
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default View;
