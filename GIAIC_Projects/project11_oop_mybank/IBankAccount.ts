#! /usr/bin/env node
// Aliyan Aqeel, 2nd July 2024.

export interface IBankAccount{
  Debit(d: number): string
  Credit(d: number): string
}