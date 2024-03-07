import AuthLayout from "@/components/layouts/AuthLayout";
import { ReactElement } from "react";
import SignInGithub from "@/components/SignInGithub";
import React from "react";
import useAuth from "@/hooks/useAuth";
import { Session } from "inspector";

const auth = () => {
    const { session: isLogin } = useAuth();
    console.log("ログイン状態", isLogin);
    return <SignInGithub />;
};

auth.getLayout = function getLayout(page: ReactElement) {
    return <AuthLayout>{page}</AuthLayout>;
};

export default auth;
