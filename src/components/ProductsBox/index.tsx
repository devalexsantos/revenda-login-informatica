import { DesktopTower, Keyboard } from "phosphor-react"
import { ProductBoxContainer, ProductBoxHeader } from "./style"

interface ProductBoxProps {
    icon: 'desktops' | 'accessories'
    title: string
}

export function ProductBox({icon, title}: ProductBoxProps) {
    
    function createIcon(i: any) {
        switch(i){
            case 'desktops': {
                return <DesktopTower size={32} weight="bold" />;
            }
            case 'accessories': {
                return <Keyboard size={32} weight="bold" />
            }
            default: {
                return;
            }
        }
    }

    return (
        <ProductBoxContainer>
            <ProductBoxHeader>
                {createIcon(icon)}
                <h3>{title}</h3>
            </ProductBoxHeader>
        </ProductBoxContainer>
    )
}