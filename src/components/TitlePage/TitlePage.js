import styles from "./TitlePage.module.scss";
const TitlePage = (props) => {
    return (
        <div className={`${styles.title__page} title__page`}>
            <h1>
                {props.title}
            </h1>
        </div>
    );
}

export default TitlePage;
