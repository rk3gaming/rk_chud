interface HealthIconProps {
  percentage: number
}

const HealthIcon = ({ percentage }: HealthIconProps) => {
  const gradientId = `health-gradient-${Math.random().toString(36).substr(2, 9)}`
  const color = "#cc2b2b"

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 512 512">
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset={`${percentage}%`} stopColor={color} stopOpacity="1" />
          <stop offset={`${percentage}%`} stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path fill={`url(#${gradientId})`} d="M228.3 469.1L47.6 300.4c-4.2-3.9-8.2-8.1-11.9-12.4h87c22.6 0 43-13.6 51.7-34.5l10.5-25.2l49.3 109.5c3.8 8.5 12.1 14 21.4 14.1s17.8-5 22-13.3l42.4-84.9l1.7 3.4c9.5 19 28.9 31 50.1 31h104.5c-3.7 4.3-7.7 8.5-11.9 12.4L283.7 469.1c-7.5 7-17.4 10.9-27.7 10.9s-20.2-3.9-27.7-10.9M503.7 240h-132c-3 0-5.8-1.7-7.2-4.4l-23.2-46.3c-4.1-8.1-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-41.4 82.8l-51-113.9c-3.9-8.7-12.7-14.3-22.2-14.1s-18.1 5.9-21.8 14.8l-31.8 76.3c-1.2 3-4.2 4.9-7.4 4.9L16 240c-2.6 0-5 .4-7.3 1.1C3 225.2 0 208.2 0 190.9v-5.8c0-69.9 50.5-129.5 119.4-141c45.6-7.6 92 7.3 124.6 39.9l12 12l12-12c32.6-32.6 79-47.5 124.6-39.9c68.9 11.5 119.4 71.1 119.4 141v5.8c0 16.9-2.8 33.5-8.3 49.1" />
    </svg>
  )
}

export default HealthIcon
