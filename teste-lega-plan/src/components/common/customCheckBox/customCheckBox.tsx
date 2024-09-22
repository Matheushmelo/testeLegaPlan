'use client'

import React from 'react';
import styles from './styles.module.scss';

interface CustomCheckboxProps {
  checked: boolean;
  onChange: () => void;
}

const CustomCheckBox: React.FC<CustomCheckboxProps> = ({ checked, onChange }) => {
  return (
    <label className={styles.checkboxLabel}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={styles.checkboxInput}
      />
      <span className={styles.checkboxSpan}></span>
    </label>
  );
};

export default CustomCheckBox