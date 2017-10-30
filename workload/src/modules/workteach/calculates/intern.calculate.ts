import { Component } from '@nestjs/common';
import { CreateInternDto } from '../dtos/create-intern.dto';
const POINT_SUPERVISOR_INTERNSHIP = 0.5;
const POINT_SUPERVISOR_COOPERATIVE = 1;
const POINT_INSTRUCTOR = 2;
@Component()
export class InternCalculate {
  private createInternDto: CreateInternDto;
  private point: number;
  constructor() { }
  calculate(createInternDto: CreateInternDto) {
    this.createInternDto = createInternDto;
    this.point = 0;

    if (this.isSupervisor()) {
      this.calculateSupervisor();
    } else if (this.isInstructor()) {
      this.calculateInstructor();
    }

    this.assignToTeachers();
    return this.createInternDto;
  }
  isSupervisor() {
    return this.createInternDto.type === 'supervisor';
  }
  isInstructor() {
    return this.createInternDto.type === 'instructor';
  }
  isInternShip() {
    return this.createInternDto.courseType === 'internShip';
  }
  isCooperative() {
    return this.createInternDto.courseType === 'cooperative';
  }
  calculateSupervisor() {
    const basePoint = this.isInternShip() ? POINT_SUPERVISOR_INTERNSHIP :
      this.isCooperative() ? POINT_SUPERVISOR_COOPERATIVE : 0;
    this.point = basePoint * this.createInternDto.countStudent;
  }
  calculateInstructor() {
    this.point = POINT_INSTRUCTOR;
  }
  assignToTeachers() {
    const pointPerTeacher = this.point / this.createInternDto.teachers.length;
    this.createInternDto.teachers.forEach((teacher) => {
      teacher.point = pointPerTeacher;
    });
  }
}
