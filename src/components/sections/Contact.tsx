import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { ContactLink } from '@/components/ui/ContactLink';
import { Toast } from '@/components/ui/Toast';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import { socials } from '@/data/socials';
import { stagger } from '@/lib/motion';
import { useT } from '@/lib/i18n';

export function Contact() {
  const { copied, copy } = useCopyToClipboard();
  const t = useT();

  return (
    <section
      id="contact"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-wide mx-auto scroll-mt-20"
    >
      <SectionHeading
        index="05"
        label={{ en: 'Reach out', no: 'Ta kontakt' }}
        title={{ en: 'Get in touch.', no: 'Ta kontakt.' }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {socials.map((s) =>
          s.copy ? (
            <ContactLink
              key={typeof s.label === 'string' ? s.label : s.label.en}
              label={s.label}
              secondary={s.secondary}
              icon={s.icon}
              onClick={() => copy(s.copy!)}
              copied={copied}
            />
          ) : (
            <ContactLink
              key={typeof s.label === 'string' ? s.label : s.label.en}
              label={s.label}
              secondary={s.secondary}
              icon={s.icon}
              href={s.href}
            />
          ),
        )}
      </motion.div>

      <Toast
        show={copied}
        message={t({ en: 'EMAIL COPIED', no: 'E-POSTEN ER KOPIERT' })}
      />
    </section>
  );
}
