import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { Dialog } from "@headlessui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import Input from "@/components/Input";
import { LoginRequest, useLogin } from "../api/login";
import { toast } from "react-hot-toast";
import { useTranslation } from "@/modules/i18n/client";
import { ParamsLng } from "@/shared/type";
import { StyledLoadingButton } from "@/shared/MuiComponents";
import imageLogin from "/public/images/backgrounds/login-bg.png";
import Image from "next/image";
import { MdOutlineClose } from "react-icons/md";
import logo from "/public/images/logos/logo-login.png";
import googleLogo from "/public/images/logos/logo googleg 48dp.png";
import flag from "/public/images/imarat-flag.png";
import { FormErrorMessage } from "@/components/forms/FormErrorMessage";

export const LoginModal = NiceModal.create(({ lng }: ParamsLng) => {
  const { t } = useTranslation(lng);

  const modal = useModal();
  const { mutate: login, isPending: loadingLogin } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginRequest>();

  const onSubmitAuth: SubmitHandler<LoginRequest> = (data) => {
    login(
      {
        ...data,
      },
      {
        onSuccess(data) {
          modal.remove();
          toast.success(t("loginSuccess"));
        },
      }
    );
  };

  return (
    <Dialog
      as="div"
      open={modal.visible}
      className="tw-relative tw-z-[2000]"
      onClose={modal.remove}
    >
      <div className="tw-fixed tw-inset-0 tw-bg-black tw-opacity-[80%]" />

      <div className="tw-fixed tw-inset-0 tw-overflow-y-auto">
        <div className="tw-flex tw-min-h-full tw-items-center tw-justify-center">
          <Dialog.Panel className="tw-w-[90%] md:tw-w-[70%] tw-rounded-sm tw-bg-[#EEEEEE]">
            <div className="tw-relative tw-flex md:tw-h-[90vh]">
              <div
                onClick={modal.remove}
                className="tw-z-30 tw-text-[20px] tw-text-Grey-70 lg:tw-text-White tw-absolute tw-top-1 tw-start-1 lg:tw-start-2 lg:tw-top-2 tw-cursor-pointer"
              >
                <MdOutlineClose />
              </div>

              <div className="tw-hidden tw-relative tw-bg-Black lg:tw-flex tw-justify-center tw-w-[230px] xl:tw-w-[270px] tw-h-full">
                <Image src={imageLogin} alt="" priority fill />

                <div className="tw-flex tw-flex-col tw-justify-between tw-items-center tw-h-full tw-pt-12 tw-pb-4">
                  <div className="tw-relative tw-w-36">
                    <Image src={logo} alt="" priority />
                  </div>

                  <div className=" tw-text-White tw-text-xs tw-flex tw-flex-col tw-gap-[5px] tw-items-center">
                    <div className="tw-relative tw-w-11">
                      <Image src={flag} alt="" priority />
                    </div>

                    <p className="">{t("theUnitedArabEmirates")}</p>
                    <button className="tw-z-20 tw-cursor-pointer tw-w-[120px] tw-h-9 focus:tw-outline-none tw-rounded tw-font-bold tw-font-tajawal tw-bg-White tw-bg-opacity-40">
                      {t("changeCountry")}
                    </button>
                  </div>
                </div>
              </div>

              <div className="md:tw-m-6 tw-w-full tw-h-fit tw-flex-1 tw-bg-White tw-flex tw-justify-center tw-items-center tw-pt-14 tw-pb-16 md:tw-pb-7">
                <form
                  onSubmit={handleSubmit(onSubmitAuth)}
                  className="tw-w-[90%] md:tw-w-[80%] lg:tw-w-[60%]"
                >
                  <p className="tw-font-tajawal tw-font-bold tw-mb-8 tw-text-center">
                    {t("login")}
                  </p>

                  <div className="tw-w-full tw-mb-4">
                    <Input
                      register={register}
                      label="email"
                      required={true}
                      type="email"
                      placeholder={t("email")}
                      lng={lng}
                    />

                    <FormErrorMessage error={errors.email} />
                  </div>

                  <div className="tw-w-full">
                    <Input
                      register={register}
                      label="password"
                      required={true}
                      type="password"
                      placeholder={t("password")}
                      lng={lng}
                    />

                    <FormErrorMessage error={errors.password} />
                  </div>

                  <p className="tw-font-tajawal tw-font-bold tw-text-primary-50 tw-text-fxsm tw-my-3 tw-cursor-pointer hover:tw-opacity-75 tw-transition-all tw-text-end">
                    {t("forgotYourPassword?")}
                  </p>

                  <StyledLoadingButton
                    loading={loadingLogin}
                    type="submit"
                    variant="contained"
                  >
                    {t("login")}
                  </StyledLoadingButton>

                  <p className="tw-mt-7 tw-mb-3 tw-font-tajawal tw-font-black tw-text-Grey-90 tw-text-center tw-text-sm">
                    {t("or")}
                  </p>

                  <button className="tw-flex tw-justify-center tw-items-center tw-gap-3 tw-font-tajawal tw-font-bold tw-text-primary-50 tw-rounded tw-text-[13px] tw-bg-[#F0FEFF] tw-w-full tw-h-[44px]">
                    <div className="tw-relative tw-w-4">
                      <Image src={googleLogo} alt="" priority />
                    </div>
                    {t("useGoogleAccount")}
                  </button>
                </form>
              </div>

              <p className="tw-absolute tw-bottom-4 tw-end-7 tw-text-xs tw-text-Grey-90">
                {t("IDontHaveAccount") + " "}
                <span className="tw-text-primary-50 tw-cursor-pointer">
                  {t("createAnAccount")}
                </span>
              </p>
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
});
