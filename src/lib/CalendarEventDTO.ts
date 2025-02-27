
export interface CalendarEventDTO {
    id: number, 
    title: string,
    startTime: string, 
    endTime: string,
    attendees: string,
    priority: EventPriority,
    isReocurring: boolean,
    recurrencePattern: RecurrencePatternDTO
}

export interface RecurrencePatternDTO
{
    Type: RecurrenceType,
    Interval: number  // e.g., every 2 weeks
    EndDate: string|null
}

export enum EventPriority {
    Low,
    Medium,
    High
}

export enum RecurrenceType {
    Daily,
    Weekly,
    Monthly,
    Yearly
}