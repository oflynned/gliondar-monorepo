export class Image {
  constructor(
    readonly id: string,
    readonly url: string,
    readonly meta?: { width: number; height: number }
  ) {}
}
