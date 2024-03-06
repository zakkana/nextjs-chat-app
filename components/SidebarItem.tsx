type Props = {
    Icon: any;
    name: string;
}

const SidebarItem = ({ Icon, name }: Props) => {

    return (
        <>
            <Icon />
            <span>{name}</span>
        </>
    )
}

export default SidebarItem