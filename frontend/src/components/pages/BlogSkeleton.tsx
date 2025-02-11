import { Skeleton } from "@/components/ui/skeleton";

export default function BlogLoadingSkeleton() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Skeleton className="h-8 w-3/4 mb-6" />
      <div className="flex items-center mb-6">
        <Skeleton className="w-10 h-10 rounded-full mr-3" />
        <Skeleton className="h-4 w-24" />
      </div>
      <Skeleton className="h-6 w-full mb-4" />
      <Skeleton className="h-6 w-5/6 mb-4" />
      <Skeleton className="h-6 w-2/3 mb-4" />
      <Skeleton className="h-6 w-full mb-4" />
      <Skeleton className="h-6 w-5/6 mb-4" />
    </div>
  );
}
