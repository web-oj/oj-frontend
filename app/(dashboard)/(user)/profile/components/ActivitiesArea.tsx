"use client";

import { Chip, Tab, Tabs } from "@nextui-org/react";
import {
  Calendar01Icon,
  CodeIcon,
  PackageOpenIcon,
  UserGroupIcon,
} from "hugeicons-react";
import { useRouter } from "next/navigation";

import { Field, LinearContainer } from "@/components/ui";
import { useAuth } from "@/app/context";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export default function ActivitiesArea(props: Props) {
  const { user } = useAuth();
  const router = useRouter();
  const Submissions = () => {
    if (!user?.submissions)
      return (
        <LinearContainer
          fullheight
          fullwidth
          classnames={{
            container: "items-center justify-center",
          }}
          direction="column"
        >
          <PackageOpenIcon />
          <p className="text-md text-center text-foreground-500">
            No submissions yet
          </p>
        </LinearContainer>
      );

    return (
      <LinearContainer direction="column">
        {user.submissions.map((submission, index) => (
          <LinearContainer
            key={index}
            fullwidth
            className="bg-foreground-50 rounded-2xl p-4"
            classnames={{
              container: "items-center justify-between",
            }}
            direction="row"
            onClick={() => router.push(`/problems/${submission.problem.id}`)}
          >
            <LinearContainer direction="column" space="sm">
              <h1 className="text-lg font-semibold">
                {submission?.problem.title}
              </h1>
              <LinearContainer>
                <Field
                  classNames={{
                    value: "text-foreground-500",
                  }}
                  icon={<Calendar01Icon size={16} />}
                  label="Created At"
                  showLabel={false}
                  value={new Date(submission.createdAt).toLocaleDateString()}
                />
                <Field
                  classNames={{
                    value: "text-foreground-500",
                  }}
                  icon={<CodeIcon size={16} />}
                  label="Language"
                  showLabel={false}
                  value={submission.language}
                />
              </LinearContainer>
            </LinearContainer>
            <Chip radius="full">{submission.id}</Chip>
          </LinearContainer>
        ))}
      </LinearContainer>
    );
  };
  const Contests = () => {
    if (!user?.organizedContests)
      return (
        <LinearContainer
          fullheight
          fullwidth
          classnames={{
            container: "items-center justify-center",
          }}
          direction="column"
        >
          <PackageOpenIcon />
          <p className="text-md text-center text-foreground-500">
            No contests yet
          </p>
        </LinearContainer>
      );

    return (
      <LinearContainer fullwidth direction="column">
        {user.organizedContests.map((contest, index) => (
          <LinearContainer
            key={index}
            fullwidth
            className="bg-foreground-50 rounded-2xl p-4"
            classnames={{
              container: "items-center justify-between",
            }}
            direction="row"
            onClick={() => router.push(`/contests/${contest.id}`)}
          >
            <LinearContainer direction="column" space="sm">
              <h1 className="text-lg font-semibold">{contest?.title}</h1>
              <LinearContainer>
                <Field
                  classNames={{
                    value: "text-foreground-500",
                  }}
                  icon={<Calendar01Icon size={16} />}
                  label="Start Time"
                  showLabel={false}
                  value={contest.startTime}
                />
                <Field
                  classNames={{
                    value: "text-foreground-500",
                  }}
                  icon={<Calendar01Icon size={16} />}
                  label="End Time"
                  showLabel={false}
                  value={contest.endTime}
                />
                <Field
                  classNames={{
                    value: "text-foreground-500",
                  }}
                  icon={<UserGroupIcon size={16} />}
                  label="Participants"
                  showLabel={false}
                  value={contest.participations.length}
                />
              </LinearContainer>
            </LinearContainer>
            <Chip radius="full">#{contest.id}</Chip>
          </LinearContainer>
        ))}
      </LinearContainer>
    );
  };

  const Participations = () => {
    if (!user?.contestParticipations)
      return (
        <LinearContainer
          fullheight
          fullwidth
          classnames={{
            container: "items-center justify-center",
          }}
          direction="column"
        >
          <PackageOpenIcon />
          <p className="text-md text-center text-foreground-500">
            No participations yet
          </p>
        </LinearContainer>
      );

    return (
      <LinearContainer
        fullwidth
        direction="column"
        onClick={() => {
          router;
        }}
      >
        {user.contestParticipations.map((contest, index) => (
          <LinearContainer
            key={index}
            fullwidth
            className="bg-foreground-50 rounded-2xl p-4"
            classnames={{
              container: "items-center justify-between",
            }}
            direction="row"
            onClick={() => router.push(`/contests/${contest.id}`)}
          >
            <LinearContainer direction="column" space="sm">
              <h1 className="text-lg font-semibold">{contest?.title}</h1>
              <LinearContainer>
                <Field
                  classNames={{
                    value: "text-foreground-500",
                  }}
                  icon={<Calendar01Icon size={16} />}
                  label="Start Time"
                  showLabel={false}
                  value={contest.startTime}
                />
                <Field
                  classNames={{
                    value: "text-foreground-500",
                  }}
                  icon={<Calendar01Icon size={16} />}
                  label="End Time"
                  showLabel={false}
                  value={contest.endTime}
                />
                <Field
                  classNames={{
                    value: "text-foreground-500",
                  }}
                  icon={<UserGroupIcon size={16} />}
                  label="Participants"
                  showLabel={false}
                  value={contest.participations.length}
                />
              </LinearContainer>
            </LinearContainer>
            <Chip radius="full">#{contest.id}</Chip>
          </LinearContainer>
        ))}
      </LinearContainer>
    );
  };

  const items = [
    {
      label: "Submissions",
      component: <Submissions />,
    },
    {
      label: "Contests",
      component: <Contests />,
    },
    {
      label: "Participations",
      component: <Participations />,
    },
  ];

  return (
    <LinearContainer
      fullheight
      className="rounded-2xl !flex-1"
      direction="column"
      {...props}
    >
      <Tabs color="primary" radius="full" variant="underlined">
        {items.map((item, index) => (
          <Tab key={index} className="h-full" title={item.label}>
            {item.component}
          </Tab>
        ))}
      </Tabs>
    </LinearContainer>
  );
}
