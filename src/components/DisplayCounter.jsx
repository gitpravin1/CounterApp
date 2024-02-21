import React from 'react'
import { useSelector } from 'react-redux'

export default function DisplayCounter() {
  const cval= useSelector((store)=>store.counter)
  return (
    <p className="lead mb-4">
    Current Counter value:{cval}
    </p>
  )
}
