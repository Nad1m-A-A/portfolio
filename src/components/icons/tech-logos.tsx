import type { IconBaseProps } from "react-icons";
import { SiInertia, SiLaravel, SiReact } from "react-icons/si";

type LogoProps = IconBaseProps;

export function ReactLogo(props: LogoProps) {
  return <SiReact aria-label="React" color="#61DAFB" {...props} />;
}

export function LaravelLogo(props: LogoProps) {
  return <SiLaravel aria-label="Laravel" color="#FF2D20" {...props} />;
}

export function InertiaLogo(props: LogoProps) {
  return <SiInertia aria-label="Inertia.js" color="#9553E9" {...props} />;
}
