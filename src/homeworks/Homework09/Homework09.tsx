import { StyledHomework09, ClientsCard, Client, Description } from "./styles"

function Homework09 () {
    return (
        <StyledHomework09>
            <ClientsCard priority>
                <h2>VIP Пользователь</h2>
                <p> Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка.</p>
            </ClientsCard>
            <ClientsCard>
                <Client>Обычный Пользователь</Client>
                <Description>Стандартный доступ, базовые функции и поддержка в порядке очереди.</Description>
            </ClientsCard>
        </StyledHomework09>
    )
}

export default Homework09