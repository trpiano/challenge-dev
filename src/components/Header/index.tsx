import {
    BoxRetur,
    HeaderContainerAll,
    BoxAdd
} from "./styles";

interface HeaderProps {
    title: string,
    button: boolean,
    IconReturn: boolean,
    returnProps: boolean,
    PushButton: () => void,
    PushButtonReturn: () => void
}


export default function Header({
    title,
    button,
    IconReturn,
    returnProps = false,
    PushButton,
    PushButtonReturn
}: HeaderProps) {
    return (
        <HeaderContainerAll>
            {IconReturn && (
                <BoxRetur>
                    <img onClick={PushButtonReturn} src="/images/Return.svg" alt="Icone Retornar" />
                </BoxRetur>
            )}
            {returnProps !== undefined && (
                <BoxAdd return={returnProps}>
                    <>
                        <h5>{title}</h5>
                        {button && <button onClick={PushButton}><span>Adicionar</span> +</button>}
                    </>
                </BoxAdd>
            )}
            {returnProps === undefined && (
                <BoxAdd>
                    <>
                        <h5>{title}</h5>
                        {button && <button onClick={PushButton}><span>Adicionar</span> +</button>}
                    </>
                </BoxAdd>
            )}
        </HeaderContainerAll>
    )
}