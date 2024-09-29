import { PencilLine } from "phosphor-react"
import styles from "./Sidebar.module.css"
import Banner from "../assets/banner.jpg"
import { Avatar } from "./Avatar"

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src={Banner}
                alt="imagem do perfil" 
            />

            <div className={styles.profile}>
                <Avatar src="https://github.com/juninho15830.png"/>

                <strong>Junior</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine 
                        size={20}
                    />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}