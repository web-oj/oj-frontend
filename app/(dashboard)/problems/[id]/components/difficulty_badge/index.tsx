import { Chip } from "@nextui-org/react";

type DifficultyType = 'easy' | 'medium' | 'hard';

type DifficultyBadgeProps = {
    difficulty: DifficultyType;
};
export default function DifficultyBadge({ difficulty }: DifficultyBadgeProps) {
    return (
        <Chip
            radius="full"
            color={
                difficulty === 'easy'
                    ? 'success'
                    : difficulty === 'medium'
                        ? 'warning'
                        : 'danger'
            }
        >
            {difficulty}
        </Chip>
    )
}