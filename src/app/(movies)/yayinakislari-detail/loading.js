import SkeletonLoader from "@/components/SkeletonLoader/SkeletonLoader";
import Skeleton from "react-loading-skeleton";
export default function Loading() {
  return (
    <div className="spinner-border text-light" role="status">
      <span className="sr-only"></span>
    </div>
  );
}
