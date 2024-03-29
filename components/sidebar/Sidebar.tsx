/** @jsxImportSource @emotion/react */
import SidebarItem from "./SidebarItem";
import { css } from "@emotion/react";
import GroupIcon from "@mui/icons-material/Group";
import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useRouter } from "next/router";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import Link from "next/link";

export const Sidebar = () => {
    const router = useRouter();

    const currentPath = router.pathname;

    const Menus = [
        { name: "Friend", icon: GroupIcon, path: "/friend" },
        { name: "ItemX", icon: QuestionMarkIcon, path: "/" },
        { name: "Itemε", icon: QuestionMarkIcon, path: "/", spacing: true },
        { name: "ChatRoom1", icon: TelegramIcon, path: "/chatApp" },
        { name: "ChatRoom2", icon: TelegramIcon, path: "/chatApp" },
    ];

    return (
        <ul css={ul}>
            {Menus.map((menu, index) => (
                // page遷移をするならNextjsのLinkコンポーネントを使う。本番環境でPrefetchが使えること、必要な分のみこうしんすることができる
                <Link key={index} href={menu.path}>
                    <li
                        item-spacing={menu.spacing?.toString()}
                        css={li}
                        id={currentPath === menu.path ? "active" : ""}
                    >
                        <SidebarItem Icon={menu.icon} name={menu.name} />
                    </li>
                </Link>
            ))}
        </ul>
    );
};

const ul = css`
    display: flex;
    flex-direction: column;
    max-height: 100vh;
    width: 10%;
    overflow: auto;
    background-color: #2b2d31;
    border-top: 1px solid black;
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    padding: 0;
    margin: 0;
`;
const li = css`
    display: flex;
    align-items: center;
    margin: 10px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
    &:hover,
    &#active {
        color: black;
        background-color: white;
    }
    &[item-spacing="true"] {
        margin-bottom: 30px;
        // margin-bottom: 1px solid #000000;
    }
`;
