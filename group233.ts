export class Group233 {

  private id: number; // 0-toata grupa, 1-semigrupa 1, 2-semigrupa 2
  private teacher: string; //profesorul
  private classType: string; //materia
  private roomType: string; // amfiteatru, sala sau laborator
  private roomNumber: number; // etajul amfiteatrului sau numarul salii sau numarul laboratorului
  private startHour: number; // ora la care incepe cursul/seminarul/laboratorul
  private finishHour: number; // ora la care se termina   -//-

  constructor(id: number, teacher: string, classType: string, roomType: string,
    roomNumber: number, startHour: number, finishHour: number) {
    this.id = id;
    this.teacher = teacher;
    this.classType = classType;
    this.roomType = roomType;
    this.roomNumber = roomNumber;
    this.startHour = startHour;
    this.finishHour = finishHour;
  } 
}
