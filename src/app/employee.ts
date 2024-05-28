// employee.model.ts

import { Task } from './task';

export interface Employee {
    employeeId: number;
    firstName: string;
    lastName: string;
    department: string;
    email: string;
    tasks: Task[];

  
}
