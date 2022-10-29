import * as C from './styles';

type Props = {
    label: string;
    icon?: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
};

export const Button = ({ label, icon, onClick }: Props) => {
    return (
        <C.Container onClick={onClick}>
            {icon &&
                <C.Icon>
                    <img src={icon} alt="icon restart" />
                </C.Icon>
            }
            <C.Label>{label}</C.Label>
        </C.Container>
    );
};