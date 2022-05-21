import { toBase64 } from "./toBase64.helper";

export const shimmer = (
  width: number,
  height: number,
  duration: number = 2
): string => {
  const shimmerIcon = `
        <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <linearGradient id="g">
              <stop stop-color="#333" offset="20%" />
              <stop stop-color="#222" offset="50%" />
              <stop stop-color="#333" offset="70%" />
            </linearGradient>
          </defs>
          <rect width="${width}" height="${height}" fill="#333" />
          <rect id="r" width="${width}" height="${height}" fill="url(#g)" />
          <animate xlink:href="#r" attributeName="x" from="-${width}" to="${height}" dur="${duration}s" repeatCount="indefinite"  />
        </svg>`;

  return `data:image/svg+xml;base64,${toBase64(shimmerIcon)}`;
};
