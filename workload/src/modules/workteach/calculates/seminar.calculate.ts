import { Component } from '@nestjs/common';

const ADVISOR = 'advisor';
const JUDE = 'jude';
const INSTRUCTOR = 'instructor';
const LECTURER = 'lecturer';
const POINT_ADVISOR = 1;
const POINT_JUDE = 0.1;
const POINT_INSTRUCTOR = 1;
const POINT_LECTURER = 0.2;
const MAX_JUDE = 4;

@Component()
export class SeminarCalculate {
  private createSeminarDto: any;
  private pointJude: number;
  constructor() { }
  calculate(createSeminarDto: any) {
    this.createSeminarDto = createSeminarDto;
    this.calculatePointJude();
    this.assignToTeachers();
    return this.createSeminarDto;
  }
  calculatePointJude() {
    const countJude = this.createSeminarDto.teachers.filter((teacher) => teacher.appointment === JUDE).length;
    this.pointJude = countJude <= MAX_JUDE ? POINT_JUDE : (POINT_JUDE * MAX_JUDE) / countJude;
  }
  assignToTeachers() {
    this.createSeminarDto.teachers.forEach((teacher) => {
      switch (teacher.appointment) {
        case ADVISOR:
          teacher.point = POINT_ADVISOR;
          break;
        case JUDE:
          teacher.point = this.pointJude;
          break;
        case INSTRUCTOR:
          teacher.point = POINT_INSTRUCTOR;
          break;
        case LECTURER:
          teacher.point = POINT_LECTURER;
          break;
        default:
          teacher.point = 0;
          break;
      }
    });
  }
}
