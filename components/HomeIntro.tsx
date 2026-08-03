"use client";

import { useLang } from "@/lib/i18n";

export function HomeIntro() {
  const { t } = useLang();

  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 items-center gap-5 lg:gap-8 pt-5 md:pt-6">
      <div className="lg:col-span-6 order-2 lg:order-1 px-margin-mobile md:px-gutter lg:pl-[max(24px,calc((100vw-1280px)/2+32px))] lg:pr-6">
        <p className="text-[13px] tracking-wide text-on-surface-variant mb-2 font-medium">
          {t("home.introEyebrow")}
        </p>
        <h1 className="text-[24px] md:text-[30px] lg:text-[34px] font-semibold leading-[1.35] tracking-[-0.01em] text-on-surface mb-4">
          {t("home.introTitle")}
        </h1>
        <div className="space-y-3 text-[15px] md:text-[16px] leading-[1.7] text-on-surface-variant max-w-xl font-normal">
          <p>{t("home.introBody1")}</p>
          <p>{t("home.introBody2")}</p>
        </div>
      </div>

      <div className="lg:col-span-6 order-1 lg:order-2 flex justify-end items-center min-w-0">
        <img
          src="/kb-light.png"
          alt=""
          className="w-[72%] max-w-[340px] md:max-w-[380px] h-auto object-contain object-right block dark:hidden"
        />
        <img
          src="/kb2.png"
          alt=""
          className="w-[68%] max-w-[320px] md:max-w-[355px] h-auto object-contain object-right hidden dark:block"
        />
      </div>
    </section>
  );
}
