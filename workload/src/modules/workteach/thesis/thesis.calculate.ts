import { Component } from '@nestjs/common';
const ADVISOR = 'advisor';
const COADVISOR = 'coAdvisor';
const POINT_THESES_ADVISOR = 3;
const POINT_THESES_COADVISOR = 1;
const POINT_THESIS_COADVISOR = 1;
@Component()
export class ThesisCalculate {
  private createThesisDto: any;
  private pointAdvisor: number;
  private pointCoAdvisor: number;
  constructor() { }
  calculate(createThesisDto: any) {
    this.createThesisDto = createThesisDto;
    if (this.isTheses()) {
      this.pointAdvisor = POINT_THESES_ADVISOR;
      this.pointCoAdvisor = POINT_THESES_COADVISOR;
    } else if (this.isThesis()) {
      this.pointAdvisor = this.createThesisDto.credit;
      this.pointCoAdvisor = POINT_THESIS_COADVISOR;
    }
    this.assignToTeachers();
    return this.createThesisDto;
  }
  isTheses(): any {
    return this.createThesisDto.type === 'theses';
  }
  isThesis(): any {
    return this.createThesisDto.type === 'thesis';
  }
  assignToTeachers() {
    if (this.createThesisDto.teachers !== undefined) {
      this.createThesisDto.teachers.forEach((teacher) => {
        switch (teacher.appointment) {
          case ADVISOR:
            teacher.point = this.pointAdvisor;
            break;
          case COADVISOR:
            teacher.point = this.pointCoAdvisor;
            break;
          default:
            teacher.point = 0;
            break;
        }
      });
    }
  }
}
