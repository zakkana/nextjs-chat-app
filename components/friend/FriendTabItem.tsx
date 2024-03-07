/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

type Props = {
    Icon: any;
    name: string;
}

const FriendTabItem = ({ Icon, name }: Props) => {

    return (
        <>
            <Icon />
            <span>{name}</span>
        </>
    )
}

export default FriendTabItem
