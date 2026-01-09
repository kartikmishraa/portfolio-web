import { useState } from 'react';
import { sendEmail, EmailData } from '../utils/emailjs';

interface UseEmailJSReturn {
  sending: boolean;
  success: boolean;
  error: string | null;
  sendEmailMessage: (data: EmailData) => Promise<void>;
  resetState: () => void;
}

export const useEmailJS = (): UseEmailJSReturn => {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendEmailMessage = async (data: EmailData) => {
    setSending(true);
    setError(null);
    setSuccess(false);

    const result = await sendEmail(data);

    setSending(false);

    if (result.success) {
      setSuccess(true);
    } else {
      setError(result.error || 'Failed to send email');
    }
  };

  const resetState = () => {
    setSending(false);
    setSuccess(false);
    setError(null);
  };

  return {
    sending,
    success,
    error,
    sendEmailMessage,
    resetState
  };
};
