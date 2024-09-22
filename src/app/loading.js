import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";
import Skeleton from "react-loading-skeleton";
export default function Loading() {
  return (
    <div
      className="d-flex justify-content-center spinner-border text-light"
      role="status"
    >
      <span className="sr-only">Loading...</span>
    </div>
  );
}
