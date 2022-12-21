import React from "react";
import styles from './../../styles/Lines.module.scss';

const Lines = (props: {lineCount: number}) => {
    
    let lines: React.ReactElement[] = [];

    for (let i = 0; i < props.lineCount; i++){
        lines.push(<div className={styles.line} key={i} />);
    }

    return (
        <div className={styles.lines}>
            {lines}
        </div>
    )
}

export default Lines;