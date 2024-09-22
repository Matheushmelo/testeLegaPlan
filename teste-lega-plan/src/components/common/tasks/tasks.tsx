'use client'

import { useState } from "react";
import styles from "./styles.module.scss";
import CustomCheckBox from "../customCheckBox/customCheckBox"

interface TasksProps {
  label: string;
}

const Tasks: React.FC<TasksProps> = ({ label }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  
  return (
  <div className={styles.tasks}>
    <div className="radios">
      <CustomCheckBox 
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
    </div>
		<p className={`${styles.nameTask} ${isChecked ? styles.strikeThrough : ''}`}>{label}</p>
		<img src="/trash.png" alt="trash" className={styles.trashTask}/>
  </div>
  )
}

export default Tasks;