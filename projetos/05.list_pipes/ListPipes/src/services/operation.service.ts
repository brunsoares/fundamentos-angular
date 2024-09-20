import { Injectable } from '@angular/core';
import { Operation } from 'src/interfaces/operation.struct';

@Injectable({
  providedIn: 'root',
})
export class OperationService {
  getAllOperation(): Promise<Operation[]> {
    return new Promise<Operation[]>((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            customerName: 'João',
            customerStatus: 1,
            operationDate: '2023-10-31T17:30:00.00Z',
            operationValue: 500.0,
            operationRisck: 0.4,
          },
          {
            customerName: 'Maria',
            customerStatus: 2,
            operationDate: '2023-10-30T13:15:00.00Z',
            operationValue: 750.99,
            operationRisck: 0.0675,
          },
          {
            customerName: 'Pedro',
            customerStatus: 1,
            operationDate: '2023-10-29T01:15:00.00Z',
            operationValue: 3000000.0,
            operationRisck: 1.0,
          },
          {
            customerName: 'Laura',
            customerStatus: 2,
            operationDate: '2023-10-25T03:25:00.00Z',
            operationValue: 150300.35,
            operationRisck: 0.10315,
          },
        ]);
      }, 5000);
    });
  }
}
