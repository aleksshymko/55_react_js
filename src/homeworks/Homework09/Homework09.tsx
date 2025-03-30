import { StyledHomework09, ClientsCard } from "./styles"

function Homework09 () {
    return (
        <StyledHomework09>
            <ClientsCard priority>
                <h2>VIP Пользователь</h2>
                <p> Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка.</p>
            </ClientsCard>
            <ClientsCard>
                <h2>Обычный Пользователь</h2>
                <p>Стандартный доступ, базовые функции и поддержка в порядке очереди.</p>
            </ClientsCard>
        </StyledHomework09>
    )
}

export default Homework09