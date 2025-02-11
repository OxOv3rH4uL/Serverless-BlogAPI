import { Skeleton } from "@/components/ui/skeleton";

export default function BlogsLoadingSkeleton() {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, index) => (
          <div key={index} className="p-4 bg-white rounded-xl shadow-lg">
            <Skeleton className="h-6 w-3/4 mb-4" />
            <Skeleton className="h-4 w-full mb-3" />
            <Skeleton className="h-4 w-5/6 mb-3" />
            <Skeleton className="h-4 w-2/3 mb-3" />
            <div className="flex items-center mt-4">
              <Skeleton className="w-10 h-10 rounded-full mr-3" />
              <Skeleton className="h-4 w-24" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
