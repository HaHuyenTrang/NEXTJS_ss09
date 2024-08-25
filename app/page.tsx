"use client"
import React from 'react'
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { ModeToggle } from '@/components/ModleToggle'
import { Accordion } from '@/components/ui/accordion'
import { AccordionDemo } from '@/components/Accordion'
export default function page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  return (
    <div>page
      <Button variant="destructive">Button</Button>
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-md border"
      />
   
      <ModeToggle />
      <br />
      <AccordionDemo />
    </div>
  )
}
