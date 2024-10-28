"use client";

import { RenderMarkdown } from '@/components/markdown';
import { useProblem } from '../../../context';

export default function Statement() {
    const { data } = useProblem();
    return (
        <RenderMarkdown
            data={data?.statement}
        />
    )
}