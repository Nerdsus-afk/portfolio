import { useState, type ImgHTMLAttributes } from "react";

type Props = ImgHTMLAttributes<HTMLImageElement> & {
  imgClassName?: string;
  wrapperClassName?: string;
};

/**
 * <img> with a themed shimmer skeleton shown until the image decodes.
 * Pass layout/aspect classes via wrapperClassName, image classes via imgClassName.
 */
export const ImageWithSkeleton = ({
  imgClassName = "",
  wrapperClassName = "",
  onLoad,
  ...imgProps
}: Props) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${wrapperClassName}`}>
      {/* Skeleton */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 skeleton-shimmer transition-opacity duration-500 ${
          loaded ? "opacity-0" : "opacity-100"
        }`}
      />
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img
        {...imgProps}
        onLoad={(e) => {
          setLoaded(true);
          onLoad?.(e);
        }}
        className={`${imgClassName} transition-opacity duration-700 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};
