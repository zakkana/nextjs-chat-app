/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Props = {
    name: string;
};

const FriendTabItem = ({ name }: Props) => {
    return (
        <>
            <span>{name}</span>
        </>
    );
};

export default FriendTabItem;
