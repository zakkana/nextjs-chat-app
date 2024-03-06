/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useAuth from "@/hooks/useAuth";
import {useRouter} from "next/router";

const LogoutButton = () => {
  const { signOut } = useAuth();
  const router = useRouter();
  return (
    <button onClick={ () => {
        signOut
        router.push("/auth")
      }} 
      css={button}>
      ログアウト
    </button>
  );
};


export default LogoutButton;

// css
const button = css`
  width: 100px;
  border: none;
  background-color: #b8ccae;
  cursor: pointer;
  font-weight: 700;
`;
