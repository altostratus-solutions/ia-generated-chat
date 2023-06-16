import React from 'react'

type CardProps = {
  children: React.ReactNode
  color?: "primary" | "secondary" | "base"
  size?: "sm" | "md" | "lg"
}& React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

function Card({children,color="primary",size="sm",...rest}:CardProps) {
  const classNames = `card color-${color} size-${size}`
  return (
    <div className={classNames} {...rest}>{children}</div>
  )
}

export default Card