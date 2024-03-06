/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Layout from '@/components/layouts/Layout';
import { Sidebar } from '@/components/Sidebar';
import SignInGithub from '@/components/SignInGithub';
import useAuth from '@/hooks/useAuth';
import React, { useState } from 'react';
import SidebarItem from "@/components/SidebarItem";
import GroupIcon from '@mui/icons-material/Group';


function Friend() {
  const [ activeTab, setActiveTab ] = useState("オンライン")

  const Menus = [
    {name: "オンライン"},
    {name: "すべて表示"},
    {name: "保留中"},
    {name: "フレンド追加"},
  ]
  // ログインしている場合のみチャットページを表示
  return (
    <Layout>
      <Sidebar />
      <div css={wrapper}>
        <ul css={ul} >
          {Menus.map((menu, index) => (
            <li
                key={index}
                css={li}
                id={ activeTab === menu.name ? "active" : "" }
                onClick={() => {
                    setActiveTab(menu.name);
                }}
            >
                <SidebarItem Icon={GroupIcon} name={menu.name} />
            </li>
          ))}
        </ul>
        <div css={main}>
            mainの内容です。
        </div>
      </div>
    </Layout>
  )
};

export default Friend

// css
const wrapper = css`
  display: flex;
  flex-direction: column;
  min-width: 90%;
  margin-inline: auto;
  overflow: auto;
  max-height: 100%;
`;

const ul = css`
    display: flex;
    flex-direction: row;
    max-height: 10%;
    width: 100%;
    background-color: #798285;
    border-top: 1px solid white;
    border-right: 1px solid white;
    border-bottom: 1px solid white;
    padding: 0;
    margin: 0;
`;
const li = css`
  display: flex;
  align-items: center;
  margin: 10px 20px;
  color: white;
  cursor: pointer;
  font-weight: bold;
  border-radius: 10px;
  &:hover , &#active {
      color: black;
      background-color: white;
  }
`;
const main = css`
  height: 100%;
  width: 100%;
  background-color: #f3f5f1;
  border-top: 1px solid white;
  border-right: 1px solid white;
  border-bottom: 1px solid white;
  padding: 0;
  margin: 0;
`;