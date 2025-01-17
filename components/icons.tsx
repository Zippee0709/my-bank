import {
  LucideProps,
  Menu,
  Moon,
  Search,
  SunMedium,
  X,
  type Icon as LucideIcon,
} from "lucide-react"

export type Icon = typeof LucideIcon

export const Icons = {
  Menu: Menu,
  Moon: Moon,
  Search: Search,
  Sun: SunMedium,
  X: X,
  Logo: (props: LucideProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.0002 19.9999L20.0002 9.99992L30.0002 19.9999L20.0002 29.9999L10.0002 19.9999Z"
        fill="#CAFF33"
      />
      <path
        d="M36.6668 13.3333L30.0002 19.9999V9.99992H20.0002L26.6668 3.33325H36.6668V13.3333Z"
        fill="#CAFF33"
      />
      <path
        d="M36.6668 26.6666L30.0002 19.9999V29.9999H20.0002L26.6668 36.6666H36.6668V26.6666Z"
        fill="#CAFF33"
      />
      <path
        d="M3.3335 26.6666L10.0002 19.9999V29.9999H20.0002L13.3335 36.6666H3.3335L3.3335 26.6666Z"
        fill="#CAFF33"
      />
      <path
        d="M3.3335 13.3333L10.0002 19.9999V9.99992H20.0002L13.3335 3.33325H3.3335L3.3335 13.3333Z"
        fill="#CAFF33"
      />
    </svg>
  ),
}
