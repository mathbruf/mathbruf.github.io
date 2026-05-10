import { motion } from 'framer-motion';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { drift, stagger } from '@/lib/motion';
import { useLang } from '@/lib/i18n';

export function About() {
  const { lang } = useLang();

  return (
    <section
      id="about"
      className="px-6 md:px-12 lg:px-20 py-24 md:py-32 max-w-wide mx-auto scroll-mt-20"
    >
      <SectionHeading
        index="01"
        label={{ en: 'Portrait', no: 'Portrett' }}
        title={{ en: 'About.', no: 'Om meg.' }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        className="grid grid-cols-12 gap-y-6 gap-x-6 md:gap-x-8"
      >
        <motion.div
          variants={drift}
          className="col-span-12 md:col-span-3 font-mono text-micro text-ink/50"
        >
          ↳ {lang === 'en' ? 'BIO' : 'BIO'}
        </motion.div>

        <motion.div
          variants={drift}
          className="col-span-12 md:col-span-9 max-w-measure space-y-6 text-ink-soft text-lg leading-relaxed"
        >
          {lang === 'en' ? (
            <>
              <p>
                I&rsquo;m a computer science student at the University of
                Bergen, currently working through the bachelor&rsquo;s in
                datateknologi. What pulls me to the field is how problems
                get solved cleanly —{' '}
                <em className="text-ink">
                  solutions that hold up technically and make sense for the
                  people who&rsquo;ll use them
                </em>
                .
              </p>
              <p>
                Before Bergen I did a year of social-science economics at
                the University of Oslo, paused for compulsory military
                service as a guard commander at Setermoen, and worked
                seasonal stints at Oslo Airport. That mix taught me to keep
                an overview when several things are happening at once and
                to maintain a standard when no-one&rsquo;s looking.
              </p>
              <p>
                These days I work mostly in Python and Java, with smaller
                stretches in Haskell, TypeScript, C, C# and PHP. In autumn
                2025 I led group sessions for an introductory data-security
                course at UiB, and I sit on the board of{' '}
                <span className="text-ink">echo</span>, the line
                association for informatics students.
              </p>
            </>
          ) : (
            <>
              <p>
                Jeg er datateknologi-student ved Universitetet i Bergen, og
                er for tiden i gang med bacheloren i ingeniørfag —
                datateknologi. Det som drar meg til faget er hvordan
                problemer kan løses ryddig —{' '}
                <em className="text-ink">
                  løsninger som henger sammen teknisk og som gir mening for
                  de som skal bruke dem
                </em>
                .
              </p>
              <p>
                Før Bergen tok jeg en årsenhet i samfunnsøkonomi ved
                Universitetet i Oslo, hadde permisjon for førstegangstjeneste
                som vaktkommandør på Setermoen, og jobbet sesongbasert ved
                Gardermoen. Den miksen har lært meg å holde oversikt når
                flere ting skjer samtidig og å holde et nivå selv når ingen
                ser på.
              </p>
              <p>
                For tiden jobber jeg mest i Python og Java, med mindre
                innslag av Haskell, TypeScript, C, C# og PHP. Høsten 2025
                ledet jeg gruppetimer i innføringsemnet i datasikkerhet ved
                UiB, og jeg sitter i styret til{' '}
                <span className="text-ink">echo</span>, linjeforeningen for
                informatikkstudentene.
              </p>
            </>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
}
