"use client";

import PageContainer from "@/components/PageContainer";
import { useLogout } from "@/modules/auth/api/logout";
import { useAuthStore } from "@/modules/auth/auth-store";
import { useTranslation } from "@/modules/i18n/client";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FC, useState } from "react";
import navLogo from "../../public/images/logos/NavLogo.png";
import Image from "next/image";
import NiceModal from "@ebay/nice-modal-react";
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import humbMenu from "/public/icons/humbMenu.svg";
import dynamic from "next/dynamic";
import { languages, routes } from "./staticData";
import clsx from "clsx";
import { ListItemStyled } from "./MuiComponents";
import { ParamsLng } from "./type";
import toast from "react-hot-toast";

const LoginModal = dynamic(() =>
  import("@/modules/auth/ui/LoginModal").then((mod) => mod.LoginModal)
);

export default function NavBar({ lng }: ParamsLng) {
  const { t } = useTranslation(lng);
  const newLang = lng == "ar" ? "en" : "ar";
  const positionMenu = lng == "ar" ? "left" : "right";

  const [isMobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const user = useAuthStore((state) => state.user);

  const changeLangHandler = () => {
    const redirectUrl = params
      ? `/${newLang}/${pathname.slice(3)}?${params}`
      : `/${newLang}/${pathname.slice(3)}`;
    router.push(redirectUrl);
  };

  const { mutate: logout } = useLogout();

  return (
    <PageContainer>
      <nav className="tw-flex tw-items-center tw-justify-between tw-py-3 tw-font-cairo">
        <Link
          href={`/${lng}`}
          className="tw-flex tw-items-center tw-gap-1 lg:tw-gap-3"
        >
          <Image
            src={navLogo}
            alt="Logo"
            priority
            className="tw-w-[30px] lg:tw-w-[40px]"
          />
          <p className="tw-font-bold tw-text-[#2C2C2C] lg:tw-text-[18px]">
            {t("ahtirafi")}
          </p>
        </Link>

        <div className="tw-hidden md:tw-flex tw-items-center tw-justify-center tw-gap-2 tw-text-sm lg:tw-text-base lg:tw-gap-8 tw-flex-1">
          {routes?.map((route) => (
            <Link
              className={clsx(
                "tw-p-1 tw-whitespace-nowrap tw-transition-all",
                pathname == `/${lng}${route.href}`
                  ? "tw-text-primary-50 tw-border-b-4 tw-border-primary-50 tw-font-bold"
                  : "hover:tw-opacity-80 tw-text-Grey-70"
              )}
              key={route.id}
              href={`/${lng}${route.href}`}
            >
              {t(route.name)}
            </Link>
          ))}

          <div
            className="tw-cursor-pointer tw-p-1 tw-whitespace-nowrap hover:tw-opacity-80 tw-transition-all tw-text-Grey-70"
            onClick={(event: React.MouseEvent<HTMLElement>) => {
              setAnchorEl(event.currentTarget);
            }}
          >
            {t("lang") + " "}
            <span className="tw-text-[#000000]">
              {lng == "ar" ? "العربية" : "English"}
            </span>
          </div>

          <Menu
            anchorEl={anchorEl}
            disableScrollLock={false}
            id="account-menu"
            open={Boolean(anchorEl)}
            onClose={() => {
              setAnchorEl(null);
            }}
            transformOrigin={{
              horizontal: positionMenu,
              vertical: "top",
            }}
            anchorOrigin={{
              horizontal: positionMenu,
              vertical: "bottom",
            }}
            PaperProps={{
              elevation: 0,
              sx: {
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.12))",
                width: "175px",
                borderRadius: "4px",
                p: 0,
                color: "#646464",
              },
            }}
          >
            {languages.map((lang) => (
              <ListItem
                key={lang.id}
                sx={{
                  cursor: "pointer",
                  p: 0,
                  mb: 1,
                  ".MuiButtonBase-root": {
                    mx: 1,
                    borderRadius: "5px",
                    "&:hover": {
                      backgroundColor: "#F1F4FF",
                      color: "#106FF4",
                    },
                    "&.Mui-selected": {
                      color: "#106FF4",
                      backgroundColor: "#F1F4FF",
                      "&:hover": {
                        backgroundColor: "#F1F4FF",
                      },
                    },
                  },
                }}
              >
                <ListItemButton
                  sx={{ p: 1, m: 0 }}
                  selected={lng === lang.abbreviation}
                >
                  <ListItemText disableTypography onClick={changeLangHandler}>
                    {lang.title}
                  </ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </Menu>
        </div>

        <div className="tw-hidden md:tw-flex tw-justify-between tw-items-center tw-text-sm lg:tw-text-[15px]">
          {!user?.access ? (
            <div className="tw-flex tw-items-center tw-gap-2">
              <p
                onClick={() => NiceModal.show(LoginModal as FC, { lng })}
                className="tw-cursor-pointer tw-px-4 tw-py-2 tw-text-primary-50 hover:tw-opacity-80 tw-transition-all"
              >
                {t("login")}
              </p>

              <button className="tw-hidden xl:tw-block tw-rounded-lg tw-px-4 tw-py-2 tw-border tw-border-primary-50 hover:tw-opacity-80 tw-transition-all tw-text-primary-50 ">
                {t("getStartedFee")}
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                logout();
                toast.success(t("logoutSuccess"));
              }}
              className="tw-hidden xl:tw-block tw-rounded-lg tw-px-4 tw-py-2 tw-border tw-border-primary-50 hover:tw-opacity-80 tw-transition-all tw-text-primary-50 "
            >
              {t("logout")}
            </button>
          )}
        </div>

        {/* ------THIS FOR MOBILE SIDEBAR------- */}
        <div className="md:tw-hidden">
          <Button
            onClick={() => setMobileSidebarOpen(true)}
            sx={{ minWidth: "50px" }}
          >
            <Image src={humbMenu} alt="menu Icon" priority />
          </Button>

          <Drawer
            anchor={lng == "ar" ? "right" : "left"}
            lang="en"
            open={isMobileSidebarOpen}
            onClose={() => setMobileSidebarOpen(false)}
            variant="temporary"
            PaperProps={{
              style: {
                left: lng == "ar" ? "unset" : 0,
                right: lng == "ar" ? 0 : "unset",
              },
              sx: {
                width: 250,
              },
            }}
          >
            {routes.map((item) => {
              return (
                <List component="div" disablePadding key={item.id}>
                  <ListItemStyled>
                    <ListItemButton
                      component={Link}
                      href={`/${lng}${item.href}`}
                      selected={pathname == `/${lng}${item.href}`}
                      sx={{
                        p: "3px 10px !important",
                        m: "10px 20px",
                      }}
                    >
                      <ListItemText disableTypography sx={{ fontWeight: 600 }}>
                        {t(item.name)}
                      </ListItemText>
                    </ListItemButton>
                  </ListItemStyled>
                </List>
              );
            })}

            <div className="tw-border-t tw-border-[rgba(169, 169, 169, 0.16)] tw-py-3 tw-mt-2 tw-px-[30px] tw-flex tw-justify-between tw-items-center">
              <p className="tw-font-bold">{t("lang")}</p>
              <ToggleButtonGroup
                value={lng}
                sx={{ p: "0px 13px", color: "#106FF4" }}
                size="small"
                exclusive
                onChange={changeLangHandler}
                aria-label="Platform"
              >
                <ToggleButton sx={{ p: "6px 6px 4px" }} value="en">
                  En
                </ToggleButton>
                <ToggleButton sx={{ p: "6px 6px 4px" }} value="ar">
                  Ar
                </ToggleButton>
              </ToggleButtonGroup>
            </div>

            {!user?.access ? (
              <p
                onClick={() => {
                  NiceModal.show(LoginModal as FC, { lng });
                  setMobileSidebarOpen(false);
                }}
                className="tw-cursor-pointer tw-font-bold tw-px-[30px] tw-py-[10px] tw-text-Grey-90 hover:tw-opacity-80 tw-transition-all"
              >
                {t("login")}
              </p>
            ) : (
              <p
                onClick={() => {
                  logout();
                  setMobileSidebarOpen(false);
                  toast.success(t("logoutSuccess"));
                }}
                className="tw-cursor-pointer tw-font-bold tw-px-[30px] tw-py-[10px] tw-text-Grey-90 hover:tw-opacity-80 tw-transition-all"
              >
                {t("logout")}
              </p>
            )}
          </Drawer>
        </div>
      </nav>
    </PageContainer>
  );
}
