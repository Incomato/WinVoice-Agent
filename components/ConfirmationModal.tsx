import React from 'react';
import type { IntentResult } from '../types';
import { useLocalization } from '../contexts/LocalizationContext';

interface ConfirmationModalProps {
  isOpen: boolean;
  intentResult: IntentResult | null;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({ isOpen, intentResult, onConfirm, onCancel }) => {
  const { t } = useLocalization();
  
  if (!isOpen || !intentResult) {
    return null;
  }

  const summaryText = t(intentResult.summaryKey, intentResult.summaryParams);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-secondary rounded-lg shadow-xl p-6 w-full max-w-md border border-border-color">
        <h2 className="text-xl font-bold text-text-primary mb-4">{t('confirmationModal.title')}</h2>
        <p className="text-text-secondary mb-6">
          {summaryText}
          <br />
          {t('confirmationModal.areYouSure')}
        </p>
        <div className="bg-primary p-3 rounded-md text-sm text-text-secondary mb-6 font-mono border border-border-color">
          <strong>{t('confirmationModal.intent')}:</strong> {intentResult.intent}<br />
          <strong>{t('confirmationModal.action')}:</strong> {intentResult.action.domain}.{intentResult.action.operation}<br />
          <strong>{t('confirmationModal.parameters')}:</strong> {JSON.stringify(intentResult.action.parameters)}
        </div>
        <div className="flex justify-end space-x-4">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-md bg-border-color text-text-primary hover:bg-opacity-80 transition-colors"
          >
            {t('confirmationModal.cancel')}
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 rounded-md bg-danger text-white hover:bg-opacity-90 transition-colors"
          >
            {t('confirmationModal.confirm')}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
