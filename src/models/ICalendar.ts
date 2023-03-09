export interface ICalYear {
	year: string;
	months: ICalMonth[];
}

// Interface för datum-objekt
export interface ICalDay {
	date: string; // (toISOString)
	timeSlots: ITimeSlots; // Tidsutbud
}

export interface ITimeSlots {
	early: { time: '18:00'; booked: boolean };
	late: { time: '21:00'; booked: boolean };
}

export interface ICalMonth {
	days: ICalDay[];
}

// Timeslot generator -> separerad från generateBookingCal
export const genTimeSlots = (): ITimeSlots => {
	return {
		// returnera objekt ...
		early: { booked: false }, // Tid 1 (18:00) med bool objekt som värde (bokad/ej bokad)
		late: { booked: false }, // Tid 2 (21:00) med bool objekt som värde (bokad/ej bokad)
	} as ITimeSlots; // ... som ISlots objekt
};

export interface ICalMonth {
	month: string;
	days: ICalDay[];
}

// Funktion som genererar bokningsbara dagar och tider 30 dagar framåt
export const genCalendar = (): ICalDay[] => {
	const tSlots: ITimeSlots = genTimeSlots(); // Anropa timeslot generator och lagra returnerat ISlot objekt i variabeln tSlots
	const dates: ICalDay[] = []; // Deklarera tom lista för lagring av datumobjekt
	for (let i = 0; i < 30; i++) {
		// Iterera 30 varv för att skapa 30 dagar
		const day = new Date(); // Anropa dagens datum och lagra värdet i variabeln day
		day.setDate(day.getDate() + i); // Öka värdet av date med 1 för varje iteration
		const dateString = day.toISOString(); // Konvertera datum till ISO sträng
		const slicedDate = dateString.slice(0, 10); // Extrahera YYYY-MM-DD från strängen indexplats 0-9
		dates.push({ date: slicedDate, timeSlots: tSlots }); // Lägg till objekt i listan dates
	}
	return dates; // Returnerna listan dates när iterationen är klar
};

// Generera bokningsschema
const bookingSchedule = genCalendar();
