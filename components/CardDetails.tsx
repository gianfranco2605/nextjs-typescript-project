import React from 'react';

import { CarProps } from '@/types';

interface CarDetailProps {
    isOpen: boolean;
    closeModal: () => void;
    car: CarProps;
}

const CardDetails = ({ isOpen, closeModal, car }: CarDetailProps) => {
  return (
    <div>CardDetails</div>
  )
}

export default CardDetails