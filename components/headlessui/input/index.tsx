"use client";
import React, { forwardRef, InputHTMLAttributes } from "react";

import {
  Input as __Input,
  Field as __Field,
  Label,
  Description,
} from "@headlessui/react";
import clsx from "clsx";

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, ""> {
  label?: string;
  error?: { isInvalid: boolean; errorMessage?: string };
}
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    label,
    error: { isInvalid, errorMessage } = { isInvalid: false, errorMessage: "" },
    ...otherProps
  } = props;

  return (
    <>
      <__Field>
        <Label className={"text-gray-700 dark:text-gray-200"}>
          {label ?? ""}
        </Label>
        <__Input
          className={clsx(
            "data-[hover]:shadow data-[focus]:bg-blue-100 block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring",
            className
          )}
          ref={ref}
          {...otherProps}
        />
        <Description>
          {isInvalid && <span className="text-red-600">{errorMessage}</span>}
        </Description>
      </__Field>
    </>
  );
});
Input.displayName = "HeadlessUi - Input";
