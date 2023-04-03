import { Button, Label, TextInput } from "flowbite-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function ForgotPasswordPage() {
  const { t } = useTranslation();
  return (
    <main className="flex h-screen items-center justify-center bg-gradient-to-b from-naples-yellow to-marigold">
      <div className="flex h-96 w-full max-w-md flex-col items-center justify-center rounded-lg bg-white p-9 shadow-md">
        <h3 className="mb-4 text-3xl font-bold text-japanese-indigo">
          {t("messages.forgotYourPassword")}
        </h3>

        <p className="mb-4 text-japanese-indigo">
          {t("messages.enterEmailAssociatedWithYourAccount")}
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

        <Button className="mb-2 w-48 bg-naples-yellow !font-bold !text-japanese-indigo hover:bg-naples-yellow-200">
          {t("messages.recoverMyPassword")}
        </Button>

        <Link className="text-xs text-japanese-indigo" to="/login">
          {t("messages.backToSignIn")}
        </Link>
      </div>
    </main>
  );
}
