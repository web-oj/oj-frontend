"use client";

import { Chip, Tab, Tabs } from "@nextui-org/react";
import {
  Calendar01Icon,
  CodeIcon,
  PackageOpenIcon,
} from "hugeicons-react";
import { useRouter, useSearchParams } from "next/navigation";

import { Field, LinearContainer } from "@/components/ui";
import { useAuth } from "@/app/context";
import React from "react";
import { User } from "@/types";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  user?: User;
}

export default function ActivitiesArea(props: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const user = props.user;

  React.useEffect(() => {
    console.log(user);
  }, [user]);

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
      <LinearContainer fullwidth direction="column">
        {user.submissions
          .filter((submission) => {
            if (!search) return true;
            return submission.id.toString().includes(search);
          })
          .map((submission, index) => (
            <LinearContainer
              key={index}
              fullwidth
              className="bg-foreground-50 rounded-2xl p-4 hover:scale-[101%] transition-transform duration-300 ease-in-out cursor-pointer"
              classnames={{
                container: "items-center justify-between",
              }}
              direction="row"
              onClick={() => router.push(`/submissions/${submission.id}`)}
            >
              <LinearContainer direction="column" space="sm">
                <h1 className="text-lg font-semibold">
                  {submission?.id}
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
              <Chip radius="full">
                Submission
              </Chip>
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
        {user.organizedContests
          .filter((contest) => {
            if (!search) return true;
            return contest.title.includes(search) || contest.id.toString().includes(search);
          })
          .map((contest, index) => (
            <LinearContainer
              key={index}
              fullwidth
              className="bg-foreground-50 rounded-2xl p-4 hover:scale-[101%] transition-transform duration-300 ease-in-out cursor-pointer"
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
                    value={new Date(Number(contest.startTime)).toLocaleDateString()}
                  />
                  <Field
                    classNames={{
                      value: "text-foreground-500",
                    }}
                    icon={<Calendar01Icon size={16} />}
                    label="End Time"
                    showLabel={false}
                    value={new Date(Number(contest.endTime)).toLocaleDateString()}
                  />
                </LinearContainer>
              </LinearContainer>
              <Chip radius="full">
                Contest
              </Chip>
            </LinearContainer>
          ))}
      </LinearContainer>
    );
  };

  const Participations = () => {
    if (!user?.participatedContest)
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
        {user.participatedContest
          .filter((contest) => {
            if (!search) return true;
            return contest.id.toString().includes(search) || contest.contest.title.includes(search);
          })
          .map((contest, index) => (
            <LinearContainer
              key={index}
              fullwidth
              className="bg-foreground-50 rounded-2xl p-4 hover:scale-[101%] transition-transform duration-300 ease-in-out cursor-pointer"
              classnames={{
                container: "items-center justify-between",
              }}
              direction="row"
              onClick={() => router.push(`/contests/${contest.id}`)}
            >
              <LinearContainer direction="column" space="sm">
                <h1 className="text-lg font-semibold">{contest?.id}</h1>
                <LinearContainer>
                  <Field
                    classNames={{
                      value: "text-foreground-500",
                    }}
                    icon={<Calendar01Icon size={16} />}
                    label="Joined At"
                    showLabel={false}
                    value={new Date(contest.createdAt).toLocaleDateString()}
                  />
                </LinearContainer>
              </LinearContainer>
              <Chip radius="full">
                Contest
              </Chip>
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
          <Tab key={index} className="h-full overflow-y-auto" title={item.label}>
            {item.component}
          </Tab>
        ))}
      </Tabs>
    </LinearContainer>
  );
}
