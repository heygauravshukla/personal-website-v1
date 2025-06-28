import { CircleCheck } from "lucide-react";
import * as motion from "motion/react-client";

interface Achievement {
  title: string;
  description: string;
}

interface TimelineItem {
  year: number;
  achievements: Achievement[];
}

export function TimelineList() {
  const timeline: TimelineItem[] = [
    {
      year: 2025,
      achievements: [
        {
          title: "Received my degree in convocation",
          description:
            "Attended convocation held in April and got some memories.",
        },
        {
          title: "Technical Projects Portfolio",
          description:
            "Developed multiple web applications using React, Next.js, and modern technologies.",
        },
      ],
    },
    {
      year: 2024,
      achievements: [
        {
          title: "Graduated with Computer Science degree",
          description:
            "Completed my Bachelor's degree with 7.44 CGPA and specialization in software engineering.",
        },
      ],
    },
    {
      year: 2020,
      achievements: [
        {
          title: "Started B.Tech in Computer Science",
          description:
            "Commenced undergraduate studies at CGC Jhanjeri, focusing on software engineering fundamentals.",
        },
        {
          title: "Academic Excellence Award",
          description:
            "Secured 93.56% in Class XII, recognized in Ajit newspaper for outstanding academic performance.",
        },
      ],
    },
  ];

  return (
    <ul className="space-y-8">
      {timeline.map((item, idx) => (
        <motion.li
          key={item.year}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1, duration: 0.3, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3>
            <span className="rounded-md border px-2 py-1 font-bold shadow">
              {item.year}
            </span>
          </h3>
          <ul className="space-y-4 pl-4">
            {item.achievements.map((achievement, idx) => (
              <motion.li
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: idx * 0.1,
                  duration: 0.4,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="flex items-start gap-x-2"
              >
                <CircleCheck className="fill-primary text-background h-[1lh] w-5 flex-none" />
                <div>
                  <h4 className="font-medium">{achievement.title}</h4>
                  <p className="text-muted-foreground mt-1 text-sm">
                    {achievement.description}
                  </p>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ul>
  );
}
