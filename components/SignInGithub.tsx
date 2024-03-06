/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useAuth from "@/hooks/useAuth";
import Image from "next/image";

const SignInGithub = () => {
  const { signInWithGithub, error } = useAuth();

  return (
    <div css={wrapper}>
      <h2>ログイン画面</h2>

      <button onClick={signInWithGithub}>
        <Image src="/github.svg" alt="Github" width={20} height={20} />
        Githubでサインインする
      </button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default SignInGithub;

const wrapper = css`
  place-content: center;
  margin-block: 80px;
  width: 100%;
  margin: 10% 20%;
  background-color: #B4EDB4;
  border-radius: 20px;
  h2 {
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
    border-bottom: 1px solid #000;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    background-color: #272b33;
    width: 250px;
    margin-inline: auto;
    line-height: 45px;
    color: #fff;
    font-weight: 700;
    border: none;
    cursor: pointer;
    border-radius: 6px;
  }
`;
