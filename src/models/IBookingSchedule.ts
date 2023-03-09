// Interface för datum-objekt
export interface IDateObject {
	date: string; // (toISOString)
	timeSlots: string[]; // Utbud tider
}

// Separat timeslot-generator för underlättad admin
const generateTimeSlots = () => {
	return ['18:00', '21:00'];
};

// Funktion som genererar bokningsbara dagar och tider 30 dagar framåt
const generateBookingSchedule = (timeSlots: string[]): IDateObject[] => {
	const tSlots = timeSlots; // Tilldela värdet av inparametern timeSlots till variabeln tSlots
	const dates: IDateObject[] = []; // Deklarera tom lista för tilldelning av datumobjekt
	for (let i = 0; i < 30; i++) {
		// Iterera 30 varv för att skapa 30 dagar
		const date = new Date(); // Anropa dagens datum och tilldela värdet till variabeln date
		date.setDate(date.getDate() + i); // Öka värdet av date med 1 för varje iteration
		const dateString = date.toISOString(); // Konvertera datum till ISO sträng
		const slicedDate = dateString.slice(0, 10); // Extrahera YYYY-MM-DD från strängen indexplats 0-9
		dates.push({ date: slicedDate, timeSlots: tSlots }); // Lägg till objekt i listan dates
	}
	return dates; // Returnerna listan dates när iterationen är klar
};

// Generera bokningsschema
const bookingSchedule = generateBookingSchedule(generateTimeSlots());
