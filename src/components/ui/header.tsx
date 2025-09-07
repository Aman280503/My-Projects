'use client'

import React from 'react'

interface HeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function Header({ title, subtitle, className = '' }: HeaderProps) {
  return (
    <header className={`mb-6 ${className}`}>
      <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}
    </header>
  )
}
