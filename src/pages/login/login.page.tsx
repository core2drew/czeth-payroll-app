import { Button, Label, TextInput } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function LoginPage() {
  const { t, i18n } = useTranslation();
  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-b from-naples-yellow to-marigold">
      <div className="flex h-96 w-96 flex-col items-center justify-center rounded-lg bg-white p-9 shadow-md">
        <h3 className="mb-4 text-3xl font-bold text-japanese-indigo">
          {t("labels.welcome")}
        </h3>
        <p className="mb-4 text-japanese-indigo">
          {t("messages.signInToAccount")}
        </p>

        <div className="mb-4 w-full">
          <div className="mb-2 block">
            <Label
              className="text-japanese-indigo"
              htmlFor="email"
              value={t("labels.email") as string}
            />
          </div>
          <TextInput id="email" type="email" required={true} />
        </div>

        <div className="mb-4 w-full">
          <div className="mb-2 block">
            <Label
              className="text-japanese-indigo"
              htmlFor="password"
              value={t("labels.password") as string}
            />
          </div>
          <TextInput id="password" type="password" required={true} />
        </div>

        <Button className="mb-2 w-48 bg-naples-yellow !font-bold !text-japanese-indigo hover:bg-naples-yellow-200">
          {t("labels.signIn")}
        </Button>

        <Link className="text-xs text-japanese-indigo" to="/">
          {t("messages.forgotYourPassword")}
        </Link>
      </div>
    </main>
  );
}
