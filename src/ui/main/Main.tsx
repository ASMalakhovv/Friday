import Header from "./header/Header";
import Pages from "./routes/Pages";
import s from './Main.module.scss'

// test branch

export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={s.header}>
                <Header/>
            </div>
            <div className={s.pages}>
                <Pages/>
            </div>
        </div>
    );
};

