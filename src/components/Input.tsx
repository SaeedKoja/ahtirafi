"use client";
import { twMerge } from "tailwind-merge";
import { UseFormRegister } from "react-hook-form";
import { HTMLInputTypeAttribute, useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { useTranslation } from "@/modules/i18n/client";
import { InputLabel, styled } from "@mui/material";

export const InputLabelStyled = styled(InputLabel)(({ theme }) =>
  theme.unstable_sx({
    color: "#646464",
    fontSize: { xs: "11px", md: "12px" },
    marginBottom: "5px",
  })
);

type InputProps = {
  register: UseFormRegister<any>;
  label: string;
  required?: boolean;
  className?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  lng: string;
};

export default function Input({
  register,
  label,
  required,
  className,
  placeholder,
  type,
  lng,
}: InputProps) {
  const [showPassword, setWhowPassword] = useState(false);
  const { t } = useTranslation(lng);

  return (
    <div className="tw-relative tw-w-full">
      <InputLabelStyled>{t(label)}</InputLabelStyled>

      <input
        className={twMerge(
          "tw-bg-[#EEEEEE] tw-border tw-border-[#E4E4E4] tw-px-3 tw-text-Grey-90 tw-py-[9px] focus:tw-outline-none tw-w-full tw-rounded-[4px] tw-text-[13px] md:tw-text-[15px]",
          className
        )}
        {...register(label, {
          required: required ? t("fieldRequired") : false,
        })}
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        placeholder={placeholder}
      />

      {type === "password" && (
        <div
          className="tw-absolute tw-top-[50%] tw-end-3 tw-text-[20px] tw-text-Black tw-opacity-75 tw-cursor-pointer"
          onClick={() => setWhowPassword((prev) => !prev)}
        >
          {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
        </div>
      )}
    </div>
  );
}
