import supabase from "@/lib/supabase";
import { Session } from "@supabase/supabase-js";
import { useEffect, useState } from "react";

const useAuth = () => {
    const [session, setSession] = useState<Session | null>(null); // ログイン状態を管理
    const [error, setError] = useState(""); // エラー状況を管理

    useEffect(() => {
        // ログイン状態の変化を監視
        const { data: authData } = supabase.auth.onAuthStateChange(
            (_, session) => {
                setSession(session);
            }
        );

        // リスナーの解除
        return () => authData.subscription.unsubscribe();
    }, []);

    // GitHubでサインイン
    const signInWithGithub = async () => {
        console.log("GitHubでサインインを開始します");
        try {
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "github",
            });
            if (error) {
                setError(error.message);
            }
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            } else if (typeof error === "string") {
                setError(error);
            } else {
                console.error("GitHubとの連携に失敗しました。");
            }
        }
        // 初回ログイン時にUsersテーブルにユーザを追加
        try {
            const { data, error } = await supabase
                .from("users")
                .select("*")
                .eq("nickname", session?.user?.user_metadata.user_name);
            if (error) setError(error.message);
            if (!data?.length) {
                const { error } = await supabase.from("users").insert([
                    {
                        nickname: session?.user?.user_metadata.user_name,
                        status: "online",
                    },
                ]);
                if (error) setError(error.message);
            }
        } catch (error) {
            console.error(error);
        }
    };

    // ログインユーザーのプロフィール取得: GitHub
    const profileFromGithub: {
        nickName: string;
        avatarUrl: string;
    } = {
        nickName: session?.user?.user_metadata.user_name,
        avatarUrl: session?.user?.user_metadata.avatar_url,
    };

    // サインアウト
    const signOut = async () => {
        await supabase.auth.signOut();
    };

    return {
        session,
        error,
        profileFromGithub,
        signInWithGithub,
        signOut,
    };
};

export default useAuth;
