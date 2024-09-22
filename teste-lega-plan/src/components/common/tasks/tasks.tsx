'use client'

import { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import CustomCheckBox from "../customCheckBox/customCheckBox";

interface TasksProps {
  label: string;
  onComplete: () => void;
  onDelete: () => void;
  isCompleted?: boolean;
}

const Tasks: React.FC<TasksProps> = ({ label, onComplete, onDelete, isCompleted = false }) => {
  const [showModal, setShowModal] = useState(false);

  const handleCheckboxChange = () => {
    onComplete(); // Chama a função de completar ou descompletar a tarefa
  };

  const handleDeleteClick = () => {
    setShowModal(true); // Mostra o modal de confirmação
  };

  const confirmDelete = () => {
    onDelete(); // Chama a função de deletar a tarefa
    setShowModal(false); // Fecha o modal
  };

  const cancelDelete = () => {
    setShowModal(false); // Fecha o modal sem excluir
  };

  return (
    <div className={styles.tasks}>
      <div className="radios">
        <CustomCheckBox 
          checked={isCompleted} // Usar a prop diretamente
          onChange={handleCheckboxChange}
        />
      </div>
      <p className={`${styles.nameTask} ${isCompleted ? styles.strikeThrough : ''}`}>{label}</p>

      {/* Exibe o botão de deletar apenas para tarefas não concluídas */}
      {!isCompleted && (
        <button onClick={handleDeleteClick} className={styles.trashTaskButton}>
          <img src="/trash.png" alt="trash" className={styles.trashTask} />
        </button>
      )}

      {/* Modal de confirmação de exclusão */}
      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p className={styles.modalTitle}>Deletar tarefa</p>
            <p className={styles.modalDescription}>Tem certeza que deseja deletar esta tarefa?</p>
            <div className={styles.modalButtons}>
              <button onClick={cancelDelete} className={styles.modalCancelBtn}>Cancelar</button>
              <button onClick={confirmDelete} className={styles.modalConfirmBtn}>Deletar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tasks;