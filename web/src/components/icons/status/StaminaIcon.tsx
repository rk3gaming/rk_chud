interface StaminaIconProps {
  percentage: number
}

const StaminaIcon = ({ percentage }: StaminaIconProps) => {
  const gradientId = `stamina-gradient-${Math.random().toString(36).substr(2, 9)}`
  const color = "#fff"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset={`${percentage}%`} stopColor={color} stopOpacity="1" />
          <stop offset={`${percentage}%`} stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path fill={`url(#${gradientId})`} d="M8 1a.5.5 0 0 1 .5.5v5.243L9 7.1V4.72C9 3.77 9.77 3 10.72 3c.524 0 1.023.27 1.443.592c.431.332.847.773 1.216 1.229c.736.908 1.347 1.946 1.58 2.48c.176.405.393 1.16.556 2.011c.165.857.283 1.857.24 2.759c-.04.867-.232 1.79-.837 2.33c-.67.6-1.622.556-2.741-.004l-1.795-.897A2.5 2.5 0 0 1 9 11.264V8.329l-1-.715l-1 .715V7.214c-.1 0-.202.03-.29.093l-2.5 1.786a.5.5 0 1 0 .58.814L7 8.329v2.935A2.5 2.5 0 0 1 5.618 13.5l-1.795.897c-1.12.56-2.07.603-2.741.004c-.605-.54-.798-1.463-.838-2.33c-.042-.902.076-1.902.24-2.759c.164-.852.38-1.606.558-2.012c.232-.533.843-1.571 1.579-2.479c.37-.456.785-.897 1.216-1.229C4.257 3.27 4.756 3 5.28 3C6.23 3 7 3.77 7 4.72V7.1l.5-.357V1.5A.5.5 0 0 1 8 1m3.21 8.907a.5.5 0 1 0 .58-.814l-2.5-1.786A.5.5 0 0 0 9 7.214V8.33z" />
    </svg>
  )
}

export default StaminaIcon
