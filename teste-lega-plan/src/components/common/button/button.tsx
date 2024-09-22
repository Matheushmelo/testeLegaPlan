'use client'

import React, { useState } from 'react';
import styles from './styles.module.scss';

interface ModalButtonProps {
  addTask: (taskTitle: string) => void;
}

const ModalButton: React.FC<ModalButtonProps> = ({ addTask }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [taskTitle, setTaskTitle] = useState('');

  const openModal = () => setModalOpen(true);
  const closeModal = () => {
    setModalOpen(false);
    setTaskTitle('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskTitle(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskTitle.trim()) {
      addTask(taskTitle); // Chama a função para adicionar a tarefa
      closeModal();
    }
  };

  return (
    <div className={styles.container}>
      <button onClick={openModal} className={styles.button}>
        Adicionar nova tarefa
      </button>

      {isModalOpen && (
        <div className={styles.modalBackdrop} onClick={closeModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <p className={styles.modalTitle}>Nova tarefa</p>
            <p className={styles.modalNameForm}>Título</p>
            <form onSubmit={handleSubmit}>
              <input 
                type="text" 
                value={taskTitle} 
                onChange={handleInputChange} 
                className={styles.modalInput} 
                placeholder='Digite'
                required 
              />
              <div className={styles.modalButtons}>
                <button onClick={closeModal} className={styles.closeButton}>
                  Cancelar
                </button>
                <button type="submit" className={styles.submitButton}>
                  Adicionar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ModalButton;