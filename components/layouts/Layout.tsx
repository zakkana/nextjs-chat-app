/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LogoutButton from "../LogoutButton";
import useAuth from "@/hooks/useAuth";
import Link from "next/link";
import { Sidebar } from "../sidebar/Sidebar";

type Props = {
    children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
    const { session: isLogin } = useAuth();

    return (
        <div css={wrapper}>
            <header css={header}>
                <div css={headerContainer}>
                    <h1 css={title}>
                        <Link href={"/"}>Chat App</Link>
                    </h1>
                    {isLogin && <LogoutButton />}
                </div>
            </header>
            {/* <Sidebar/> */}
            <main css={main}>{children}</main>
        </div>
    );
};

export default Layout;

// css
const wrapper = css`
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
    /* border-bottom: 1px solid black; */
    // justify-content: space-between;
`;
const main = css`
    display: flex;
    flex-direction: row;
    height: 100vh;
    // width: min(100%, 1000px);
    // border: 1px solid #333;
    // border-radius: 10px;
    // box-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
    // margin-inline: auto;
    // padding-inline: 20px;
    // min-height: 400px;
    // position: relative;
    // overflow: hidden;
    // background-color: #c5f1fd;
    // margin-block: 30px;
`;

const header = css`
    background-color: #313338;
`;

const headerContainer = css`
    display: flex;
    justify-content: space-between;
    margin-inline: auto;
    padding: 0 20px;
`;

const title = css`
    font-size: 28px;
    a {
        color: white;
        text-decoration: none;
    }
`;

const footer = css`
    background-color: #abeb8a;
`;

const footerText = css`
    display: grid;
    place-content: center;
    min-height: 60px;
`;
