import { Suspense } from "react";
import { CourseDashboard } from "@/components/CourseDashboard";
import { LoadingState } from "@/components/LoadingState";

export default function CoursePage() { return <Suspense fallback={<LoadingState/>}><CourseDashboard/></Suspense>; }
