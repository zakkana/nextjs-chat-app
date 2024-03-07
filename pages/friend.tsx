/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Layout from "@/components/layouts/Layout";
import { Sidebar } from "@/components/sidebar/Sidebar";
import React, { useState } from "react";
import FriendTabItem from "@/components/friend/FriendTabItem";
import OnlineFrind from "@/components/friend/OnlineFrind";
import AllFrined from "@/components/friend/AllFrined";
import FrinedRequest from "@/components/friend/FrinedRequest";
import AddFrined from "@/components/friend/AddFrined";

function Friend() {
    const [activeTab, setActiveTab] = useState("オンライン");
    const [currentComponent, setCurrentComponent] = useState(OnlineFrind);

    const Menus = [
        { name: "オンライン", component: OnlineFrind },
        { name: "すべて表示", component: AllFrined },
        { name: "保留中", component: FrinedRequest },
        { name: "フレンド追加", component: AddFrined },
    ];
    // ログインしている場合のみチャットページを表示
    return (
        <Layout>
            <Sidebar />
            <div css={wrapper}>
                <ul css={ul}>
                    {Menus.map((menu, index) => (
                        <li
                            key={index}
                            css={li}
                            id={activeTab === menu.name ? "active" : ""}
                            onClick={() => {
                                setActiveTab(menu.name);
                                setCurrentComponent(menu.component);
                            }}
                        >
                            <FriendTabItem name={menu.name} />
                        </li>
                    ))}
                </ul>
                <div css={main}>{currentComponent}</div>
            </div>
        </Layout>
    );
}

export default Friend;

// css
const wrapper = css`
    display: flex;
    flex-direction: column;
    margin-inline: auto;
    overflow: auto;
    height: 100%;
    width: 90%;
    border-color: black;
    border: 1px solid black;
    border-left: none;
`;

const ul = css`
    display: flex;
    flex-direction: row;
    height: 5%;
    width: 100%;
    background-color: #798285;
    padding: 0;
    margin: 0;
`;
const li = css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 10px 20px;
    color: white;
    cursor: pointer;
    font-weight: bold;
    border-radius: 10px;
    &:hover,
    &#active {
        color: black;
        background-color: white;
    }
`;
const main = css`
    height: 100%;
    width: 100%;
    background-color: #f3f5f1;
    border-top: 1px solid black;
    padding: 0;
    margin: 0;
`;
