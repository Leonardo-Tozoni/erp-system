"use client"

import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

type DatePickerProps = {
  selected?: Date;
  disabled?: boolean;
  className?: string;
};

export default function DatePicker({ selected, disabled }: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(selected);

  React.useEffect(() => {
    setDate(selected);
  }, [selected]);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
          disabled={disabled}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date
            ? format(date, "PPP", { locale: ptBR })
            : <span>Selecione uma data</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={disabled ? undefined : setDate}
          initialFocus
          locale={ptBR}
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  );
}