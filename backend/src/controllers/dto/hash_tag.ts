import { Length } from 'class-validator'

export class hashTag {

    @Length(1, 10)
    private readonly name: string
}