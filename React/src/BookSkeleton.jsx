import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const BookSkeleton = () => {
return (
        <button className="book">
        <p><Skeleton /></p>
        <p><Skeleton /></p>
        <p><Skeleton /></p>
        <p><Skeleton /></p>
        <Skeleton width="13vw" height="14vw"/>
        </button>
  );
};
export default BookSkeleton;