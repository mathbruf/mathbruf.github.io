import { AnimatePresence, motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface Props {
  show: boolean;
  message: string;
}

export function Toast({ show, message }: Props) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2 }}
          role="status"
          aria-live="polite"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[150] flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg shadow-lg text-sm"
        >
          <Check size={16} className="text-emerald-400" aria-hidden />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
