export type Project = {
  title: string;
  subtitle: string;
  images: string[];
};

export type CubesBackground = {
  density: number;
  minSize?: number;
  maxSize?: number;
  fadeStartPercentage?: number;
  className?: string;
  children?: React.ReactNode;
  cube?: {
    size: number | [number, number];
    delay: number | [number, number];
    duration: number | [number, number];
    left: number | [number, number];
  };
};

export type Cube = {
  size: number;
  delay: string;
  duration: string;
  left: string;
};
