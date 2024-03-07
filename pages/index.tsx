/** @jsxImportSource @emotion/react */
import useAuth from "@/hooks/useAuth";
import { Sidebar } from "@/components/sidebar/Sidebar";
import { useRouter } from "next/navigation";
import Layout from "@/components/layouts/Layout";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";

const Home = () => {
    const { session: isLogin } = useAuth();
    const router = useRouter();

    console.log("ログイン状態", isLogin);

    if (isLogin) {
        return (
            <Layout>
                <></>
            </Layout>
        );
    } else {
        // サーバーサイドでレンダリングするための処置（router.pushはサーバサイドのレンダリングでは使えないため）
        <Layout>
            <div css={wrapper}>
                <button onClick={() => router.push("/auth")}>
                    認証画面に遷移
                </button>
            </div>
        </Layout>;
    }
};

export default Home;

const wrapper = css`
    place-content: center;
    margin-block: 80px;
    width: 100%;
    margin: 10% 20%;
    background-color: #b4edb4;
    border-radius: 20px;

    button {
        display: flex;
        font-size: large;
        justify-content: center;
        height: auto;
        width: 100%;
        padding-bottom: 10px;
        background-color: #b4edb4;
        border: none;
        border-bottom: 1px solid #000;
        :hover {
            cursor: pointer;
        }
    }
`;
