export class Task {
  constructor(
    public id: number,
    public name: string,
    public dueDate: Date,
    public priority: string,
    public status: string,
    public modalMode?: string
  ) {}
}
