/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"

type Props = {
    Icon: any;
    name: string;
}

const SidebarItem = ({ Icon, name }: Props) => {

    return (
        <>
            <Icon css={icon}/>
            <span>{name}</span>
        </>
    )
}

export default SidebarItem

const icon = css`
    margin-right: 10%;
`