import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('surveyboard')
export class SurveyBoardEntity {
  @PrimaryGeneratedColumn()
  id?: number

  @Column({
    type: 'varchar',
    length: 50
  })
  title?: string

  @Column({
    type: 'datetime',
    length: 6
  })
  date?: any

  @Column({
    type: 'enum',
    length: `1-3분`
  })
  time?: string

  @Column({
    type: 'varchar',
    length: 20
  })
  target?: string

  @CreateDateColumn()
  createdAt?: any

  @UpdateDateColumn()
  updatedAt?: any
}